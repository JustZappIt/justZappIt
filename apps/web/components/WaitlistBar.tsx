// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

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
      <span>
        JustZappIt is coming to iOS and Android — private messaging with ZEC payments.
      </span>
      <Link
        href="/app"
        className="font-semibold underline hover:no-underline whitespace-nowrap"
      >
        Join the notification list
      </Link>
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
