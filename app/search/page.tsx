import type { Metadata } from "next";
import Link from "next/link";
import { searchVideos } from "@/lib/videos";
import { Topbar } from "@/components/Topbar";
import { Sidebar } from "@/components/Sidebar";

interface Props {
  searchParams: { q?: string };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const q = searchParams?.q ?? "";
  return {
    title: q ? `"${q}" — Search Results` : "Search",
    description: q ? `PornTube search results for "${q}". Find videos about ${q}.` : "Search PornTube for videos.",
    robots: { index: false, follow: true },
  };
}

export default function SearchPage({ searchParams }: Props) {
  const q = searchParams?.q ?? "";
  const results = searchVideos(q);

  return (
    <>
      {/* Pass current query so the topbar input is pre-filled */}
      <Topbar defaultSearch={q} />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px 24px 60px", minWidth: 0 }}>

          {/* {q ? ( */}
            <>
              <p style={{ fontSize: 14, color: "var(--dim)", marginBottom: 20 }}>
                About{" "}
                <strong style={{ color: "var(--text)" }}>{results.length}</strong>{" "}
                results for{" "}
                <strong style={{ color: "var(--text)" }}>&quot;{q}&quot;</strong>
              </p>

              {results.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {results.map(v => (
                    <Link key={v.id} href={`/video/${v.slug}`} className="sresult">
                      {/* Thumbnail */}
                      <div style={{ width: 220, minWidth: 220, aspectRatio: "16/9", borderRadius: 10, background: v.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, flexShrink: 0, position: "relative", overflow: "hidden" }}>
                        {v.emoji}
                        <div style={{ position: "absolute", bottom: 4, right: 4, background: "rgba(0,0,0,0.88)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "2px 5px", borderRadius: 3 }}>
                          {v.duration}
                        </div>
                      </div>
                      {/* Info */}
                      <div style={{ minWidth: 0 }}>
                        <h2 style={{ fontSize: 16, fontWeight: 500, marginBottom: 5, color: "var(--text)", lineHeight: 1.4 }}>{v.title}</h2>
                        <p style={{ fontSize: 13, color: "var(--dim)", marginBottom: 6 }}>{v.views} views · {v.ago}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <div style={{ width: 24, height: 24, borderRadius: "50%", background: v.channelColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                            {v.channelAvatar}
                          </div>
                          <span style={{ fontSize: 13, color: "var(--dim)" }}>{v.channel}</span>
                          <span style={{ fontSize: 11, color: "var(--dim)", background: "var(--bg3)", padding: "2px 8px", borderRadius: 10 }}>{v.category}</span>
                        </div>
                        <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {v.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "80px 0" }}>
                  <div style={{ fontSize: 60, marginBottom: 16 }}>🔍</div>
                  <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>
                    No results for &quot;{q}&quot;
                  </h2>
                  <p style={{ fontSize: 14, color: "var(--dim)", marginBottom: 20 }}>
                    Try different keywords or check your spelling.
                  </p>
                  <Link href="/" style={{ background: "var(--yellow)", color: "#fff", padding: "10px 24px", borderRadius: 20, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                    Back to Home
                  </Link>
                </div>
              )}
            </>
          {/* ) : ( */}
            {/* <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 16, color: "var(--dim)" }}>Enter a search term above to find videos.</p>
            </div>
          )} */}
        </main>
      </div>
    </>
  );
}
