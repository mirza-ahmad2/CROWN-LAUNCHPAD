import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, School } from "lucide-react";
import { Hero } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { pageSeo } from "../lib/site";
import heroOpportunity from "../assets/hero-opportunity.jpg";
import founderAngie from "../assets/founder-angie.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About Angie Wood — Former Headteacher, Founder of Own Your Crown",
      description:
        "Twenty-five years in senior education leadership, a Headteacher's turning point, and why Angie Wood founded Own Your Crown.",
      path: "/about",
      keywords:
        "Angie Wood, former Headteacher, Own Your Crown founder, leadership career, NPQH, coaching",
      imageAlt: "Professional workspace representing Angie Wood's leadership journey",
    }),
  component: AboutPage,
});

const credentials = [
  { icon: School, label: "25 years in education", detail: "Senior leadership through to Headteacher" },
  { icon: Award, label: "Master's in Leadership", detail: "Plus NPQH and QTS" },
  {
    icon: BookOpen,
    label: "Coaching qualified",
    detail: "Completing Level 6 Career Development Professional training",
  },
];

function AboutPage() {
  return (
    <>
      <Hero
        priority
        image={heroOpportunity}
        imageAlt="A calm, sunlit professional workspace with laptop and notebook"
        objectPosition="center 40%"
        eyebrow="About Angie Wood"
        title="Twenty-five years leading. One decision to lead differently."
        subtitle="From senior education leadership and headship to founding Own Your Crown — a transition made first-hand, not theorised about."
        primaryCta={{ label: "Book an Introductory Call", to: "/contact" }}
      />

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell grid items-center gap-12 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <figure className="founder-frame group relative overflow-hidden">
              <img
                src={founderAngie}
                alt="Angie Wood, career founder of Own Your Crown, at her desk"
                width={1200}
                height={1793}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent px-6 pb-6 pt-16">
                <p className="font-display text-lg text-ivory">Angie Wood</p>
                <p className="mt-1 text-xs tracking-wide text-ivory/75">
                  Founder · Own Your Crown
                </p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow rule-gold text-muted-foreground">The career founder</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              A career built in service of other people's potential.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Angie spent twenty-five years in education, moving through senior leadership roles
                and ultimately becoming a Headteacher. It was demanding, purposeful work: developing
                staff, holding standards, and carrying responsibility for whole school communities.
              </p>
              <p>
                Alongside it she kept learning — a Master's in Leadership, NPQH and QTS, and later
                coaching qualifications, with Level 6 Career Development Professional training now
                in progress.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="snap-screen bg-forest py-20 sm:py-24 text-ivory">
        <div className="shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow text-gold-soft">The turning point</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              The question that would not go away.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ivory/80 sm:text-lg">
              After years of building a career inside one structure, Angie began asking what the
              next chapter could look like if it were designed rather than inherited — with more
              autonomy over her time, more flexibility around the people she loves, and work that
              still drew on everything leadership had taught her. Own Your Crown is the answer she
              built, and the one she now helps other experienced professionals explore.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-gold text-muted-foreground">Credentials</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              Credibility earned in the room, not on a landing page.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:mt-16 md:grid-cols-3">
            {credentials.map((c, i) => (
              <Reveal as="li" key={c.label} delay={i * 90} className="bg-background">
                <div className="card-lift h-full p-8 sm:p-10">
                  <c.icon className="h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mt-8 text-xl">{c.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200} className="mt-12 sm:mt-14">
            <Link
              to="/opportunity"
              className="link-underline text-sm font-medium tracking-wide text-foreground"
            >
              See what the opportunity involves
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
