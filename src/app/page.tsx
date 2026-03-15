import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f5f0_0%,#f5efe7_45%,#fcfbf8_100%)] text-stone-900 transition-colors dark:bg-[linear-gradient(180deg,#0c0a09_0%,#111827_45%,#09090b_100%)] dark:text-stone-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <Navbar />
        <Hero />
        <AboutSection />
      </div>
      <TeamSection />
    </main>
  );
}
