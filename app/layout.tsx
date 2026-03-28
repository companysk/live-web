import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://viewtube.in"),
  title: {
    default: "ViewTube — Watch, Learn & Explore Videos",
    template: "%s | ViewTube",
  },
  description:
    "ViewTube is your go-to platform for educational tutorials, entertainment, gaming, music, science, news and more. Watch thousands of free videos online.",
  keywords: ["video", "tutorials", "watch online", "free videos", "education", "gaming", "music", "streaming"],
  authors: [{ name: "ViewTube" }],
  creator: "ViewTube",
  publisher: "ViewTube",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://viewtube.in",
    siteName: "ViewTube",
    title: "ViewTube — Watch, Learn & Explore Videos",
    description:
      "Your go-to platform for educational tutorials, gaming, music, science, news and more. Watch thousands of free videos online.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ViewTube — Video Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ViewTube — Watch, Learn & Explore Videos",
    description:
      "Your go-to platform for educational tutorials, gaming, music, science, and more.",
    images: ["/og-image.png"],
    creator: "@viewtube",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://viewtube.in",
  },
  verification: {
    google: "your-google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ViewTube",
              url: "https://viewtube.in",
              logo: "https://viewtube.in/logo.png",
              sameAs: [
                "https://twitter.com/viewtube",
                "https://facebook.com/viewtube",
              ],
            }),
          }}
        />
        {/* Structured data: WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ViewTube",
              url: "https://viewtube.in",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://viewtube.in/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-yt-bg text-yt-text min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
