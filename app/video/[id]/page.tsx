import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VIDEOS, getVideoBySlug, getRelatedVideos } from "@/lib/videos";
import { Topbar } from "@/components/Topbar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { QueueSidebar } from "@/components/QueueSidebar";

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return VIDEOS.map(v => ({ id: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = getVideoBySlug(params.id);
  if (!video) return { title: "Video not found" };
  const title = `${video.title} — ${video.channel}`;
  const description = video.description.substring(0, 160);
  const url = `https://viewtube.in/video/${video.slug}`;
  return {
    title,
    description,
    keywords: [...video.tags, video.channel, "ViewTube", video.category],
    openGraph: { type: "video.other", title, description, url, siteName: "ViewTube", images: [{ url: `/og/video-${video.id}.png`, width: 1200, height: 630, alt: video.title }], videos: [{ url: video.src, type: "video/mp4", width: 1280, height: 720 }] },
    twitter: { card: "player", title, description },
    alternates: { canonical: url },
  };
}

export default function VideoPage({ params }: Props) {
  const video = getVideoBySlug(params.id);
  if (!video) notFound();
  const related = getRelatedVideos(video.id, 12);

  const videoJsonLd = {
    "@context": "https://schema.org", "@type": "VideoObject",
    name: video.title, description: video.description,
    thumbnailUrl: `https://viewtube.in/og/video-${video.id}.png`,
    uploadDate: new Date().toISOString(),
    contentUrl: video.src, embedUrl: `https://viewtube.in/embed/${video.slug}`,
    interactionStatistic: [
      { "@type": "InteractionCounter", interactionType: "https://schema.org/WatchAction", userInteractionCount: video.views },
      { "@type": "InteractionCounter", interactionType: "https://schema.org/LikeAction", userInteractionCount: video.likes },
    ],
    author: { "@type": "Person", name: video.channel },
    publisher: { "@type": "Organization", name: "ViewTube", logo: { "@type": "ImageObject", url: "https://viewtube.in/logo.png" } },
    keywords: video.tags.join(", "), isFamilyFriendly: true,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://viewtube.in" },
      { "@type": "ListItem", position: 2, name: video.category, item: `https://viewtube.in/?cat=${video.category}` },
      { "@type": "ListItem", position: 3, name: video.title, item: `https://viewtube.in/video/${video.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Topbar />
      <div style={{ display: "flex", minHeight: "calc(100vh - 56px)" }}>
        <main style={{ flex: 1, minWidth: 0, padding: "20px 24px 60px" }}>
          <VideoPlayer video={video} />
        </main>
        <aside className="watch-right" style={{ width: 400, minWidth: 340, padding: "16px 20px 60px", borderLeft: "0.5px solid var(--border)", flexShrink: 0 }}>
          <QueueSidebar videos={related} />
        </aside>
      </div>
    </>
  );
}
