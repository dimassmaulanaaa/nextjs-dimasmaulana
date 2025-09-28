import { ProjectNav } from "@/components/navigations/ProjectNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="projects" className="flex flex-col" aria-labelledby="page-title">
      <div className="min-h-[50vh] max-w-7xl flex flex-col md:items-center justify-center gap-5 mt-[54px] mx-auto py-14 px-3 text-start">
        <h1 id="page-title" className="sr-only">
          My Projects
        </h1>

        <p className="flex flex-col font-medium text-6xl md:text-7xl">
          Inspired by my work? Let&apos;s create something great together.
        </p>
      </div>

      <ProjectNav />

      {children}
    </main>
  );
}
