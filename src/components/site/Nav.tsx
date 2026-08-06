import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Angie" },
  { to: "/opportunity", label: "The Opportunity" },
  { to: "/community", label: "Community & Events" },
  { to: "/testimonials", label: "Testimonials" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ivory/10 bg-forest/92 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <nav aria-label="Primary" className="shell">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
          <BrandLogo size="sm" onClick={() => setOpen(false)} />

          <div className="hidden items-center gap-8 xl:gap-9 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="link-underline text-sm text-ivory/80 transition-colors duration-300 hover:text-ivory data-[status=active]:text-ivory"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-gold !px-6 !py-3 text-sm">
              Book an Introductory Call
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="shrink-0 rounded-sm p-2 text-ivory transition-colors duration-300 hover:bg-ivory/10 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex flex-col bg-forest animate-menu-in lg:hidden"
        >
          <div className="shell flex items-center justify-between py-6">
            <BrandLogo asLink={false} size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-sm p-2 text-ivory transition-colors hover:bg-ivory/10 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="shell flex flex-1 flex-col justify-center gap-5 pb-16">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ivory transition-colors duration-300 hover:text-gold-soft focus-visible:text-gold-soft focus-visible:outline-none"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-6 inline-flex justify-center"
            >
              Book an Introductory Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
