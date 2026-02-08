const Experience = () => {
    return (
        <section id="experience" className="space-y-10 animate-in delay-300">
            <h2 className="text-xl font-medium text-fuchsia-400 uppercase tracking-widest opacity-100 flex items-center gap-3">
                <iconify-icon
                    icon="solar:briefcase-linear"
                    width="20"
                    stroke-width="1.5"
                    className="text-sky-400"
                ></iconify-icon>
                Experience
            </h2>

            <div className="relative border-l-4 border-indigo-800 ml-2 space-y-14">
                {/* Job 1 */}
                <div className="relative pl-10 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[10px] top-1.5 h-4 w-4 bg-fuchsia-500 border-none transition-all duration-300 group-hover:scale-125 group-hover:bg-sky-400"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                        <h3 className="text-white font-medium text-xl group-hover:text-sky-300 transition-all duration-300">
                            Data Analyst Intern
                        </h3>
                        <span className="text-sm font-mono text-stone-500">
                            Jul.2025 - Sept.2025
                        </span>
                    </div>
                    <div className="text-base font-medium text-stone-300 mb-4">
                        Schneider Electric
                    </div>
                    <p className="text-base leading-relaxed text-stone-400">
                        Developed and automated 5+ KPI dashboards in Tableau to monitor sales performance and supply chain
                        efficiency, providing actionable insights that helped reduce reporting time by 20%.
                        Developed a new Tableau dashboard to analyze multi-state performance metrics, which was adopted by the
                        regional leadership team and contributed to a 10% improvement in logistics efficiency.
                        Implemented data-driven solutions to drive business growth and efficiency.
                    </p>
                </div>

                {/* Job 2 */}
                <div className="relative pl-10 group">
                    <div className="absolute -left-[10px] top-1.5 h-4 w-4 bg-fuchsia-500 border-none transition-all duration-300 group-hover:scale-125 group-hover:bg-sky-400"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                        <h3 className="text-white font-medium text-xl group-hover:text-sky-300 transition-all duration-300">
                            Frontend Developer Intern
                        </h3>
                        <span className="text-sm font-mono text-stone-500">Jan.2025 - Apr.2025</span>
                    </div>
                    <div className="text-base font-medium text-stone-300 mb-4">
                        KrishLabs
                    </div>
                    <p className="text-base leading-relaxed text-stone-400">
                        Spearheaded frontend development for two key products, achieving 30% faster feature delivery
                        through modular design practices.
                        Developed and deployed a fully responsive, SEO-optimized website using React.js, resulting in a
                        60% increase in organic traffic.
                    </p>
                </div>


            </div>
        </section>
    );
};

export default Experience;
