import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shanmugaraj-portfolio-pied.vercel.app"),
  title: {
    default: "Shanmugaraj Y — Digital Marketing & AI Search Strategist",
    template: "%s | Shanmugaraj Y",
  },
  description:
    "SEO, AI optimization, citations, brand mentions and sales funnel strategy. Explore Shanmugaraj’s approach to search visibility, content and qualified demand.",
  keywords: [
    "AI Search Strategist",
    "Digital Marketer",
    "Technical SEO",
    "AEO",
    "GEO",
    "B2B Growth",
    "AIO",
    "AI Citations",
    "Brand Mentions",
    "Sales Funnel Strategy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Shanmugaraj Y — Digital Marketing & AI Search Strategist",
    description: "From technical diagnosis to measurable search growth.",
    url: "/",
    siteName: "Shanmugaraj · Search & Growth",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Search Strategist portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmugaraj Y — AI Search Strategist",
    description: "Technical SEO, AI visibility, and measurable organic growth.",
    images: ["/opengraph-image"],
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#101211",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
