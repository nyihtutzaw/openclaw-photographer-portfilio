"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolio-data";

export function ProjectGallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
          Photo Showcase
        </p>
        <h2
          id="gallery-heading"
          className="text-3xl font-semibold text-stone-950 dark:text-white"
        >
          Stories told in frames.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-300">
          Each project is a chapter — a place, a moment, a feeling captured
          with intention. Browse by session and dive into the full story.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/gallery/${project.id}`}
            className="group block overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-stone-700 dark:bg-stone-900"
            aria-label={`View ${project.title} — ${project.images.length} photos`}
          >
            {/* Cover image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Category badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Image count badge */}
              <div className="absolute bottom-4 right-4">
                <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.images.length} photos
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="space-y-1 p-5">
              <h3 className="text-lg font-semibold text-stone-950 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-300 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                {project.location}
              </p>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
