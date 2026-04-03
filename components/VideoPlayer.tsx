"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Video } from "@/lib/videos";

const COMMENT_NAMES = ["Alex K.", "Sarah M.", "DevNinja", "CodeFan", "TechBuff", "MovieKing"];
const COMMENT_COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];
const COMMENT_TIMES = ["2 hours ago", "1 day ago", "3 days ago", "1 week ago", "2 weeks ago", "1 month ago"];

const DEFAULT_COMMENTS: Record<number, string[]> = {
  1: ["Best full-stack tutorial out there 🔥", "Landed my first dev job after this series!", "Fireship never misses, absolute banger"],
  2: ["Bro actually did it 😂 legend", "My hands hurt just watching this", "I grew up on these games, this video is everything"],
  3: ["Kurzgesagt always blows my mind", "Makes me feel dumb in the best way", "Science was never this fun in school"],
  4: ["The perfect study companion ☕", "Been playing this for 3 years straight", "Never fails to help me focus"],
  5: ["Made this last weekend, turned out perfect!", "Joshua is genuinely the best food youtuber", "The broth recipe alone is worth watching"],
};

function getDefaultComments(id: number): string[] {
  return DEFAULT_COMMENTS[id] ?? [
    "This is amazing content, thank you! 🔥",
    "Been watching this channel for years, never disappoints",
    "Sharing this with my entire group chat right now",
    "This completely blew my mind 🤯",
    "The quality on this is absolutely top tier",
  ];
}

function fmt(s: number): string {
  if (!isFinite(s) || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? "0" : ""}${sec}`;
}

/**
 * Route external video URLs through our Next.js proxy to bypass CORS.
 * Google Storage and relative URLs do not need proxying.
 */
function getVideoSrc(src: string): string {
  if (!src || src.startsWith("/")) return src;
  try {
    const u = new URL(src);
    if (u.hostname.includes("googleapis.com")) return src;
    if (u.hostname === "localhost" || u.hostname === "127.0.0.1") return src;
    return `/api/proxy?url=${encodeURIComponent(src)}`;
  } catch { return src; }
}

export function VideoPlayer({ video }: { video: Video }) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const outerRef   = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [started,        setStarted]        = useState(false);
  const [playing,        setPlaying]        = useState(false);
  const [progress,       setProgress]       = useState(0);
  const [currentTime,    setCurrentTime]    = useState("0:00");
  const [totalTime,      setTotalTime]      = useState(video.duration === "LIVE" ? "LIVE" : video.duration);
  const [volume,         setVolume]         = useState(1);
  const [muted,          setMuted]          = useState(false);
  const [liked,          setLiked]          = useState(false);
  const [subbed,         setSubbed]         = useState(false);
  const [descOpen,       setDescOpen]       = useState(false);
  const [comments,       setComments]       = useState<string[]>(getDefaultComments(video.id));
  const [commentInput,   setCommentInput]   = useState("");
  const [commentFocused, setCommentFocused] = useState(false);
  const [copied,         setCopied]         = useState(false);
  // pendingPlay: triggers play after video becomes visible in DOM
  const [pendingPlay,    setPendingPlay]    = useState(false);

  // When pendingPlay becomes true AND video is in DOM → call play()
  useEffect(() => {
    if (!pendingPlay) return;
    const v = videoRef.current;
    if (!v) return;
    const attempt = () => {
      v.play().then(() => {
        setPendingPlay(false);
      }).catch((err) => {
        // Autoplay blocked — show play button, user must click again
        console.warn("Autoplay blocked:", err);
        setPendingPlay(false);
      });
    };
    // Small rAF to ensure display:block has been painted
    requestAnimationFrame(() => requestAnimationFrame(attempt));
  }, [pendingPlay]);

  // Click thumbnail → set started (shows <video>) then trigger play via effect
  const handleStart = useCallback(() => {
    setStarted(true);
    setPendingPlay(true);
  }, []);

  // Click video area while already started → toggle play/pause
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(console.warn);
    } else {
      v.pause();
    }
  }, []);

  const onPlay   = () => setPlaying(true);
  const onPause  = () => setPlaying(false);
  const onEnded  = () => { setPlaying(false); setProgress(100); };

  const onTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
    setCurrentTime(fmt(v.currentTime));
    setTotalTime(fmt(v.duration));
  }, []);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v  = videoRef.current;
    const el = progressRef.current;
    if (!v || !el || !v.duration) return;
    const r = el.getBoundingClientRect();
    v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * v.duration;
  };

  const skip = (s: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, (v.currentTime ?? 0) + s);
  };

  const handleVolume = (val: number) => {
    setVolume(val);
    if (videoRef.current) videoRef.current.volume = val;
    setMuted(val < 0.01);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const el = outerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => alert(`Share this link: ${url}`));
  };

  const postComment = () => {
    const txt = commentInput.trim();
    if (!txt) return;
    setComments(prev => [txt, ...prev]);
    setCommentInput("");
    setCommentFocused(false);
  };

  return (
    <article itemScope itemType="https://schema.org/VideoObject">
      <meta itemProp="name"        content={video.title} />
      <meta itemProp="description" content={video.description} />
      <meta itemProp="uploadDate"  content={new Date().toISOString()} />
      <meta itemProp="contentUrl"  content={video.src} />

      {/* ── PLAYER ── */}
      <div
        ref={outerRef}
        className={`player-outer${!playing ? " paused" : ""}`}
        role="region"
        aria-label={`Video player: ${video.title}`}
      >
        {/* Thumbnail — shown before first play */}
        {!started && (
          <div
            className="thumb-placeholder"
            style={{ background: video.bg, cursor: "pointer" }}
            onClick={handleStart}
          >
            <div style={{ fontSize: 80, lineHeight: 1, userSelect: "none" }}>{video.emoji}</div>
            <p style={{ fontSize: 14, color: "#aaa", textAlign: "center", padding: "0 24px", maxWidth: 440 }}>
              {video.title}
            </p>
            <div className="big-play-btn" role="button" aria-label="Play video">▶</div>
          </div>
        )}

        {/* HTML5 <video> — always in DOM once started, display toggled */}
        <video
          ref={videoRef}
          style={{
            display: started ? "block" : "none",
            width: "100%", height: "100%",
            objectFit: "contain", background: "#000",
          }}
          preload="metadata"
          playsInline
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
          onClick={togglePlay}
          aria-label={video.title}
        >
          <source src={getVideoSrc(video.src)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Paused overlay */}
        {started && !playing && (
          <div
            onClick={togglePlay}
            style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, paddingLeft: 4, color: "#fff", border: "2px solid rgba(255,255,255,0.4)" }}>
              ▶
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="player-controls" onClick={e => e.stopPropagation()}>
          <div
            ref={progressRef}
            className="progress-wrap"
            onClick={seek}
            role="slider"
            aria-label="Video progress"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="progress-fill" style={{ width: `${progress}%` }}>
              <div className="progress-dot" />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button className="ctrl-btn" onClick={started ? togglePlay : handleStart} aria-label={playing ? "Pause" : "Play"}>
              {playing ? "⏸" : "▶"}
            </button>
            <button className="ctrl-btn" onClick={() => skip(-10)} aria-label="Rewind 10s">⏪</button>
            <button className="ctrl-btn" onClick={() => skip(10)}  aria-label="Skip 10s">⏩</button>

            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <button className="ctrl-btn" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
                {muted || volume < 0.01 ? "🔇" : "🔊"}
              </button>
              <input
                type="range" min={0} max={1} step={0.05}
                value={muted ? 0 : volume}
                onChange={e => handleVolume(parseFloat(e.target.value))}
                style={{ width: 70, height: 3, accentColor: "var(--yellow)", cursor: "pointer" }}
                aria-label="Volume"
              />
            </div>

            <span style={{ fontSize: 13, color: "#fff", fontWeight: 500, margin: "0 6px", whiteSpace: "nowrap" }}>
              {currentTime} / {totalTime}
            </span>

            <span className="quality-btn" style={{ marginLeft: "auto" }}>HD</span>
            <button className="ctrl-btn" onClick={toggleFullscreen} aria-label="Fullscreen">⛶</button>
          </div>
        </div>
      </div>

      {/* ── TITLE ── */}
      <h1 itemProp="name" style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.35, margin: "14px 0 10px", color: "var(--text)" }}>
        {video.title}
      </h1>

      {/* ── ACTIONS ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
        <div className="wbtn-group">
          <button className={`wbtn${liked ? " liked" : ""}`} onClick={() => setLiked(l => !l)} aria-pressed={liked}>
            👍 {liked ? "Liked" : video.likes}
          </button>
          <button className="wbtn sep" onClick={() => setLiked(false)} aria-label="Dislike">👎</button>
        </div>
        <button className="wsolo" onClick={handleShare}>{copied ? "✅ Copied!" : "↗ Share"}</button>
        <button className="wsolo">✂️ Clip</button>
        <button className="wsolo">💾 Save</button>
        <button className="wsolo">⋯</button>
      </div>

      {/* ── CHANNEL ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 0", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)", marginBottom: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: video.channelColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
          {video.channelAvatar}
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{video.channel}</p>
          <p style={{ fontSize: 12, color: "var(--dim)" }}>{video.channelSubs} subscribers</p>
        </div>
        <button
          className={`sub-btn${subbed ? " on" : ""}`}
          style={{ marginLeft: "auto" }}
          onClick={() => setSubbed(s => !s)}
          aria-pressed={subbed}
        >
          {subbed ? "✓ Subscribed" : "Subscribe"}
        </button>
      </div>

      {/* ── DESCRIPTION ── */}
      <div
        onClick={() => setDescOpen(o => !o)}
        style={{ background: "var(--bg3)", borderRadius: 10, padding: "12px 14px", cursor: "pointer", marginBottom: 20 }}
        role="button"
        aria-expanded={descOpen}
      >
        <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{video.views} views · {video.ago}</p>
        <p itemProp="description" style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, overflow: "hidden", maxHeight: descOpen ? 600 : 54, transition: "max-height .3s" }}>
          {video.description}
        </p>
        {descOpen && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
            {video.tags.map(tag => (
              <span key={tag} style={{ background: "var(--bg4)", color: "var(--muted)", fontSize: 12, padding: "3px 10px", borderRadius: 12 }}>#{tag}</span>
            ))}
          </div>
        )}
        <p style={{ fontSize: 12, fontWeight: 600, marginTop: 6, color: "var(--text)" }}>
          {descOpen ? "Show less ▲" : "...more ▼"}
        </p>
      </div>

      {/* ── COMMENTS ── */}
      <section aria-label="Comments">
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 14, color: "var(--text)" }}>
          {comments.length + 120} Comments
        </h2>
        <div style={{ display: "flex", gap: 10, marginBottom: 20, alignItems: "flex-start" }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--yellow)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0 }}>U</div>
          <div style={{ flex: 1 }}>
            <input
              className="comm-field"
              type="text"
              placeholder="Add a comment..."
              value={commentInput}
              onChange={e => setCommentInput(e.target.value)}
              onFocus={() => setCommentFocused(true)}
              onKeyDown={e => { if (e.key === "Enter") postComment(); }}
              aria-label="Add a comment"
            />
            {commentFocused && (
              <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 8 }}>
                <button className="cbtn" onClick={() => { setCommentFocused(false); setCommentInput(""); }}>Cancel</button>
                <button className="cbtn go" onClick={postComment} disabled={!commentInput.trim()}>Comment</button>
              </div>
            )}
          </div>
        </div>
        <div>
          {comments.map((text, i) => {
            const n = i % COMMENT_NAMES.length;
            return (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: COMMENT_COLORS[n], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                  {COMMENT_NAMES[n][0]}
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "var(--text)" }}>
                    {COMMENT_NAMES[n]}
                    <span style={{ fontSize: 11, color: "var(--dim)", fontWeight: 400, marginLeft: 8 }}>{COMMENT_TIMES[n]}</span>
                  </p>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginTop: 3 }}>{text}</p>
                  <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
                    <button className="cbtn">👍</button>
                    <button className="cbtn">👎</button>
                    <button className="cbtn">Reply</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}