import React from 'react';
import emotionImage from '../assets/emotion.png';
import newsImage from '../assets/news_viewer.png';
import weatherImage from '../assets/weather_app.png';

const projects = [
  {
    title: 'Emotion-Based Music System',
    description:
      'A smart music recommender that detects user emotion and suggests songs using facial recognition and YouTube API.',
    image: emotionImage,
    tech: ['Python', 'OpenCV', 'TensorFlow', 'YouTube API'],
    source: 'https://github.com/dpace121/emotion_music',
  },
  {
    title: 'News Viewer Web App',
    description:
      'Dynamic dashboard fetching real-time news with category filters, smooth transitions, and a fully responsive UI.',
    image: newsImage,
    tech: ['React', 'Axios', 'Tailwind CSS', 'Firebase'],
    source: 'https://github.com/dpace121/News_Viewer_Web_App',
    live: 'https://newsviewer.vercel.app/',
  },
  {
    title: 'Weather Forecast App',
    description:
      'A sleek weather interface providing real-time data and 5-day forecasts with geolocation and search capabilities.',
    image: weatherImage,
    tech: ['React', 'OpenWeatherMap', 'Tailwind CSS'],
    source: 'https://github.com/dpace121/weather_forecast_react-tailwind',
    live: 'https://reactweatherforecast.vercel.app/',
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative py-28 px-6 overflow-hidden bg-black text-white"
  >
    {/* Background Ambient Effects */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="relative max-w-6xl mx-auto">
      
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
          PROJECTS
        </h2>
        <p className="mt-4 text-gray-400 font-medium tracking-widest uppercase text-[10px] md:text-xs">
          A glimpse into my development journey
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group relative flex flex-col rounded-[2rem] overflow-hidden
              bg-white/[0.03] backdrop-blur-xl
              border border-white/5
              transition-all duration-500
              hover:bg-white/[0.07] hover:border-cyan-500/30
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            "
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Accent Glow */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-indigo-500 group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;