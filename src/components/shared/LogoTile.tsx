import { useState, type CSSProperties } from "react";

interface LogoTileProps {
  /** Display name — used for alt text and the 2-letter fallback badge. */
  name: string;
  /** Logo URL. Pass `null` for brands that lack a Simple Icons entry (e.g. Pipedrive) so the fallback always renders. */
  logoUrl: string | null;
  /** Size in px for both the img and the fallback badge. Defaults to 28. */
  size?: number;
  /** Background for the fallback badge. Defaults to a translucent surface. */
  fallbackBg?: string;
  /** Text color for the fallback badge. Defaults to the brand accent token. */
  fallbackColor?: string;
  /** Extra style overrides applied to the img element. */
  imgStyle?: CSSProperties;
  /**
   * @deprecated Logos always render in their full brand colors now.
   * Kept on the props signature so existing callers don't break, but
   * ignored. Safe to remove on a future cleanup pass.
   */
  applyWhiteFilter?: boolean;
}

/**
 * Shared logo rendering primitive used by the homepage `EcosystemGrid`,
 * the Features integration panel, and any other surface that displays
 * Simple Icons brand glyphs. Renders the SVG in its native brand colors
 * (no monochrome filter, no hover toggle) and swaps to a 2-letter
 * fallback badge when the URL is `null` or the request errors.
 */
export default function LogoTile({
  name,
  logoUrl,
  size = 28,
  fallbackBg = "var(--color-surface-2)",
  fallbackColor = "var(--color-accent)",
  imgStyle,
}: LogoTileProps) {
  const [imgError, setImgError] = useState(false);
  const showFallback = logoUrl === null || imgError;

  if (showFallback) {
    return (
      <div
        aria-label={name}
        style={{
          width: size,
          height: size,
          background: fallbackBg,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Syne, sans-serif",
          fontSize: Math.max(10, Math.round(size * 0.36)),
          fontWeight: 700,
          color: fallbackColor,
          letterSpacing: "0.02em",
        }}
      >
        {name.substring(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={name}
      loading="lazy"
      onError={() => setImgError(true)}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        filter: "none",
        opacity: 1,
        ...imgStyle,
      }}
    />
  );
}
