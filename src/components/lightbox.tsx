"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";
import type { ProjectImage } from "@/types/project";

type LightboxProps = {
  images: ProjectImage[];
  initialIndex: number;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVisible, setIsVisible] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Mount animation
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setSlideDir(dir);
      setTimeout(() => {
        setCurrentIndex(index);
        setSlideDir(null);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const goPrev = useCallback(() => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    goTo(prev, "right");
  }, [currentIndex, images.length, goTo]);

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % images.length;
    goTo(next, "left");
  }, [currentIndex, images.length, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose, goPrev, goNext]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  const current = images[currentIndex];

  const slideClass =
    slideDir === "left"
      ? "translate-x-[-60px] opacity-0"
      : slideDir === "right"
      ? "translate-x-[60px] opacity-0"
      : "translate-x-0 opacity-100";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${current.alt}`}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        onClick={handleClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:left-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className={`relative z-10 mx-auto flex max-h-[85vh] max-w-5xl flex-col items-center px-16 transition-all duration-300 ${slideClass}`}
      >
        <div
          className={`relative w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 ${
            isVisible ? "scale-100" : "scale-95"
          }`}
          style={{ maxHeight: "75vh", aspectRatio: "auto" }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={1200}
            height={800}
            className="max-h-[75vh] w-full object-contain"
            priority
          />
        </div>

        {/* Caption */}
        {current.caption && (
          <p className="mt-4 text-center text-sm text-white/70">{current.caption}</p>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentIndex ? "left" : "right")}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
