import LogoMark from "../LogoMark";

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 32 }: LogoProps) {
  return <LogoMark size={size} />;
}
