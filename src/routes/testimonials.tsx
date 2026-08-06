import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, ShieldCheck } from "lucide-react";
import { Hero } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { pageSeo } from "../lib/site";
import heroTestimonials from "../assets/hero-testimonials.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageSeo({
      title: "Testimonials — Member Experiences | Own Your Crown",
      description:
        "Member experiences of Own Your Crown, published only once wording is confirmed and compliant. Individual results vary.",
      path: "/testimonials",
      keywords:
        "Own Your Crown testimonials, member experiences, Angie Wood reviews",
      imageAlt: "Professionals in warm conversation over coffee",
    }),
  component: TestimonialsPage,
});

const slots = [
  { context: "Former senior leader · UK", theme: "On making the transition" },
  { context: "Member · Europe", theme: "On the mentorship and training" },
  { context: "Member · Australia", theme: "On the global community and events" },
];

function TestimonialsPage() {
  return (
    <>
      <Hero
        priority
        image={heroTestimonials}
        imageAlt="Two professionals in warm conversation over coffee"
        eyebrow="Testimonials"
        title="Words from members — in their own, confirmed words."
        subtitle="Rather than publish unverified claims, this page holds space for experiences that have been checked, attributed and approved."
        primaryCta={{ label: "Book an Introductory Call", to: "/contact" }}
      />

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-gold text-muted-foreground">Ready to publish</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              Three placements, waiting on approved wording.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-3">
            {slots.map((s, i) => (
              <Reveal as="li" key={s.theme} delay={i * 100}>
                <figure className="card-lift flex h-full flex-col border border-border bg-card p-8 sm:p-10">
                  <Quote className="h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <blockquote className="mt-8 flex-1 text-lg leading-relaxed text-muted-foreground">
                    Approved testimonial copy will appear here once confirmed with the member.
                  </blockquote>
                  <figcaption className="mt-8 border-t border-border pt-6">
                    <p className="text-sm font-medium text-foreground">{s.theme}</p>
                    <p className="mt-1 text-xs tracking-wide text-muted-foreground">{s.context}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-screen bg-forest py-20 sm:py-24 text-ivory">
        <div className="shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <ShieldCheck className="mx-auto h-7 w-7 text-gold" strokeWidth={1.4} aria-hidden="true" />
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              Why this page is deliberately empty for now.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ivory/80 sm:text-lg">
              Testimonials will only be published where the wording has been confirmed by the person
              who gave it, is properly attributed, and is accurate. No earnings figures or
              guaranteed outcomes will be presented, in line with UK advertising standards.
            </p>
            <p className="mt-8 text-xs leading-relaxed text-ivory/55">
              Individual results vary and depend on personal effort, skill and circumstances.
            </p>
            <Link to="/contact" className="btn-gold mt-10 inline-flex">
              Speak to Angie directly
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
