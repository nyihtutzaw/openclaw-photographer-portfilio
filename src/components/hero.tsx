import { photographerProfile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
          Photographer Portfolio
        </p>
        <div className="space-y-4">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
            {photographerProfile.name}
          </h1>
          <p className="text-xl text-stone-700 sm:text-2xl">
            {photographerProfile.title}
          </p>
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            {photographerProfile.tagline}
          </p>
          <p className="max-w-2xl text-base leading-7 text-stone-500">
            {photographerProfile.intro}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#gallery"
            className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
          >
            Book a Session
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_30px_80px_rgba(41,37,36,0.12)] backdrop-blur">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.22),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.22),_transparent_35%)]" />
        <div className="relative flex min-h-[420px] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 p-8 text-white">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-300">
              Featured Work
            </p>
            <h2 className="max-w-sm text-3xl font-semibold leading-tight">
              Warm portraits, cinematic travel frames, and honest stories.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-stone-300">Best for</p>
              <p className="mt-2 text-lg font-medium">Portraits & editorials</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-stone-300">Based in</p>
              <p className="mt-2 text-lg font-medium">Thailand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
