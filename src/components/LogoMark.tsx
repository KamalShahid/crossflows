interface LogoMarkProps {
  size?: number;
  className?: string;
  withWordmark?: boolean;
}

export default function LogoMark({ size = 36, className, withWordmark = true }: LogoMarkProps) {
  return (
    <span className={"inline-flex items-center gap-3 " + (className ?? "")} aria-label="Cross Flows Synergy">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cfs-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7af9ff" />
            <stop offset="55%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#3a8dff" />
          </linearGradient>
        </defs>
        <path
          d="M22 12c-6 0-10 5-10 10s4 10 10 10c4 0 7-2 10-6 3 4 6 6 10 6 6 0 10-5 10-10s-4-10-10-10c-4 0-7 2-10 6-3-4-6-6-10-6Z"
          stroke="url(#cfs-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 32c-6 0-10 5-10 10s4 10 10 10c4 0 7-2 10-6 3 4 6 6 10 6 6 0 10-5 10-10s-4-10-10-10c-4 0-7 2-10 6-3-4-6-6-10-6Z"
          stroke="url(#cfs-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <circle cx="6" cy="32" r="2" fill="#7af9ff" />
        <circle cx="58" cy="32" r="2" fill="#3a8dff" />
      </svg>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-tight text-[var(--color-text-primary)]">
            Cross Flows
          </span>
          <span className="font-display text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)]">
            Synergy
          </span>
        </span>
      )}
    </span>
  );
}
