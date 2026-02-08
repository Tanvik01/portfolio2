const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2e1065] border-b-4 border-indigo-800 animate-in">
      <div className="flex items-center justify-between px-8 py-4 text-xl font-medium text-indigo-300">
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="text-fuchsia-400 font-bold text-5xl tracking-widest hover:text-white transition-all duration-300 hover:scale-105"
          >
            TK.
          </a>
          <div className="flex items-center gap-8 text-lg font-medium text-stone-400">
            <a href="#about" className="hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
              About
            </a>
            <a href="#skills" className="hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
              Skills
            </a>
            <a href="#experience" className="hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
              Experience
            </a>
            <a href="#projects" className="text-xl hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
              Projects
            </a>
          </div>
        </div>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          download="TK_Resume.pdf"
          className="flex items-center gap-2 px-5 py-2.5 bg-fuchsia-500 text-white text-base font-medium border-4 border-fuchsia-400 hover:bg-fuchsia-600 hover:border-fuchsia-300 transition-all duration-300 hover:scale-105 shadow-[4px_4px_0_0_#4c1d95] hover:shadow-[6px_6px_0_0_#d946ef]"
        >
          <iconify-icon
            icon="solar:download-linear"
            width="20"
            stroke-width="1.5"
          ></iconify-icon>
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
