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
  { id:1, slug:"full-stack-react-nodejs-2025", title:"Building a Full-Stack App with React & Node.js 2025", description:"Complete full stack tutorial covering React 18, Node.js, Express, MongoDB, and deployment to Vercel. Build real production-grade applications from scratch. Covers REST APIs, authentication, database design, and CI/CD pipelines.", channel:"Fireship", channelAvatar:"F", channelColor:"#ff6b35", channelSubs:"892K", views:"4.2M", likes:"148K", ago:"3 days ago", duration:"18:42", category:"Tech", src:"https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4", emoji:"💻", bg:"#0a1a0a", tags:["react","nodejs","fullstack","javascript","webdev"] },
  { id:2, slug:"every-mario-game-one-week", title:"I Played EVERY Mario Game in One Week", description:"Epic challenge where I played all 22 mainline Mario games in just 7 days straight. From Super Mario Bros on NES to Super Mario Odyssey on Switch.", channel:"GameMaster", channelAvatar:"GM", channelColor:"#e74c3c", channelSubs:"12.4M", views:"18.3M", likes:"1.1M", ago:"1 day ago", duration:"24:11", category:"Gaming", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", emoji:"🎮", bg:"#0a0a1a", tags:["mario","nintendo","gaming","challenge","retro"] },
  { id:3, slug:"science-of-black-holes-explained", title:"The Science of Black Holes — Explained Simply", description:"What happens when you fall into a black hole? We explore the information paradox, Hawking radiation, spaghettification, and the event horizon — all explained clearly.", channel:"Kurzgesagt", channelAvatar:"K", channelColor:"#f39c12", channelSubs:"21M", views:"8.7M", likes:"432K", ago:"5 days ago", duration:"12:34", category:"Science", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", emoji:"🌌", bg:"#080010", tags:["space","physics","blackhole","science","education"] },
  { id:4, slug:"lofi-chill-beats-study-radio", title:"Lo-Fi Chill Beats 🎵 Study / Relax Radio", description:"24/7 chill lo-fi hip hop beats to study, code, and relax to. Non-stop music, no ads. The original lofi girl stream that started it all.", channel:"Lofi Girl", channelAvatar:"LG", channelColor:"#9b59b6", channelSubs:"14M", views:"120M", likes:"3.8M", ago:"2 years ago", duration:"LIVE", category:"Music", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", emoji:"🎵", bg:"#100a1a", tags:["lofi","music","study","chill","beats"] },
  { id:5, slug:"perfect-tonkotsu-ramen-from-scratch", title:"Perfect Tonkotsu Ramen from Scratch", description:"Making tonkotsu ramen completely from scratch — rich pork bone broth simmered for 12 hours, handmade noodles, chashu pork, soft boiled eggs, and all the toppings.", channel:"Joshua Weissman", channelAvatar:"JW", channelColor:"#c0392b", channelSubs:"8.2M", views:"3.1M", likes:"201K", ago:"1 week ago", duration:"14:28", category:"Cooking", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", emoji:"🍜", bg:"#1a0a0a", tags:["ramen","cooking","japanese","recipe","food"] },
  { id:6, slug:"worlds-highest-bungee-jump-321m", title:"World's Highest Bungee Jump — 321m Drop", description:"We traveled to Macau Tower to do the world's highest commercial bungee jump at 321 metres. The fear, the preparation, the actual drop, and what it felt like.", channel:"Yes Theory", channelAvatar:"YT", channelColor:"#f39c12", channelSubs:"5.6M", views:"12.4M", likes:"678K", ago:"2 weeks ago", duration:"20:03", category:"Sports", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", emoji:"🪂", bg:"#0a100a", tags:["bungee","extreme","macau","adventure","sports"] },
  { id:7, slug:"python-100-seconds", title:"Python in 100 Seconds", description:"Python explained in exactly 100 seconds. Covers syntax, data types, functions, OOP, and why Python is the world's most popular programming language used in data science, AI, and web dev.", channel:"Fireship", channelAvatar:"F", channelColor:"#ff6b35", channelSubs:"892K", views:"2.8M", likes:"98K", ago:"6 days ago", duration:"1:40", category:"Tech", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", emoji:"🐍", bg:"#0a1a0a", tags:["python","programming","coding","tutorial","tech"] },
  { id:8, slug:"why-japan-trains-are-perfect", title:"Why Japan's Train System is Perfect", description:"An in-depth look at how Japan operates the world's most punctual, efficient, and beloved train network. Covers Shinkansen engineering, station design, and scheduling systems.", channel:"Wendover", channelAvatar:"W", channelColor:"#3498db", channelSubs:"4.1M", views:"6.3M", likes:"287K", ago:"3 weeks ago", duration:"17:55", category:"Travel", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", emoji:"🚅", bg:"#0a0a10", tags:["japan","trains","travel","engineering","shinkansen"] },
  { id:9, slug:"standup-comedy-highlights-2025", title:"Stand-Up Comedy Highlights — Best of 2025", description:"The best moments from the top stand-up specials of 2025. Curated highlights and the year's funniest bits. Perfect for a 45-minute laugh session.", channel:"Comedy Clips", channelAvatar:"CC", channelColor:"#e67e22", channelSubs:"3.2M", views:"5.5M", likes:"345K", ago:"4 days ago", duration:"45:12", category:"Comedy", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", emoji:"😂", bg:"#1a0a00", tags:["comedy","standup","funny","humor","entertainment"] },
  { id:10, slug:"major-ai-announcement-2025", title:"Breaking: Major AI Announcement Changes Everything", description:"Live coverage and full analysis of today's landmark AI announcement. What it means for developers, businesses, and everyday users. Expert commentary and deep-dive technical breakdown.", channel:"The Verge", channelAvatar:"TV", channelColor:"#e53935", channelSubs:"1.8M", views:"892K", likes:"21K", ago:"5 hours ago", duration:"8:30", category:"News", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4", emoji:"📰", bg:"#1a0505", tags:["ai","news","technology","breaking","announcement"] },
  { id:11, slug:"minecraft-survival-epic-castle-ep24", title:"Minecraft Survival: Building an EPIC Castle (Ep.24)", description:"Finally building the castle I've been planning for 6 episodes. Full survival mode, no creative, no cheats. Stone quarrying, wood gathering, defensive walls, towers, and a throne room.", channel:"Mumbo Jumbo", channelAvatar:"MJ", channelColor:"#27ae60", channelSubs:"9.1M", views:"1.9M", likes:"103K", ago:"2 days ago", duration:"32:18", category:"Gaming", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", emoji:"⛏️", bg:"#051a05", tags:["minecraft","gaming","survival","castle","building"] },
  { id:13, slug:"desitales-featured-video", title:"Featured Video", description:"Watch this featured video from DesiTales. Great entertainment content streamed directly.", channel:"DesiTales", channelAvatar:"DT", channelColor:"#e91e63", channelSubs:"500K", views:"1.2M", likes:"45K", ago:"1 day ago", duration:"12:00", category:"Entertainment", src:"https://cdn.desitales2.com/2000/2989/2989.mp4", emoji:"🎬", bg:"#1a0a10", tags:["entertainment","featured","video","desitales"] },
  { id:12, slug:"music-theory-complete-visual-guide", title:"Music Theory: Complete Visual Guide", description:"Everything about music theory explained visually — scales, chords, harmony, rhythm, counterpoint, and composition. No prior musical knowledge needed. Used by over 7 million students worldwide.", channel:"Adam Neely", channelAvatar:"AN", channelColor:"#8e44ad", channelSubs:"2.3M", views:"7.2M", likes:"512K", ago:"1 month ago", duration:"1:02:44", category:"Education", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanDo.mp4", emoji:"🎼", bg:"#0f0a1a", tags:["music","theory","education","chords","scales"] },
];

export const CATEGORIES = ["All","Gaming","Music","Tech","Science","News","Comedy","Sports","Education","Cooking","Travel"];

export function getVideoBySlug(slug: string) { return VIDEOS.find(v => v.slug === slug); }
export function getRelatedVideos(id: number, limit = 12) { return VIDEOS.filter(v => v.id !== id).slice(0, limit); }
export function searchVideos(q: string): Video[] {
  const query = q.toLowerCase().trim();
  if (!query) return [];
  return VIDEOS.filter(v =>
    v.title.toLowerCase().includes(query) ||
    v.channel.toLowerCase().includes(query) ||
    v.category.toLowerCase().includes(query) ||
    v.description.toLowerCase().includes(query) ||
    v.tags.some(t => t.toLowerCase().includes(query))
  );
}