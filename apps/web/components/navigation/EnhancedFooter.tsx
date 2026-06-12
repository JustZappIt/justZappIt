// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  const businessEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4">About JustZappIt</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Zapp is a peer-to-peer encrypted messenger with a shielded Zcash wallet built in.
              No servers, no phone number, no tracking. When you need cash, ZEC pays out to
              local currency without KYC. Android beta live; iOS coming soon.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://x.com/JustZappIt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1.5 text-sm font-semibold"
              >
                <XIcon className="h-4 w-4" />
                @JustZappIt
              </a>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: "/app", label: "Mobile App" },
                { href: "/faq", label: "FAQ" },
                { href: "/about", label: "About Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-semibold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Community Section */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4">Legal & Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/content-policy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-semibold transition-colors">
                  Content Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-semibold transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-semibold transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-semibold transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-semibold transition-colors">
                  App Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[var(--color-text-secondary)] text-sm">
              © {currentYear} JustZappIt. Licensed under{" "}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                AGPL-3.0
              </a>
              .
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href={`mailto:${businessEmail}`}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Additional Legal Notice */}
        <div className="mt-6 p-4 bg-[var(--color-bg)] border border-[var(--color-border-strong)]">
          <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed">
            <strong>Important Notice:</strong> JustZappIt builds non-custodial software. You
            control your keys, your recovery phrase, and your transactions; we cannot access or
            recover them. Swaps and the offramp are executed by third-party protocols under their
            own terms. Cryptocurrency involves risk, and transactions cannot be reversed. Nothing
            on this site is financial, legal, or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
