
import React from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Front-end Developer',
      company: 'Kara Technologies',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading front-end development initiatives, creating responsive web applications with React and modern JavaScript frameworks.',
      achievements: [
        'Developed 20+ responsive web applications using React and TypeScript',
        'Improved application performance by 40% through optimization techniques',
        'Mentored junior developers and established coding standards',
        'Implemented accessibility features increasing user base by 25%'
      ],
      color: 'from-blue-400 to-purple-600'
    },
    {
      title: 'Front-end Developer',
      company: 'Creative Digital Solutions',
      location: 'Hybrid',
      period: '2021 - 2022',
      description: 'Specialized in building user-centric web interfaces and implementing modern design systems.',
      achievements: [
        'Built 15+ client projects using HTML, CSS, JavaScript, and React',
        'Collaborated with design teams to implement pixel-perfect interfaces',
        'Reduced page load times by 35% through code optimization',
        'Integrated third-party APIs and services for enhanced functionality'
      ],
      color: 'from-green-400 to-teal-600'
    },
    {
      title: 'Junior Web Developer',
      company: 'Tech Innovators',
      location: 'On-site',
      period: '2020 - 2021',
      description: 'Focused on learning modern web development practices and contributing to team projects.',
      achievements: [
        'Completed 10+ web development projects using WordPress and custom HTML/CSS',
        'Learned React, JavaScript ES6+, and modern development workflows',
        'Participated in code reviews and agile development processes',
        'Contributed to open-source projects and community initiatives'
      ],
      color: 'from-orange-400 to-red-600'
    }
  ];

  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      year: '2022',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      year: '2021',
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A journey of continuous learning and growth in front-end development and creative technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-slate-600 to-transparent"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3 text-slate-300">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-slate-400 mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-slate-300">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-400">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Certifications & Skills */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-blue-400 mt-1">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{cert.title}</h4>
                      <p className="text-slate-400 text-xs">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-xl font-bold text-white mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">15+</div>
                  <div className="text-slate-400 text-sm">Technologies Mastered</div>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-slate-700/30 text-center">
              <h3 className="text-white font-bold mb-3">Interested in my work?</h3>
              <p className="text-slate-400 text-sm mb-4">Download my complete resume for more details.</p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
