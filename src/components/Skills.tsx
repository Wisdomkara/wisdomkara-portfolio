
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'HTML5', level: 98, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' }
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Vite', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'WordPress', level: 88, color: 'from-blue-600 to-blue-800' },
        { name: 'Git', level: 90, color: 'from-red-400 to-red-600' },
        { name: 'Node.js', level: 82, color: 'from-green-400 to-green-600' },
        { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-500' },
        { name: 'Chart.js', level: 85, color: 'from-pink-400 to-pink-600' }
      ]
    },
    {
      title: 'Design & UX',
      skills: [
        { name: 'Responsive Design', level: 95, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Accessibility', level: 88, color: 'from-green-400 to-green-600' },
        { name: 'Performance Optimization', level: 90, color: 'from-red-400 to-red-600' },
        { name: 'UI/UX Principles', level: 85, color: 'from-purple-400 to-purple-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that enable me to build 
            exceptional web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:bg-slate-700/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-slate-800/20 rounded-xl p-6 border border-slate-700/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="text-center bg-slate-800/20 rounded-xl p-6 border border-slate-700/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div className="text-center bg-slate-800/20 rounded-xl p-6 border border-slate-700/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
