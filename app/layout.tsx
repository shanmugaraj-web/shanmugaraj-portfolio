import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: { default: "Shanmugaraj Y — AI Search Strategist & Digital Marketer", template: "%s | Shanmugaraj Y" },
  description: "Shanmugaraj Y's portfolio spanning AI search optimization, technical SEO, organic growth, B2B demand generation, and marketing automation.",
  keywords: ["AI Search Strategist", "Digital Marketer", "Technical SEO", "AEO", "GEO", "B2B Growth"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Shanmugaraj Y — AI Search Strategist & Digital Marketer",
    description: "From technical diagnosis to measurable search growth.",
    url: "/",
    siteName: "Digital Marketing Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Search Strategist portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Shanmugaraj Y — AI Search Strategist", description: "Technical SEO, AI visibility, and measurable organic growth.", images: ["/opengraph-image"] },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#070809", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
