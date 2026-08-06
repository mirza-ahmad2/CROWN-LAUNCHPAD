import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Layers, LifeBuoy, Sparkles } from "lucide-react";
import { Hero } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { pageSeo } from "../lib/site";
import heroOpportunity from "../assets/hero-opportunity.jpg";

export const Route = createFileRoute("/opportunity")({
  head: () =>
    pageSeo({
      title: "The Opportunity — Structured Remote Business | Own Your Crown",
      description:
        "Training, mentorship, an established system and a global community — an honest look at how the Own Your Crown opportunity works and who it suits.",
      path: "/opportunity",
      keywords:
        "Own Your Crown opportunity, remote business, mentorship system, personal growth education",
      imageAlt: "A calm sunlit workspace representing the Own Your Crown opportunity",
    }),
  component: OpportunityPage,
});

const model = [
  {
    icon: Layers,
    title: "An established system",
    body: "You are not inventing a business from scratch. The structure, tools and pathway already exist and are followed step by step.",
  },
  {
    icon: Sparkles,
    title: "Personal growth education",
    body: "Leadership and personal development learning sits at the centre — the work on yourself is the work.",
  },
  {
    icon: LifeBuoy,
    title: "Mentorship",
    body: "Guidance from people further along the same path, including Angie, rather than generic content on a platform.",
  },
  {
    icon: Clock,
    title: "Around your life",
    body: "Remote and flexible by design, typically started alongside existing commitments rather than instead of them.",
  },
];

const fit = [
  "You have led people, projects or organisations and want to use that experience differently.",
  "You value autonomy and flexibility, and are willing to trade familiar structure for it.",
  "You are coachable — happy to follow a proven process and be mentored.",
  "You can commit consistent hours each week, honestly and reliably.",
];

const notFit = [
  "You are looking for a passive income scheme with no effort involved.",
  "You want guaranteed results or a fixed timeline handed to you.",
  "You would rather work entirely alone than inside a community and mentorship structure.",
];

function OpportunityPage() {
  return (
    <>
      <Hero
        priority
        image={heroOpportunity}
        imageAlt="A calm, sunlit home workspace with a laptop and notebook"
        eyebrow="The Opportunity"
        title="A structure to build on, not a leap into the unknown."
        subtitle="Education, mentorship, a proven system and a global community — described plainly, so you can decide whether it fits the next chapter you have in mind."
        primaryCta={{ label: "Book an Introductory Call", to: "/contact" }}
      />

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-gold text-muted-foreground">What it involves</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">Four parts, working together.</h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2">
            {model.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 90} className="bg-background">
                <div className="card-lift group flex h-full gap-6 p-8 sm:p-10">
                  <m.icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="text-xl">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-screen bg-forest py-20 sm:py-24 text-ivory">
        <div className="shell grid gap-12 sm:gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-gold-soft">This tends to suit you if</p>
            <ul className="mt-8 space-y-5">
              {fit.map((f) => (
                <li key={f} className="flex gap-4 text-base leading-relaxed text-ivory/85">
                  <span className="mt-3 h-px w-6 shrink-0 bg-gold" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-ivory/60">It is probably not for you if</p>
            <ul className="mt-8 space-y-5">
              {notFit.map((f) => (
                <li key={f} className="flex gap-4 text-base leading-relaxed text-ivory/70">
                  <span className="mt-3 h-px w-6 shrink-0 bg-ivory/40" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="snap-screen bg-background py-20 sm:py-24">
        <div className="shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-muted-foreground">Honest framing</p>
            <h2 className="mt-8 text-3xl leading-tight sm:text-5xl">
              The commitment, stated openly.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              This is a real business built on real effort. Most people begin part-time alongside
              existing work, and the people who progress are the ones who protect consistent hours
              each week and stay engaged with the mentorship and training. Specific time
              expectations and any financial details are covered transparently on your introductory
              call.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              No income claims or guarantees are made on this website. Individual results vary and
              depend on personal effort, skill and circumstances.
            </p>
            <Link to="/contact" className="btn-forest mt-10 inline-flex">
              Ask your questions on a call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
