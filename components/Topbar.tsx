"use client";

import { useState } from "react";
import Link from "next/link";
import { UploadModal } from "./UploadModal";
import { LoginModal } from "./LoginModal";

interface Props {
  defaultSearch?: string;
}

export function Topbar({ defaultSearch = "" }: Props) {
  const [showUpload, setShowUpload] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <header className="topbar">
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none", flexShrink: 0 }}>
          <div className="logo-box" />
          <span style={{ fontSize: 19, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.5px" }}>
            PornTube<sup style={{ fontSize: 10, fontWeight: 400, color: "var(--dim)" }}>IN</sup>
          </span>
        </Link>

        {/*
          ── SEARCH FIX ──
          Using a real HTML <form> with action="/search" and name="q".
          This means:
          • Pressing Enter submits the form and navigates to /search?q=...
          • Clicking the search button does the same
          • Works with or without JavaScript
          • defaultValue pre-fills the input on the search page
          • The search page reads q from searchParams (SSR, no state needed)
        */}
        <form
          action="/search"
          method="GET"
          className="search-form"
          role="search"
        >
          <input
            className="search-input"
            type="search"
            name="q"
            defaultValue={defaultSearch}
            placeholder="Search videos, channels, topics..."
            aria-label="Search ViewTube"
            autoComplete="off"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            🔍
          </button>
        </form>

        {/* Right actions */}
        <div style={{ display: "flex", gap: 6, marginLeft: "auto", alignItems: "center", flexShrink: 0 }}>
          <a href="/shop" className="hide-sm" style={{ background:"#ff9900", color:"#000", padding:"6px 14px", borderRadius:20, fontSize:13, fontWeight:700, textDecoration:"none", whiteSpace:"nowrap", display:"flex", alignItems:"center", gap:5 }}>
            🛒 Shop
          </a>
          <button
            className="icon-btn hide-sm"
            onClick={() => loggedIn ? setShowUpload(true) : setShowLogin(true)}
            title="Upload video"
            aria-label="Upload video"
          >
            📤
          </button>
          <button className="icon-btn" title="Notifications" aria-label="Notifications">
            🔔<span className="notif-dot" />
          </button>
          {loggedIn ? (
            <button
              onClick={() => setLoggedIn(false)}
              style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--yellow)", border: "none", cursor: "pointer", color: "#fff", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Sign out"
            >
              U
            </button>
          ) : (
            <button className="signin-btn" onClick={() => setShowLogin(true)}>
              👤 Sign in
            </button>
          )}
        </div>
      </header>

      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={() => { setLoggedIn(true); setShowLogin(false); }}
        />
      )}
    </>
  );
}
