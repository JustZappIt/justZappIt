// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
            <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">About JustZappIt</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              A private messaging app for iOS and Android with native Zcash payments built in.
              The facilitator network directory connects ZEC users with cash exchange points
              worldwide.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://x.com/JustZappIt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1.5 text-sm"
              >
                <XIcon className="h-4 w-4" />
                @JustZappIt
              </a>
              <Link
                href="https://github.com/0xVampirot/justZappIt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1.5 text-sm"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: "/directory", label: "Directory" },
                { href: "/app", label: "Mobile App" },
                { href: "/faq", label: "FAQ" },
                { href: "/about", label: "About Us" },
                { href: "/leaderboard", label: "Leaderboard" },
                { href: "/press", label: "Press" },
                { href: "/contact", label: "Contact" },
                { href: "/verification", label: "Safety Guide" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Community Section */}
          <div>
            <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Legal & Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/content-policy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
                  Content Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <a
                  href="https://www.google.com/ads/preferences/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors"
                >
                  AdChoices
                </a>
              </li>
              <li>
                <Link href="/sitemap" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
                  Sitemap
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
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                Contact Us
              </a>
              <Link
                href="https://github.com/0xVampirot/justZappIt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                Contribute
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Legal Notice */}
        <div className="mt-6 p-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg">
          <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed">
            <strong>Important Notice:</strong> JustZappIt is a community-driven directory and does
            not endorse, verify, or guarantee the accuracy of any listed information. All
            cryptocurrency transactions are conducted at your own risk. This site is not financial,
            legal, or investment advice. Please conduct your own research and exercise caution when
            dealing with cryptocurrency exchanges.
          </p>
        </div>
      </div>
    </footer>
  );
}
