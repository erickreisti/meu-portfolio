import heroImage from "../assets/itsme.png";
import { FaGithub, FaChevronDown } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <header
      id="home"
      className="w-full min-h-screen flex items-center relative"
    >
      <div className="max-w-[1280px] mx-auto px-8 py-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-8">
          <p
            className={`text-xl md:text-2xl font-normal ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Olá, eu sou
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 relative">
            <span>#</span>Érick Reis
            <span className="inline-block w-1 h-12 bg-current ml-2 animate-pulse"></span>
          </h1>
          <h2
            className={`text-xl sm:text-4xl font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Desenvolvedor Web
          </h2>
          <p
            className={`text-lg max-w-md ${
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
          <div className="flex gap-6 mt-8">
            <a
              href="https://twitter.com/ereislima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ transitionDelay: "0.1s" }}
              aria-label="Twitter"
            >
              <FaXTwitter className="text-white" size={24} />
            </a>
            <a
              href="https://github.com/erickreisti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ transitionDelay: "0.2s" }}
              aria-label="GitHub"
            >
              <FaGithub className="text-white" size={24} />
            </a>
            {/* ✅ Ícone do Instagram */}
            <a
              href="#" // ← Substitua pela sua URL do Instagram depois
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ transitionDelay: "0.3s" }}
              aria-label="Instagram"
            >
              <FaInstagram className="text-white" size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end pr-8 lg:pr-0">
          <div
            className={`
              w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8
              ${
                darkMode
                  ? "border-white/20 shadow-blue-500/20"
                  : "border-gray-200"
              }
              transition-all duration-500
              ${darkMode ? "hover:shadow-blue-500/40" : "hover:shadow-xl"}
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
      </div>

      {/* ✅ Seta com descrição */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <FaChevronDown className="text-white/80" size={24} />
        <span className="text-xs text-white/60 mt-2">Role para baixo</span>
      </div>
    </header>
  );
}
