function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-white/50 text-sm sm:text-base uppercase tracking-[0.2em] font-['Oswald'] mb-3">
          Contact
        </p>
        <h2 className="font-['Oswald'] uppercase font-semibold text-3xl sm:text-5xl mb-6 max-w-xl leading-tight">
          Let's Build Something
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-lg mb-10 sm:mb-14 font-['Segoe_UI','Tahoma','Geneva','Verdana',sans-serif]">
          Open to opportunities, collaborations, and good conversations about
          AI. Reach out through any of these.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:lensocharlton63@gmail.com"
            className="flex-1 border border-white/20 rounded-2xl p-6 hover:bg-white/5 transition-colors"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-['Oswald'] mb-2">
              Email
            </p>
            <p className="text-base sm:text-lg break-all">
              lensocharlton63@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Charlton-Lenso2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white/20 rounded-2xl p-6 hover:bg-white/5 transition-colors"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-['Oswald'] mb-2">
              GitHub
            </p>
            <p className="text-base sm:text-lg">Charlton-Lenso2</p>
          </a>

          <a
            href="https://www.linkedin.com/in/charlton-lenso-1678353ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white/20 rounded-2xl p-6 hover:bg-white/5 transition-colors"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-['Oswald'] mb-2">
              LinkedIn
            </p>
            <p className="text-base sm:text-lg">Charlton Lenso</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;