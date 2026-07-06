// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="error-page__title">404: Page Not Found</h1>
        <p className="error-page__message">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="error-page__links">
          <Link href="/" className="error-page__action">
            Back to home
          </Link>
          <Link href="/app" className="error-page__link">
            Get the app
          </Link>
          <Link href="/faq" className="error-page__link">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
