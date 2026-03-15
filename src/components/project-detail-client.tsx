"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Lightbox } from "@/components/lightbox";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export function ProjectDetailClient({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="space-y-10">
      {/* Back navigation */}
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 transition-colors hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300"
        aria-label="Back to gallery"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Gallery
      </Link>

      {/* Project header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            {project.category}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            {project.location}
          </span>
          <span className="text-xs text-stone-400 dark:text-stone-500">
            {project.images.length} photos
          </span>
        </div>
        <h1 className="text-4xl font-semibold text-stone-950 dark:text-white">
          {project.title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-300">
          {project.description}
        </p>
      </div>

      {/* Image grid */}
      <div
        className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        role="list"
        aria-label={`Photos from ${project.title}`}
      >
        {project.images.map((image, index) => (
          <div
            key={image.id}
            role="listitem"
            className="mb-5 break-inside-avoid"
          >
            <button
              onClick={() => setLightboxIndex(index)}
              className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={`Open ${image.alt} in full screen`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-stone-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                    />
                  </svg>
                </div>
              </div>
              {/* Caption */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-xs text-white/90">{image.caption}</p>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
