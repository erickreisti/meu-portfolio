import heroImage from "../assets/itsme.png";
import { FaGithub, FaChevronDown } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useTheme } from "../hooks/useTheme";
import { useScrollPosition } from "../hooks/useScrollPosition";

export default function Home() {
  const { darkMode } = useTheme();
  const scrollPosition = useScrollPosition();
  const showArrow = scrollPosition < 80;

  return (
    <header
      id="home"
      className="w-full min-h-screen flex items-center relative pt-20 pb-16"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Imagem de Perfil */}
        <div className="flex justify-center md:justify-start md:flex-1">
          <div
            className={`
              w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 md:border-8
              ${
                darkMode
                  ? "border-white/20 shadow-blue-500/20"
                  : "border-gray-200"
              }
              transition-all duration-500
            `}
          >
            <img
              src={heroImage}
              alt="Érick Reis"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Conteúdo de Texto */}
        <div className="flex-1 w-full space-y-8 md:text-left md:items-start">
          <p
            className={`text-lg md:text-xl font-normal ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Olá, eu sou
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <span>#</span>Érick Reis
            <span className="inline-block w-1 h-8 md:h-10 lg:h-12 bg-current ml-2 animate-pulse"></span>
          </h1>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Desenvolvedor Web
          </h2>
          <p
            className={`text-base md:text-lg max-w-md lg:max-w-lg ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Sou um Desenvolvedor Front-End especializado na construção de
            websites responsivos e dinâmicos.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Contate-me
          </Link>

          {/* Redes Sociais */}
          <div className="flex gap-5 md:gap-6 mt-8">
            <a
              href="https://twitter.com/ereislima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-white" size={20} />
            </a>
            <a
              href="https://github.com/erickreisti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-full transition-all duration-300 transform hover:scale-105"
              aria-label="GitHub"
            >
              <FaGithub className="text-white" size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all duration-300 transform hover:scale-105"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white" size={20} />
            </a>
          </div>
        </div>
      </div>
      {showArrow && (
        <div className="fixed inset-x-0 bottom-6 flex justify-center z-20 pointer-events-none">
          <div className="flex flex-col items-center animate-bounce pointer-events-auto">
            <FaChevronDown
              className={`${darkMode ? "text-white/80" : "text-gray-700/80"}`}
              size={20}
            />
            <span
              className={`text-xs mt-1 ${
                darkMode ? "text-white/60" : "text-gray-600"
              }`}
            >
              Role para baixo
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
