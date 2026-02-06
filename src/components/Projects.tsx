import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Heart,
  Brain,
  Calendar,
  Leaf,
  DollarSign,
  CheckSquare,
  Sparkles,
  Activity,
} from "lucide-react";

/* ---------- SLUG GENERATOR ---------- */
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

/* ---------- COMPONENT ---------- */
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Healinton",
      category: "healthcare",
      description: "Robust health application for modern healthcare",
      image: "healinton-logo.png", 
      icon: <Activity className="h-8 w-8" />,
      color: "from-emerald-400 to-green-600",
      github: "https://github.com/Wisdomkara/Healinton",
      demo: "https://healinton.vercel.app/",
    },
    {
      id: 2,
      title: "Amaechi Homes",
      category: "Real Estate",
      description: " A Wordpress real estate web-app that serves as an e-commerce web app that allows purchase and enquiries",
      image: "homes.jpg",
      icon: <Heart className="h-8 w-8" />,
      color: "from-red-400 to-pink-600",
      github: "#",
      demo: "https://amaechihomes.com/",
    },
    {
      id: 3,
      title: "BokkuMart",
      category: "WebApp",
      description: "Webapp with location tracking system for customers using supabase, expressjs, typescript and react",
      image: "bo.jpg ",
      icon: <Brain className="h-8 w-8" />,
      color: "from-cyan-400 to-blue-600",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Inspiring",
      category: "motivation",
      description: "Daily inspirational content platform",
      image: "/projects/inspiring.png",
      icon: <Sparkles className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Grace Chapel",
      category: "community",
      description: "Church website and online community",
      image: "/projects/grace-chapel.png",
      icon: <Calendar className="h-8 w-8" />,
      color: "from-blue-400 to-indigo-600",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "EcoTracker",
      category: "environment",
      description: "Carbon footprint tracking platform",
      image: "/projects/ecotracker.png",
      icon: <Leaf className="h-8 w-8" />,
      color: "from-green-400 to-teal-600",
      github: "#",
      demo: "#",
    },
    {
      id: 7,
      title: "FinanceFlow",
      category: "finance",
      description: "Personal finance management tool",
      image: "/projects/financeflow.png",
      icon: <DollarSign className="h-8 w-8" />,
      color: "from-emerald-400 to-green-600",
      github: "#",
      demo: "#",
    },
    {
      id: 8,
      title: "TaskMaster Pro",
      category: "productivity",
      description: "Task and project management platform",
      image: "/projects/taskmaster.png",
      icon: <CheckSquare className="h-8 w-8" />,
      color: "from-purple-400 to-violet-600",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700 hover:-translate-y-2 transition-all"
          >
            {/* IMAGE AREA */}
            <div className="relative h-48 bg-slate-900 flex items-center justify-center">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
              />

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />

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
                <a
                  href={project.github}
                  className="p-2 bg-black/60 rounded-lg text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={`/projects/${slugify(project.title)}`}
                  className="p-2 bg-black/60 rounded-lg text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm mt-2">
                {project.description}
              </p>
              <a
                href={project.demo}
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
