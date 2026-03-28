import type { Metadata } from "next";
import { VIDEOS } from "@/lib/videos";
import { Topbar } from "@/components/Topbar";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

interface Props {
  searchParams: { q?: string };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const q = searchParams?.q ?? "";
  return {
    title: q ? `"${q}" — Search Results | ViewTube` : "Search | ViewTube",
    description: q
      ? `ViewTube search results for "${q}". Find videos about ${q} — tutorials, entertainment, news and more.`
      : "Search ViewTube for videos, channels, and more.",
    robots: { index: false, follow: true }, // search pages shouldn't be indexed
  };
}

export default function SearchPage({ searchParams }: Props) {
  const q = (searchParams?.q ?? "").toLowerCase().trim();
  const results = q
    ? VIDEOS.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.channel.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q) ||
          v.tags.some((t) => t.includes(q))
      )
    : [];

  return (
    <>
      <Topbar defaultSearch={searchParams?.q} />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px 24px 60px", minWidth: 0 }}>
          {q ? (
            <>
              <p style={{ fontSize: 14, color: "var(--dim)", marginBottom: 16 }}>
                About <strong style={{ color: "var(--text)" }}>{results.length}</strong> results for &quot;<strong style={{ color: "var(--text)" }}>{searchParams?.q}</strong>&quot;
              </p>
              {results.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {results.map((v) => (
                    <Link
                      key={v.id}
                      href={`/video/${v.slug}`}
                      style={{ display: "flex", gap: 16, padding: 10, borderRadius: 10, transition: "background .15s", textDecoration: "none" }}
                      className="sresult-link"
                    >
                      <div
                        style={{
                          width: 220, minWidth: 220, aspectRatio: "16/9",
                          borderRadius: 10, background: v.bg,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 44, flexShrink: 0, position: "relative", overflow: "hidden",
                        }}
                      >
                        {v.emoji}
                        <div style={{ position: "absolute", bottom: 4, right: 4, background: "rgba(0,0,0,0.88)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "2px 5px", borderRadius: 3 }}>
                          {v.duration}
                        </div>
                      </div>
                      <div>
                        <h2 style={{ fontSize: 16, fontWeight: 500, marginBottom: 5, color: "var(--text)" }}>{v.title}</h2>
                        <p style={{ fontSize: 13, color: "var(--dim)", marginBottom: 6 }}>
                          {v.views} views · {v.ago}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                          <div style={{ width: 24, height: 24, borderRadius: "50%", background: v.channelColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff" }}>
                            {v.channelAvatar}
                          </div>
                          <span style={{ fontSize: 13, color: "var(--dim)" }}>{v.channel}</span>
                        </div>
                        <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.5 }}>
                          {v.description.substring(0, 130)}...
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "60px 0", color: "var(--dim)", fontSize: 15 }}>
                  No results found for &quot;<strong style={{ color: "var(--text)" }}>{searchParams?.q}</strong>&quot;
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--dim)" }}>
              Enter a search term above to find videos.
            </div>
          )}
        </main>
      </div>
    </>
  );
}
