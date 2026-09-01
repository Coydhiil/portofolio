import { createClient } from "@/lib/supabase/server";
import ProjectCarousel from "../layout/ProjectCarousel";

export default async function Projects() {
  const supabase = createClient();

  const { data: projects, error } = await supabase
    .from("projects")
    .select("id, name, description, img_url, tags, github_url, demo_url")
    .limit(7);

  if (error) {
    console.error("Failed to load:", error.message);
  }

  return (
    <section
      id="projects"
      className="relative font-paragraph min-h-screen py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10 space-y-16 lg:space-y-20">
        <div className="flex flex-col gap-3 mb-10">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-600 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
              PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-header text-white tracking-tight leading-tight max-w-4xl">
              The Work That I Have Built.
            </h2>
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-950/40 border border-red-800/50 px-4 py-2 rounded-lg inline-block">
              Failed to load Supabase data: {error.message}
            </p>
          )}
        </div>

        <ProjectCarousel projects={projects || []} />
      </div>
    </section>
  );
}
