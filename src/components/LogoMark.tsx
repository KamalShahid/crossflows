interface LogoMarkProps {
  size?: number;
  className?: string;
  withWordmark?: boolean;
}

export default function LogoMark({
  size = 36,
  className,
  withWordmark = true,
}: LogoMarkProps) {
  const src = withWordmark ? "/logo-wordmark.png" : "/logo-icon.png";

  return (
    <span
      className={"inline-flex items-center " + (className ?? "")}
      aria-label="Cross Flows Synergy"
    >
      <img
        src={src}
        alt="Cross Flows Synergy"
        style={{
          height: size,
          width: "auto",
          display: "block",
        }}
        draggable={false}
      />
    </span>
  );
}
