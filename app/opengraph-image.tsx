import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Search Strategist and Digital Marketer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#070809", color: "#f5f7f7", fontFamily: "sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", width: 420, height: 420, right: -60, top: -80, borderRadius: 999, background: "radial-gradient(circle, rgba(91,140,255,.34), transparent 68%)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#9ba5a2" }}><span style={{ color: "#5b8cff" }}>●</span> SHANMUGARAJ Y · PORTFOLIO</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}><div style={{ fontSize: 78, letterSpacing: -4, fontWeight: 700, maxWidth: 940 }}>AI Search Strategy that compounds.</div><div style={{ fontSize: 30, color: "#aeb8b5" }}>Technical SEO · Organic Growth · B2B Demand</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#6f7976" }}><span>AI SEARCH · TECHNICAL SEO</span><span>33.1K CLICKS · 2.85M IMPRESSIONS</span></div>
    </div>, size
  );
}
