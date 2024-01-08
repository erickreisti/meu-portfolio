import img01 from "../assets/website1.jpeg";
import img02 from "../assets/website2.jpeg";
import img03 from "../assets/website3.jpeg";
import img04 from "../assets/website4.jpeg";
import img05 from "../assets/website5.jpeg";
import img06 from "../assets/website6.jpeg";

export default function Project() {
  return (
    <section name="project" className="sm:my-24">
      <div className="max-w-[1280px] mx-auto p-4 flex flex-col w-full h-full">
        <div>
          <p className="text-5xl font-bold pb-4">Projetos</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-8">
          <div className="relative p-4 rounded-2xl flex flex-col items-center bg-[#3454d1] mx-auto my-6 gap-5">
            <div className="w-[280px]">
              <img
                className="object-cover rounded-2xl h-[200px]"
                src={img01}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-[#f7f4f3]">Portfolio</p>
            <p className="text-sm font-light text-center text-[#f7f4f3] mb-4">
              Enviesado em exibir os serviços prestados.
            </p>
            <div className="w-full absolute bottom-[-25px] flex justify-center gap-8">
              <a
                href="https://github.com/erickreisti/fabioportifolio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7f4f3] py-2 px-4 bg-[#3f65ff]  rounded-full hover:bg-[#476cfd]"
              >
                Github
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-950 py-2 px-4 bg-[#fdd13f] rounded-full hover:bg-[#e2ba37]"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="relative p-4 rounded-2xl flex flex-col items-center bg-[#3454d1] mx-auto my-6 gap-5">
            <div className="w-[280px]">
              <img
                className="object-cover rounded-2xl h-[200px]"
                src={img02}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-[#f7f4f3]">
              Vitrine de Vinhos
            </p>
            <p className="text-sm font-light text-center text-[#f7f4f3] mb-4">
              Destinado a apresentação de produtos.
            </p>
            <div className="w-full absolute bottom-[-25px] flex justify-center gap-8">
              <a
                href="https://github.com/erickreisti/wineforlife"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7f4f3] py-2 px-4 bg-[#3f65ff]  rounded-full hover:bg-[#476cfd]"
              >
                Github
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-950 py-2 px-4 bg-[#fdd13f] rounded-full hover:bg-[#e2ba37]"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="relative p-4 rounded-2xl flex flex-col items-center bg-[#3454d1] mx-auto my-6 gap-5">
            <div className="w-[280px]">
              <img
                className="object-cover rounded-2xl h-[200px]"
                src={img03}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-[#f7f4f3]">
              Venda de Planos
            </p>
            <p className="text-sm font-light text-center text-[#f7f4f3] mb-4">
              Votado a marketing digital e blogs.
            </p>
            <div className="w-full absolute bottom-[-25px] flex justify-center gap-8">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7f4f3] py-2 px-4 bg-[#3f65ff]  rounded-full hover:bg-[#476cfd]"
              >
                Github
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-950 py-2 px-4 bg-[#fdd13f] rounded-full hover:bg-[#e2ba37]"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="relative p-4 rounded-2xl flex flex-col items-center bg-[#3454d1] mx-auto my-6 gap-5">
            <div className="w-[280px]">
              <img
                className="object-cover rounded-2xl h-[200px]"
                src={img04}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-[#f7f4f3]">Petshop</p>
            <p className="text-sm font-light text-center text-[#f7f4f3] mb-4">
              Spa para animais de estimação.
            </p>
            <div className="w-full absolute bottom-[-25px] flex justify-center gap-8">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7f4f3] py-2 px-4 bg-[#3f65ff]  rounded-full hover:bg-[#476cfd]"
              >
                Github
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-950 py-2 px-4 bg-[#fdd13f] rounded-full hover:bg-[#e2ba37]"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="relative p-4 rounded-2xl flex flex-col items-center bg-[#3454d1] mx-auto my-6 gap-5">
            <div className="w-[280px]">
              <img
                className="object-cover rounded-2xl h-[200px]"
                src={img05}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-[#f7f4f3]">
              Institucional
            </p>
            <p className="text-sm font-light text-center text-[#f7f4f3] mb-4">
              Inspirado na Copa do Mundo Qatar 2022.
            </p>
            <div className="w-full absolute bottom-[-25px] flex justify-center gap-8">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7f4f3] py-2 px-4 bg-[#3f65ff]  rounded-full hover:bg-[#476cfd]"
              >
                Github
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-950 py-2 px-4 bg-[#fdd13f] rounded-full hover:bg-[#e2ba37]"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="relative p-4 rounded-2xl flex flex-col items-center bg-[#3454d1] mx-auto my-6 gap-5">
            <div className="w-[280px]">
              <img
                className="object-cover rounded-2xl h-[200px]"
                src={img06}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-[#f7f4f3]">
              Cardápio de Produtos
            </p>
            <p className="text-sm font-light text-center text-[#f7f4f3] mb-4">
              Exibição de cardápio e contato.
            </p>
            <div className="w-full absolute bottom-[-25px] flex justify-center gap-8">
              <a
                href="https://github.com/erickreisti/projectboi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7f4f3] py-2 px-4 bg-[#3f65ff]  rounded-full hover:bg-[#476cfd]"
              >
                Github
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-950 py-2 px-4 bg-[#fdd13f] rounded-full hover:bg-[#e2ba37]"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
