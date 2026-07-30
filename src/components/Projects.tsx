import React from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Building2,
  ShoppingBag,
  Sparkles,
  Activity,
  Zap,
  GraduationCap,
} from "lucide-react";

/* ---------- COMPONENT ---------- */
const Projects = () => {
  const projects = [
    {
      id: 7,
      title: "Crea8",
      category: "Creative Agency",
      description: "Creative agency portfolio website featuring a modern design and comprehensive motion system.",
      image: "/crea8-hero.png",
      icon: <Sparkles className="h-8 w-8" />,
      color: "from-blue-400 to-purple-600",
      github: "https://github.com/Wisdomkara/Creative",
      demo: "https://crea8-ten.vercel.app/",
    },
    {
      id: 1,
      title: "Healinton",
      category: "healthcare",
      description: "Healthcare platform built for modern patient and service workflows.",
      image: "/healinton-logo.png",
      icon: <Activity className="h-8 w-8" />,
      color: "from-emerald-400 to-green-600",
      github: "https://github.com/Wisdomkara/Healinton",
      demo: "https://healinton.com/",
    },
    {
      id: 2,
      title: "Exploits Energy",
      category: "Energy",
      description: "Corporate energy website presenting services and company information.",
      image: "/exploit-logo.png",
      icon: <Zap className="h-8 w-8" />,
      color: "from-amber-400 to-orange-600",
      github: "",
      demo: "https://exploitsenergy.com/",
    },
    {
      id: 3,
      title: "Kanel Innovations",
      category: "Technology",
      description: "Service and booking platform for a technology-focused firm.",
      image: "/kanel-innovations-logo.jpg",
      icon: <Sparkles className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500",
      github: "",
      demo: "https://kanelinnovations.vercel.app/",
    },
    {
      id: 4,
      title: "Amaechi Homes",
      category: "Real Estate",
      description:
        "WordPress real estate web app for property discovery, purchases, and enquiries.",
      image: "/homes.jpg",
      icon: <Building2 className="h-8 w-8" />,
      color: "from-red-400 to-pink-600",
      github: "",
      demo: "https://amaechihomes.com/",
    },
    {
      id: 5,
      title: "BokkuMart",
      category: "WebApp",
      description:
        "Web app with customer location tracking using Supabase, Express, TypeScript, and React.",
      image: "/bo.jpg",
      icon: <ShoppingBag className="h-8 w-8" />,
      color: "from-cyan-400 to-blue-600",
      github: "https://github.com/Wisdomkara/bokku",
      demo: "https://bokku.vercel.app/",
    },
    {
      id: 6,
      title: "Insightful Tutorial Academy",
      category: "Education",
      description:
        "Tutorial academy website for Insightful Tech Trybe's learning programs.",
      image: "/insightful-tech-trybe-logo.jpeg",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-green-400 to-emerald-600",
      github: "",
      demo: "https://insightful-tutorial-academy.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white/80 dark:bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:-translate-y-2 transition-all"
          >
            {/* IMAGE AREA */}
            <div className="relative h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 dark:opacity-20`}
              />

              {/* IMAGE */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full z-10 ${
                    project.image.includes("logo")
                      ? "object-contain bg-white p-6"
                      : "object-cover"
                  }`}
                />
              )}

              {/* ICON FALLBACK */}
              <div className="absolute inset-0 flex items-center justify-center">
                {!project.image && (
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white`}
                  >
                    {project.icon}
                  </div>
                )}
              </div>

              {/* LINKS */}
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2 bg-white/70 text-slate-800 rounded-lg border border-slate-200 dark:border-transparent dark:bg-black/60 dark:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="p-2 bg-white/70 text-slate-800 rounded-lg border border-slate-200 dark:border-transparent dark:bg-black/60 dark:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                {project.description}
              </p>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg"
              >
                <Eye className="h-4 w-4" /> View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
