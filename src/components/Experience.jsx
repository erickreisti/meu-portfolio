import { useTheme } from "../hooks/useTheme";

// Importe os ícones do react-icons
import { FaReact, FaJs, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb"; // Adobe XD

export default function Experience() {
  const { darkMode } = useTheme();

  // Skills técnicas (sem HTML e CSS)
  const technicalSkills = [
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "React", icon: FaReact, color: "text-blue-500" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      // ✅ Força cor branca no modo light (ícone original é preto)
      color: darkMode ? "text-white" : "text-gray-800",
    },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "shadcn/ui", icon: FaReact, color: "text-violet-500" },
  ];

  // Ferramentas de Mockup
  const mockupTools = [
    { name: "Figma", icon: FaFigma, color: "text-purple-600" },
    { name: "Adobe XD", icon: TbBrandAdobe, color: "text-red-500" },
  ];

  // Banco de Dados & ORM
  const databaseTools = [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-600" },
    { name: "Prisma", icon: SiPrisma, color: "text-indigo-600" },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Container principal */}
        <div
          className={`
          backdrop-blur-xl rounded-3xl border shadow-2xl p-8
          ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-white/80 border-gray-200"
          }
        `}
        >
          <div className="text-center mb-12">
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500">
              Skills & Tools
            </p>
          </div>

          {/* Seção de Skills Técnicas */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 text-center ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Tecnologias Front-End
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center justify-center w-28 h-28 rounded-2xl
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${
                      darkMode
                        ? "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                        : "bg-white/60 hover:bg-white/80 border border-gray-200"
                    }
                  `}
                  role="img"
                  aria-label={`Habilidade: ${skill.name}`}
                >
                  <skill.icon className={`w-10 h-10 mb-3 ${skill.color}`} />
                  <span
                    className={`text-xs font-medium text-center px-2 ${
                      darkMode ? "text-slate-200" : "text-gray-800"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Ferramentas de Mockup */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 text-center ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Design & Mockup
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {mockupTools.map((tool, index) => (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center justify-center w-36 h-36 rounded-2xl
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${
                      darkMode
                        ? "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                        : "bg-white/60 hover:bg-white/80 border border-gray-200"
                    }
                  `}
                  role="img"
                  aria-label={`Ferramenta: ${tool.name}`}
                >
                  <tool.icon className={`w-12 h-12 mb-3 ${tool.color}`} />
                  <span
                    className={`text-sm font-medium text-center ${
                      darkMode ? "text-slate-200" : "text-gray-800"
                    }`}
                  >
                    {tool.name}
                  </span>
                  <span
                    className={`text-xs text-center mt-1 opacity-80 ${
                      darkMode ? "text-slate-400" : "text-gray-600"
                    }`}
                  >
                    Criação de Protótipos
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Banco de Dados & ORM */}
          <div>
            <h3
              className={`text-2xl font-bold mb-6 text-center ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Banco de Dados & ORM
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {databaseTools.map((tool, index) => (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center justify-center w-36 h-36 rounded-2xl
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${
                      darkMode
                        ? "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                        : "bg-white/60 hover:bg-white/80 border border-gray-200"
                    }
                  `}
                  role="img"
                  aria-label={`Ferramenta: ${tool.name}`}
                >
                  <tool.icon className={`w-12 h-12 mb-3 ${tool.color}`} />
                  <span
                    className={`text-sm font-medium text-center ${
                      darkMode ? "text-slate-200" : "text-gray-800"
                    }`}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
            <p
              className={`text-center mt-4 text-sm ${
                darkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              Experiência na integração de APIs e bancos de dados em aplicações
              full-stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
