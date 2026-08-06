import { createFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "@/components/ProfilePage";
import devPurple from "@/assets/dev-purple.jpg";

export const Route = createFileRoute("/atika")({
  head: () => ({
    meta: [
      { title: "Atika Nawaz — Full Stack Developer & Creative Designer" },
      {
        name: "description",
        content:
          "Atika Nawaz builds full stack web applications, landing pages and creative interfaces. See SkyCast and InkSpire.",
      },
      { property: "og:title", content: "Atika Nawaz — Full Stack Developer & Creative Designer" },
      {
        property: "og:description",
        content: "Full stack web development, creative design and landing pages.",
      },
    ],
  }),
  component: AtikaPage,
});

function AtikaPage() {
  return (
    <ProfilePage
      name="Atika Nawaz"
      role="Full Stack Developer & Creative Designer"
      image={devPurple}
      imageAlt="Purple-themed illustration of Atika Nawaz working as a developer"
      services={["Full Stack Web Development", "Creative Designer", "Landing Page Development"]}
      projects={[
        {
          name: "SkyCast",
          tag: "Weather App",
          url: "https://lnkd.in/djtyFjqt",
          caption:
            "A modern weather application with live forecasts, dynamic themes, responsive design, and a premium user experience.",
        },
        {
          name: "InkSpire",
          tag: "E-Book Store",
          url: "https://lnkd.in/de3pAJXC",
          caption:
            "A modern PHP & MySQL e-book store where users can browse, discover, and manage digital books with a clean interface and a powerful admin dashboard.",
        },
      ]}
      email="contact.atikanawaz@gmail.com"
      linkedin="https://www.linkedin.com/in/atika-nawaz-368695334?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    />
  );
}