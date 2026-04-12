import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new NextResponse("Missing url param", { status: 400 });
  }

  // Only allow http/https URLs — block other protocols
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return new NextResponse("Invalid URL", { status: 400 });
  }
  if (!["http:", "https:"].includes(parsed.protocol)) {
    return new NextResponse("Invalid protocol", { status: 400 });
  }

  try {
    // Forward Range header so seeking works
    const rangeHeader = req.headers.get("range");
    const upstream = await fetch(url, {
      headers: {
        ...(rangeHeader ? { Range: rangeHeader } : {}),
        "User-Agent": "Mozilla/5.0 (compatible; PornTube/1.0)",
      },
    });

    if (!upstream.ok && upstream.status !== 206) {
      return new NextResponse(`Upstream error: ${upstream.status}`, {
        status: upstream.status,
      });
    }

    const contentType   = upstream.headers.get("content-type")   ?? "video/mp4";
    const contentLength = upstream.headers.get("content-length");
    const contentRange  = upstream.headers.get("content-range");
    const acceptRanges  = upstream.headers.get("accept-ranges");

    const headers: Record<string, string> = {
      "Content-Type": contentType,
      // Allow the browser to cache the proxied video
      "Cache-Control": "public, max-age=3600",
      // Critical: allow the video to be loaded cross-origin by our own page
      "Access-Control-Allow-Origin": "*",
    };
    if (contentLength) headers["Content-Length"]  = contentLength;
    if (contentRange)  headers["Content-Range"]   = contentRange;
    if (acceptRanges)  headers["Accept-Ranges"]   = acceptRanges;

    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers,
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return new NextResponse("Proxy fetch failed", { status: 502 });
  }
}