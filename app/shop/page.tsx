import type { Metadata } from "next";
import { Topbar } from "@/components/Topbar";
import { ShopSidebar } from "@/components/ShopSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/products";

interface Props {
  searchParams: { cat?: string };
}

export const metadata: Metadata = {
  title: "Shop — Top Deals on Tech & Gadgets | PornTube",
  description:
    "Discover the best deals on headphones, gaming gear, cameras, microphones, monitors and more. All products link directly to Amazon for fast, trusted delivery.",
  openGraph: {
    title: "Shop — Top Deals on Tech & Gadgets | PornTube",
    description: "Best deals on tech, gaming gear, cameras, and more. Buy on Amazon with one click.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://porntube25.vercel.app/shop" },
};

export default function ShopPage({ searchParams }: Props) {
  const cat = searchParams?.cat ?? "All";
  const products = getProductsByCategory(cat);

  return (
    <>
      <Topbar />

      {/* Category chips */}
      {/* <nav
        style={{
          display: "flex", gap: 8, padding: "12px 20px",
          background: "var(--bg)", borderBottom: "0.5px solid var(--border)",
          overflowX: "auto", scrollbarWidth: "none",
          position: "sticky", top: 56, zIndex: 200,
        }}
        aria-label="Product categories"
      >
        {PRODUCT_CATEGORIES.map(c => (
          <a
            key={c}
            href={c === "All" ? "/shop" : `/shop?cat=${encodeURIComponent(c)}`}
            style={{
              background: cat === c ? "var(--text)" : "var(--bg3)",
              color: cat === c ? "var(--bg)" : "var(--text)",
              border: "none", padding: "6px 14px", borderRadius: 8,
              fontSize: 13, fontWeight: 500, cursor: "pointer",
              whiteSpace: "nowrap", textDecoration: "none", display: "inline-block",
              transition: "background .15s",
            }}
          >
            {c}
          </a>
        ))}
      </nav> */}

      <div style={{ display: "flex" }}>
        <ShopSidebar activeCat={cat} />
        <main style={{ flex: 1, padding: "24px 20px 60px", minWidth: 0 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
            {cat === "All" ? "🛒 Top Deals" : `🛒 ${cat}`}
          </h1>
          <p style={{ fontSize: 13, color: "var(--dim)", marginBottom: 20 }}>
            {products.length} products — click &quot;Buy on Amazon&quot; for fast delivery
          </p>
          <ProductGrid products={products} />
        </main>
      </div>
    </>
  );
}
