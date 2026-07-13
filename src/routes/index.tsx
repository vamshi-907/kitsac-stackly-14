import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediSphere – Pharmacy & Health Store HTML Template" },
      { name: "description", content: "Premium HTML5 template for community pharmacies, medical stores, and wellness retailers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#EAF7F8,#FEFEFD)", fontFamily: "Manrope,system-ui,sans-serif", color: "#353A44", padding: 24 }}>
      <div style={{ maxWidth: 640, textAlign: "center" }}>
        <div style={{ width: 72, height: 72, margin: "0 auto 20px", borderRadius: 20, background: "linear-gradient(135deg,#4FC3D9,#F8B88B)", display: "grid", placeItems: "center", color: "#FFF", fontSize: 32, fontWeight: 800, boxShadow: "0 20px 40px rgba(79,195,217,0.35)" }}>M</div>
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 12px", fontWeight: 800, letterSpacing: "-0.02em" }}>MediSphere</h1>
        <p style={{ fontSize: "1.125rem", color: "#6B7280", marginBottom: 28 }}>
          Premium Pharmacy & Health Store HTML Template. Open the static template to browse all 15 pages.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/medisphere/index.html" style={{ background: "#4FC3D9", color: "#FFF", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontWeight: 600, boxShadow: "0 8px 20px rgba(79,195,217,0.4)" }}>Open template →</a>
          <a href="/medisphere/documentation/README.md" style={{ background: "transparent", color: "#353A44", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontWeight: 600, border: "2px solid #E5E7EB" }}>Documentation</a>
        </div>
        <p style={{ marginTop: 32, fontSize: "0.875rem", color: "#6B7280" }}>
          15 pages · Dark mode · RTL · WCAG 2.1 AA · SEO-ready
        </p>
      </div>
    </div>
  );
}
