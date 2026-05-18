import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface BaseProps {
  label: string;
  isActive?: boolean;
  className?: string;
}

interface PlainProps extends BaseProps {
  href: string;
  asTrigger?: false;
  onClick?: never;
  onMouseEnter?: never;
  onFocus?: never;
}

interface TriggerProps extends BaseProps {
  asTrigger: true;
  href?: never;
  onClick: () => void;
  onMouseEnter?: () => void;
  onFocus?: () => void;
  ariaControls?: string;
}

type Props = PlainProps | TriggerProps;

const baseTextClass =
  "relative inline-flex items-center gap-1.5 px-3 py-2 text-[0.9rem] font-medium tracking-tight transition-colors duration-150 ease-out";

function NavLinkContent({
  label,
  isActive,
  hasDropdown,
}: {
  label: string;
  isActive: boolean;
  hasDropdown: boolean;
}): ReactNode {
  return (
    <>
      <span
        className={
          "relative transition-colors duration-150 " +
          (isActive
            ? "text-[var(--color-accent)]"
            : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]")
        }
      >
        {label}
        <span
          aria-hidden="true"
          className={
            "absolute -bottom-1.5 left-0 right-0 h-[2px] origin-center scale-x-0 bg-[var(--color-accent)] transition-transform duration-200 ease-out " +
            (isActive ? "scale-x-100" : "")
          }
        />
      </span>
      {hasDropdown && (
        <motion.span
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={
            "inline-flex " +
            (isActive
              ? "text-[var(--color-accent)]"
              : "text-[var(--color-text-muted)]")
          }
        >
          <ChevronDown size={14} strokeWidth={2.2} />
        </motion.span>
      )}
    </>
  );
}

export default function NavLink(props: Props) {
  const isActive = Boolean(props.isActive);
  const cls = `${baseTextClass} ${props.className ?? ""}`;

  if (props.asTrigger) {
    return (
      <button
        type="button"
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onFocus={props.onFocus}
        aria-expanded={isActive}
        aria-haspopup="true"
        aria-controls={props.ariaControls}
        className={cls + " bg-transparent focus-visible:outline-none"}
      >
        <NavLinkContent label={props.label} isActive={isActive} hasDropdown={true} />
      </button>
    );
  }

  return (
    <Link to={props.href} className={cls + " focus-visible:outline-none"}>
      <NavLinkContent label={props.label} isActive={isActive} hasDropdown={false} />
    </Link>
  );
}
