
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:wisdom.kara@email.com', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WK</span>
              </div>
              <span className="text-2xl font-bold text-white">Wisdom Kara</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Front-end Developer & Creative Technologist passionate about building 
              exceptional digital experiences that make a difference. Turning ideas 
              into reality through clean code and innovative design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-3 bg-slate-800/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Web Development</li>
              <li>React Applications</li>
              <li>UI/UX Design</li>
              <li>Performance Optimization</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span>© 2024 Wisdom Kara. Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
