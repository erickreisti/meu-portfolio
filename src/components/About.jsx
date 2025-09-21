import abstractImage from "../assets/bg-abstractcode.png";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-scroll";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div
          className={`
          rounded-3xl border shadow-2xl p-8
          ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-white border-gray-200 text-gray-800"
          }
        `}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white/20">
                <img
                  src={abstractImage}
                  alt="Representação visual do processo de desenvolvimento"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500">
                  Sobre mim
                </p>
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-slate-200" : "text-gray-800"
                }`}
              >
                Olá! Meu nome é{" "}
                <strong className="text-blue-500">Érick Reis</strong>, sou
                tecnólogo em Tecnologia da Informação, graduado em Sistemas de
                Informação e pós-graduado em Redes de Computadores.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-slate-200" : "text-gray-800"
                }`}
              >
                Com uma carreira sólida em diversas áreas da T.I., migrei para o
                desenvolvimento web, onde atuo como{" "}
                <strong className="text-purple-500">
                  desenvolvedor full-stack
                </strong>
                . Tenho experiência tanto no frontend moderno (React, Next.js,
                Tailwind) quanto na integração com APIs, bancos de dados e
                infraestrutura.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-slate-200" : "text-gray-800"
                }`}
              >
                Minha visão de sistema me permite entregar soluções completas,
                escaláveis e seguras — do banco de dados à interface do usuário.
                Acredito que a tecnologia deve resolver problemas reais, e é com
                essa premissa que desenvolvo: buscando{" "}
                <strong>eficiência, clareza e valor entregue</strong>.
              </p>
              <div>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Vamos conversar!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
