import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 overflow-hidden bg-black text-white"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10">
          
          {/* Experience Item */}
          <div className="relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot */}
            <div className="
              absolute -left-[9px] top-2 h-4 w-4 rounded-full 
              bg-black border-2 border-indigo-500 
              group-hover:scale-150 group-hover:bg-indigo-500 
              transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]
            " />

            {/* Content Card */}
            <div className="
              relative p-8 rounded-[2rem]
              bg-white/[0.03] backdrop-blur-xl
              border border-white/5
              transition-all duration-500
              group-hover:bg-white/[0.07] group-hover:border-indigo-500/30
              group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
            ">
              <span className="text-xs md:text-sm font-bold tracking-widest text-indigo-400 uppercase">
                Jan 2021 – Dec 2021
              </span>
              
              <h3 className="text-xl md:text-3xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                General Member
              </h3>

              <p className="text-lg text-gray-300 font-medium mt-1">
                Code For Change
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed font-medium">
                Explored various modern technologies and frameworks, and participated in multiple
                workshops focused on innovation, collaboration, and real-world problem solving.
              </p>

              {/* Skill Tags for Experience (Optional but recommended for consistency) */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Innovation', 'Collaboration', 'Problem Solving'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* You can easily add more experience items here following the same structure */}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;