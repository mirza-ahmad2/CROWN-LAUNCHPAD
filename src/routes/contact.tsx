import { createFileRoute } from "@tanstack/react-router";
import { Phone, Send, MapPin, Check, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Hero } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { pageSeo } from "../lib/site";
import heroContact from "../assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Book an Introductory Call — Contact Own Your Crown",
      description:
        "Book an introductory call with Angie Wood, or reach Own Your Crown by phone or SMS on +44 (0) 7716 253254.",
      path: "/contact",
      keywords:
        "contact Angie Wood, book introductory call, Own Your Crown contact, Leicester",
      imageAlt: "Misty English countryside at sunrise",
    }),
  component: ContactPage,
});

const inputClass =
  "w-full border border-border bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-gold focus-visible:ring-1 focus-visible:ring-gold hover:border-gold/50";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Hero
        priority
        image={heroContact}
        imageAlt="Misty English countryside at sunrise"
        eyebrow="Contact"
        title="Let's have the conversation."
        subtitle="An introductory call is a genuine conversation about where you are and what you are looking for — not a sales presentation."
      />

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell grid gap-12 sm:gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow rule-gold text-muted-foreground">Direct contact</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-4xl">
              Call, text or message — wherever you are in the world.
            </h2>
            <ul className="mt-10 space-y-5">
              <li>
                <a
                  href="tel:+447716253254"
                  className="group flex items-center gap-4 border border-border p-5 transition-all duration-300 hover:border-gold hover:shadow-[0_8px_30px_rgba(27,42,34,0.06)]"
                >
                  <Phone className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.4} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">Call or SMS</span>
                    <span className="block text-sm text-muted-foreground">+44 (0) 7716 253254</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 border border-border p-5">
                <MessageCircle className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">WhatsApp</span>
                  <span className="block text-sm text-muted-foreground">
                    Add here
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4 border border-border p-5">
                <MapPin className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">Based in</span>
                  <span className="block text-sm text-muted-foreground">
                    Greater Leicester Area, UK — working remotely worldwide
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border bg-card p-7 shadow-[0_16px_48px_rgba(27,42,34,0.04)] sm:p-12">
              <h2 className="text-2xl sm:text-3xl">Request an introductory call</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Share a few details and Angie will be in touch to arrange a time.
              </p>

              {sent ? (
                <div
                  className="mt-10 flex items-start gap-4 border border-gold/50 bg-secondary p-6"
                  role="status"
                  aria-live="polite"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-foreground">
                    Thank you — your request has been noted. For an immediate response you are
                    welcome to call or SMS +44 (0) 7716 253254.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs tracking-wide">
                        Full name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs tracking-wide">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs tracking-wide">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="mb-2 block text-xs tracking-wide">
                        Where you're based
                      </label>
                      <input
                        id="location"
                        name="location"
                        autoComplete="address-level1"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs tracking-wide">
                      What's prompting you to explore this?
                    </label>
                    <textarea id="message" name="message" rows={5} className={inputClass} />
                  </div>
                  <button type="submit" className="btn-forest inline-flex items-center gap-2">
                    <Send className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    Request a call
                  </button>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Your details are used only to arrange a conversation. No income claims or
                    guaranteed outcomes are made — individual results vary.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
