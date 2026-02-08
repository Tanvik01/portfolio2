const About = () => {
    return (
        <section id="about" className="space-y-10 animate-in delay-100">
            <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl font-medium tracking-normal text-white uppercase">
                    Hello!
                    <span className="text-fuchsia-400"> I'm Tanvi  </span>

                </h1>
                <p className="text-3xl text-indigo-200 leading-relaxed">
                    I build accessible, pixel-perfect, and performant web applications.
                    Passionate about blending design thinking with robust engineering.
                </p>
            </div>

            {/* Social/Contact Links */}
            <div className="flex items-center gap-8">
                <a
                    href="https://github.com/Tanvik01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-stone-400 hover:text-sky-300 transition-all duration-300 group hover:translate-y-[-2px]"
                >
                    <iconify-icon
                        icon="solar:cat-linear"
                        width="24"
                        stroke-width="1.5"
                        className="text-stone-500 group-hover:text-sky-400 transition-all duration-300"
                    ></iconify-icon>
                    <span>GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/tanvi-kokitkar-500bb3242/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-stone-400 hover:text-sky-300 transition-all duration-300 group hover:translate-y-[-2px]"
                >
                    <iconify-icon
                        icon="mdi:linkedin"
                        width="24"
                        stroke-width="1.5"
                        className="text-stone-500 group-hover:text-sky-400 transition-all duration-300"
                    ></iconify-icon>
                    <span>LinkedIn</span>
                </a>
                <a
                    href="mailto:tanvikokitkar30@gmail.com"
                    className="flex items-center gap-3 text-lg text-stone-400 hover:text-sky-300 transition-all duration-300 group hover:translate-y-[-2px]"
                >
                    <iconify-icon
                        icon="solar:letter-linear"
                        width="24"
                        stroke-width="1.5"
                        className="text-stone-500 group-hover:text-sky-400 transition-all duration-300"
                    ></iconify-icon>
                    <span>Email</span>
                </a>
            </div>
        </section>
    );
};

export default About;
