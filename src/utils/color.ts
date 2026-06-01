/**
 * Convert a hex color (`#00D4FF` or `00D4FF`) to a `"r,g,b"` triple suitable
 * for interpolation inside an `rgba(${hexToRgb(hex)}, 0.3)` template string.
 * Falls back to the brand accent cyan triple when the input is malformed.
 */
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0,212,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
    result[3],
    16,
  )}`;
}
