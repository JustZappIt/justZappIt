// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { PAYMENT_SYSTEMS, type PaymentSystem } from "@/lib/facilitator.constants";

const OTHER = "Other" satisfies PaymentSystem;

interface FacilitatorFormProps {
  source?: "homepage" | "directory-page";
}

type FormState = "idle" | "loading" | "success" | "error" | "duplicate";

export default function FacilitatorForm({
  source = "homepage",
}: FacilitatorFormProps) {
  const [email, setEmail] = useState("");
  const [selectedSystems, setSelectedSystems] = useState<Set<PaymentSystem>>(
    new Set()
  );
  const [otherText, setOtherText] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const captchaRef = useRef<HCaptcha>(null);
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "";

  function toggleSystem(system: PaymentSystem) {
    setSelectedSystems((prev) => {
      const next = new Set(prev);
      if (next.has(system)) {
        next.delete(system);
      } else {
        next.add(system);
      }
      return next;
    });
  }

  function validate(): string | null {
    if (!email.trim()) return "Email is required.";
    if (selectedSystems.size === 0)
      return "Select at least one payment system.";
    if (selectedSystems.has(OTHER) && !otherText.trim())
      return "Please describe the other payment system.";
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      setState("error");
      return;
    }
    setState("loading");
    setErrorMsg("");
    captchaRef.current?.execute();
  }

  async function handleVerify(token: string) {
    try {
      const res = await fetch("/api/facilitator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          captchaToken: token,
          paymentSystems: [...selectedSystems],
          otherPaymentSystem: selectedSystems.has(OTHER)
            ? otherText.trim()
            : null,
          source,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setState("error");
        captchaRef.current?.resetCaptcha();
        return;
      }

      if (data.status === "already_registered") {
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
        <p className="text-green-800 font-semibold mb-1">
          Thanks for your interest!
        </p>
        <p className="text-green-700 text-sm">
          We will be in touch when the facilitator programme opens.
        </p>
      </div>
    );
  }

  if (state === "duplicate") {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
        <p className="text-blue-800 font-semibold mb-1">Already registered.</p>
        <p className="text-blue-700 text-sm">
          That email is already on the facilitator interest list.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={state === "loading"}
        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50 text-sm"
      />

      <fieldset disabled={state === "loading"}>
        <legend className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
          Payment systems you can facilitate
        </legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PAYMENT_SYSTEMS.map((system) => (
            <label
              key={system}
              className="flex items-center gap-2 text-sm text-[var(--color-text-primary)] cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={selectedSystems.has(system)}
                onChange={() => toggleSystem(system)}
                className="rounded border-[var(--color-border)] text-primary focus:ring-primary/50 focus:ring-2"
              />
              {system}
            </label>
          ))}
        </div>

        {selectedSystems.has(OTHER) && (
          <input
            type="text"
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            placeholder="Describe the payment system"
            className="mt-3 w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
          />
        )}
      </fieldset>

      {state === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-primary hover:bg-[#d97411] text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {state === "loading" ? "Submitting…" : "Express interest"}
      </button>

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
