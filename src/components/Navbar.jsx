import { useState } from "react";
import { FaBars, FaXmark, FaMoon } from "react-icons/fa6";
import { Link } from "react-scroll";
import hash from "../assets/hash-white.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const liMenu = "hover:text-[#3f65ff]";

  return (
    <nav className="fixed w-full bg-[url('../src/assets/denim.webp')] flex justify-between items-center px-6 py-6 z-10">
      <div>
        <img
          className="w-[80px] object-contain"
          src={hash}
          alt="logo Erick Reis"
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className={liMenu}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={liMenu}>
          <Link to="about" smooth={true} duration={500} offset={-250}>
            Sobre
          </Link>
        </li>
        <li className={liMenu}>
          <Link to="skills" smooth={true} duration={500} offset={-150}>
            Skills
          </Link>
        </li>
        <li className={liMenu}>
          <Link to="project" smooth={true} duration={500} offset={-150}>
            Projetos
          </Link>
        </li>
        <li className={liMenu}>
          <Link to="contact" smooth={true} duration={500} offset={-150}>
            Contato
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex">
        <FaMoon size={20} />
      </div>

      {/* Menu Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={20} /> : <FaXmark size={20} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[url('../src/assets/denim.webp')] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-[#3f65ff]">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#3f65ff]">
          <Link
            onClick={handleClick}
            offset={-150}
            to="about"
            smooth={true}
            duration={500}
          >
            Sobre
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#3f65ff]">
          <Link
            onClick={handleClick}
            offset={-150}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#3f65ff]">
          <Link
            onClick={handleClick}
            offset={-150}
            to="project"
            smooth={true}
            duration={500}
          >
            Projetos
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#3f65ff]">
          <Link
            onClick={handleClick}
            offset={-150}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
