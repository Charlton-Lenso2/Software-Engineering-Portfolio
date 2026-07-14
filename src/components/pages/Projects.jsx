import projects from "../../data/projects";

function Projects() {
  return (
    <section className="bg-black text-white min-h-screen px-6 sm:px-10 pt-32 pb-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-white/50 text-sm sm:text-base uppercase tracking-[0.2em] font-['Oswald'] mb-3">
          Work
        </p>
        <h1 className="font-['Oswald'] uppercase font-semibold text-3xl sm:text-5xl mb-10 sm:mb-14">
          Projects
        </h1>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-white/15 rounded-2xl p-6 sm:p-8 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="font-['Oswald'] uppercase font-semibold text-xl sm:text-2xl">
                  {project.title}
                </h2>
                <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </span>
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-white/50 font-['Oswald'] mb-4">
                {project.tag}
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
