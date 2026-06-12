// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import QRCode from "react-qr-code";
import type { Store } from "@/lib/database.types";

interface ChatModalProps {
  store: Store;
  onClose: () => void;
}

export default function ChatModal({ store, onClose }: ChatModalProps) {
  const deepLink = `zapp://chat/store/${store.id}`;
  const xUrl = process.env.NEXT_PUBLIC_X_URL ?? "https://x.com";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-[var(--color-bg)] border-2 border-[var(--color-text-primary)] shadow-[var(--shadow)] w-full max-w-sm p-6 flex flex-col items-center gap-5">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1 hover:bg-[var(--color-chip)] transition-colors"
        >
          <X size={20} className="text-[var(--color-text-secondary)]" />
        </button>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-12 h-12 bg-[var(--color-accent-soft)] flex items-center justify-center">
            <MessageCircle size={24} className="text-[var(--color-accent-text)]" />
          </div>
          <h2 className="text-title font-black tracking-tight text-[var(--color-text-primary)]">
            Community Chat Room
          </h2>
          <p className="text-body text-[var(--color-text-secondary)]">
            A community space for people who visit{" "}
            <span className="font-semibold text-[var(--color-text-primary)]">
              {store.operator_name}
            </span>
            . Share tips, ask questions, and connect with fellow users.
          </p>
        </div>

        {/* Coming Soon badge */}
        <div className="bg-[var(--color-accent-soft)] px-4 py-2 text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[var(--color-accent-text)]">
            Coming Soon in the Zapp App
          </p>
          <p className="text-caption text-[var(--color-text-secondary)] mt-0.5">
            In-app community chat rooms are launching with Zapp.
          </p>
        </div>

        {/* QR Code — blurred until app launches */}
        <div className="relative">
          <div className="bg-white p-3 border border-[var(--color-border-strong)] select-none pointer-events-none">
            <QRCode
              value={deepLink}
              size={160}
              fgColor="#0A0A0A"
              bgColor="#FFFFFF"
            />
          </div>
          <div className="absolute inset-0 backdrop-blur-md bg-[var(--color-bg)]/60 flex flex-col items-center justify-center gap-1">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[var(--color-text-primary)]">Not yet available</span>
            <span className="text-caption text-[var(--color-text-secondary)]">Available at launch</span>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col gap-2">
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#d97411] text-white py-3 font-extrabold tracking-wide text-button transition-colors"
          >
            Follow us
          </a>
          <p className="text-caption text-[var(--color-text-secondary)] text-center">
            Stay up to date with the latest Zapp news and launch updates.
          </p>
        </div>
      </div>
    </div>
  );
}
