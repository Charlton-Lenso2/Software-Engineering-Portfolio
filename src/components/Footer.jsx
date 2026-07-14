function Footer() {
  return (
    <footer className="flex flex-col bg-black text-white font-['Segoe_UI','Tahoma','Geneva','Verdana',sans-serif] px-6 sm:px-10 py-12 gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-['Oswald'] uppercase font-semibold text-3xl sm:text-4xl">
            Charlton Lenso
          </div>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/Charlton-Lenso2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-white/60 transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/charlton-lenso-1678353ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-white/60 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="mailto:lensocharlton63@gmail.com"
              aria-label="Email"
              className="text-white hover:text-white/60 transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Lorem, ipsum dolor sit amet <br />
              consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Software Engineer</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/50 text-center">
        &copy; Charlton Lenso | 2026
      </p>
    </footer>
  );
}

export default Footer;
