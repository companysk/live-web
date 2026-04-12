import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://porntube25.vercel.app/"),
  title: { default: "PornTube — Watch, Learn & Explore Videos", template: "%s | PornTube" },
  description: "Discover thousands of free videos — tutorials, gaming, music, science, news, comedy, sports and more on PornTube.",
  openGraph: { type: "website", locale: "en_IN", url: "https://porntube25.vercel.app/", siteName: "PornTube", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
