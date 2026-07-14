import profilePic from "../../assets/profile.jpeg"

const skills = [
  "JavaScript",
  "React",
  "Python",
  "Django",
  "Tailwind CSS",
  "Git",
];

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <p className="text-white/50 text-sm sm:text-base uppercase tracking-[0.2em] font-['Oswald'] mb-3">
          About
        </p>
        <h2 className="font-['Oswald'] uppercase font-semibold text-3xl sm:text-5xl mb-10 sm:mb-14">
          Who I Am
        </h2>
        {/* text + picture */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-5 text-white/70 text-base sm:text-lg leading-relaxed font-['Segoe_UI','Tahoma','Geneva','Verdana',sans-serif] order-2 md:order-1">
            <p>
              I'm a software engineering student at Uncommon.org's bootcamp in
              Zimbabwe, working through a curriculum that's taken me from
              JavaScript fundamentals through React, Python and Django. Outside
              coursework, I run{" "}
              <span className="text-white">Youth for Change</span>, a WhatsApp
              channel focused on empowering young people.
            </p>
            <p>
              I like building with a clear structural plan before writing a
              single line. Long term, I'm aiming toward building my own products
              at the intersection of AI and everyday problems.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/15">
              <img
                src={profilePic}
                alt="Charlton Lenso"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
        #
      </div>

      {/* toolkit marquee — full width, breaks out of the max-w container */}
      <div className="mt-16 sm:mt-20">
        <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-['Oswald'] text-center mb-6">
          Toolkit
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="mx-4 sm:mx-6 text-lg sm:text-2xl font-['Oswald'] uppercase tracking-wide text-white/40 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}

export default AboutSection;
