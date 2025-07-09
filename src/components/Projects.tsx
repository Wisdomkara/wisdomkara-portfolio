
import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Heart, Brain, Calendar, Leaf, DollarSign, CheckSquare, Sparkles } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'One Worship',
      category: 'healthcare',
      description: 'Comprehensive web application supporting individuals with emotional and mental health challenges',
      longDescription: 'A full-featured mental health platform with dynamic quote generation, support request forms, advisor connections, and crisis intervention resources.',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'Real-time messaging', 'Responsive Design'],
      features: ['Dynamic quote generation', 'Support request forms', 'Advisor connection tools', 'Crisis intervention resources'],
      icon: <Heart className="h-8 w-8" />,
      color: 'from-red-400 to-pink-600',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Inspiring',
      category: 'motivation',
      description: 'Motivational web platform delivering personalized daily inspirational content',
      longDescription: 'A beautiful motivation platform with custom JavaScript logic, clean UI design, user preference tracking, and social sharing capabilities.',
      image: '/placeholder.svg',
      tech: ['Vanilla JavaScript', 'CSS Animations', 'Local Storage', 'API Integration'],
      features: ['Custom JavaScript logic', 'Clean UI design', 'User preference tracking', 'Social sharing capabilities'],
      icon: <Sparkles className="h-8 w-8" />,
      color: 'from-yellow-400 to-orange-500',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Grace Chapel Website',
      category: 'community',
      description: 'Fully responsive, animated church platform enhancing virtual community engagement',
      longDescription: 'Interactive church platform with watch online streaming, events management, community join system, and sermon archives.',
      image: '/placeholder.svg',
      tech: ['WordPress', 'Custom JavaScript', 'Responsive Design', 'Video Integration'],
      features: ['Watch Online streaming', 'Events management', 'Community join system', 'Sermon archives'],
      icon: <Calendar className="h-8 w-8" />,
      color: 'from-blue-400 to-indigo-600',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'EcoTracker',
      category: 'environment',
      description: 'Sustainability tracking application helping users monitor their carbon footprint',
      longDescription: 'Environmental impact dashboard with data visualization, progress tracking, eco-friendly tips, and community challenges.',
      image: '/placeholder.svg',
      tech: ['React', 'Chart.js', 'Firebase', 'PWA'],
      features: ['Data visualization', 'Progress tracking', 'Eco-friendly tips', 'Community challenges'],
      icon: <Leaf className="h-8 w-8" />,
      color: 'from-green-400 to-teal-600',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'FinanceFlow',
      category: 'finance',
      description: 'Intuitive financial planning tool with expense tracking and budget optimization',
      longDescription: 'Personal budget management with real-time expense monitoring, budget alerts, financial goal setting, and data export.',
      image: '/placeholder.svg',
      tech: ['React', 'Context API', 'Chart.js', 'Local Storage'],
      features: ['Real-time expense monitoring', 'Budget alerts', 'Financial goal setting', 'Data export'],
      icon: <DollarSign className="h-8 w-8" />,
      color: 'from-emerald-400 to-green-600',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'TaskMaster Pro',
      category: 'productivity',
      description: 'Collaborative project management platform for teams and freelancers',
      longDescription: 'Project management solution with task assignment, deadline tracking, team collaboration, and progress analytics.',
      image: '/placeholder.svg',
      tech: ['React', 'Firebase', 'Real-time updates', 'Drag & Drop'],
      features: ['Task assignment', 'Deadline tracking', 'Team collaboration', 'Progress analytics'],
      icon: <CheckSquare className="h-8 w-8" />,
      color: 'from-purple-400 to-violet-600',
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      title: 'Kara Technologies Portfolio',
      category: 'portfolio',
      description: 'Experimental portfolio platform showcasing cutting-edge web development techniques',
      longDescription: 'Personal development showcase with parallax effects, scroll-triggered animations, futuristic UI/UX, and interactive elements.',
      image: '/placeholder.svg',
      tech: ['React', 'GSAP', 'Three.js', 'Advanced CSS'],
      features: ['Parallax effects', 'Scroll-triggered animations', 'Futuristic UI/UX', 'Interactive elements'],
      icon: <Code className="h-8 w-8" />,
      color: 'from-cyan-400 to-blue-600',
      github: '#',
      demo: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'motivation', label: 'Motivation' },
    { id: 'community', label: 'Community' },
    { id: 'environment', label: 'Environment' },
    { id: 'finance', label: 'Finance' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            A showcase of innovative projects that demonstrate technical expertise and creative problem-solving.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 hover:bg-slate-700/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-white/80 bg-gradient-to-br ${project.color} p-4 rounded-2xl`}>
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.github}
                    className="p-2 bg-slate-900/80 rounded-lg text-slate-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.demo}
                    className="p-2 bg-slate-900/80 rounded-lg text-slate-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
