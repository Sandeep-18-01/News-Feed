// ============================================================
// DATA SOURCE 1: External links (fetched from external news APIs)
// When you get a real API key, replace this with actual API calls
// ============================================================
export const externalLinks = [
  {
    id: "ext-1",
    type: "external",
    category: "sports",
    subcategory: "cricket",
    title: "India vs Australia: Epic Test Match Ends in Draw",
    summary: "A thrilling five-day test match concluded with both teams level after extraordinary final-day play.",
    source: "ESPN Cricinfo",
    url: "https://www.espncricinfo.com",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80",
    publishedAt: "2025-04-19T08:00:00Z",
    tags: ["cricket", "india", "australia"]
  },
  {
    id: "ext-2",
    type: "external",
    category: "sports",
    subcategory: "football",
    title: "Champions League Semi-Final Draw: Real Madrid vs Bayern",
    summary: "The draw has set up a blockbuster semifinal clash between two European giants.",
    source: "BBC Sport",
    url: "https://www.bbc.com/sport",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    publishedAt: "2025-04-18T14:00:00Z",
    tags: ["football", "champions-league", "real-madrid"]
  },
  {
    id: "ext-3",
    type: "external",
    category: "politics",
    subcategory: "india",
    title: "Parliament Budget Session: Key Bills Passed",
    summary: "The winter session of Parliament concluded with several landmark bills receiving approval.",
    source: "The Hindu",
    url: "https://www.thehindu.com",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80",
    publishedAt: "2025-04-17T10:00:00Z",
    tags: ["parliament", "india", "budget"]
  },
  {
    id: "ext-4",
    type: "external",
    category: "politics",
    subcategory: "world",
    title: "G20 Summit: Climate Commitments Renewed",
    summary: "World leaders gathered to reaffirm their commitment to reducing carbon emissions by 2030.",
    source: "Reuters",
    url: "https://www.reuters.com",
    image: "https://images.unsplash.com/photo-1569025591790-1b99bac5c3c6?w=600&q=80",
    publishedAt: "2025-04-16T09:00:00Z",
    tags: ["g20", "climate", "world"]
  },
  {
    id: "ext-5",
    type: "external",
    category: "home",
    subcategory: "tech",
    title: "AI Chip Wars: NVIDIA vs AMD Battle Intensifies",
    summary: "The competition in AI hardware is heating up as both companies release next-gen chips.",
    source: "TechCrunch",
    url: "https://techcrunch.com",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    publishedAt: "2025-04-19T06:00:00Z",
    tags: ["ai", "nvidia", "tech"]
  },
  {
    id: "ext-6",
    type: "external",
    category: "home",
    subcategory: "business",
    title: "Stock Markets Hit Record Highs Amid Economic Optimism",
    summary: "Global equities surged after strong employment data boosted investor confidence.",
    source: "Financial Times",
    url: "https://www.ft.com",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    publishedAt: "2025-04-18T11:00:00Z",
    tags: ["stocks", "markets", "economy"]
  }
];

// ============================================================
// DATA SOURCE 2: Admin-written content (reviews & editorials)
// In production: fetched from your CMS / database via REST API
// ============================================================
export const adminContent = [
  {
    id: "adm-1",
    type: "admin",
    category: "movies",
    subcategory: "review",
    title: "Kalki 2898 AD – A Visual Spectacle Worth Every Rupee",
    summary: "Prabhas delivers a career-best performance in this mythological sci-fi epic that redefines Indian cinema.",
    body: `Nag Ashwin's magnum opus Kalki 2898 AD is nothing short of a cinematic revolution. Set in a dystopian future intertwined with Vedic mythology, the film achieves what no Indian production has dared before.

The film's visual language is breathtaking — every frame is a painting. The production design team has outdone themselves creating a world that feels both futuristic and deeply rooted in Indian culture. The VFX, while not always perfect, carries the story forward with conviction.

Prabhas, often criticized for his limited range, finds his finest role here. His portrayal of Bhairava — morally grey, funny, and ultimately heroic — is layered and memorable. Deepika Padukone as Sumathi brings warmth and gravitas to a pivotal role.

**Verdict: 4.5/5 — A must-watch IMAX experience.**`,
    author: "Ravi Sharma",
    authorRole: "Senior Film Critic",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
    publishedAt: "2025-04-19T07:00:00Z",
    rating: 4.5,
    tags: ["kalki", "prabhas", "telugu", "review"]
  },
  {
    id: "adm-2",
    type: "admin",
    category: "movies",
    subcategory: "review",
    title: "Stree 2 – Bollywood Horror Comedy at Its Absolute Best",
    summary: "Rajkummar Rao and Shraddha Kapoor return in a sequel that surpasses the original in every way.",
    body: `Stree 2 arrives with enormous expectations and somehow manages to exceed them all. Amar Kaushik's direction is sharper, the jokes land harder, and the horror is genuinely unsettling this time around.

The chemistry between the ensemble cast is the film's greatest strength. Every actor knows exactly what kind of film they're in and commits fully. The writing is tight — no scene overstays its welcome.

The film's commentary on gender dynamics, wrapped in crowd-pleasing entertainment, is what elevates it above typical horror-comedy fare. The climax is spectacular and sets up the universe brilliantly for future installments.

**Verdict: 5/5 — The year's best commercial entertainer.**`,
    author: "Priya Nair",
    authorRole: "Entertainment Editor",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    publishedAt: "2025-04-17T08:00:00Z",
    rating: 5,
    tags: ["stree2", "bollywood", "horror", "review"]
  },
  {
    id: "adm-3",
    type: "admin",
    category: "movies",
    subcategory: "ott",
    title: "What to Watch This Weekend on OTT",
    summary: "From Netflix originals to Amazon Prime exclusives, our editors pick the best content for your weekend binge.",
    body: `This weekend is packed with incredible content across streaming platforms. Here's our curated list:

**Netflix:** The new season of Sacred Games spiritual successor drops all episodes at once. Binge-worthy.

**Amazon Prime:** A heartwarming coming-of-age story set in rural Rajasthan that's already generating Oscar buzz.

**Disney+ Hotstar:** Live IPL matches plus a brand new docuseries on the 1983 World Cup victory.

**Apple TV+:** A psychological thriller starring a beloved Indian actor making her international debut — stunning performance.`,
    author: "Arjun Mehta",
    authorRole: "OTT Correspondent",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80",
    publishedAt: "2025-04-18T12:00:00Z",
    tags: ["ott", "netflix", "weekend-watch", "streaming"]
  },
  {
    id: "adm-4",
    type: "admin",
    category: "home",
    subcategory: "editorial",
    title: "Why India's Startup Ecosystem is the World's Most Exciting Right Now",
    summary: "From Hyderabad to Bengaluru, a new generation of founders is solving uniquely Indian problems at global scale.",
    body: `India's startup ecosystem crossed a remarkable milestone this year — over 100 unicorns and counting. But the real story isn't the valuations; it's the nature of the problems being solved.

Unlike Silicon Valley's obsession with luxury problems, Indian startups are tackling genuine systemic challenges: healthcare access, agricultural supply chains, vernacular education, and financial inclusion for the unbanked.

The talent pipeline has never been stronger. IITs, NITs, and now a growing number of tier-2 colleges are producing founders who understand both technology and the ground reality of Bharat.`,
    author: "Sneha Reddy",
    authorRole: "Business Editor",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    publishedAt: "2025-04-16T13:00:00Z",
    tags: ["startups", "india", "tech", "entrepreneurship"]
  }
];

// ============================================================
// DATA SOURCE 3: Database pipeline content
// In production: fetched from your PostgreSQL / Supabase / Firebase
// ============================================================
export const dbContent = [
  {
    id: "db-1",
    type: "db",
    category: "sports",
    subcategory: "ipl",
    title: "IPL 2025: MI vs CSK Match Report – Rohit Sharma's 90 Not Out",
    summary: "Mumbai Indians clinch a dramatic last-over victory against Chennai Super Kings at Wankhede.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    publishedAt: "2025-04-19T09:00:00Z",
    tags: ["ipl", "mi", "csk", "cricket"]
  },
  {
    id: "db-2",
    type: "db",
    category: "movies",
    subcategory: "upcoming",
    title: "Upcoming Releases: May 2025 – The Most Anticipated Films",
    summary: "From Pan-India blockbusters to niche art-house gems, May 2025's release calendar is stacked.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    publishedAt: "2025-04-15T10:00:00Z",
    tags: ["upcoming", "movies", "may2025"]
  },
  {
    id: "db-3",
    type: "db",
    category: "politics",
    subcategory: "state",
    title: "Telangana Budget 2025: ₹3 Lakh Crore Allocation Announced",
    summary: "Chief Minister Revanth Reddy presented the state budget with focus on infrastructure and welfare schemes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    publishedAt: "2025-04-14T11:00:00Z",
    tags: ["telangana", "budget", "politics"]
  },
  {
    id: "db-4",
    type: "db",
    category: "home",
    subcategory: "weather",
    title: "Monsoon 2025 Forecast: IMD Predicts Above-Normal Rainfall",
    summary: "The Indian Meteorological Department has released its annual monsoon forecast with promising news for farmers.",
    image: "https://images.unsplash.com/photo-1501691223387-dd0500403074?w=600&q=80",
    publishedAt: "2025-04-13T07:00:00Z",
    tags: ["monsoon", "weather", "india", "imd"]
  }
];

// ============================================================
// COMBINED: All articles merged and sorted by date
// ============================================================
export const getAllArticles = () => {
  return [...externalLinks, ...adminContent, ...dbContent]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

export const getArticlesByCategory = (category) => {
  if (category === "home") return getAllArticles();
  return getAllArticles().filter(a => a.category === category);
};

export const getArticleById = (id) => {
  return getAllArticles().find(a => a.id === id);
};

// ============================================================
// COMMENTS STORE (in-memory; in production → your DB)
// ============================================================
let commentsStore = {
  "adm-1": [
    { id: "c1", articleId: "adm-1", user: "Wandering_Panda42", text: "Absolutely loved this film! The VFX were mind-blowing.", createdAt: "2025-04-19T09:00:00Z" },
    { id: "c2", articleId: "adm-1", user: "CinemaScope_77", text: "Prabhas was incredible. Best role of his career for sure.", createdAt: "2025-04-19T10:00:00Z" }
  ],
  "adm-2": [
    { id: "c3", articleId: "adm-2", user: "BollywoodBuff_99", text: "Stree 2 is pure magic. Watched it 3 times already!", createdAt: "2025-04-18T08:30:00Z" }
  ]
};

export const getComments = (articleId) => commentsStore[articleId] || [];

export const addComment = (articleId, text) => {
  const animals = ["Panda", "Fox", "Tiger", "Eagle", "Wolf", "Leopard", "Dolphin", "Hawk"];
  const adjectives = ["Wandering", "Silent", "Clever", "Bold", "Swift", "Mighty", "Calm", "Curious"];
  const randomName = `${adjectives[Math.floor(Math.random() * adjectives.length)]}_${animals[Math.floor(Math.random() * animals.length)]}${Math.floor(Math.random() * 99) + 1}`;
  
  const comment = {
    id: `c${Date.now()}`,
    articleId,
    user: randomName,
    text,
    createdAt: new Date().toISOString()
  };
  
  if (!commentsStore[articleId]) commentsStore[articleId] = [];
  commentsStore[articleId].unshift(comment);
  return comment;
};

// ============================================================
// CATEGORIES CONFIG – add new pages here easily
// ============================================================
export const CATEGORIES = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "sports", label: "Sports", icon: "⚽", subcategories: ["cricket", "football", "ipl", "tennis"] },
  { id: "politics", label: "Politics", icon: "🏛️", subcategories: ["india", "world", "state"] },
  { id: "movies", label: "Movies & Reviews", icon: "🎬", subcategories: ["review", "upcoming", "ott"], isPrimary: true },
];
