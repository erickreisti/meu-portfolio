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
    <nav className="fixed w-full bg-denim-like flex justify-between items-center px-6 py-6 z-50">
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
            className="hover:text-blue-400 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
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

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={24} /> : <FaXmark size={24} />}
      </div>

      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-denim-like flex flex-col items-center justify-center transition-transform duration-300 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
