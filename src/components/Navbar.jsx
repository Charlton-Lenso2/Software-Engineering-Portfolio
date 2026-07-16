import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import profilePic from "../assets/profile333.jpg"; 

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center pt-4 z-1000">
      <div
        className={`flex flex-col items-center rounded-3xl border-[1.5px] border-white/30 backdrop-blur-[14px] text-white bg-[rgba(20,20,20,0.45)] shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out overflow-hidden
        ${scrolled ? "w-[92%] sm:w-[70%] md:w-[55%]" : "w-[94%] sm:w-[90%]"}`}
      >
        <div
          className={`flex items-center justify-between w-full transition-all duration-300 ease-in-out
          ${scrolled ? "h-13 px-3" : "h-16 px-4 sm:px-5"}`}
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
            <h1
              className={`absolute inset-0 flex items-center font-['Oswald'] font-semibold whitespace-nowrap transition-opacity duration-300 text-lg sm:text-2xl
              ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              style={{ width: "max-content" }}
            >
              Charlton Lenso
            </h1>
            <img
              src={profilePic}
              alt="Charlton Lenso"
              className={`absolute inset-0 w-full h-full rounded-full object-cover border border-white/40 transition-opacity duration-300
              ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <ul className="hidden md:flex">
              {navLinks.map((link) => (
                <li key={link.to} className="list-none mx-4">
                  <Link
                    to={link.to}
                    className={`text-white no-underline font-bold transition-all duration-300 ${
                      scrolled ? "text-sm" : "text-lg sm:text-xl"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className={`text-white no-underline font-bold bg-white/15 border border-white/20 rounded-full inline-flex items-center transition-all duration-300 ${
                scrolled
                  ? "text-xs px-3 py-1.5"
                  : "text-sm sm:text-base px-4 py-2"
              }`}
            >
              Contact
            </Link>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col justify-center items-center w-7 h-7 gap-1.25"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-60" : "max-h-0"}`}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.to} className="list-none">
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white no-underline font-bold text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
