import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "pattaya",
    title: "Pattaya Beach Sessions",
    description:
      "Sun-soaked portraits along the Gulf of Thailand coast — golden hour light, open water, and effortless energy.",
    location: "Pattaya, Thailand",
    category: "Lifestyle",
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&fit=crop",
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fit=crop",
        alt: "Golden hour beach portrait",
        caption: "Golden hour on the shoreline",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80&fit=crop",
        alt: "Couple walking on beach at sunset",
        caption: "Walking into the horizon",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=1200&q=80&fit=crop",
        alt: "Beach portrait with ocean backdrop",
        caption: "Soft waves, softer light",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&fit=crop",
        alt: "Silhouette at sunset on beach",
        caption: "Last light of the day",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=80&fit=crop",
        alt: "Tropical beach scenery",
        caption: "Where the land meets the sea",
      },
    ],
  },
  {
    id: "kalaw-pre-wedding",
    title: "Kalaw Pre-Wedding",
    description:
      "A misty mountain love story in the highlands of Myanmar — pine forests, morning fog, and two people completely at ease with each other.",
    location: "Kalaw, Myanmar",
    category: "Pre-Wedding",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop",
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&fit=crop",
        alt: "Couple in misty mountain forest",
        caption: "Lost in the mist together",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80&fit=crop",
        alt: "Pre-wedding portrait in nature",
        caption: "Pine trees and promises",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80&fit=crop",
        alt: "Romantic couple portrait outdoors",
        caption: "A quiet moment between them",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80&fit=crop",
        alt: "Couple walking through forest path",
        caption: "Every path leads somewhere beautiful",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80&fit=crop",
        alt: "Romantic sunset portrait",
        caption: "The mountain holds their story",
      },
    ],
  },
  {
    id: "ko-zin-graduation",
    title: "Ko Zin Graduation",
    description:
      "A proud milestone captured with intention — the joy, relief, and quiet pride of a journey completed.",
    location: "Yangon, Myanmar",
    category: "Portrait",
    coverImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80&fit=crop",
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop",
        alt: "Graduation portrait with cap and gown",
        caption: "The day it all came together",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=1200&q=80&fit=crop",
        alt: "Graduate smiling outdoors",
        caption: "Pure joy, no filter needed",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&fit=crop",
        alt: "Graduation ceremony moment",
        caption: "A moment worth framing",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&fit=crop",
        alt: "Graduation portrait outdoors",
        caption: "Soft light on a big day",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1200&q=80&fit=crop",
        alt: "Graduate holding diploma",
        caption: "Years of effort, one perfect frame",
      },
    ],
  },
];

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
