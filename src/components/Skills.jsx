const Skills = () => {
  return (
    <section id="skills" className="space-y-10 animate-in delay-200">
      <h2 className="text-xl font-medium text-fuchsia-400 uppercase tracking-widest opacity-100 flex items-center gap-3">
        <iconify-icon
          icon="solar:cpu-bolt-linear"
          width="20"
          stroke-width="1.5"
          className="text-sky-400"
        ></iconify-icon>
        Tech Stack
      </h2>

      <div className="p-8 border-4 border-indigo-800 bg-[#1e0b36] hover:border-fuchsia-500 transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Languages</h3>
            <ul className="space-y-3 text-base text-stone-400">
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:code-circle-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Java
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:code-circle-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:code-circle-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                TypeScript
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:code-circle-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                HTML5 / CSS3
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:code-circle-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                SQL
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Backend & Databases</h3>
            <ul className="space-y-3 text-base text-stone-400">
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:server-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                PostgreSQL
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:server-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Express.js
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:server-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Node.js
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:server-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                RESTful APIs
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:server-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                CRUD / DB Design
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Frontend</h3>
            <ul className="space-y-3 text-base text-stone-400">
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:monitor-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                React.js
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:monitor-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                AngularJS
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:monitor-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Framer Motion
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:monitor-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Component Architecture
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Dev Tools</h3>
            <ul className="space-y-3 text-base text-stone-400">
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:box-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Git / GitHub
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:box-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Docker
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:box-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Postman
              </li>
              <li className="flex items-center gap-3 hover:text-sky-300 transition-all duration-300 hover:translate-x-1">
                <iconify-icon
                  icon="solar:box-linear"
                  width="18"
                  className="text-sky-500"
                ></iconify-icon>
                Agile Development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;