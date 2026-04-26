import React from 'react';
import { FaReact, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact className="text-sky-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-400" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Django', icon: <SiDjango className="text-emerald-500" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden bg-black text-white"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-gray-400 font-medium tracking-widest uppercase text-[10px] md:text-xs">
            Technologies I use to build digital solutions
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 md:gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group relative flex flex-col items-center justify-center 
                py-10 px-6 rounded-[2.5rem]
                bg-white/[0.03] backdrop-blur-sm
                border border-white/5
                transition-all duration-500
                hover:bg-white/[0.07] hover:border-cyan-500/30
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(6,182,212,0.05)]
              "
            >
              {/* Main Icon */}
              <div className="
                text-5xl md:text-6xl mb-4
                transition-all duration-500
                group-hover:scale-110 group-hover:-translate-y-2
                filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]
              ">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Decorative Underline */}
              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;