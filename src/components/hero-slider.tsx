"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80&fit=crop",
    alt: "Portrait photography – close-up of a woman with soft light",
    category: "Portraits",
    title: "Warm light, honest moments.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&fit=crop",
    alt: "Wedding photography – couple at golden hour",
    category: "Weddings",
    title: "Love stories told in frames.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&fit=crop",
    alt: "Travel photography – mountain landscape at sunrise",
    category: "Travel",
    title: "Places that take your breath away.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&fit=crop",
    alt: "Street photography – city skyline at dusk",
    category: "Editorial",
    title: "Cities, stories, atmosphere.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&fit=crop",
    alt: "Travel photography – winding road through forest",
    category: "Documentary",
    title: "Journeys worth remembering.",
  },
];

const AUTOPLAY_INTERVAL = 4500;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Photography showcase slider"
    >
      {/* Slides */}
      <div className="relative h-[560px] w-full sm:h-[640px] lg:h-[720px]">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

            {/* Slide caption – top right */}
            <div className="absolute right-16 top-5 z-10 rounded-full bg-black/30 px-4 py-1.5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                {slide.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute right-4 top-4 z-20 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
