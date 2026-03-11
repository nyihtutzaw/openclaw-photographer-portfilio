export type GalleryItem = {
  id: number;
  title: string;
  location: string;
  category: string;
  accent: string;
};

export const photographerProfile = {
  name: "Aria Noor",
  title: "Portrait & Travel Photographer",
  tagline:
    "I capture quiet light, honest emotion, and the small details that make a story feel alive.",
  intro:
    "Available for portraits, editorial work, intimate weddings, and destination sessions across Southeast Asia.",
  about: [
    "I’m a photographer drawn to natural light, unforced moments, and images that feel cinematic without losing their warmth.",
    "My work blends portraiture, travel storytelling, and documentary-inspired details to create galleries that feel personal and timeless.",
  ],
  stats: [
    { label: "Years behind the camera", value: "8+" },
    { label: "Countries photographed", value: "14" },
    { label: "Featured sessions", value: "120" },
  ],
  contact: {
    email: "hello@arianoor.studio",
    phone: "+66 90 000 0000",
    instagram: "@arianoor.studio",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Golden Hour Portraits",
    location: "Bangkok, Thailand",
    category: "Portrait",
    accent: "from-amber-200 via-orange-300 to-rose-400",
  },
  {
    id: 2,
    title: "Cliffside Elopement",
    location: "Krabi, Thailand",
    category: "Wedding",
    accent: "from-sky-200 via-cyan-300 to-blue-500",
  },
  {
    id: 3,
    title: "Morning Market Stories",
    location: "Chiang Mai, Thailand",
    category: "Documentary",
    accent: "from-lime-200 via-emerald-300 to-green-500",
  },
  {
    id: 4,
    title: "Deserted Streets After Rain",
    location: "Tokyo, Japan",
    category: "Travel",
    accent: "from-slate-200 via-zinc-300 to-slate-500",
  },
  {
    id: 5,
    title: "Quiet Studio Session",
    location: "Yangon, Myanmar",
    category: "Editorial",
    accent: "from-fuchsia-200 via-pink-300 to-rose-500",
  },
  {
    id: 6,
    title: "The Last Light on the Coast",
    location: "Phuket, Thailand",
    category: "Lifestyle",
    accent: "from-violet-200 via-purple-300 to-indigo-500",
  },
];
