const projects = [
  {
    title: "Wallify",
    tag: "React · In progress",
    desc: "A wallpaper discovery gallery, with a responsive nav and component-driven layout.",
    link: "#",
  },
  {
    title: "Lenx Tech",
    tag: "Django · E-commerce",
    desc: "Full MVT store: cart via context processor, checkout flow, and admin-managed listings.",
    link: "#",
  },
  {
    title: "Letric ZW",
    tag: "Branding",
    desc: "Visual identity work for a business in my network, from concept through final assets.",
    link: "https://www.behance.net/",
  },
  {
    title: "Python Exercises",
    tag: "Python · Fundamentals",
    desc: "OOP, data structures, comprehensions and recursion — the foundation everything else sits on.",
    link: "#",
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-white/50 text-sm sm:text-base uppercase tracking-[0.2em] font-['Oswald'] mb-3">
          Work
        </p>
        <h2 className="font-['Oswald'] uppercase font-semibold text-3xl sm:text-5xl mb-10 sm:mb-14">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-white/15 rounded-2xl p-6 sm:p-8 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-['Oswald'] uppercase font-semibold text-xl sm:text-2xl">
                  {project.title}
                </h3>
                <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </span>
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-white/50 font-['Oswald'] mb-4">
                {project.tag}
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-['Segoe_UI','Tahoma','Geneva','Verdana',sans-serif]">
                {project.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
