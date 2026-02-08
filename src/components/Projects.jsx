const Projects = () => {
    return (
        <section id="projects" className="space-y-10 animate-in delay-300">
            <h2 className="text-xl font-medium text-fuchsia-400 uppercase tracking-widest opacity-100 flex items-center gap-3">
                <iconify-icon
                    icon="solar:folder-with-files-linear"
                    width="20"
                    stroke-width="1.5"
                    className="text-sky-400"
                ></iconify-icon>
                Selected Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card 1 - AI SQL Analytics */}
                <a
                    href="https://talk-to-db.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col gap-4 p-8 border-4 border-indigo-800 bg-[#1e0b36] hover:bg-[#2d124f] hover:border-fuchsia-500 hover:-translate-y-2 transition-all duration-300 shadow-[6px_6px_0_0_#4c1d95] hover:shadow-[8px_8px_0_0_#d946ef]"
                >
                    <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-[#0B1121] border border-sky-900/30 text-sky-300 group-hover:text-sky-200 transition-all duration-300">
                            <iconify-icon
                                icon="solar:database-linear"
                                width="28"
                                stroke-width="1.5"
                            ></iconify-icon>
                        </div>
                        <iconify-icon
                            icon="solar:arrow-right-up-linear"
                            width="22"
                            stroke-width="1.5"
                            className="text-stone-600 group-hover:text-sky-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        ></iconify-icon>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-medium text-stone-100 tracking-tight group-hover:text-white transition-all duration-300">
                                AI SQL Analytics Platform
                            </h3>
                        </div>
                        <span className="text-sm text-fuchsia-400 font-mono">Jan. 2026</span>
                        <p className="text-base text-stone-500 mt-3 line-clamp-3">
                            Full-stack BI tool that converts natural language voice/text into SQL queries, enabling non-technical users to extract insights without code.
                        </p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-3">
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            React
                        </span>
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            Express
                        </span>
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            PostgreSQL
                        </span>
                    </div>
                </a>

                {/* Project Card 2 - Aksha Women Safety */}
                <a
                    href="#"
                    className="group relative flex flex-col gap-4 p-8 border-4 border-indigo-800 bg-[#1e0b36] hover:bg-[#2d124f] hover:border-fuchsia-500 hover:-translate-y-2 transition-all duration-300 shadow-[6px_6px_0_0_#4c1d95] hover:shadow-[8px_8px_0_0_#d946ef]"
                >
                    <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-[#0B1121] border border-sky-900/30 text-sky-300 group-hover:text-sky-200 transition-all duration-300">
                            <iconify-icon
                                icon="solar:shield-check-linear"
                                width="28"
                                stroke-width="1.5"
                            ></iconify-icon>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-fuchsia-300 bg-fuchsia-950/50 px-2 py-1 rounded border border-fuchsia-800/50">
                                🏆 2nd Place
                            </span>
                            <iconify-icon
                                icon="solar:arrow-right-up-linear"
                                width="22"
                                stroke-width="1.5"
                                className="text-stone-600 group-hover:text-sky-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            ></iconify-icon>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-medium text-stone-100 tracking-tight group-hover:text-white transition-all duration-300">
                                Aksha - Women Safety App
                            </h3>
                        </div>
                        <span className="text-sm text-fuchsia-400 font-mono">Apr. 2025 • Hackathon (56+ teams)</span>
                        <p className="text-base text-stone-500 mt-3 line-clamp-3">
                            Real-time safety app with SOS triggers, NLP chatbot support, and WebSocket-powered location sharing for instant emergency response.
                        </p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-3">
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            React Native
                        </span>
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            WebSockets
                        </span>
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            NLP
                        </span>
                    </div>
                </a>

                {/* Project Card 3 - Movie Recommendations */}
                <a
                    href="https://madsreccoms.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col gap-4 p-8 border-4 border-indigo-800 bg-[#1e0b36] hover:bg-[#2d124f] hover:border-fuchsia-500 hover:-translate-y-2 transition-all duration-300 shadow-[6px_6px_0_0_#4c1d95] hover:shadow-[8px_8px_0_0_#d946ef]"
                >
                    <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-[#0B1121] border border-sky-900/30 text-sky-300 group-hover:text-sky-200 transition-all duration-300">
                            <iconify-icon
                                icon="solar:clapperboard-linear"
                                width="28"
                                stroke-width="1.5"
                            ></iconify-icon>
                        </div>
                        <iconify-icon
                            icon="solar:arrow-right-up-linear"
                            width="22"
                            stroke-width="1.5"
                            className="text-stone-600 group-hover:text-sky-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        ></iconify-icon>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-medium text-stone-100 tracking-tight group-hover:text-white transition-all duration-300">
                                Movie Recommendation System
                            </h3>
                        </div>
                        <span className="text-sm text-fuchsia-400 font-mono">Personal Project</span>
                        <p className="text-base text-stone-500 mt-3 line-clamp-3">
                            Interactive movie recommender using collaborative filtering and TMDB API with trailer integration and responsive search.
                        </p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-3">
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            JavaScript
                        </span>
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            Python
                        </span>
                        <span className="text-sm font-medium text-sky-300/80 bg-sky-950/30 px-3 py-1.5 rounded border border-sky-900/30">
                            TMDB API
                        </span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Projects;
