import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 px-6 sm:px-10 pt-28 pb-16 overflow-hidden">
      <p className="text-white/60 text-base sm:text-xl font-['Segoe_UI','Tahoma','Geneva','Verdana',sans-serif]">
        Hello, I'm a
      </p>

      <h1 className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-8 text-3xl sm:text-5xl md:text-7xl font-['Oswald'] font-semibold uppercase tracking-wide leading-none text-center">
        <span>Software</span>
        <TriangleGlow />
        <span>Engineer</span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <Link
          to="/projects"
          className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm sm:text-base hover:bg-white/80 transition-colors"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-white/40 text-white font-bold px-6 py-3 rounded-full text-sm sm:text-base hover:bg-white/10 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

function TriangleGlow() {
  return (
    <span className="relative inline-flex items-center justify-center w-14 h-14 sm:w-28 sm:h-28 md:w-40 md:h-40 align-middle shrink-0">
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-72 sm:h-72 md:w-104 md:h-104 pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.95) 30deg, transparent 90deg, transparent 270deg, rgba(120,170,255,0.7) 330deg, transparent 360deg)",
          filter: "blur(40px)",
          animation: "spin-slow 8s linear infinite",
        }}
      />
      <svg
        viewBox="0 0 32 28"
        className="relative w-full h-full pointer-events-none"
      >
        <polygon
          points="16,2 30,26 2,26"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  );
}

export default Hero;
