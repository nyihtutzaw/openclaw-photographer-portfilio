import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ProjectDetailClient } from "@/components/project-detail-client";
import { projects } from "@/lib/portfolio-data";

type Props = {
  params: Promise<{ projectId: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ projectId: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  if (!project) return {};
  return {
    title: `${project.title} | Aria Noor Studio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f5f0_0%,#f5efe7_45%,#fcfbf8_100%)] text-stone-900 transition-colors dark:bg-[linear-gradient(180deg,#0c0a09_0%,#111827_45%,#09090b_100%)] dark:text-stone-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <Navbar />
        <ProjectDetailClient project={project} />
      </div>
    </main>
  );
}
