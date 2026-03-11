import { AboutSection } from "@/components/about-section";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { PhotoGallery } from "@/components/photo-gallery";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f5f0_0%,#f5efe7_45%,#fcfbf8_100%)] text-stone-900 transition-colors dark:bg-[linear-gradient(180deg,#0c0a09_0%,#111827_45%,#09090b_100%)] dark:text-stone-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <header className="flex flex-col gap-4 rounded-full border border-white/70 bg-white/70 px-6 py-4 shadow-sm backdrop-blur transition-colors md:flex-row md:items-center md:justify-between dark:border-stone-700/80 dark:bg-stone-900/75">
          <div>
            <p className="text-lg font-semibold tracking-wide text-stone-950 dark:text-white">
              Aria Noor Studio
            </p>
            <p className="text-sm text-stone-600 dark:text-stone-300">
              Personal portfolio and showcase for a modern photographer.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <nav className="flex flex-wrap gap-5 text-sm font-medium text-stone-700 dark:text-stone-300">
              <a href="#about" className="transition hover:text-stone-950 dark:hover:text-white">
                About
              </a>
              <a href="#gallery" className="transition hover:text-stone-950 dark:hover:text-white">
                Gallery
              </a>
              <a href="#contact" className="transition hover:text-stone-950 dark:hover:text-white">
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <Hero />
        <AboutSection />
        <PhotoGallery />
        <ContactForm />
      </div>
    </main>
  );
}
