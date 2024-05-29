// utils/slugify.js

export function formatSlug(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace whitespace with dashes
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes
}
