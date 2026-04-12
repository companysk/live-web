"use client";

import { Product } from "@/lib/products";

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  "Best Seller": { bg: "#ff9900", color: "#000" },
  "Deal":        { bg: "#cc0c39", color: "#fff" },
  "New":         { bg: "#007185", color: "#fff" },
};

function StarRating({ rating }: { rating: number }) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span style={{ color: "#f5a623", fontSize: 13, letterSpacing: 1 }} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(empty)}
    </span>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div style={{ textAlign: "center", padding: "60px 0", color: "var(--dim)" }}>
        No products found in this category.
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
      {products.map(p => {
        // const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
        const badge = p.badge ? BADGE_COLORS[p.badge] : null;

        return (
          <article
            key={p.id}
            className="product-card"
            itemScope
            itemType="https://schema.org/Product"
          >
            {/* Image */}
            <div style={{ position: "relative", background: "#fff", aspectRatio: "1/1", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} itemProp="image"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
              {badge && p.badge && (
                <div style={{ position: "absolute", top: 8, left: 8, background: badge.bg, color: badge.color, fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>
                  {p.badge}
                </div>
              )}
              {/* {discount > 0 && (
                <div style={{ position: "absolute", top: 8, right: 8, background: "#cc0c39", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 7px", borderRadius: 20 }}>
                  -{discount}%
                </div>
              )} */}
            </div>

            {/* Info */}
            <div style={{ padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 10, color: "var(--dim)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>
                {p.category}
              </span>
              <h2 itemProp="name" style={{ fontSize: 14, fontWeight: 500, color: "var(--text)", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {p.name}
              </h2>
              <p style={{ fontSize: 12, color: "var(--dim)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {p.description}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <StarRating rating={p.rating} />
                <span style={{ fontSize: 12, color: "var(--dim)" }}>{p.rating} ({p.reviews.toLocaleString()})</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 2 }} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                {/* <span itemProp="price" style={{ fontSize: 20, fontWeight: 700, color: "#ff9900" }}>
                  ₹{p.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span>
                <span style={{ fontSize: 12, color: "var(--dim)", textDecoration: "line-through" }}>
                  ₹{p.originalPrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span> */}
                <meta itemProp="priceCurrency" content="INR" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
              </div>
              <div style={{ flex: 1 }} />
              <a href={p.amazonUrl} target="_blank" rel="noopener noreferrer" className="amazon-btn" aria-label={`Buy ${p.name} on Amazon`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.12 2.06L7.58 7.6c-.37.37-.11 1 .41 1H11v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8.6h3.01c.52 0 .78-.63.41-1l-5.54-5.54c-.22-.22-.57-.22-.78 0zm-9.12 17c0 1.1 3.13 2 7 2s7-.9 7-2H4z"/>
                </svg>
                Buy on Amazon
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}