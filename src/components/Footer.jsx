import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 bg-black overflow-hidden">
      {/* Top Border Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Branding / Logo Style */}
        <div className="mb-8">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            DK
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          {[
            { icon: <FaGithub />, link: "https://github.com/dpace121", color: "hover:text-white" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/dipeshkayastha-101", color: "hover:text-sky-400" },
            { icon: <FaInstagram />, link: "https://instagram.com/dpace101", color: "hover:text-pink-500" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-gray-500 text-2xl
                ${social.color} 
                transition-all duration-300 
                hover:-translate-y-1
              `}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links (Optional but good for UX) */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[10px] md:text-xs text-gray-600 tracking-widest uppercase">
            © {currentYear} <span className="text-gray-400">Dipesh Kayastha</span>. 
            Designed & Built with <span className="text-indigo-500">♥</span> in Nepal.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;