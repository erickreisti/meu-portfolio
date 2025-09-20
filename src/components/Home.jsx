import heroImage from "../assets/itsme.png";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <header id="home" className="w-full min-h-screen flex items-center">
      <div className="max-w-[1280px] mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <p className="text-xl md:text-2xl font-normal">Olá, eu sou</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <span>#</span>Érick Reis
          </h1>
          <h2 className="text-xl sm:text-4xl font-medium">Desenvolvedor Web</h2>
          <p className="text-lg max-w-md">
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
              className="w-16 h-16 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition"
            >
              <FaXTwitter className="text-white" size={24} />
            </a>
            <a
              href="https://github.com/erickreisti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-full transition"
            >
              <FaGithub className="text-white" size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white/20">
            <img
              src={heroImage}
              alt="Érick Reis"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
