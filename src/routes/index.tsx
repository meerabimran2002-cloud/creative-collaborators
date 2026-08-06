import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-collab.jpg";

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
    <div className="px-5 pt-28 pb-20 sm:pt-32">
      <section className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Who We Are
          </span>
          <h1 className="font-display mt-6 text-6xl leading-[0.9] font-black sm:text-7xl lg:text-8xl">
            <span className="text-gradient">COLLAB</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            «Two developers who enjoy combining design and development to create modern web
            experiences.»
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/atika">
                Meet Atika <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/meerab">
                Meet Meerab <ArrowRight />
              </Link>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass card-lift rounded-2xl px-4 py-4 text-center">
                <dt className="font-display text-2xl font-extrabold">{s.value}</dt>
                <dd className="mt-1 text-[0.7rem] text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glass shadow-glow relative overflow-hidden rounded-[2.5rem] p-2"
        >
          <img
            src={heroImg}
            alt="Illustration of two female developers collaborating on a web project with laptops"
            width={1536}
            height={1024}
            className="w-full rounded-[2rem] object-cover"
          />
        </motion.div>
      </section>

      <Reveal className="mx-auto mt-24 max-w-6xl" delay={0.05}>
        <div className="glass rounded-[2rem] px-6 py-12 text-center sm:px-14">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Design-led. <span className="text-gradient">Development-driven.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We pair thoughtful interface design with solid full stack engineering — from landing
            pages and dashboards to complete web applications.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="hero" size="lg">
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
