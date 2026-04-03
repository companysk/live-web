import Link from "next/link";

export function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <Link href="/" className="sitem active"><span className="sicon">🏠</span><span>Home</span></Link>
      {/* <div className="sitem" style={{ cursor:"default" }}><span className="sicon">🔥</span><span>Trending</span></div> */}
      {/* Shop replaces Subscriptions */}
      <Link href="/shop" className="sitem" style={{ color:"#ff9900" }}>
        <span className="sicon">🛒</span><span style={{ fontWeight:600 }}>Shop</span>
      </Link>
      {/* <div className="sdiv" />
      <div className="slbl">You</div>
      <div className="sitem" style={{ cursor:"default" }}><span className="sicon">▶️</span><span>Your videos</span></div>
      <div className="sitem" style={{ cursor:"default" }}><span className="sicon">🕐</span><span>History</span></div>
      <div className="sitem" style={{ cursor:"default" }}><span className="sicon">⏱️</span><span>Watch later</span></div>
      <div className="sitem" style={{ cursor:"default" }}><span className="sicon">👍</span><span>Liked videos</span></div>
      <div className="sdiv" />
      <div className="slbl">Shop by Category</div>
      <Link href="/shop?cat=Gaming"      className="sitem"><span className="sicon">🎮</span><span>Gaming</span></Link>
      <Link href="/shop?cat=Electronics" className="sitem"><span className="sicon">⚡</span><span>Electronics</span></Link>
      <Link href="/shop?cat=Audio"       className="sitem"><span className="sicon">🎙️</span><span>Audio</span></Link>
      <Link href="/shop?cat=Cameras"     className="sitem"><span className="sicon">📷</span><span>Cameras</span></Link>
      <Link href="/shop?cat=Streaming"   className="sitem"><span className="sicon">📡</span><span>Streaming</span></Link>
      <div className="sdiv" />
      <div className="slbl">Explore</div>
      <Link href="/?cat=Gaming"    className="sitem"><span className="sicon">🎮</span><span>Gaming Videos</span></Link>
      <Link href="/?cat=Music"     className="sitem"><span className="sicon">🎵</span><span>Music</span></Link>
      <Link href="/?cat=News"      className="sitem"><span className="sicon">📰</span><span>News</span></Link>
      <Link href="/?cat=Education" className="sitem"><span className="sicon">📚</span><span>Education</span></Link> */}
    </nav>
  );
}
