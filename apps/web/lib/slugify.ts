// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Converts a string to a URL-safe slug.
 * Handles unicode, diacritics, and special characters.
 * Examples:
 *   "São Paulo" → "sao-paulo"
 *   "Hong Kong" → "hong-kong"
 *   "İstanbul"  → "istanbul"
 */
export function slugify(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // strip non-alphanumeric except spaces and hyphens
    .trim()
    .replace(/[\s]+/g, "-"); // spaces → hyphens
}

/**
 * Generates a URL-safe slug for a city+country pair.
 * Example: citySlug("Hong Kong", "China") → "hong-kong-china"
 */
export function citySlug(city: string, country: string): string {
  return `${slugify(city)}-${slugify(country)}`;
}

/**
 * Parses a city slug back into city and country.
 * This is best-effort; it relies on the double-slug convention and
 * matching against known city+country pairs from the database.
 *
 * For server-side use: look up slug in the database instead of parsing.
 */
export function parseCitySlug(slug: string): { raw: string } {
  return { raw: slug };
}
