import img01 from "../assets/website1.png";
import img02 from "../assets/website2.png";
import img03 from "../assets/website3.png";
import img04 from "../assets/website4.png";
import img05 from "../assets/website5.png";
import img06 from "../assets/website6.jpeg";
import { useTheme } from "../hooks/useTheme";

export default function Project() {
  const { darkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "CodeCraft",
      description:
        "Plataforma de cursos fullstack com stack moderna: catálogo, carrinho, checkout, dashboard de aluno e adminitrador integrados.",
      image: img01,
      github: "https://github.com/erickreisti/fabioportifolio",
      live: null,
    },
    {
      id: 2,
      title: "Wine for Life",
      description:
        "Desenvolvimento de site institucional para vinícola, criando identidade visual que transmite tradição e frescor através de design limpo e conteúdo persuasivo.",
      image: img02,
      github: "https://github.com/erickreisti/wineforlife",
      live: "https://erickreisti.github.io/wine-for-life/",
    },
    {
      id: 3,
      title: "Bio Fitness",
      description:
        "Projeto de landing page com design clean e copy estratégico para conversão em marca do segmento wellness e nutrição.",
      image: img03,
      github: "https://github.com/erickreisti/biofitness",
      live: null,
    },
    {
      id: 4,
      title: "Petcare",
      description:
        "SSite para petshop com foco em grooming e cuidados veterinários, oferecendo serviços especializados para saúde e bem-estar dos animais de estimação.",
      image: img04,
      github: "https://github.com/erickreisti/petcare-petshop",
      live: null,
    },
    {
      id: 5,
      title: "Copa do Mundo",
      description:
        "Site conceitual para a Seleção Brasileira na Copa do Mundo FIFA 2022, com design patriótico e navegação temática inspirada no universo do futebol.",
      image: img05,
      github: "https://github.com/erickreisti/world-cup-2022",
      live: null,
    },
    {
      id: 6,
      title: "Boi de Ouro",
      description:
        "Landing page premium para churrascaria com cardápio digital integrado, sistema de pedidos online e design que une tradição gaúcha à modernidade.",
      image: img06,
      github: "https://github.com/erickreisti/projectboi",
      live: null,
    },
  ];

  return (
    <section id="project" className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500">
            Projetos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
                ${
                  darkMode
                    ? "bg-white/10 backdrop-blur-sm border border-white/20"
                    : "bg-white/80 border border-gray-200"
                }
              `}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                {/* ✅ Título preto no light mode */}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
                {/* ✅ Descrição preta no light mode */}
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-slate-300" : "text-gray-800"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-medium transition"
                    >
                      Github
                    </a>
                  ) : (
                    <span className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg text-center font-medium opacity-60 cursor-not-allowed">
                      Github
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
