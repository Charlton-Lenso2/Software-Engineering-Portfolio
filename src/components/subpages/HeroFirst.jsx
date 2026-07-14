import profilePic from "../../assets/profile.jpeg";

function HeroFirst() {
  return (
    <section className="bg-black text-white px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-white/50 text-sm uppercase tracking-[0.2em] font-['Oswald'] mb-4">
            It's me
          </p>
          <h2 className="font-['Oswald'] uppercase font-semibold text-4xl sm:text-6xl leading-tight mb-4">
            Charlton
            <br />
            Lenso
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Software Engineer Turning ideas into functional,
            user-friendly applications through clean design, efficient code, and
            a passion for continuous improvement.
          </p>
        </div>

        <div className="relative flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-white/15">
            <img
              src={profilePic}
              alt="Charlton Lenso"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>

          <div
            className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center font-['Oswald'] font-semibold text-lg sm:text-xl shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            Hi
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

export default HeroFirst;
