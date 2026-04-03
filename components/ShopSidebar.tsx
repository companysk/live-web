import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/products";

const CATEGORY_ICONS: Record<string, string> = {
  All: "🛒", Electronics: "⚡", Gaming: "🎮", Streaming: "📡",
  Audio: "🎙️", Monitors: "🖥️", Tablets: "📱", Peripherals: "🖱️",
  Lighting: "💡", Storage: "💾", Cameras: "📷",
};

export function ShopSidebar({ activeCat }: { activeCat: string }) {
  return (
    <nav
      className="sidebar"
      aria-label="Shop navigation"
      style={{ top: 108, height: "calc(100vh - 108px)" }}
    >
      {/* Back to videos */}
      <Link href="/" className="sitem" style={{ color: "var(--dim)", fontSize: 13 }}>
        <span className="sicon">◀</span>
        <span>Back to Videos</span>
      </Link>

      <div className="sdiv" />
      {/* <div className="slbl">Shop by Category</div> */}

      {/* {PRODUCT_CATEGORIES.map(cat => (
        <Link
          key={cat}
          href={cat === "All" ? "/shop" : `/shop?cat=${encodeURIComponent(cat)}`}
          className={`sitem${activeCat === cat ? " active" : ""}`}
        >
          <span className="sicon">{CATEGORY_ICONS[cat] ?? "📦"}</span>
          <span>{cat}</span>
        </Link>
      ))} */}

      <div className="sdiv" />
      <div className="slbl">Info</div>
      <div className="sitem" style={{ cursor: "default", fontSize: 12, color: "var(--dim)" }}>
        <span className="sicon">ℹ️</span>
        <span>Links go to Amazon.in</span>
      </div>
      <div className="sitem" style={{ cursor: "default", fontSize: 12, color: "var(--dim)" }}>
        <span className="sicon">🔒</span>
        <span>Safe &amp; Secure</span>
      </div>
    </nav>
  );
}
