import { useState } from "react";
import { FaBars, FaXmark, FaSun, FaMoon } from "react-icons/fa6";
import { Link } from "react-scroll";
import hashWhite from "../assets/hash-white.svg";
import hashBlue from "../assets/hash-blue.svg";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const handleClick = () => setNav(!nav);
  const logoSrc = darkMode ? hashWhite : hashBlue;

  return (
    <nav
      className={`
        fixed w-full flex justify-between items-center px-6 py-4 z-50
        backdrop-blur-xl border transition-all duration-300
        ${
          darkMode
            ? "bg-white/10 border-white/20"
            : "bg-white/80 border-gray-200 text-gray-800"
        }
      `}
      role="navigation"
      aria-label="Menu principal"
    >
      <div>
        <img
          className="w-[80px] object-contain"
          src={logoSrc}
          alt="Logo Erick Reis"
        />
      </div>

      <ul className="hidden md:flex gap-8">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer font-medium transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer font-medium transition-colors"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer font-medium transition-colors"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer font-medium transition-colors"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer font-medium transition-colors"
          >
            Contato
          </Link>
        </li>
      </ul>

      <button
        onClick={toggleDarkMode}
        className="hidden md:block p-2 rounded-full hover:bg-white/10 transition"
        aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-blue-500" />
        )}
      </button>

      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer p-2 rounded-full hover:bg-white/10 transition"
        aria-expanded={nav}
        aria-controls="mobile-menu"
        tabIndex={0}
      >
        {!nav ? <FaBars size={24} /> : <FaXmark size={24} />}
      </div>

      <ul
        id="mobile-menu"
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center
          transition-transform duration-300 ease-out transform
          ${
            darkMode
              ? "bg-white/95 backdrop-blur-xl"
              : "bg-white/95 backdrop-blur-xl"
          }
          ${nav ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <li className="py-4 text-2xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors"
          >
            Sobre
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors"
          >
            Skills
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link
            onClick={handleClick}
            to="project"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors"
          >
            Projetos
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
