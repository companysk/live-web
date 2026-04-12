export interface Video {
  id: number;
  slug: string;
  title: string;
  description: string;
  channel: string;
  channelAvatar: string;
  channelColor: string;
  channelSubs: string;
  views: string;
  likes: string;
  ago: string;
  duration: string;
  category: string;
  src: string;
  emoji: string;
  bg: string;
  tags: string[];
}

export const VIDEOS: Video[] = [
  { id: 1, slug: "instagram-couple-19-minutesviral-mms-2025", title: "Instagram couple 19 minutesviral mms", description: "Instagram couple 19 minutesviral mms.", channel: "Fireship", channelAvatar: "F", channelColor: "#ff6b35", channelSubs: "892K", views: "4.2M", likes: "148K", ago: "3 days ago", duration: "19:34", category: "Tech", src: "https://cdn.sexyvideoindian.com/2025/11/Instagram-couple-19-minutes-viral-mms.mp4", emoji: "💻", bg: "#0a1a0a", tags: ["couplegoals", "couplelove", "romanticvibes", "lovegoals", "relationshipgoals"] },
  { id: 2, slug: "viral-couple-sex-video", title: "Viral Couple Sex Video", description: "Viral Couple Sex Video.", channel: "GameMaster", channelAvatar: "GM", channelColor: "#e74c3c", channelSubs: "12.4M", views: "18.3M", likes: "1.1M", ago: "1 day ago", duration: "1:12", category: "Gaming", src: "https://25vkold.viralkand.com/VK/5000/5878.mp4", emoji: "🎮", bg: "#0a0a1a", tags: ["viral", "trending", "viralreels", "explorepage", "foryou"] },
  { id: 3, slug: "viral-sex-with-girl-friend", title: "Viral Sex with Girl Friend", description: "Viral Sex with Girl Friend.", channel: "Kurzgesagt", channelAvatar: "K", channelColor: "#f39c12", channelSubs: "21M", views: "8.7M", likes: "432K", ago: "5 days ago", duration: "12:34", category: "Science", src: "https://cdn.xxxindianstories.com/1000/1764/1764.mp4", emoji: "🌌", bg: "#080010", tags: ["sex", "sexwithgf", "sexwithbf", "couplesex", "viralsexvideo"] },
  { id: 4, slug: "live-sex", title: "Live Sex", description: "Live Sex.", channel: "Lofi Girl", channelAvatar: "LG", channelColor: "#9b59b6", channelSubs: "14M", views: "120M", likes: "3.8M", ago: "2 years ago", duration: "4:08", category: "Music", src: "https://cdn.xxxindianstories.com/1000/1121/1121.mp4", emoji: "🎵", bg: "#100a1a", tags: ["livesex", "sex", "hotelsex"] },
  { id: 5, slug: "doggy-style-sex", title: "Doggy Style Sex", description: "Doggy Style Sex.", channel: "Joshua Weissman", channelAvatar: "JW", channelColor: "#c0392b", channelSubs: "8.2M", views: "3.1M", likes: "201K", ago: "1 week ago", duration: "4:08", category: "Cooking", src: "https://cdn.desikahani2.net/0/452/452.mp4", emoji: "🍜", bg: "#1a0a0a", tags: ["doggystylesex", "sexwithdoggystyle"] },
  { id: 6, slug: "sex-in-metro-321m", title: "Sex in Metro", description: "Sex in Metro.", channel: "Yes Theory", channelAvatar: "YT", channelColor: "#f39c12", channelSubs: "5.6M", views: "12.4M", likes: "678K", ago: "2 weeks ago", duration: "1:17", category: "Sports", src: "https://cdn.spicymms.com/5000/5493/5493.mp4", emoji: "🪂", bg: "#0a100a", tags: ["sexinMetro", "metrosex"] },
  { id: 7, slug: "sex-in-hotel", title: "Sex in Hotel", description: "sex-in-hotel.", channel: "Fireship", channelAvatar: "F", channelColor: "#ff6b35", channelSubs: "892K", views: "2.8M", likes: "98K", ago: "6 days ago", duration: "", category: "Tech", src: "https://cdn.desitales2.com/1000/1196/1196.mp4", emoji: "🐍", bg: "#0a1a0a", tags: ["sexinhotel", "hotelsex", "hotel"] },

  // { id: 8, slug: "why-japan-trains-are-perfect", title: "Why Japan's Train System is Perfect", description: "An in-depth look at how Japan operates the world's most punctual, efficient, and beloved train network. Covers Shinkansen engineering, station design, and scheduling systems.", channel: "Wendover", channelAvatar: "W", channelColor: "#3498db", channelSubs: "4.1M", views: "6.3M", likes: "287K", ago: "3 weeks ago", duration: "17:55", category: "Travel", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", emoji: "🚅", bg: "#0a0a10", tags: ["japan", "trains", "travel", "engineering", "shinkansen"] },
  // { id: 9, slug: "standup-comedy-highlights-2025", title: "Stand-Up Comedy Highlights — Best of 2025", description: "The best moments from the top stand-up specials of 2025. Curated highlights and the year's funniest bits. Perfect for a 45-minute laugh session.", channel: "Comedy Clips", channelAvatar: "CC", channelColor: "#e67e22", channelSubs: "3.2M", views: "5.5M", likes: "345K", ago: "4 days ago", duration: "45:12", category: "Comedy", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", emoji: "😂", bg: "#1a0a00", tags: ["comedy", "standup", "funny", "humor", "entertainment"] },
  // { id: 10, slug: "major-ai-announcement-2025", title: "Breaking: Major AI Announcement Changes Everything", description: "Live coverage and full analysis of today's landmark AI announcement. What it means for developers, businesses, and everyday users. Expert commentary and deep-dive technical breakdown.", channel: "The Verge", channelAvatar: "TV", channelColor: "#e53935", channelSubs: "1.8M", views: "892K", likes: "21K", ago: "5 hours ago", duration: "8:30", category: "News", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4", emoji: "📰", bg: "#1a0505", tags: ["ai", "news", "technology", "breaking", "announcement"] },
  // { id: 11, slug: "minecraft-survival-epic-castle-ep24", title: "Minecraft Survival: Building an EPIC Castle (Ep.24)", description: "Finally building the castle I've been planning for 6 episodes. Full survival mode, no creative, no cheats. Stone quarrying, wood gathering, defensive walls, towers, and a throne room.", channel: "Mumbo Jumbo", channelAvatar: "MJ", channelColor: "#27ae60", channelSubs: "9.1M", views: "1.9M", likes: "103K", ago: "2 days ago", duration: "32:18", category: "Gaming", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", emoji: "⛏️", bg: "#051a05", tags: ["minecraft", "gaming", "survival", "castle", "building"] },
  // { id: 13, slug: "desitales-featured-video", title: "Featured Video", description: "Watch this featured video from DesiTales. Great entertainment content streamed directly.", channel: "DesiTales", channelAvatar: "DT", channelColor: "#e91e63", channelSubs: "500K", views: "1.2M", likes: "45K", ago: "1 day ago", duration: "12:00", category: "Entertainment", src: "https://cdn.desitales2.com/2000/2989/2989.mp4", emoji: "🎬", bg: "#1a0a10", tags: ["entertainment", "featured", "video", "desitales"] },
  // { id: 12, slug: "music-theory-complete-visual-guide", title: "Music Theory: Complete Visual Guide", description: "Everything about music theory explained visually — scales, chords, harmony, rhythm, counterpoint, and composition. No prior musical knowledge needed. Used by over 7 million students worldwide.", channel: "Adam Neely", channelAvatar: "AN", channelColor: "#8e44ad", channelSubs: "2.3M", views: "7.2M", likes: "512K", ago: "1 month ago", duration: "1:02:44", category: "Education", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanDo.mp4", emoji: "🎼", bg: "#0f0a1a", tags: ["music", "theory", "education", "chords", "scales"] },
];

export const CATEGORIES = ["All", "Gaming", "Music", "Tech", "Science", "News", "Comedy", "Sports", "Education", "Cooking", "Travel"];

export function getVideoBySlug(slug: string) { return VIDEOS.find(v => v.slug === slug); }
export function getRelatedVideos(id: number, limit = 12) { return VIDEOS.filter(v => v.id !== id).slice(0, limit); }
export function searchVideos(q: string): Video[] {
  const query = q.toLowerCase().trim();
  if (!query) return VIDEOS;
  return VIDEOS.filter(v =>
    v.title.toLowerCase().includes(query) ||
    v.channel.toLowerCase().includes(query) ||
    v.category.toLowerCase().includes(query) ||
    v.description.toLowerCase().includes(query) ||
    v.tags.some(t => t.toLowerCase().includes(query))
  );
}