# PornTube — Next.js 14 Video Platform

YouTube-style video platform with full SEO, HTML5 player (no iframe), and working search.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 🐛 Search Fix (v2)

The search was broken in v1 because the Topbar used `useState` + `router.push()`.

**Fixed by using a native HTML form:**
```tsx
// FIXED Topbar search
<form action="/search" method="GET">
  <input name="q" defaultValue={defaultSearch} placeholder="Search..." />
  <button type="submit">🔍</button>
</form>
```

- Enter key → submits form → navigates to `/search?q=...` ✅
- Search page pre-fills input via `defaultSearch` prop ✅  
- Works without JavaScript (progressive enhancement) ✅
- SSR: search page reads `searchParams.q` server-side ✅

## File Structure

```
PornTube/
├── app/
│   ├── layout.tsx           Global SEO + metadata
│   ├── page.tsx             Home feed (SSR + category filter)
│   ├── globals.css          All styles
│   ├── sitemap.ts           Auto sitemap.xml
│   ├── robots.ts            Crawl rules
│   ├── not-found.tsx        404 page
│   ├── video/[id]/page.tsx  Per-video page + JSON-LD VideoObject
│   └── search/page.tsx      Search results (SSR)
├── components/
│   ├── Topbar.tsx           Header — FIXED search form
│   ├── Sidebar.tsx          Navigation sidebar
│   ├── ChipsBar.tsx         Category chips
│   ├── VideoGrid.tsx        Home video grid
│   ├── VideoPlayer.tsx      HTML5 player (no iframe!)
│   ├── QueueSidebar.tsx     Related videos
│   ├── UploadModal.tsx      Upload flow
│   └── LoginModal.tsx       Sign in
└── lib/
    └── videos.ts            Video data + searchVideos() helper
```

## SEO Per Video Page

Each `/video/[slug]` page gets:
- Unique `<title>` and `<meta description>`
- `og:type = video.other` → Facebook video preview
- `twitter:card = player` → Twitter video embed  
- JSON-LD `VideoObject` → Google Video rich result
- JSON-LD `BreadcrumbList` → Google breadcrumb
- `canonical` URL
- Video tags as keywords

## Deploy

```bash
# Vercel (recommended)
npx vercel

# Or build for any host
npm run build && npm start
```

Change `metadataBase` in `app/layout.tsx` to your real domain.
