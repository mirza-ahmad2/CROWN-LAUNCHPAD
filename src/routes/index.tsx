import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, GraduationCap, Globe2, Users } from "lucide-react";
import { Hero } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { pageSeo } from "../lib/site";
import heroOpportunity from "../assets/hero-opportunity.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Own Your Crown — Success on Your Terms | Angie Wood",
      description:
        "A structured, remote leadership and personal development business for experienced professionals seeking autonomy, flexibility and intentional success.",
      path: "/",
      keywords:
        "Own Your Crown, Angie Wood, personal development, leadership, career next chapter, remote mentorship",
      imageAlt: "A calm sunlit workspace representing Own Your Crown",
    }),
  component: HomePage,
});

const pillars = [
  {
    icon: GraduationCap,
    title: "Personal growth education",
    body: "Structured leadership and personal development learning designed to be worked through alongside real life.",
  },
  {
    icon: Compass,
    title: "Mentorship & systems",
    body: "An established business system with mentorship from people who have made this transition themselves.",
  },
  {
    icon: Globe2,
    title: "Remote by design",
    body: "Work from anywhere, around the commitments that matter. Built for flexibility, not for less ambition.",
  },
  {
    icon: Users,
    title: "A global community",
    body: "A worldwide network of professionals, with in-person world tour events throughout the year.",
  },
];

function HomePage() {
  return (
    <>
      <Hero
        priority
        image={heroOpportunity}
        imageAlt="A calm, sunlit workspace representing Own Your Crown"
        objectPosition="center 40%"
        eyebrow="Leadership & Personal Development"
        title={
          <>
            Success on your terms,
            <br />
            in your next chapter
          </>
        }
        subtitle="Own Your Crown is a structured, remote personal development and leadership business for experienced professionals who want more autonomy and flexibility — without giving up ambition."
        primaryCta={{ label: "Book an Introductory Call", to: "/contact" }}
        secondaryCta={{ label: "Explore the Opportunity", to: "/opportunity" }}
      />

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell grid items-center gap-12 sm:gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow rule-gold text-muted-foreground">Who this is for</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              For people who have already led — and are quietly asking what comes next.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Most people who find Own Your Crown are not starting out. They are experienced
                professionals, often in their forties, fifties or sixties, who have carried real
                responsibility and delivered for other people for a long time.
              </p>
              <p>
                What changes is not the ambition. It is the structure. A different next chapter —
                one with room for family, health, travel and work that still means something.
              </p>
              <Link
                to="/about"
                className="link-underline inline-block text-sm font-medium tracking-wide text-foreground"
              >
                Meet Angie
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate snap-screen items-center overflow-hidden bg-forest py-20 sm:py-24">
        <img
          src={heroOpportunity}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="shell relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow text-gold-soft">Peer-led, not theoretical</p>
            <blockquote className="mt-8 text-2xl leading-snug text-ivory sm:text-4xl lg:text-5xl">
              “I spent twenty-five years in education leadership, becoming a Headteacher. I did not
              leave because I stopped caring. I left because I wanted to build the next chapter on
              my own terms.”
            </blockquote>
            <p className="mt-8 text-sm tracking-wide text-ivory/70">
              Angie Wood · Founder, Own Your Crown
            </p>
          </Reveal>
        </div>
      </section>

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-gold text-muted-foreground">The opportunity in brief</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              Education, mentorship, systems and community — in one structure.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="bg-background">
                <div className="card-lift group h-full p-7 sm:p-8">
                  <p.icon
                    className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                  <h3 className="mt-8 text-xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-screen bg-forest py-20 sm:py-24 text-ivory">
        <div className="shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-gold-soft">Start with a conversation</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              An introductory call — no pressure, no pitch theatre.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-ivory/80 sm:text-lg">
              A straightforward conversation about where you are, what you are looking for, and
              whether this is genuinely the right fit. If it is not, you will be told so.
            </p>
            <Link to="/contact" className="btn-gold mt-10 inline-flex">
              Book an Introductory Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
