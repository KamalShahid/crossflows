import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  to?: never;
  href?: never;
}

type Props = LinkProps | AnchorProps | ButtonProps;

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold tracking-tight transition focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[#031018] shadow-[0_10px_40px_rgba(0,212,255,0.35)] hover:shadow-[0_18px_60px_rgba(0,212,255,0.55)] active:scale-[0.98]",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-primary)] backdrop-blur-md hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-surface-2)]",
  ghost:
    "text-[var(--color-text-primary)] hover:text-[var(--color-accent)] underline-offset-4 hover:underline px-0 py-0",
};

export default function CTAButton(props: Props) {
  const { children, variant = "primary", withArrow, className } = props;
  const cls = `${baseClasses} ${variants[variant]} ${className ?? ""}`;

  const inner = (
    <motion.span
      whileHover={{ scale: variant === "ghost" ? 1 : 1.03 }}
      whileTap={{ scale: variant === "ghost" ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className="inline-flex items-center gap-2"
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.5}
        />
      )}
    </motion.span>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {inner}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={cls} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <button
      type={(props as ButtonProps).type ?? "button"}
      onClick={(props as ButtonProps).onClick}
      disabled={(props as ButtonProps).disabled}
      className={cls + " disabled:cursor-not-allowed disabled:opacity-60"}
    >
      {inner}
    </button>
  );
}
