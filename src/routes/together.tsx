import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Reveal } from "@/components/Reveal";
import crafts from "@/assets/idea-crafts.jpg";
import booking from "@/assets/idea-booking.jpg";
import fitness from "@/assets/idea-fitness.jpg";
import grocery from "@/assets/idea-grocery.jpg";

export const Route = createFileRoute("/together")({
  head: () => ({
    meta: [
      { title: "What We'll Build Together — COLLAB" },
      {
        name: "description",
        content:
          "Project ideas we want to build together: crafts marketplace, booking platform, fitness app and grocery delivery.",
      },
      { property: "og:title", content: "What We'll Build Together — COLLAB" },
      {
        property: "og:description",
        content: "Building modern digital products through collaboration, creativity, innovation.",
      },
    ],
  }),
  component: TogetherPage,
});

const ideas = [
  {
    title: "Handmade / Local Crafts Marketplace",
    text: "A platform connecting talented local artisans with customers around the world.",
    image: crafts,
  },
  {
    title: "Booking & Appointment Platform",
    text: "A smart booking system for doctors, salons, consultants, tutors, and businesses.",
    image: booking,
  },
  {
    title: "Gym & Fitness App",
    text: "Workout plans, nutrition tracking, memberships, progress charts, and fitness goals.",
    image: fitness,
  },
  {
    title: "Grocery Delivery App",
    text: "Online grocery shopping with real-time order tracking, secure payments, and fast delivery.",
    image: grocery,
  },
];

function TogetherPage() {
  return (
    <div className="px-5 pt-28 pb-20 sm:pt-36">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase">
          Our Vision
        </span>
        <h1 className="font-display mt-6 text-4xl font-black sm:text-6xl">
          What Will We <span className="text-gradient">Build Together?</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Building modern digital products through collaboration, creativity, and innovation.
        </p>
      </motion.section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
        {ideas.map((idea, i) => (
          <Reveal key={idea.title} delay={i * 0.09}>
            <article className="glass card-lift group h-full overflow-hidden rounded-[1.75rem]">
              <div className="overflow-hidden">
                <img
                  src={idea.image}
                  alt={idea.title}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  Idea {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display mt-2 text-xl font-extrabold sm:text-2xl">
                  {idea.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{idea.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}