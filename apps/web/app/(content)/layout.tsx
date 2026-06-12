// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      {/* Header */}
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 -ml-2 hover:bg-[var(--color-border)] transition-colors">
              <ArrowLeft size={20} className="text-[var(--color-text-secondary)]" />
            </Link>
            <Link href="/" className="text-title font-black tracking-tight text-[var(--color-text-primary)]">
              Just<span className="text-primary">Zapp</span>It
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--color-text-primary)] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between text-caption text-[var(--color-text-secondary)]">
          <p>© 2026 JustZappIt</p>
          <div className="flex gap-x-5 gap-y-2 flex-wrap justify-center">
            <Link href="/legal/disclaimer" className="text-[11px] font-extrabold uppercase tracking-[0.15em] hover:text-[var(--color-text-primary)] transition-colors">Disclaimer</Link>
            <Link href="/legal/terms" className="text-[11px] font-extrabold uppercase tracking-[0.15em] hover:text-[var(--color-text-primary)] transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="text-[11px] font-extrabold uppercase tracking-[0.15em] hover:text-[var(--color-text-primary)] transition-colors">Privacy</Link>
            <Link href="/legal/content-policy" className="text-[11px] font-extrabold uppercase tracking-[0.15em] hover:text-[var(--color-text-primary)] transition-colors">Content Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
