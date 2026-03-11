import { galleryItems } from "@/lib/portfolio-data";

export function PhotoGallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Photo Showcase
        </p>
        <h2 id="gallery-heading" className="text-3xl font-semibold text-stone-950">
          Selected frames from recent stories.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-stone-600">
          A curated mix of portrait sessions, travel work, and documentary-style
          images designed to feel intimate, cinematic, and timeless.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm"
          >
            <div
              className={`flex h-72 items-end bg-gradient-to-br ${item.accent} p-5`}
              aria-label={`${item.title} preview`}
            >
              <div className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700 backdrop-blur-sm">
                {item.category}
              </div>
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                {item.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
