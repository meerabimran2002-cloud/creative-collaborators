import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/atika", label: "Atika" },
  { to: "/meerab", label: "Meerab" },
  { to: "/together", label: "Together" },
] as const;

export function SiteNav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-2 left-1/2 z-40 w-[min(94%,64rem)] -translate-x-1/2 sm:top-3"
    >
      <nav className="glass grid gap-2 rounded-3xl px-3 py-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-3 sm:rounded-full sm:px-6 sm:py-2.5">
        <Link
          to="/"
          className="font-display min-w-0 text-center text-base font-extrabold tracking-tight sm:text-left sm:text-lg"
        >
          <span className="text-gradient">COLLAB</span>
        </Link>
        <div className="flex shrink-0 items-center justify-center gap-0.5 text-[0.7rem] sm:gap-2 sm:text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-2 py-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3.5"
              activeProps={{ className: "bg-gradient-soft text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}