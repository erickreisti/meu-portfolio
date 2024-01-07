import heroImage from "../assets/itsme.png";

import { FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <header name="home" className="w-full h-screen">
      <div className="max-w-[1280px] mx-auto px-8 pb-8 flex flex-col justify-end h-full gap-4">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl font-normal py-4">Olá, eu sou</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl pb-4 font-bold text-[#3f65ff]">
            <span>#</span>Érick Reis
            <span>
              <svg
                viewBox="0 0 24 24"
                className="w-12 stroke-yellow-500 fill-transparent inline-block stroke-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 21C12.8954 21 12 20.1046 12 19V15.3255C12 14.8363 12 14.5917 11.9447 14.3615C11.8957 14.1575 11.8149 13.9624 11.7053 13.7834C11.5816 13.5816 11.4086 13.4086 11.0627 13.0627L10 12L11.0627 10.9373C11.4086 10.5914 11.5816 10.4184 11.7053 10.2166C11.8149 10.0376 11.8957 9.84254 11.9447 9.63846C12 9.40829 12 9.1637 12 8.67452V5C12 3.89543 12.8954 3 14 3" />
              </svg>
            </span>
          </h1>
          <h2 className="text-xl sm:text-4xl mb-2 font-medium">
            Desenvolvedor Web
          </h2>
          <p className="text-xl font-light py-4 max-w-[500px]">
            Sou um Desenvolvedor Front-End especializado na construção de
            websites responsivos e dinâmicos.
          </p>
          <span>
            <svg
              viewBox="0 0 24 24"
              className="w-12 stroke-yellow-500 fill-transparent block stroke-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 21C11.1046 21 12 20.1046 12 19V15.3255C12 14.8363 12 14.5917 12.0553 14.3615C12.1043 14.1575 12.1851 13.9624 12.2947 13.7834C12.4184 13.5816 12.5914 13.4086 12.9373 13.0627L14 12L12.9373 10.9373C12.5914 10.5914 12.4184 10.4184 12.2947 10.2166C12.1851 10.0376 12.1043 9.84254 12.0553 9.63846C12 9.40829 12 9.1637 12 8.67452V5C12 3.89543 11.1046 3 10 3" />
            </svg>
          </span>

          <a
            className="scroll-smooth text-white px-6 py-3 my-4 rounded-lg bg-[#3f65ff] hover:bg-[#3454d1] self-start"
            href="#contact"
          >
            Contate-me
          </a>
        </div>

        <div className="bg-yellow-500 rounded-md h-40 relative">
          <img
            className="absolute object-contain w-[40%] bottom-0 right-0"
            src={heroImage}
            alt="Érick Reis"
          />
        </div>

        <div className="self-center mt-8">
          <div className="flex items-center gap-4 relative">
            <a
              href="https://twitter.com/ereislima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[80px] h-[80px] flex flex-col items-center justify-center text-sky-200 font-bold bg-[#3f65ff] rounded-full hover:bg-[#3454d1]"
            >
              <FaXTwitter size={30} />
            </a>
            <a
              href="https://github.com/erickreisti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[80px] h-[80px] flex flex-col items-center justify-center text-sky-200 font-bold bg-[#3f65ff] rounded-full hover:bg-[#3454d1]"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
