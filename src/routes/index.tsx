import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirectToTemplate();
  },
  component: () => null,
});

function redirectToTemplate() {
  if (typeof window !== "undefined") {
    window.location.replace("/medisphere/index.html");
  }
  return new Response(null, {
    status: 302,
    headers: { Location: "/medisphere/index.html" },
  });
}
