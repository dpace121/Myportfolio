import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden bg-black text-white"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        {/* Main Content Card */}
        <div className="
          relative overflow-hidden
          bg-gradient-to-b from-white/10 to-white/[0.02]
          backdrop-blur-md
          border border-white/10 rounded-[2.5rem] 
          p-10 md:p-16
          transition-all duration-500
          hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]
        ">
          {/* Section Heading */}
          <div className="relative mb-10">
            <h2 className="
              text-4xl md:text-6xl font-black tracking-tighter
              bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400
              bg-clip-text text-transparent
            ">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed">
              I'm <span className="text-white font-bold">Dipesh Kayastha</span>, 
              a <span className="text-cyan-400 font-medium">Full-Stack Developer</span> based in{" "}
              <span className="italic font-semibold text-sky-400">Bhaktapur, Nepal</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed font-medium">
              <p>
                I thrive at the intersection of logic and design. My expertise lies in the 
                <span className="text-white"> MERN Stack</span> and 
                <span className="text-white">Software Testing</span>, where I build robust backends that 
                power seamless, high-performance user interfaces.
              </p>
              <p>
                From engineering <span className="text-indigo-400 italic">Recommendation Engines</span> to 
                scaling API-driven applications, I focus on clean architecture and 
                performance-first code.
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Currently Exploring: AI Research & MLOps
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-10 mt-14 border-t border-white/5 pt-10">
            {[
              { icon: <FaGithub />, link: "https://github.com/dpace121", label: "GitHub" },
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/dipeshkayastha-101", label: "LinkedIn" },
              { icon: <FaInstagram />, link: "https://instagram.com/in/dpace_101", label: "Instagram" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-gray-500 text-3xl transition-all duration-300 group-hover:text-white group-hover:-translate-y-1">
                  {social.icon}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;