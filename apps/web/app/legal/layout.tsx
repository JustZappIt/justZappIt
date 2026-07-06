// SPDX-License-Identifier: AGPL-3.0-only
// Legal pages render inside the global header/footer supplied by the root
// layout. This wrapper only sets the reading width, padding, and prose styling.
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 py-12 prose prose-neutral dark:prose-invert">
      {children}
    </div>
  );
}
