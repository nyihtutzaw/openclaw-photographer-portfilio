import { AboutSection } from "@/components/about-section";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { PhotoGallery } from "@/components/photo-gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f5f0_0%,#f5efe7_45%,#fcfbf8_100%)] text-stone-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <header className="flex flex-col gap-4 rounded-full border border-white/70 bg-white/70 px-6 py-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-wide text-stone-950">
              Aria Noor Studio
            </p>
            <p className="text-sm text-stone-600">
              Personal portfolio and showcase for a modern photographer.
            </p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm font-medium text-stone-700">
            <a href="#about" className="transition hover:text-stone-950">
              About
            </a>
            <a href="#gallery" className="transition hover:text-stone-950">
              Gallery
            </a>
            <a href="#contact" className="transition hover:text-stone-950">
              Contact
            </a>
          </nav>
        </header>

        <Hero />
        <AboutSection />
        <PhotoGallery />
        <ContactForm />
      </div>
    </main>
  );
}
