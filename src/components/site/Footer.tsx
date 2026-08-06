import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Angie" },
  { to: "/opportunity", label: "The Opportunity" },
  { to: "/community", label: "Community & Events" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <BrandLogo size="md" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
              Leadership and personal development for experienced professionals choosing a next
              chapter with more autonomy, flexibility and intentional success.
            </p>
            <p className="mt-6 flex items-start gap-2 text-sm text-ivory/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              Greater Leicester Area, United Kingdom — working globally
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-gold-soft">Explore</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-gold-soft">Get in touch</h2>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              <li>
                <a
                  href="tel:+447716253254"
                  className="link-underline inline-flex items-center gap-2 transition-colors hover:text-ivory"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  +44 (0) 7716 253254
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  WhatsApp — <span className="text-gold-soft">Add here</span>
                </span>
              </li>
            </ul>

            <ul className="mt-7 flex flex-wrap gap-3" aria-label="Social profiles">
              <li>
                <a
                  href="https://www.linkedin.com/in/angelinawood/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Angie Wood on LinkedIn"
                  className="social-icon"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <span className="social-icon cursor-default opacity-70" title="Add here" aria-label="Facebook — Add here">
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </span>
              </li>
              <li>
                <span className="social-icon cursor-default opacity-70" title="Add here" aria-label="Instagram — Add here">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </span>
              </li>
              <li>
                <span className="social-icon cursor-default opacity-70" title="Add here" aria-label="Google Business — Add here">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-ivory/45">
              WhatsApp, Facebook, Instagram and Google Business —{" "}
              <span className="text-gold-soft">Add here</span>
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-8 sm:mt-16">
          <p className="max-w-4xl text-xs leading-relaxed text-ivory/55">
            Disclaimer: Own Your Crown provides personal development education, training and
            mentorship. Individual results vary and depend on personal effort, skill and
            circumstances. Nothing on this site should be taken as a guarantee of income or
            outcome.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Own Your Crown. All rights reserved.</p>
            <p>
              This website is powered by{" "}
              <a
                href="https://theinnovations.tech/"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-gold-soft transition-colors hover:text-gold"
              >
                The Innovations (https://theinnovations.tech/)
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
