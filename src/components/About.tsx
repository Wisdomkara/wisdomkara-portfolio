import React from "react";
import { Code2, Palette, Zap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Clean Code",
      description: `I craft scalable web solutions and drive digital growth by combining technical development skills with strategic marketing expertise. This positions you as both a builder of modern web experiences and a strategist who understands how to make them succeed in the digital marketplace.`,
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Modern Design",
      description: `Designing intuitive, visually compelling interfaces with a strong focus on precision and exceptional user experience.This emphasizes both your creative eye and technical expertise while keeping it concise and professional.`,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and smooth user interactions.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "User-Centered",
      description:
        "Building solutions that solve real problems and enhance user satisfaction.",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Developer. Marketer. Strategist.
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I create digital experiences that are visually engaging and
                function seamlessly. With expertise in React, JavaScript, and
                Tailwind CSS, I build responsive applications that balance
                performance and user experience.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Alongside front‑end development, I apply SEO and digital
                marketing strategies to maximize visibility and growth. I
                specialize in single‑page applications, WordPress, and scalable
                solutions designed with accessibility and modern design
                principles.
              </p>
              <p className="text-slate-300 leading-relaxed">
                As a continuous learner with a BSc in Computer Science and
                certifications from{" "}
                <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent font-bold">
                  {" "}
                  Institute of Management Finance and Technology
                </span>{" "}
                and Udemy, I'm always exploring new technologies and finding
                innovative ways to solve complex problems through clean,
                efficient code. I excel in remote work environments and thrive
                in collaborative teams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:bg-slate-700/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-4">{highlight.icon}</div>
                <h4 className="text-white font-semibold mb-2">
                  {highlight.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-slate-700/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-slate-300 mb-6">
              I'm always excited to collaborate on innovative projects that push
              the boundaries of digital marketing and web development. Ready to
              work remotely and deliver exceptional results.
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
