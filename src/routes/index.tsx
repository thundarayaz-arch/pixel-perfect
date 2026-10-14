import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "faadi graphics — We Got You" },
      { name: "description", content: "Looping pendulum animation for faadi graphics." },
      { property: "og:title", content: "faadi graphics — We Got You" },
      { property: "og:description", content: "Looping pendulum animation for faadi graphics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/faadi.html"
      title="faadi graphics animation"
      className="block h-screen w-screen border-0 bg-background"
    />
  );
}
