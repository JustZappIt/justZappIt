// SPDX-License-Identifier: AGPL-3.0-only
"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root { --color-bg: #ffffff; --color-text-primary: #15120d; --color-text-secondary: #6b645a; --color-accent: #ff9417; }
          @media (prefers-color-scheme: dark) {
            :root { --color-bg: #0f0e0c; --color-text-primary: #f6f2ea; --color-text-secondary: #a59c90; }
          }
          .error-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            font-family: 'Inter', sans-serif;
            background: var(--color-bg);
            color: var(--color-text-primary);
          }
          .error-page__content { text-align: center; }
          .error-page__title { font-size: 1.5rem; font-weight: 900; margin-bottom: 0.75rem; }
          .error-page__message { color: var(--color-text-secondary); margin-bottom: 1.5rem; }
          .error-page__action {
            display: inline-block;
            background: var(--color-accent);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0;
            font-weight: 800;
            font-family: inherit;
            text-decoration: none;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </head>
      <body className="error-page">
        <div className="error-page__content">
          <h1 className="error-page__title">Something went wrong</h1>
          <p className="error-page__message">An unexpected error occurred.</p>
          <button
            onClick={() => reset()}
            className="error-page__action"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
