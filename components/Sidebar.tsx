import Link from "next/link";

export function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <Link href="/" className="sitem active"><span className="sicon">🏠</span><span>Home</span></Link>
      <div className="sitem" style={{ cursor: "default" }}><span className="sicon">🔥</span><span>Trending</span></div>
      <div className="sitem" style={{ cursor: "default" }}><span className="sicon">📺</span><span>Subscriptions</span></div>
      <div className="sdiv" />
      <div className="slbl">You</div>
      <div className="sitem" style={{ cursor: "default" }}><span className="sicon">▶️</span><span>Your videos</span></div>
      <div className="sitem" style={{ cursor: "default" }}><span className="sicon">🕐</span><span>History</span></div>
      <div className="sitem" style={{ cursor: "default" }}><span className="sicon">⏱️</span><span>Watch later</span></div>
      <div className="sitem" style={{ cursor: "default" }}><span className="sicon">👍</span><span>Liked videos</span></div>
      <div className="sdiv" />
      <div className="slbl">Subscriptions</div>
      <div className="sitem" style={{ cursor: "default" }}>
        <span className="sicon" style={{ background: "#ff6b35", borderRadius: "50%", width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>F</span>
        <span>Fireship</span>
      </div>
      <div className="sitem" style={{ cursor: "default" }}>
        <span className="sicon" style={{ background: "#f39c12", borderRadius: "50%", width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>K</span>
        <span>Kurzgesagt</span>
      </div>
      <div className="sitem" style={{ cursor: "default" }}>
        <span className="sicon" style={{ background: "#9b59b6", borderRadius: "50%", width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>L</span>
        <span>Lofi Girl</span>
      </div>
      <div className="sdiv" />
      <div className="slbl">Explore</div>
      <Link href="/?cat=Gaming" className="sitem"><span className="sicon">🎮</span><span>Gaming</span></Link>
      <Link href="/?cat=Music" className="sitem"><span className="sicon">🎵</span><span>Music</span></Link>
      <Link href="/?cat=News" className="sitem"><span className="sicon">📰</span><span>News</span></Link>
      <Link href="/?cat=Education" className="sitem"><span className="sicon">📚</span><span>Education</span></Link>
    </nav>
  );
}
