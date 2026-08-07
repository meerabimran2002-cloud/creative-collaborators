import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import atikaReal from "@/assets/atika-real.jpg";
import meerabReal from "@/assets/meerab-real.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COLLAB — Two Developers, One Creative Studio" },
      {
        name: "description",
        content:
          "Atika Nawaz and Meerab Imran build modern, premium web experiences together — design, development and everything between.",
      },
      { property: "og:title", content: "COLLAB — Two Developers, One Creative Studio" },
      {
        property: "og:description",
        content: "Modern web experiences crafted by Atika Nawaz and Meerab Imran.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "2", label: "Developers" },
  { value: "4+", label: "Shipped projects" },
  { value: "100%", label: "Custom built" },
];

function Index() {
  return (
    <div className="px-4 pt-32 pb-16 sm:px-5 sm:pt-32 sm:pb-20">
      <section className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.18em] uppercase sm:px-4 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Who We Are
          </span>
          <h1 className="font-display mt-5 text-5xl leading-[0.9] font-black sm:mt-6 sm:text-7xl lg:text-8xl">
            <span className="text-gradient">COLLAB</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            «Two developers who enjoy combining design and development to create modern web
            experiences.»
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button asChild variant="purple" size="xl" className="w-full sm:w-auto">
              <Link to="/atika">
                Meet Atika <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="pink" size="xl" className="w-full sm:w-auto">
              <Link to="/meerab">
                Meet Meerab <ArrowRight />
              </Link>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-2.5 sm:mt-12 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass card-lift rounded-2xl px-2.5 py-3.5 text-center sm:px-4 sm:py-4"
              >
                <dt className="font-display text-xl font-extrabold sm:text-2xl">{s.value}</dt>
                <dd className="mt-1 text-[0.65rem] leading-tight text-muted-foreground sm:text-[0.7rem]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glass shadow-glow relative grid grid-cols-2 gap-2 overflow-hidden rounded-[2rem] p-2 sm:rounded-[2.5rem]"
        >
          <img
            src={atikaReal}
            alt="Photo of Atika Nawaz, full stack developer"
            className="h-full w-full rounded-[1.75rem] object-cover"
          />
          <img
            src={meerabReal}
            alt="Photo of Meerab Imran, full stack developer"
            className="h-full w-full rounded-[1.75rem] object-cover"
          />
        </motion.div>
      </section>

      <Reveal className="mx-auto mt-16 max-w-6xl sm:mt-24" delay={0.05}>
        <div className="glass rounded-[1.75rem] px-5 py-10 text-center sm:rounded-[2rem] sm:px-14 sm:py-12">
          <h2 className="font-display text-2xl font-extrabold sm:text-4xl">
            Design-led. <span className="text-gradient">Development-driven.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We pair thoughtful interface design with solid full stack engineering — from landing
            pages and dashboards to complete web applications.
          </p>
          <div className="mt-7 flex justify-center sm:mt-8">
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <Link to="/together">
                What we&apos;ll build together <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
