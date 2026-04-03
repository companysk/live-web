/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from these domains
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.desitales2.com",
    ],
  },
  // Increase API route body/response size for video proxying
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
  async headers() {
    return [
      {
        // Apply CORS headers to the proxy API route
        source: "/api/proxy",
        headers: [
          { key: "Access-Control-Allow-Origin",  value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Range, Content-Type" },
          { key: "Access-Control-Expose-Headers",value: "Content-Range, Accept-Ranges, Content-Length" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;