import type { Metadata } from "next";
import { VIDEOS, CATEGORIES } from "@/lib/videos";
import { Topbar } from "@/components/Topbar";
import { Sidebar } from "@/components/Sidebar";
import { VideoGrid } from "@/components/VideoGrid";
import { ChipsBar } from "@/components/ChipsBar";

export const metadata: Metadata = {
  title: "ViewTube — Watch, Learn & Explore Videos",
  description:
    "Discover thousands of free videos — tutorials, gaming, music, science, news, comedy, sports and more. Stream instantly on ViewTube.",
  openGraph: {
    title: "ViewTube — Watch, Learn & Explore Videos",
    description:
      "Discover thousands of free videos on ViewTube. Tutorials, gaming, music, science, news, comedy and more.",
    url: "https://viewtube.in",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://viewtube.in" },
};

export default function HomePage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  const cat = searchParams?.cat ?? "All";
  const videos =
    cat === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === cat);

  return (
    <>
      <Topbar />
      <ChipsBar active={cat} categories={CATEGORIES} />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "18px 18px 60px", minWidth: 0 }}>
          {/* SEO H1 (visually hidden but readable by crawlers) */}
          <h1 className="sr-only">
            {cat === "All"
              ? "Watch Free Videos Online — ViewTube"
              : `${cat} Videos — ViewTube`}
          </h1>
          <VideoGrid videos={videos} />
        </main>
      </div>
    </>
  );
}
