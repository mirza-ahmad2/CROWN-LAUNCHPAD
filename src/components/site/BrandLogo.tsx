import { Link } from "@tanstack/react-router";
import logoCrown from "../../assets/logo-crown.png";

type BrandLogoProps = {
  className?: string;
  /** Larger mark + wordmark for heroes */
  size?: "sm" | "md" | "lg";
  /** When false, renders a non-link mark (e.g. inside another link) */
  asLink?: boolean;
  onClick?: () => void;
  /** Light text on dark / dark text on light */
  tone?: "light" | "dark";
};

const sizes = {
  sm: { mark: "h-7 w-auto", text: "text-base sm:text-lg" },
  md: { mark: "h-8 w-auto sm:h-9", text: "text-lg sm:text-xl" },
  lg: { mark: "h-10 w-auto sm:h-12", text: "text-xl sm:text-2xl" },
};

export function BrandLogo({
  className = "",
  size = "sm",
  asLink = true,
  onClick,
  tone = "light",
}: BrandLogoProps) {
  const s = sizes[size];
  const textColor = tone === "light" ? "text-ivory" : "text-forest";

  const inner = (
    <>
      <img
        src={logoCrown}
        alt=""
        width={125}
        height={69}
        decoding="async"
        className={`${s.mark} shrink-0 object-contain drop-shadow-sm`}
        aria-hidden="true"
      />
      <span className={`truncate font-display tracking-tight ${s.text} ${textColor}`}>
        Own Your Crown
      </span>
    </>
  );

  const classes = `inline-flex min-w-0 items-center gap-2.5 sm:gap-3 transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest ${className}`;

  if (!asLink) {
    return (
      <span className={classes} aria-label="Own Your Crown">
        {inner}
      </span>
    );
  }

  return (
    <Link to="/" onClick={onClick} className={classes} aria-label="Own Your Crown — Home">
      {inner}
    </Link>
  );
}

/** Crown mark only — for decorative use in heroes */
export function CrownLogoMark({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={logoCrown}
      alt="Own Your Crown logo"
      width={125}
      height={69}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`object-contain drop-shadow-[0_4px_24px_rgba(201,162,75,0.35)] ${className}`}
    />
  );
}
