import Link from "next/link";
import { Video } from "@/lib/videos";

interface Props {
  videos: Video[];
}

export function QueueSidebar({ videos }: Props) {
  return (
    <aside aria-label="Related videos">
      <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--text)" }}>
        Up next
        <span style={{ fontSize: 12, color: "var(--dim)", fontWeight: 400 }}>Autoplay</span>
      </h2>

      <nav aria-label="Related video list">
        {videos.map((v) => (
          <Link
            key={v.id}
            href={`/video/${v.slug}`}
            className="qcard"
            aria-label={`Watch ${v.title} by ${v.channel}`}
          >
            {/* Thumbnail */}
            <div
              style={{
                width: 160, minWidth: 160, aspectRatio: "16/9",
                borderRadius: 8, background: v.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, flexShrink: 0, position: "relative", overflow: "hidden",
              }}
              aria-hidden="true"
            >
              {v.emoji}
              <div style={{ position: "absolute", bottom: 4, right: 4, background: "rgba(0,0,0,0.9)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "1px 4px", borderRadius: 3 }}>
                {v.duration}
              </div>
            </div>

            {/* Info */}
            <div style={{ minWidth: 0 }}>
              <h3
                style={{
                  fontSize: 12, fontWeight: 500, lineHeight: 1.4, color: "var(--text)",
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                  overflow: "hidden", marginBottom: 4,
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: 11, color: "var(--dim)" }}>{v.channel}</p>
              <p style={{ fontSize: 11, color: "var(--dim)" }}>{v.views} views</p>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
