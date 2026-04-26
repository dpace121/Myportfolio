import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      time: new Date().toLocaleString(),
      message: formData.get('message'),
    };

    emailjs
      .send(
        'service_frt9k2c',
        'template_anlkf79',
        templateParams,
        'T8GtFr44JJ5s_WQ5V'
      )
      .then(() => {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(''), 4000);
      });
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center px-6 bg-black overflow-hidden py-20"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-2xl z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4 font-medium tracking-wide text-sm md:text-base">
            Let's build something extraordinary together.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="
            backdrop-blur-2xl bg-white/[0.03] 
            border border-white/10 shadow-2xl 
            rounded-[2.5rem] p-8 md:p-12 
            flex flex-col gap-6
            transition-all duration-500
            hover:border-white/20
          "
        >
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
            <input
              name="name"
              required
              placeholder="e.g. John Doe"
              className="w-full p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:bg-white/[0.08] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
            <input
              name="email"
              required
              type="email"
              placeholder="name@email.com"
              className="w-full p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:bg-white/[0.08] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
            <textarea
              name="message"
              required
              placeholder="Your Queries.."
              className="w-full p-4 h-40 rounded-2xl bg-white/[0.05] border border-white/10 text-white placeholder:text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:bg-white/[0.08] transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="
              relative group overflow-hidden
              py-4 rounded-2xl font-black uppercase tracking-widest text-sm
              bg-gradient-to-r from-cyan-500 to-indigo-600 text-black
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]
              active:scale-95 disabled:opacity-50
            "
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status === 'sending' ? 'Engineers are at work...' : '🚀 Send Message'}
            </span>
          </button>

          {/* Feedback Messages */}
          <div className="h-4">
            {status === 'success' && (
              <p className="text-cyan-400 text-center text-xs font-bold tracking-widest uppercase animate-pulse">
                ✨ Message received. I'll reach out soon!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center text-xs font-bold tracking-widest uppercase">
                ❌ Error. Please check your connection.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;