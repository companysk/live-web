import { MetadataRoute } from "next";
import { VIDEOS } from "@/lib/videos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://viewtube.in";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const videoRoutes: MetadataRoute.Sitemap = VIDEOS.map((video) => ({
    url: `${baseUrl}/video/${video.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...videoRoutes];
}
