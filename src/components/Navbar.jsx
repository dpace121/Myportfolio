import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Experience",
    "Contact",
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      const scrollPos = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(navItems[index].toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg border-b border-cyan-500/20"
          : "bg-black"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold tracking-wide text-white"
        >
          <span className="text-cyan-400">Dipesh</span>{" "}
          <span className="text-slate-300">| Developer</span>{" "}
          <span className="text-slate-300">| Learner</span>

        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  onClick={() => handleNavClick(id)}
                  className={`transition duration-300 ${
                    activeSection === id
                      ? "text-cyan-400 border-b border-cyan-400 pb-1"
                      : "text-gray-400 hover:text-cyan-300"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-cyan-400"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-cyan-500/20 px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => handleNavClick(id)}
                className={`block text-lg transition ${
                  activeSection === id
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;