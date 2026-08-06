import { createFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "@/components/ProfilePage";
import meerabReal from "@/assets/meerab-real.jpg";

export const Route = createFileRoute("/meerab")({
  head: () => ({
    meta: [
      { title: "Meerab Imran — Full Stack Developer & Creative Designer" },
      {
        name: "description",
        content:
          "Meerab Imran builds full stack web and app experiences with graphic design flair. See Mini App and Al Meer Care Center.",
      },
      { property: "og:title", content: "Meerab Imran — Full Stack Developer & Creative Designer" },
      {
        property: "og:description",
        content: "Full stack development, graphic design, web and app development.",
      },
    ],
  }),
  component: MeerabPage,
});

function MeerabPage() {
  return (
    <ProfilePage
      name="Meerab Imran"
      role="Full Stack Developer & Creative Designer"
      image={meerabReal}
      imageAlt="Photo of Meerab Imran, full stack developer and creative designer"
      services={["Full Stack Development", "Graphic Designer", "Web & App Development"]}
      projects={[
        {
          name: "Mini App",
          tag: "Multi-feature App",
          url: "https://mini-app-lime-ten.vercel.app",
          caption:
            "A modern multi-feature application built with a clean UI. It includes useful daily tools, responsive layouts, and a smooth user experience.",
        },
        {
          name: "Al Meer Care Center",
          tag: "Healthcare Website",
          url: "https://al-meer-care-center.vercel.app",
          caption:
            "A modern healthcare website with a professional interface, responsive design, and user-friendly navigation for patients and visitors.",
        },
      ]}
      email="meerab.imran.2002@gmail.com"
      linkedin="https://www.linkedin.com/in/meerab-imran-7aa400361?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    />
  );
}