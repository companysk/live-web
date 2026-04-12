export interface Product {
  id: number;
  name: string;
  description: string;
  // price: number;
  // originalPrice: number;
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
    name: "Leezu's Sultaan | Yellow | Handhled Massager for Relief | Ribbed Interior",
    description: "SULTAAN BY LEEZA MANGALDAS.",
    rating: 4.8,
    reviews: 18420,
    image: "https://i.ibb.co/gMDBy1kJ/41-E9-Dr-WEdd-L-SL1080.jpg",
    badge: "Best Seller",
    category: "Personal Care Appliances",
    amazonUrl: "https://amzn.to/3PVBK4W",
  },
  {
    id: 2,
    name: "Party Decoration Handcuffs/Hen Party Handcuff/Bride to be Accessories (Pink)",
    description: "Pink Furry Cuffs are made from metal and faux fur, It can be adjusted in a certain range.",
    rating: 4.6,
    reviews: 9234,
    image: "https://i.ibb.co/xKb8dJtc/61-Z4-Vxtn-Q4-L-SL1500.jpg",
    badge: "Deal",
    category: "Home",
    amazonUrl: "https://amzn.to/3PVgMmN",
  },
  {
    id: 3,
    name: "Personal Massager for Women Rechargeable Wireless Vibration Machine for Female with 10 Vibration Modes Flexible Head for Targeted Compression (Multicolour)",
    description: "SUPER SOFT SILICONE: Personal wand massager is made of medical silicone, safe, skin-friendly, smooth and soft to protect your health. The overall waterproof design of the massager makes it easy to clean.",
    rating: 4.5,
    reviews: 5610,
    image: "https://m.media-amazon.com/images/I/413iYZKdcnL._SY879_.jpg",
    badge: "New",
    category: "Personal Care Appliances",
    amazonUrl: "https://www.amazon.in/s?k=4K+webcam+ring+light+streaming",
  },
  {
    id: 4,
    name: "Caresmith Body Wave Massager | Dual Heads Massager | Massager Machine for Pain Relief with 1 Year Warranty",
    description: "DUAL & FLEXIBLE MASSAGE HEADS : WAVE Body Massager features dual heads - broad for deep relief and slender for gentler massage. These heads bend up to 180°, reaching tough spots for comprehensive relief..",
    rating: 4.9,
    reviews: 22100,
    image: "https://m.media-amazon.com/images/I/71RQet7VeBL._SL1500_.jpg",
    badge: "Best Seller",
    category: "Personal Care Appliances",
    amazonUrl: "https://amzn.to/4c4Hf9Y",
  },
  {
    id: 5,
    name: "Vandelay Full Body Massager for Women & Men, Rechargeable Wireless Massager Machine for Pain Relief, Handheld Massager with Medical Grade Silicone, 8 Speeds, 20 Modes, Pink",
    description: "Full Body Pain Relief: Designed to relieve sore muscles, stiffness, and fatigue in the neck, shoulders, back, arms, legs, and feet. Ideal for post-workout recovery or daily relaxation.",
    rating: 4.8,
    reviews: 14300,
    image: "https://m.media-amazon.com/images/I/61DRlxa6SfL._SX679_.jpg",
    category: "Personal Care Appliances",
    amazonUrl: "https://amzn.to/4cjJyox",
  },
  {
    id: 6,
    name: "MYMUSE Pulse Full Body Electric Massager | Waterproof | Rechargeable - Morning Light, Off White",
    description: "➤Multiple Modes: Pulse has 5 speeds including 2 rhythmic patterns to help relieve varying levels of stress.",
    rating: 4.7,
    reviews: 31800,
    image: "https://m.media-amazon.com/images/I/5118IbseZSL._SL1080_.jpg",
    badge: "Best Seller",
    category: "Personal Care Appliances",
    amazonUrl: "https://amzn.to/4tL6bJG",
  },
  {
    id: 7,
    name: "MyMuse Electric Beat Body Massager | Inkpen Blue",
    description: "Guaranteed Warranty: MyMuse proudly offers a 100-day warranty on this product and will replace it in case of defects or malfunctions in the warranty period.",
    rating: 4.7,
    reviews: 8900,
    badge: "Deal",
    category: "Personal Care Appliances",
    image: "https://m.media-amazon.com/images/I/31sgcQw3xpL._SX679_.jpg",
    amazonUrl: "https://amzn.to/4stUzcO",
  },
  {
    id: 8,
    name: "Groove Plus - App-Controlled Wireless Body Massager for Muscle Relaxation & Stress Relief – Full Body Use – Quiet, Waterproof & Portable – USB Rechargeable",
    description: "App-Controlled Smart Massager: Experience personalized wellness with the Groove Plus – control intensity and patterns through an easy-to-use smartphone app for customized body relaxation.",
    rating: 4.8,
    reviews: 42600,
    image: "https://m.media-amazon.com/images/I/41xFQu1rlPL.jpg",
    badge: "Best Seller",
    category: "Personal Care Appliances",
    amazonUrl: "https://amzn.to/4cBGqFM",
  },
  {
    id: 9,
    name: "MyMuse Breeze Full Body Electric Massager, Suction and Vibration, Water-Resistant & Rechargeable, Ultra-Quiet & Compact for Stress Relief, Ergonomic Handheld Massager, 120 Day Warranty",
    description: "A Breath of Fresh Air.",
    rating: 4.8,
    reviews: 27400,
    image: "https://m.media-amazon.com/images/I/31c3VLmiV8L.jpg",
    category: "Health, Household & Personal Care",
    amazonUrl: "https://amzn.to/41sPFC2",
  },
  {
    id: 10,
    name: "Leezu’s Power Rings | Soft & Stretchy Silicone Performance Rings | 2 Sizes for Comfortable Fit | Easy to Use & Body-Safe Design",
    description: "SOFT & STRETCHY SILICONE – Made from premium, body-safe silicone that is smooth, flexible, and comfortable for extended use.",
    rating: 4.5,
    reviews: 19700,
    badge: "Deal",
    category: "Personal Care Appliances",
    image: "https://m.media-amazon.com/images/I/51yNKjrc08L._SX679_.jpg",
    amazonUrl: "https://amzn.to/41XuUyq",
  },
  {
    id: 11,
    name: "Durex Slide and Ride & Strawberry Lube Combo",
    description: "Durex Saucy Strawberry Lube is designed to bring a little extra sweetness, the ideal lube when you’re in the mood for sweet strawberries.",
    rating: 4.7,
    reviews: 15200,
    image: "https://m.media-amazon.com/images/I/51+trr4TdVL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
    category: "Health, Household & Personal Care",
    amazonUrl: "https://amzn.to/4t7ea3C",
  },
  {
    id: 12,
    name: "MyMuse Flick Full Body Electric Pain Relief Massager, Rechargeable, Waterproof,Mini Massage Machine, 100 Days Warranty - Lavender Haze",
    description: "Flick is a massager that features a smooth, flexible, silicone flap that mimics gentle flicking movements.",
    rating: 4.7,
    reviews: 11300,
    badge: "New",
    category: "Personal Care Appliances",
    image: "https://m.media-amazon.com/images/I/31r9VxvR9tL.jpg",
    amazonUrl: "https://amzn.to/3OxrfUY",
  },
];

export const PRODUCT_CATEGORIES = [
  "All", "Electronics", "Gaming", "Streaming", "Audio", "Monitors", "Tablets", "Peripherals", "Lighting", "Storage", "Cameras",
];

export function getProductsByCategory(cat: string): Product[] {
  return cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
}
