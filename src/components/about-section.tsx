import { photographerProfile } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm transition-colors lg:grid-cols-[0.85fr_1.15fr] dark:border-stone-700 dark:bg-stone-900/80"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
          About Me
        </p>
        <h2 id="about-heading" className="text-3xl font-semibold text-stone-950 dark:text-white">
          A calm eye for people, places, and light.
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {photographerProfile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-4 transition-colors dark:border-stone-700 dark:bg-stone-950/70"
            >
              <p className="text-2xl font-semibold text-stone-950 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-sm leading-6 text-stone-600 dark:text-stone-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 text-base leading-8 text-stone-600 dark:text-stone-300">
        {photographerProfile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          I work with couples, brands, and individuals who want imagery that
          feels elegant, grounded, and full of atmosphere.
        </p>
      </div>
    </section>
  );
}
