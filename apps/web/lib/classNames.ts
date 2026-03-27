// SPDX-License-Identifier: AGPL-3.0-only

/** Standard text input styling */
export const inputClass =
  "w-full border border-[var(--color-border)] rounded-md px-3 py-2 text-body bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-[var(--color-text-secondary)]";

/** Primary filled button */
export const btnPrimary =
  "bg-primary text-white rounded-md font-semibold text-button disabled:opacity-50";

/** Outlined / secondary button */
export const btnOutline =
  "border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-md font-semibold text-button disabled:opacity-50";

/** Full-width primary button (forms, modals) */
export const btnPrimaryFull =
  "w-full bg-primary text-white py-3 rounded-md font-semibold text-button disabled:opacity-50";

/** Section label */
export const labelClass =
  "block text-caption font-semibold text-[var(--color-text-secondary)]";

/** Section label with uppercase tracking */
export const labelUpperClass =
  "block text-caption font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide";

/** Dropdown panel (country/operator selects, flag menus) */
export const dropdownPanel =
  "absolute bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md shadow-lg";

/** Dropdown item */
export const dropdownItem =
  "w-full text-left px-3 py-2 text-body text-[var(--color-text-primary)] hover:bg-[var(--color-bg)] transition-colors";

/** Crypto badge */
export const cryptoBadge =
  "px-2 py-1 bg-primary/10 text-primary text-caption font-semibold rounded-sm border border-primary/20";

// ── Animation helpers ──────────────────────────────────────────────────────

/**
 * Fade up on scroll entry. Pair with useInView — apply when `inView` is true,
 * use `opacity-0` as the pre-visible state.
 * Example: className={`${inView ? animateFadeUp : "opacity-0"}`}
 */
export const animateFadeUp = "animate-fade-up";

/**
 * Clip-path text reveal (left → right). Best on h2 section headings.
 * Runs immediately — no scroll trigger needed for above-fold content.
 */
export const animateRevealText = "animate-reveal-text";

/**
 * Slide in from the right. Used for panels and drawers.
 */
export const animateSlideInRight = "animate-slide-in-right";

/**
 * Slide in from the left.
 */
export const animateSlideInLeft = "animate-slide-in-left";

/**
 * Drop in from above. Used for realtime feed items.
 */
export const animateDropIn = "animate-drop-in";
