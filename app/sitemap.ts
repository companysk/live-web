import { MetadataRoute } from "next";
import { VIDEOS } from "@/lib/videos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://viewtube.in";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/search`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...VIDEOS.map(v => ({ url: `${base}/video/${v.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
