import img01 from "../assets/website1.jpeg";
import img02 from "../assets/website2.jpeg";
import img03 from "../assets/website3.jpeg";
import img04 from "../assets/website4.jpeg";
import img05 from "../assets/website5.jpeg";
import img06 from "../assets/website6.jpeg";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "Enviesado em exibir os serviços prestados.",
      image: img01,
      github: "https://github.com/erickreisti/fabioportifolio",
      live: null,
    },
    {
      id: 2,
      title: "Vitrine de Vinhos",
      description: "Destinado a apresentação de produtos.",
      image: img02,
      github: "https://github.com/erickreisti/wineforlife",
      live: null,
    },
    {
      id: 3,
      title: "Venda de Planos",
      description: "Votado a marketing digital e blogs.",
      image: img03,
      github: null,
      live: null,
    },
    {
      id: 4,
      title: "Petshop",
      description: "Spa para animais de estimação.",
      image: img04,
      github: null,
      live: null,
    },
    {
      id: 5,
      title: "Institucional",
      description: "Inspirado na Copa do Mundo Qatar 2022.",
      image: img05,
      github: null,
      live: null,
    },
    {
      id: 6,
      title: "Cardápio de Produtos",
      description: "Exibição de cardápio e contato.",
      image: img06,
      github: "https://github.com/erickreisti/projectboi",
      live: null,
    },
  ];

  return (
    <section id="project" className="sm:my-24 py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500">
            Projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white/20 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Imagem do Projeto */}
              <div className="h-72 overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={`Projeto: ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
                  loading="lazy"
                />
              </div>

              {/* Overlay de Conteúdo — INICIALMENTE ESCONDIDO */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/100 via-transparent to-transparent opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <div className="bg-black/50 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Botões de Ação */}
                  <div className="flex gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Github
                      </a>
                    ) : (
                      <span className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg text-center font-medium opacity-60 cursor-not-allowed">
                        Github
                      </span>
                    )}

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-gray-900 py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 12l4-4m0 0l-4-4m4 4H6"
                          />
                        </svg>
                        Live
                      </a>
                    ) : (
                      <span className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg text-center font-medium opacity-60 cursor-not-allowed">
                        Live
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
