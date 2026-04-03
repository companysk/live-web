import Link from "next/link";
import { Video } from "@/lib/videos";

export function VideoGrid({ videos }: { videos: Video[] }) {
  if (!videos.length) return <div style={{ textAlign:"center", padding:"60px 0", color:"var(--dim)" }}>No videos found.</div>;
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:16 }}>
      {videos.map(v => (
        <Link key={v.id} href={`/video/${v.slug}`} className="vcard" aria-label={`Watch ${v.title}`}>
          <div className="vthumb">
            <div className="vthumb-inner" style={{ background: v.bg }}>{v.emoji}</div>
            <div className="vplay-ov"><div className="vplay-circle">▶</div></div>
            <div className="vdur">{v.duration}</div>
            {v.duration === "LIVE" && <div className="vlive">● LIVE</div>}
          </div>
          <div style={{ display:"flex", gap:10, padding:"10px 3px 4px" }}>
            <div style={{ width:36, height:36, minWidth:36, borderRadius:"50%", background:v.channelColor, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"#fff", marginTop:2, flexShrink:0 }} aria-hidden="true">{v.channelAvatar}</div>
            <div>
              <h2 style={{ fontSize:14, fontWeight:500, lineHeight:1.4, color:"var(--text)", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden", marginBottom:3 }}>{v.title}</h2>
              <p style={{ fontSize:12, color:"var(--dim)" }}>{v.channel}</p>
              <p style={{ fontSize:12, color:"var(--dim)", marginTop:2 }}>{v.views} views · {v.ago}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
