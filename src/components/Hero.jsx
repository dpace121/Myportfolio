import React, { useState } from "react";
import profileImage from "../assets/dipesh.jfif";

const Hero = () => {
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 pt-24 pb-12 overflow-hidden
        bg-black text-white
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-black to-[#0f172a]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        
       {/* Profile Image Section */}
<div
  onClick={() => setShowFullImage(true)}
  className="flex flex-col items-center justify-center cursor-pointer group mb-10 transition-transform duration-500 hover:scale-105"
>
  {/* Glow Ring Container - Ensures fixed aspect ratio and perfect centering */}
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
    
    {/* Outer Animated Glow */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

    {/* Border Ring */}
    <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500">
      
      {/* Image Wrapper - The overflow-hidden ensures the image stays a circle */}
      <div className="w-full h-full rounded-full overflow-hidden bg-black">
        <img
          src={profileImage}
          alt="Dipesh Kayastha"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <p className="mt-5 text-sm text-gray-400 font-medium">
    Click to view full image
  </p>
</div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Dipesh Kayastha
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 font-light italic">
            Web Developer • React Developer • Artificial Intelligence Enthusiast
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            Based in <span className="text-white font-semibold">Bhaktapur, Nepal</span>.
            I specialize in crafting high-performance web applications and 
            immersive user experiences using modern technology stacks.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:row gap-5 w-full sm:w-auto">
          <a
            href="/Dipesh_KCV.pdf"
            download
            className="
              px-8 py-3.5 rounded-full font-bold
              bg-white/5 border border-white/10
              hover:bg-white/10 hover:border-white/30 transition-all duration-300
              text-center
            "
          >
            📄 Download Resume
          </a>

          <a
            href="#contact"
            className="
              px-8 py-3.5 rounded-full font-bold
              bg-gradient-to-r from-cyan-500 to-blue-600
              text-black shadow-lg shadow-cyan-500/25
              hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300
              text-center
            "
          >
            📬 Contact Me
          </a>
        </div>
      </div>

      {/* Full Image Modal */}
      {showFullImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setShowFullImage(false)}
        >
          <div className="relative max-w-3xl w-full flex justify-center">
            <img
              src={profileImage}
              alt="Full Profile"
              className="max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 object-contain"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
            />

            <button
              className="absolute -top-12 right-0 md:-right-12 text-white text-4xl hover:text-cyan-400 transition-colors"
              onClick={() => setShowFullImage(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;