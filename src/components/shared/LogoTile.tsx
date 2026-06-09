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
   * If true (default), the img is rendered as a white silhouette via the
   * `brightness(0) invert(1)` filter so it stays visible on dark backgrounds.
   * On hover the filter is removed so the brand color in the SVG shows through.
   */
  applyWhiteFilter?: boolean;
}

/**
 * Shared logo rendering primitive used by the homepage `EcosystemGrid`,
 * the Features integration panel, and any other surface that displays
 * Simple Icons brand glyphs. Handles the `<img>` ↔ fallback swap and the
 * dark-theme white-filter + hover restore pattern in one place so callers
 * don't have to re-implement either.
 */
export default function LogoTile({
  name,
  logoUrl,
  size = 28,
  fallbackBg = "var(--color-surface-2)",
  fallbackColor = "var(--color-accent)",
  imgStyle,
  applyWhiteFilter = true,
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

  const defaultFilter = applyWhiteFilter ? "brightness(0) invert(1)" : "none";
  const defaultOpacity = applyWhiteFilter ? 0.7 : 1;

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
        filter: defaultFilter,
        opacity: defaultOpacity,
        transition: "filter 0.2s ease, opacity 0.2s ease",
        ...imgStyle,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "none";
        e.currentTarget.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = defaultFilter;
        e.currentTarget.style.opacity = String(defaultOpacity);
      }}
    />
  );
}
