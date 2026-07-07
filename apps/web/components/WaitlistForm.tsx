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
    const trimmed = email.trim();
    if (!trimmed) return;
    // Validate format client-side (the form is noValidate, so the browser won't).
    // Mirrors the server-side zod .email() check so users get instant feedback.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 254) {
      setErrorMsg("Please enter a valid email address.");
      setState("error");
      return;
    }
    if (!siteKey) {
      // No captcha configured (e.g. local dev without .env.local): fail visibly instead of hanging
      setErrorMsg("Sign-ups are unavailable right now. Please email us instead.");
      setState("error");
      return;
    }
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
      <div className="bg-[var(--color-success-soft)] border border-[var(--color-success)] p-5 text-center">
        <p className="text-[var(--color-success)] font-extrabold mb-1">
          You&apos;re on the list.
        </p>
        <p className="text-[var(--color-text-secondary)] text-sm">
          We&apos;ll email you the moment the iOS app is ready to install.
        </p>
      </div>
    );
  }

  if (state === "duplicate") {
    return (
      <div className="bg-[var(--color-accent-soft)] border border-[var(--color-accent)] p-5 text-center">
        <p className="text-[var(--color-accent-text)] font-extrabold mb-1">Already signed up.</p>
        <p className="text-[var(--color-text-secondary)] text-sm">
          That email is already on the notification list.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="your@email.com"
          required
          disabled={state === "loading"}
          className="flex-1 px-4 py-3 border border-[var(--color-border)] bg-[var(--color-surface-input)] text-[var(--color-text-primary)] placeholder-[var(--color-text-subtle)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50 text-sm"
        />
        <button
          type="submit"
          disabled={state === "loading" || !email.trim()}
          className="bg-primary hover:bg-[#d97411] text-white font-extrabold tracking-wide px-6 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
        >
          {state === "loading" ? "Joining…" : "Notify me"}
        </button>
      </div>

      {state === "error" && (
        <p className="mt-2 text-sm text-[var(--color-danger)]">{errorMsg}</p>
      )}

      {/* Mounting HCaptcha with an empty sitekey logs console errors, so skip it entirely */}
      {siteKey && (
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
      )}
    </form>
  );
}
