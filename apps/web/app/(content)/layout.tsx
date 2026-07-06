// SPDX-License-Identifier: AGPL-3.0-only
// Content pages (about, faq) render inside the global header/footer supplied by
// the root layout. This wrapper only sets the reading width and page padding.
export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
}
