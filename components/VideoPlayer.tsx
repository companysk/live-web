"use client";

import { useState, useRef, useCallback } from "react";
import { Video } from "@/lib/videos";

const COMMENT_NAMES = ["Alex K.", "Sarah M.", "DevNinja", "CodeFan", "TechBuff", "MovieKing"];
const COMMENT_COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];
const COMMENT_TIMES = ["2 hours ago", "1 day ago", "3 days ago", "1 week ago", "2 weeks ago", "1 month ago"];

const DEFAULT_COMMENTS: Record<number, string[]> = {
  1: ["This is exactly what I needed! Best full-stack tutorial 🔥", "Landed my first dev job after watching this series", "Been watching Fireship for years, never disappoints"],
  2: ["Bro actually did it 😂 absolute legend", "My hands hurt just watching this", "I grew up on these games, this video is everything"],
  3: ["Kurzgesagt always blows my mind", "This channel makes me feel dumb in the best way possible", "Science was never this fun in school"],
};

function getDefaultComments(id: number): string[] {
  return DEFAULT_COMMENTS[id] ?? [
    "This is amazing content, thank you! 🔥",
    "Been watching this channel for years, never disappoints",
    "Sharing this with my entire group chat right now",
    "This blew my mind completely 🤯",
    "The editing on this is absolutely top tier",
  ];
}

interface Props {
  video: Video;
}

export function VideoPlayer({ video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState(video.duration === "LIVE" ? "LIVE" : video.duration);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [subbed, setSubbed] = useState(false);
  const [descOpen, setDescOpen] = useState(false);
  const [comments, setComments] = useState<string[]>(getDefaultComments(video.id));
  const [commentInput, setCommentInput] = useState("");
  const [commentFocused, setCommentFocused] = useState(false);
  const [copied, setCopied] = useState(false);

  /* ── Player controls ── */
  const handleStart = useCallback(() => {
    setStarted(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) { handleStart(); return; }
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }, [started, handleStart]);

  const onPlay = () => setPlaying(true);
  const onPause = () => setPlaying(false);

  const onTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const pct = (v.currentTime / v.duration) * 100;
    setProgress(pct);
    setCurrentTime(fmt(v.currentTime));
    setTotalTime(fmt(v.duration));
  }, []);

  const onEnded = () => { setPlaying(false); setProgress(100); };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    const el = e.currentTarget;
    if (!v || !v.duration) return;
    const r = el.getBoundingClientRect();
    v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
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
    if (!document.fullscreenElement) el.requestFullscreen();
    else document.exitFullscreen();
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const postComment = () => {
    const txt = commentInput.trim();
    if (!txt) return;
    setComments((prev) => [txt, ...prev]);
    setCommentInput("");
    setCommentFocused(false);
  };

  return (
    <article itemScope itemType="https://schema.org/VideoObject">
      {/* Hidden SEO microdata */}
      <meta itemProp="name" content={video.title} />
      <meta itemProp="description" content={video.description} />
      <meta itemProp="uploadDate" content={new Date().toISOString()} />
      <meta itemProp="contentUrl" content={video.src} />

      {/* ── VIDEO PLAYER ── */}
      <div
        ref={outerRef}
        className={`player-outer${!playing && started ? " paused" : ""}${!started ? " paused" : ""}`}
        onClick={togglePlay}
        role="region"
        aria-label={`Video player: ${video.title}`}
      >
        {/* Thumbnail shown before first play */}
        {!started && (
          <div
            className="thumb-placeholder"
            style={{ background: video.bg }}
          >
            <div style={{ fontSize: 80, lineHeight: 1 }}>{video.emoji}</div>
            <p style={{ fontSize: 14, color: "var(--muted)", textAlign: "center", padding: "0 24px", maxWidth: 440 }}>
              {video.title}
            </p>
            <div className="big-play-btn" role="button" aria-label="Play video">▶</div>
          </div>
        )}

        {/* HTML5 video — no iframe */}
        <video
          ref={videoRef}
          style={{ display: started ? "block" : "none", width: "100%", height: "100%", objectFit: "contain", background: "#000" }}
          preload="metadata"
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
          playsInline
          aria-label={video.title}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Pause overlay icon */}
        {started && !playing && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, paddingLeft: 4, color: "#fff" }}>▶</div>
          </div>
        )}

        {/* Controls bar */}
        <div className="player-controls" onClick={(e) => e.stopPropagation()}>
          {/* Progress */}
          <div className="progress-wrap" onClick={seek} role="slider" aria-label="Video progress" aria-valuenow={Math.round(progress)}>
            <div className="progress-fill" style={{ width: `${progress}%` }}>
              <div className="progress-dot" />
            </div>
          </div>

          {/* Control row */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button className="ctrl-btn" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
              {playing ? "⏸" : "▶"}
            </button>
            <button className="ctrl-btn" onClick={() => skip(-10)} aria-label="Rewind 10 seconds">⏪</button>
            <button className="ctrl-btn" onClick={() => skip(10)} aria-label="Skip 10 seconds">⏩</button>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <button className="ctrl-btn" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
                {muted || volume < 0.01 ? "🔇" : "🔊"}
              </button>
              <input
                type="range" min={0} max={1} step={0.05} value={muted ? 0 : volume}
                onChange={(e) => handleVolume(parseFloat(e.target.value))}
                style={{ width: 70, height: 3, accentColor: "var(--red)", cursor: "pointer" }}
                aria-label="Volume"
              />
            </div>

            <span style={{ fontSize: 13, color: "#fff", fontWeight: 500, margin: "0 4px" }}>
              {currentTime} / {totalTime}
            </span>

            <span className="quality-btn" style={{ marginLeft: "auto" }}>1080p</span>
            <button className="ctrl-btn" onClick={toggleFullscreen} aria-label="Fullscreen">⛶</button>
          </div>
        </div>
      </div>

      {/* ── VIDEO TITLE ── */}
      <h1
        itemProp="name"
        style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.35, margin: "14px 0 10px", color: "var(--text)" }}
      >
        {video.title}
      </h1>

      {/* ── ACTION BUTTONS ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
        <div className="wbtn-group">
          <button
            className={`wbtn${liked ? " liked" : ""}`}
            onClick={() => setLiked((l) => !l)}
            aria-label={liked ? "Unlike" : "Like"}
            aria-pressed={liked}
          >
            👍 {liked ? "Liked" : video.likes}
          </button>
          <button className="wbtn sep" onClick={() => setLiked(false)} aria-label="Dislike">👎</button>
        </div>
        <button className="wsolo" onClick={handleShare} aria-label="Share video">
          {copied ? "✅ Copied!" : "↗ Share"}
        </button>
        <button className="wsolo" aria-label="Clip video">✂️ Clip</button>
        <button className="wsolo" aria-label="Save video">💾 Save</button>
        <button className="wsolo" aria-label="More options">⋯</button>
      </div>

      {/* ── CHANNEL ROW ── */}
      <div
        itemProp="author" itemScope itemType="https://schema.org/Person"
        style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 0", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)", marginBottom: 12 }}
      >
        <div
          style={{ width: 40, height: 40, borderRadius: "50%", background: video.channelColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff" }}
          aria-hidden="true"
        >
          {video.channelAvatar}
        </div>
        <div>
          <p itemProp="name" style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{video.channel}</p>
          <p style={{ fontSize: 12, color: "var(--dim)" }}>{video.channelSubs} subscribers</p>
        </div>
        <button
          className={`sub-btn${subbed ? " on" : ""}`}
          style={{ marginLeft: "auto" }}
          onClick={() => setSubbed((s) => !s)}
          aria-label={subbed ? "Unsubscribe" : `Subscribe to ${video.channel}`}
          aria-pressed={subbed}
        >
          {subbed ? "✓ Subscribed" : "Subscribe"}
        </button>
      </div>

      {/* ── DESCRIPTION ── */}
      <div
        onClick={() => setDescOpen((o) => !o)}
        style={{ background: "var(--bg3)", borderRadius: 10, padding: "12px 14px", cursor: "pointer", marginBottom: 18 }}
        aria-expanded={descOpen}
        role="button"
        aria-label="Toggle video description"
      >
        <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
          <span itemProp="interactionStatistic">{video.views} views</span> · {video.ago}
        </p>
        <p
          itemProp="description"
          style={{
            fontSize: 13, color: "var(--muted)", lineHeight: 1.6,
            overflow: "hidden",
            maxHeight: descOpen ? 800 : 56,
            transition: "max-height .3s",
          }}
        >
          {video.description}
        </p>
        <p style={{ fontSize: 12, fontWeight: 600, marginTop: 5, color: "var(--text)" }}>
          {descOpen ? "Show less" : "...more"}
        </p>

        {/* Tags (SEO keywords visible in page) */}
        {descOpen && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
            {video.tags.map((tag) => (
              <span
                key={tag}
                style={{ background: "var(--bg4)", color: "var(--muted)", fontSize: 12, padding: "3px 10px", borderRadius: 12 }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── COMMENTS ── */}
      <section aria-label="Comments">
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>
          {comments.length + 120} Comments
        </h2>

        {/* Input */}
        <div style={{ display: "flex", gap: 10, marginBottom: 18, alignItems: "flex-start" }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
            U
          </div>
          <div style={{ flex: 1 }}>
            <input
              className="comm-field"
              type="text"
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onFocus={() => setCommentFocused(true)}
              onKeyDown={(e) => { if (e.key === "Enter") postComment(); }}
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

        {/* Comment list */}
        <div>
          {comments.map((text, i) => {
            const n = i % COMMENT_NAMES.length;
            return (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 16 }} itemScope itemType="https://schema.org/Comment">
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: COMMENT_COLORS[n], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0 }} aria-hidden="true">
                  {COMMENT_NAMES[n][0]}
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "var(--text)" }} itemProp="author">
                    {COMMENT_NAMES[n]}
                    <span style={{ fontSize: 11, color: "var(--dim)", fontWeight: 400, marginLeft: 6 }}>{COMMENT_TIMES[n]}</span>
                  </p>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5, marginTop: 3 }} itemProp="text">{text}</p>
                  <div style={{ display: "flex", gap: 4, marginTop: 5 }}>
                    <button className="cbtn" aria-label="Like comment">👍</button>
                    <button className="cbtn" aria-label="Dislike comment">👎</button>
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

function fmt(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? "0" : ""}${sec}`;
}
