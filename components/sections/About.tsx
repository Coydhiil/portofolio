import { GraduationCap, Book } from "lucide-react";

export default function About() {
  const quickInfo = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.S. in Computer Science @ UDINUS",
      subText: "Universitas Dian Nusantoro",
    },
    {
      icon: Book,
      label: "Currently Learning",
      value: "React • Laravel • Python & AI",
      subText: "Web Dev, Data Analytics, & GenAI",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Building fast, responsive web applications and backend systems with clean architecture and modern UI design.",
      tags: ["React", "Next.js", "Tailwind CSS", "Laravel"],
    },
    {
      title: "Data Analytics",
      description:
        "Analyzing raw datasets, processing data, and building interactive data applications and dashboards.",
      tags: ["Python", "Pandas", "NumPy", "Streamlit"],
    },
    {
      title: "AI & Integration",
      description:
        "Exploring Generative AI capabilities and integrating intelligent API features into modern web & data projects.",
      tags: ["GenAI API", "Python", "Streamlit", "API Integration"],
    },
  ];

  return (
    <section
      id="about"
      className="relative font-paragraph min-h-screen py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10 space-y-16 lg:space-y-20">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-600 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-header text-white tracking-tight leading-tight max-w-4xl">
            Passionate About Software Development, Data, and Technology.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="text-white/75 lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed flex flex-col justify-center">
            <p>
              Hi! I’m{" "}
              <strong className="text-white font-semibold">
                Fadhiil Fiannata N
              </strong>
              , a Computer Science student at
              <span className="text-cyan-400 font-medium">
                {" "}
                Universitas Dian Nusantoro (UDINUS)
              </span>{" "}
              passionate about turning complex, real-world problems into clean,
              efficient, and intelligent digital applications.
            </p>
            <p>
              My journey in technology is driven by curiosity, computational
              logic, and software design principles. Rather than limiting myself
              to a single discipline, I actively explore the intersection of{" "}
              <span className="text-white font-medium">Web Development</span>,{" "}
              <span className="text-white font-medium">Data Analytics</span>,
              and{" "}
              <span className="text-white font-medium">Machine Learning</span>.
            </p>
          </div>

          <div className="lg:col-span-5 flex">
            <div className="relative w-full p-6 sm:p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 shadow-2xl space-y-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white font-header tracking-wide flex items-center gap-2 border-b border-neutral-800 pb-4">
                  Quick Profile
                </h3>

                <div className="space-y-5">
                  {quickInfo.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                          {item.label}
                        </p>
                        <p className="text-sm sm:text-base text-neutral-100 font-semibold">
                          {item.value}
                        </p>
                        <p className="text-xs text-neutral-400">
                          {item.subText}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 pt-4">
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-header text-white">
              What I Do
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/90 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white font-header group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-white/75 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md bg-neutral-800/80 border border-neutral-700/50 text-neutral-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
