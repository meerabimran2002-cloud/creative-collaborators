import { ArrowRight, ExternalLink, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export type Project = { name: string; tag: string; url: string; caption: string };

export function ProfilePage({
  name,
  role,
  image,
  imageAlt,
  services,
  projects,
  email,
  linkedin,
}: {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  services: string[];
  projects: Project[];
  email: string;
  linkedin: string;
}) {
  return (
    <div className="px-5 pt-28 pb-20 sm:pt-32">
      <section className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass shadow-glow overflow-hidden rounded-[2.5rem] p-2"
        >
          <img
            src={image}
            alt={imageAlt}
            width={1024}
            height={1024}
            className="w-full rounded-[2rem] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase">
            Profile
          </span>
          <h1 className="font-display mt-5 text-4xl font-black sm:text-6xl">
            <span className="text-gradient">{name}</span>
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">{role}</p>

          <ul className="mt-8 grid gap-3">
            {services.map((s, i) => (
              <Reveal key={s} delay={i * 0.06}>
                <li className="glass card-lift flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-semibold sm:text-base">
                  <span className="bg-gradient-brand h-2.5 w-2.5 shrink-0 rounded-full" />
                  {s}
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-9">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                View Projects <ArrowRight />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto mt-24 max-w-6xl scroll-mt-28">
        <Reveal>
          <h2 className="font-display text-center text-3xl font-extrabold sm:text-4xl">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="glass card-lift group block h-full rounded-[1.75rem] p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                      {p.tag}
                    </p>
                    <h3 className="font-display mt-2 truncate text-2xl font-extrabold">{p.name}</h3>
                  </div>
                  <span className="bg-gradient-soft grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-12">
                    <ExternalLink className="h-4.5 w-4.5" />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.caption}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Visit live site <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-4xl">
        <Reveal>
          <div className="glass rounded-[2rem] px-6 py-11 text-center sm:px-12">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Get in <span className="text-gradient">touch</span>
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${email}`}
                className="glass card-lift flex items-center gap-4 rounded-2xl px-5 py-4 text-left"
              >
                <span className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-full text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">Email</span>
                  <span className="block truncate text-sm font-semibold">{email}</span>
                </span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="glass card-lift flex items-center gap-4 rounded-2xl px-5 py-4 text-left"
              >
                <span className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-full text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">LinkedIn</span>
                  <span className="block truncate text-sm font-semibold">{name}</span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}