import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scrolling Strip" },
      { name: "description", content: "Looping right-to-left scrolling text strip." },
      { property: "og:title", content: "Scrolling Strip" },
      { property: "og:description", content: "Looping right-to-left scrolling text strip." },
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
