import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface ExpandableDescriptionProps {
  text: string;
  /** Collapsed height in em (relative to the text's own font size). Defaults to ~2 lines at leading-relaxed. */
  collapsedHeightEm?: number;
  /** Below this character count, the text is shown in full and no toggle renders. */
  minToggleChars?: number;
  className?: string;
}

export default function ExpandableDescription({
  text,
  collapsedHeightEm = 3.25,
  minToggleChars = 110,
  className,
}: ExpandableDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= minToggleChars) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : `${collapsedHeightEm}em` }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className={className}>{text}</p>
      </motion.div>
      <button
        type="button"
        onClick={(e) => {
          // Stop bubbling so a parent (e.g. a card-level onClick) doesn't also fire
          e.stopPropagation();
          setExpanded((p) => !p);
        }}
        aria-expanded={expanded}
        className="mt-2 inline-flex items-center gap-1 text-[0.85rem] font-medium text-[var(--color-accent)] transition-colors duration-150 ease-out hover:text-[var(--color-text-primary)]"
      >
        {expanded ? (
          <>
            Read less
            <ChevronUp size={14} strokeWidth={2.2} />
          </>
        ) : (
          <>Read more →</>
        )}
      </button>
    </div>
  );
}
