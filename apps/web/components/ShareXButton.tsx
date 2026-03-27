// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import type { Store } from "@/lib/database.types";
import { generateStoreTweet } from "@/lib/x-copy";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface ShareXButtonProps {
  store: Store;
  className?: string;
}

export default function ShareXButton({ store, className }: ShareXButtonProps) {
  const text = generateStoreTweet(store);
  const url = `${typeof window !== "undefined" ? window.location.origin : "https://justzappit.xyz"}/store/${store.id}`;
  const href = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <XIcon className="h-4 w-4" />
      Share on X
    </a>
  );
}
