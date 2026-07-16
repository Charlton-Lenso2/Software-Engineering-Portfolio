import python from "../../assets/certificates/Python.png";
import product from "../../assets/certificates/Product.png";
import marketing from "../../assets/certificates/Marketing.png";
import ai from "../../assets/certificates/AI.png";
import ai1 from "../../assets/certificates/AI1.png";
import ux from "../../assets/certificates/UX.png";

function Certificates() {
  return (
    <div className="mt-20 sm:mt-28">
      <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-['Oswald'] mb-8">
        Achievements
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        <a
          href={python}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-white/15 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="aspect-4/3 w-full overflow-hidden">
            <img
              src={python}
              alt="Python Fundamentals"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="font-['Oswald'] uppercase text-sm sm:text-base font-semibold mb-1">
              Python Fundamentals
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-2">
              Google Coursera
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Functions, loops, data structures, basics
            </p>
          </div>
        </a>

        <a
          href={product}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-white/15 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="aspect-4/3 w-full overflow-hidden">
            <img
              src={product}
              alt="Product Designing"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="font-['Oswald'] uppercase text-sm sm:text-base font-semibold mb-1">
              Product Designing
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-2">
              Uxcel
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Design thinking, UX fundamentals, and prototyping basics.
            </p>
          </div>
        </a>

        <a
          href={marketing}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-white/15 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="aspect-4/3 w-full overflow-hidden">
            <img
              src={marketing}
              alt="Fundamentals of Digital Marketing"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="font-['Oswald'] uppercase text-sm sm:text-base font-semibold mb-1">
              Fundamentals of Digital Marketing
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-2">
              Google
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Content Marketing, Email Marketing, Social Media Marketing, SEO.
            </p>
          </div>
        </a>

        <a
          href={ai}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-white/15 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="aspect-4/3 w-full overflow-hidden">
            <img
              src={ai}
              alt="Certificate of Participation - Deep Learning IndabaX Zimbabwe"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="font-['Oswald'] uppercase text-sm sm:text-base font-semibold mb-1">
              Certificate of Participation
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-2">
              Deep Learning IndabaX Zimbabwe
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Implementing AI in the workforce of Zimbabwe
            </p>
          </div>
        </a>

        <a
          href={ai1}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-white/15 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="aspect-4/3 w-full overflow-hidden">
            <img
              src={ai1}
              alt="Certificate of Participation - AI For Africa"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="font-['Oswald'] uppercase text-sm sm:text-base font-semibold mb-1">
              Certificate of Participation
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-2">
              AI For Africa
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Learning the fundamentals of using AI.
            </p>
          </div>
        </a>

        <a
          href={ux}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-white/15 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="aspect-4/3 w-full overflow-hidden">
            <img
              src={ux}
              alt="UX Design"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="font-['Oswald'] uppercase text-sm sm:text-base font-semibold mb-1">
              UX Design
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-2">
              Uxcel
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Design thinking, UX fundamentals, and prototyping basics.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Certificates;
