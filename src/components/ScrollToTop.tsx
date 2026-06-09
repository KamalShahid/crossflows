import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the window scroll position to the top on every `pathname` change.
 *
 * Skips when the URL carries a hash — hash-based deep-links (e.g.
 * `/features#security`, `/use-cases#ai-receptionist`) are scrolled into
 * place by each page's own handler, and we don't want this component to
 * fight with that. Same-page navbar clicks where the user is already on
 * the destination path (so `pathname` doesn't change) are handled by an
 * explicit `onClick` on the affected nav items.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
