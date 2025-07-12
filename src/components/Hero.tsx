import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import myImage from '../assets/kara.jpeg';
import { gsap } from 'gsap';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef(null); // 👈 for GSAP animation

  const roles = [
    'Front-end Developer',
    'Creative Technologist',
    'React Specialist',
    'UI/UX Enthusiast',
    'SEO Specialist',
    'WordPress Expert',
    'Social Media Expert',
  ];

  // Typewriter effect
  useEffect(() => {
    const current = roles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  // Scroll functions
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://wisdomkara.github.io/wisdomkara-portfolio/kara.pdf';
    link.setAttribute('download', 'kara.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animate image on mount
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-bounce backdrop-blur-sm"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce backdrop-blur-sm"
          style={{ animationDelay: '1s' }}></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse backdrop-blur-sm"
          style={{ animationDelay: '2s' }}></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-bounce backdrop-blur-sm"
          style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 mt-8">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Wisdom Kara
              </span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 h-16 flex items-center justify-center lg:justify-start">
              <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
                {text}
              </span>
            </div>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Building responsive, user-centered digital experiences through
              clean code, modern design principles, and performance
              optimization.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                View My Work
              </button>
              <button
                onClick={downloadCV}
                className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
                <Download className="h-5 w-5" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/Wisdomkara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/wisdom-kara-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:wiskara1@gmail.com"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                ref={imgRef}
                src={myImage}
                alt="Kara Wisdom's Photo"
                className="w-80 h-64 sm:w-72 sm:h-80 object-contain   md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full  border-4 border-white shadow-3xl  transition duration-300 hover:to-blue-500 glow-animation"
              />

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
