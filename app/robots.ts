import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: "https://shanmugaraj-portfolio-pied.vercel.app/sitemap.xml",
  };
}
