// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/links";

const STORAGE_KEY = "jzi-bar-v1";

export default function WaitlistBar() {
  // Initialize as false to avoid hydration mismatch (G10)
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show if not previously dismissed, and not on /app page
    if (pathname !== "/app" && !localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, [pathname]);

  // Hide when navigating to /app
  useEffect(() => {
    if (pathname === "/app") setVisible(false);
  }, [pathname]);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="banner"
      className="bg-primary text-white text-sm py-2.5 px-4 flex items-center justify-center gap-4 relative"
    >
      <span className="font-extrabold">
        Zapp for Android is live in open beta on Google Play. iOS coming soon.
      </span>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-extrabold uppercase tracking-[0.1em] underline underline-offset-4 hover:no-underline whitespace-nowrap"
      >
        Download now
      </a>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
