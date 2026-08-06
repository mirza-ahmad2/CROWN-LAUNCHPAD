import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CrownLogoMark } from "./BrandLogo";

type HeroProps = {
  image: string;
  imageAlt: string;
  /** Optional soft blur plate for premium full-bleed treatment */
  blurImage?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  priority?: boolean;
  /** object-position for the main photo */
  objectPosition?: string;
};

export function Hero({
  image,
  imageAlt,
  blurImage,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  priority = false,
  objectPosition = "center center",
}: HeroProps) {
  return (
    <section
      className="relative isolate flex min-h-[100svh] snap-screen items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Atmospheric blur plate */}
      <img
        src={blurImage || image}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 -z-30 h-full w-full scale-110 object-cover blur-2xl"
        style={{ objectPosition }}
      />
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1280}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="hero-image absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ objectPosition }}
      />
      <div className="hero-scrim absolute inset-0 -z-10" />
      <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="shell-hero relative pt-28 pb-24 animate-hero-in">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <CrownLogoMark
            priority={priority}
            className="h-10 w-auto sm:h-12 animate-hero-mark"
          />
          <p className="eyebrow mt-7 text-gold-soft">{eyebrow}</p>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="btn-gold"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="btn-ghost-light"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
