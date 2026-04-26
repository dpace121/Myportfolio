import React from 'react';

const educationData = [
  {
    degree: 'B.Sc. in Computer Science and Information Technology',
    institution: 'Patan Multiple Campus',
    location: 'Patandhoka, Lalitpur, Nepal',
    year: '2020 – 2025',
  },
  {
    degree: 'High School (+2) in Science',
    institution: 'V.S Niketan H.S. School',
    location: 'Minbhawan, Kathmandu, Nepal',
    year: '2016 – 2018',
  }
];

const Education = () => (
  <section
    id="education"
    className="relative py-28 px-6 overflow-hidden bg-black text-white"
  >
    {/* Background Ambient Glows */}
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

    <div className="relative max-w-4xl mx-auto">
      
      {/* Title Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Academic Journey
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot */}
            <div className="
              absolute -left-[9px] top-2 h-4 w-4 rounded-full 
              bg-black border-2 border-cyan-500 
              group-hover:scale-150 group-hover:bg-cyan-500 
              transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]
            " />

            {/* Content Card */}
            <div className="
              relative p-8 rounded-[2rem]
              bg-white/[0.03] backdrop-blur-xl
              border border-white/5
              transition-all duration-500
              group-hover:bg-white/[0.07] group-hover:border-cyan-500/30
              group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
            ">
              <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-500 uppercase">
                {edu.year}
              </span>
              
              <h3 className="text-xl md:text-3xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                {edu.degree}
              </h3>

              <div className="mt-4 space-y-1">
                <p className="text-lg text-gray-200 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {edu.location}
                </p>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-12 h-12 bg-cyan-500/10 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;