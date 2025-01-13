import { useState } from "react";
import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full md:h-[142px] dark:bg-[#FFFFFF0A] bg-[#000000] flex justify-between items-center px-5 lg:px-[70px] relative">
      <div className="py-4">
        <img
          src={logo}
          alt="Wabaytech Logo"
          className="h-[28px] md:h-[70px] md:max-w-full"
        />
      </div>

      <div className="items-center justify-between hidden space-x-20 text-white lg:flex">
        <div className="font-poppins text-[24px] font-semibold hover:text-[#FF6B6B] transition duration-300">
          Accueil
        </div>
        <div className="font-poppins text-[24px] font-semibold hover:text-[#FF6B6B] transition duration-300">
          Services
        </div>
        <div className="font-poppins text-[24px] font-semibold hover:text-[#FF6B6B] transition duration-300">
          à propos
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center justify-center space-x-5">
          <div className="flex items-center justify-center rounded-lg">
            <button
              className="flex items-center justify-center w-16 h-16 hover:bg-[#FFFFFF0A] rounded-full transition duration-300"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <img src={moon} alt="dark" className="w-10 h-10" />
              ) : (
                <img src={sun} alt="light" className="w-10 h-10" />
              )}
            </button>
          </div>
          <div className="border-white w-[262px] h-[65px] border-[4px] rounded-full text-white flex items-center justify-center text-[24px] font-poppins hover:bg-white hover:text-black transition duration-300">
            Contactez-nous
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:hidden">
        <button
          className="flex items-center justify-center w-12 h-12 hover:bg-[#FFFFFF0A] rounded-full transition duration-300"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <img src={moon} alt="dark" className="w-8 h-8" />
          ) : (
            <img src={sun} alt="light" className="w-8 h-8" />
          )}
        </button>
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:bg-[#FFFFFF0A] rounded-full transition duration-300"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-75 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute top-0 right-0 w-3/4 h-full bg-black text-white py-4 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 text-white hover:bg-[#FFFFFF0A] rounded-full transition duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="font-poppins text-[24px] font-semibold hover:text-[#FF6B6B] transition duration-300">
              Accueil
            </div>
            <div className="font-poppins text-[24px] font-semibold hover:text-[#FF6B6B] transition duration-300">
              Services
            </div>
            <div className="font-poppins text-[24px] font-semibold hover:text-[#FF6B6B] transition duration-300">
              à propos
            </div>
            <div className="border-white w-[200px] h-[50px] border-[3px] rounded-full text-white flex items-center justify-center text-[20px] font-poppins hover:bg-white hover:text-black transition duration-300">
              Contactez-nous
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
