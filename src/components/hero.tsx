import Link from "next/link";
import { photographerProfile } from "@/lib/portfolio-data";
import { HeroSlider } from "@/components/hero-slider";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(41,37,36,0.18)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      {/* Full-width slider */}
      <HeroSlider />

      {/* Text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Photographer Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {photographerProfile.name}
          </h1>
          <p className="text-lg text-white/80 sm:text-xl">
            {photographerProfile.title}
          </p>
          <p className="max-w-xl text-base leading-7 text-white/70">
            {photographerProfile.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/gallery"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
