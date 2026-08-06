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
      className="fixed top-3 left-1/2 z-40 w-[min(94%,64rem)] -translate-x-1/2"
    >
      <nav className="glass grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full px-4 py-2.5 sm:px-6">
        <Link to="/" className="font-display min-w-0 text-lg font-extrabold tracking-tight">
          <span className="text-gradient">COLLAB</span>
        </Link>
        <div className="flex shrink-0 items-center gap-1 text-xs sm:gap-2 sm:text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-2.5 py-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3.5"
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