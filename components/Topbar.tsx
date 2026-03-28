"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UploadModal } from "./UploadModal";
import { LoginModal } from "./LoginModal";

interface TopbarProps {
  defaultSearch?: string;
}

export function Topbar({ defaultSearch = "" }: TopbarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultSearch);
  const [showUpload, setShowUpload] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <>
      <header className="topbar">
        {/* Logo */}
        <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
          <div className="logo-box" />
          <span style={{ fontSize: 19, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.5px" }}>
            ViewTube<sup style={{ fontSize: 10, fontWeight: 400, color: "var(--dim)" }}>IN</sup>
          </span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          style={{ flex: 1, maxWidth: 560, display: "flex", margin: "0 auto" }}
          role="search"
        >
          <input
            className="search-input"
            type="search"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            aria-label="Search ViewTube"
            autoComplete="off"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            🔍
          </button>
        </form>

        {/* Actions */}
        <div style={{ display: "flex", gap: 4, marginLeft: "auto", alignItems: "center" }}>
          <button
            className="icon-btn hide-mobile"
            onClick={() => (loggedIn ? setShowUpload(true) : setShowLogin(true))}
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
              style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--red)", border: "none", cursor: "pointer", color: "#fff", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Account"
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
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={() => { setLoggedIn(true); setShowLogin(false); }} />}
    </>
  );
}
