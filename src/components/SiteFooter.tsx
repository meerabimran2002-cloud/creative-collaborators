import { Linkedin, Mail, Heart } from "lucide-react";

const people = [
  {
    name: "Atika Nawaz",
    email: "contact.atikanawaz@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/atika-nawaz-368695334?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Meerab Imran",
    email: "meerab.imran.2002@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/meerab-imran-7aa400361?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export function SiteFooter() {
  return (
    <footer className="px-5 pb-14">
      <div className="glass mx-auto max-w-5xl rounded-[2rem] px-6 py-12 text-center sm:px-12">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Let&apos;s build something <span className="text-gradient">amazing together.</span>
        </h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {people.map((p) => (
            <div key={p.name} className="glass card-lift rounded-3xl p-5 text-left">
              <p className="font-display text-base font-bold">{p.name}</p>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a
                  href={`mailto:${p.email}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">{p.email}</span>
                </a>
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-9 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          Made with <Heart className="h-3.5 w-3.5 text-primary" /> by Atika &amp; Meerab
        </p>
      </div>
    </footer>
  );
}