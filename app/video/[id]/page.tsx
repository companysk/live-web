import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VIDEOS, getVideoBySlug, getRelatedVideos } from "@/lib/videos";
import { Topbar } from "@/components/Topbar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { QueueSidebar } from "@/components/QueueSidebar";

interface Props {
  params: { id: string };
}

/* ── Generate all static paths at build time ── */
export async function generateStaticParams() {
  return VIDEOS.map((v) => ({ id: v.slug }));
}

/* ── Per-video SEO metadata ── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = getVideoBySlug(params.id);
  if (!video) return { title: "Video not found | ViewTube" };

  const title = `${video.title} — ${video.channel} | ViewTube`;
  const description = video.description.substring(0, 160);
  const url = `https://viewtube.in/video/${video.slug}`;
  const ogImage = `/og/video-${video.id}.png`; // generate real thumbnails in production

  return {
    title,
    description,
    keywords: [...video.tags, video.channel, "ViewTube", "watch online", video.category],
    authors: [{ name: video.channel }],
    openGraph: {
      type: "video.other",
      title,
      description,
      url,
      siteName: "ViewTube",
      images: [{ url: ogImage, width: 1200, height: 630, alt: video.title }],
      videos: [
        {
          url: video.src,
          type: "video/mp4",
          width: 1280,
          height: 720,
        },
      ],
    },
    twitter: {
      card: "player",
      title,
      description,
      images: [ogImage],
      players: [
        {
          playerUrl: `https://viewtube.in/embed/${video.slug}`,
          streamUrl: video.src,
          width: 1280,
          height: 720,
        },
      ],
    },
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  };
}

export default function VideoPage({ params }: Props) {
  const video = getVideoBySlug(params.id);
  if (!video) notFound();

  const related = getRelatedVideos(video.id, 12);
  const url = `https://viewtube.in/video/${video.slug}`;

  /* JSON-LD VideoObject — Google Video rich result */
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://viewtube.in/og/video-${video.id}.png`,
    uploadDate: new Date(
      Date.now() - parseDaysAgo(video.ago)
    ).toISOString(),
    duration: formatDuration(video.duration),
    contentUrl: video.src,
    embedUrl: `https://viewtube.in/embed/${video.slug}`,
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/WatchAction",
        userInteractionCount: parseViews(video.views),
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/LikeAction",
        userInteractionCount: parseViews(video.likes),
      },
    ],
    author: {
      "@type": "Person",
      name: video.channel,
    },
    publisher: {
      "@type": "Organization",
      name: "ViewTube",
      logo: {
        "@type": "ImageObject",
        url: "https://viewtube.in/logo.png",
      },
    },
    keywords: video.tags.join(", "),
    inLanguage: "en",
    isFamilyFriendly: true,
  };

  /* BreadcrumbList for rich results */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://viewtube.in" },
      { "@type": "ListItem", position: 2, name: video.category, item: `https://viewtube.in/?cat=${video.category}` },
      { "@type": "ListItem", position: 3, name: video.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Topbar />
      <div style={{ display: "flex", minHeight: "calc(100vh - 56px)" }}>
        <main className="watch-main" style={{ flex: 1, minWidth: 0, padding: "20px 24px 60px" }}>
          <VideoPlayer video={video} />
        </main>
        <aside className="watch-right" style={{ width: 400, minWidth: 340, padding: "16px 20px 60px", borderLeft: "0.5px solid var(--border)", flexShrink: 0 }}>
          <QueueSidebar videos={related} />
        </aside>
      </div>
    </>
  );
}

/* ── Helpers ── */
function parseDaysAgo(ago: string): number {
  const n = parseInt(ago);
  if (ago.includes("hour")) return n * 3600000;
  if (ago.includes("day")) return n * 86400000;
  if (ago.includes("week")) return n * 604800000;
  if (ago.includes("month")) return n * 2592000000;
  if (ago.includes("year")) return n * 31536000000;
  return 0;
}

function formatDuration(dur: string): string {
  if (dur === "LIVE") return "PT0S";
  const parts = dur.split(":").map(Number);
  if (parts.length === 3) return `PT${parts[0]}H${parts[1]}M${parts[2]}S`;
  if (parts.length === 2) return `PT${parts[0]}M${parts[1]}S`;
  return "PT0S";
}

function parseViews(v: string): number {
  const n = parseFloat(v);
  if (v.includes("M")) return Math.round(n * 1_000_000);
  if (v.includes("K")) return Math.round(n * 1_000);
  return Math.round(n);
}
