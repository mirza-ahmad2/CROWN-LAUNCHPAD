import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Globe2, HeartHandshake, Users } from "lucide-react";
import { Hero } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { pageSeo } from "../lib/site";
import heroCommunity from "../assets/hero-community.jpg";
import heroTestimonials from "../assets/hero-testimonials.jpg";
import heroContact from "../assets/hero-contact.jpg";

export const Route = createFileRoute("/community")({
  head: () =>
    pageSeo({
      title: "Community & Events — Global Network & World Tour | Own Your Crown",
      description:
        "A global professional community with in-person world tour events — connection, training and mentorship beyond the screen.",
      path: "/community",
      keywords:
        "Own Your Crown community, world tour events, global network, professional mentorship",
      imageAlt: "Professionals connecting at an Own Your Crown community event",
    }),
  component: CommunityPage,
});

const values = [
  {
    icon: Globe2,
    title: "Genuinely global",
    body: "Members across time zones and industries, connected daily online and in person through the year.",
  },
  {
    icon: HeartHandshake,
    title: "Peer-led support",
    body: "Experienced professionals helping each other apply what they are learning, without hierarchy or hype.",
  },
  {
    icon: Users,
    title: "Small-group mentorship",
    body: "Regular sessions where progress, obstacles and next steps are worked through together.",
  },
];

function CommunityPage() {
  return (
    <>
      <Hero
        priority
        image={heroCommunity}
        imageAlt="Professionals in conversation at an evening community event"
        eyebrow="Community & Events"
        title="A community you would actually want to be part of."
        subtitle="Online every week, in person around the world — a network of experienced professionals building their next chapter alongside each other."
        primaryCta={{ label: "Book an Introductory Call", to: "/contact" }}
      />

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-gold text-muted-foreground">The community</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              Remote does not have to mean alone.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:mt-16 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 90} className="bg-background">
                <div className="card-lift h-full p-8 sm:p-10">
                  <v.icon className="h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mt-8 text-xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-screen bg-forest py-20 sm:py-24 text-ivory">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold-soft">World tour events</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              Moments from the road, and where we are heading next.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
            {[
              { src: heroCommunity, alt: "Members networking at an evening reception" },
              { src: heroTestimonials, alt: "Two members in conversation between sessions" },
              { src: heroContact, alt: "Early morning landscape on the way to an event" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 100}>
                <figure className="group overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1920}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12 sm:mt-14">
            <div className="flex items-start gap-4 border-t border-ivory/20 pt-8">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
              <p className="text-sm leading-relaxed text-ivory/70">
                Upcoming world tour locations and dates are confirmed with the community throughout
                the year. Ask about the next event near you on your introductory call — this section
                is ready to list confirmed destinations as soon as they are announced.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-muted-foreground">Come and see for yourself</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              The community is the part people underestimate.
            </h2>
            <Link to="/contact" className="btn-gold mt-10 inline-flex">
              Book an Introductory Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
