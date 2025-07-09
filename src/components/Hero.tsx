
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    'Front-end Developer',
    'Creative Technologist',
    'React Specialist',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const current = roles[currentIndex];
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">WK</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Wisdom Kara
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-300 mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
              {text}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Building responsive, user-centered digital experiences through clean code, 
            modern design principles, and performance optimization. Passionate about solving 
            real-world problems through technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
              View My Work
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download CV
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="p-3 bg-slate-800/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-slate-800/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-slate-800/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
              <Mail className="h-6 w-6" />
            </a>
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
