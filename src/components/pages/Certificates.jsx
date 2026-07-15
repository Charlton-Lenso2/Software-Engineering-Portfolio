import certificates from "../../data/certificates";

function Certificates() {
  return (
    <div className="mt-20 sm:mt-28">
      <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-['Oswald'] mb-8">
        Achievements
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/15 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-['Oswald'] uppercase text-sm sm:text-base font-semibold mb-1">
                {cert.title}
              </h3>
              <p className="text-white/40 text-xs uppercase tracking-wide mb-2">
                {cert.issuer}
              </p>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                {cert.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certificates;