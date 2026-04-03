export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;          // real product image via picsum / unsplash
  badge?: string;         // "Best Seller" | "New" | "Deal"
  category: string;
  amazonUrl: string;      // real Amazon search URL — replace with affiliate link
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    description: "Industry-leading noise cancellation with 30-hour battery life. Crystal-clear hands-free calling.",
    price: 279.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 18420,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Best Seller",
    category: "Electronics",
    amazonUrl: "https://www.amazon.in/s?k=Sony+WH-1000XM5+headphones",
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard RGB",
    description: "TKL layout with Cherry MX Red switches. Per-key RGB backlight, anti-ghosting, aluminium frame.",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviews: 9234,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    badge: "Deal",
    category: "Gaming",
    amazonUrl: "https://www.amazon.in/s?k=mechanical+gaming+keyboard+RGB",
  },
  {
    id: 3,
    name: "4K Webcam with Ring Light",
    description: "Ultra HD 4K streaming webcam with built-in ring light, autofocus, and noise-cancelling mic.",
    price: 74.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 5610,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop",
    badge: "New",
    category: "Streaming",
    amazonUrl: "https://www.amazon.in/s?k=4K+webcam+ring+light+streaming",
  },
  {
    id: 4,
    name: "iPad Pro 11\" M4 WiFi 256GB",
    description: "Apple M4 chip, Ultra Retina XDR display, 256GB storage. Perfect for content creation.",
    price: 999.00,
    originalPrice: 1099.00,
    rating: 4.9,
    reviews: 22100,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    badge: "Best Seller",
    category: "Tablets",
    amazonUrl: "https://www.amazon.in/s?k=iPad+Pro+M4+11+inch",
  },
  {
    id: 5,
    name: "Elgato Stream Deck MK.2",
    description: "15 customisable LCD keys. Automate actions, switch scenes, launch media — all with one tap.",
    price: 149.99,
    originalPrice: 169.99,
    rating: 4.8,
    reviews: 14300,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop",
    category: "Streaming",
    amazonUrl: "https://www.amazon.in/s?k=Elgato+Stream+Deck+MK2",
  },
  {
    id: 6,
    name: "Blue Yeti USB Microphone",
    description: "Professional-grade USB condenser mic. Multiple pickup patterns. Perfect for podcasting and streaming.",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.7,
    reviews: 31800,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop",
    badge: "Best Seller",
    category: "Audio",
    amazonUrl: "https://www.amazon.in/s?k=Blue+Yeti+USB+microphone",
  },
  {
    id: 7,
    name: "LG 27\" 4K UHD IPS Monitor",
    description: "27-inch 4K UHD IPS display with HDR10, USB-C 60W PD, and DCI-P3 95% colour accuracy.",
    price: 349.99,
    originalPrice: 499.99,
    rating: 4.7,
    reviews: 8900,
    badge: "Deal",
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    amazonUrl: "https://www.amazon.in/s?k=LG+27+inch+4K+UHD+IPS+monitor",
  },
  {
    id: 8,
    name: "Nintendo Switch OLED",
    description: "Play at home on TV or take it on the go. 7-inch OLED screen, 64GB storage, wide adjustable stand.",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 42600,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
    badge: "Best Seller",
    category: "Gaming",
    amazonUrl: "https://www.amazon.in/s?k=Nintendo+Switch+OLED",
  },
  {
    id: 9,
    name: "Logitech MX Master 3S Mouse",
    description: "Advanced wireless mouse with MagSpeed scroll, ergonomic design, and 8000 DPI precision sensor.",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 27400,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop",
    category: "Peripherals",
    amazonUrl: "https://www.amazon.in/s?k=Logitech+MX+Master+3S",
  },
  {
    id: 10,
    name: "Ring Light 18\" with Tripod Stand",
    description: "Professional 18-inch ring light, 3 colour modes, 10 brightness levels. Ideal for YouTube & TikTok.",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviews: 19700,
    badge: "Deal",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    amazonUrl: "https://www.amazon.in/s?k=18+inch+ring+light+tripod+stand",
  },
  {
    id: 11,
    name: "Samsung 1TB Portable SSD T7",
    description: "Blazing fast USB 3.2 Gen 2 transfer speeds up to 1,050 MB/s. Compact, shock-resistant design.",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 15200,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop",
    category: "Storage",
    amazonUrl: "https://www.amazon.in/s?k=Samsung+T7+1TB+portable+SSD",
  },
  {
    id: 12,
    name: "GoPro HERO12 Black Action Camera",
    description: "5.3K60 video, HyperSmooth 6.0 stabilisation, waterproof to 10m. The world's most versatile camera.",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 11300,
    badge: "New",
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    amazonUrl: "https://www.amazon.in/s?k=GoPro+HERO12+Black",
  },
];

export const PRODUCT_CATEGORIES = [
  "All", "Electronics", "Gaming", "Streaming", "Audio", "Monitors", "Tablets", "Peripherals", "Lighting", "Storage", "Cameras",
];

export function getProductsByCategory(cat: string): Product[] {
  return cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
}
