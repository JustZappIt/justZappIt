// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface WaitlistFormProps {
  source?: string;
}

type FormState = "idle" | "loading" | "success" | "error" | "duplicate";

export default function WaitlistForm({ source = "app-page" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const captchaRef = useRef<HCaptcha>(null);
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    captchaRef.current?.execute();
  }

  async function handleVerify(token: string) {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), captchaToken: token, source }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setState("error");
        captchaRef.current?.resetCaptcha();
        return;
      }

      if (data.status === "already_subscribed") {
        setState("duplicate");
      } else {
        setState("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
      captchaRef.current?.resetCaptcha();
    }
  }

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
        <p className="text-green-800 font-semibold mb-1">You&apos;re on the list.</p>
        <p className="text-green-700 text-sm">
          We&apos;ll contact you when the app is ready for download.
        </p>
      </div>
    );
  }

  if (state === "duplicate") {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
        <p className="text-blue-800 font-semibold mb-1">Already subscribed.</p>
        <p className="text-blue-700 text-sm">That email is already on the notification list.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={state === "loading"}
          className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50 text-sm"
        />
        <button
          type="submit"
          disabled={state === "loading" || !email.trim()}
          className="bg-primary hover:bg-[#d97411] text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
        >
          {state === "loading" ? "Joining…" : "Join notification list"}
        </button>
      </div>

      {state === "error" && (
        <p className="mt-2 text-sm text-red-600">{errorMsg}</p>
      )}

      <HCaptcha
        ref={captchaRef}
        sitekey={siteKey}
        size="invisible"
        onVerify={handleVerify}
        onExpire={() => {
          setState("idle");
          captchaRef.current?.resetCaptcha();
        }}
      />
    </form>
  );
}
