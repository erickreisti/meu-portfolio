import hashWhite from "../assets/hash-white.svg";
import hashBlue from "../assets/hash-blue.svg";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const { darkMode } = useTheme();
  const logoSrc = darkMode ? hashWhite : hashBlue;

  return (
    <footer role="contentinfo" className="py-12 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div
          className={`
          backdrop-blur-xl rounded-3xl border p-8 shadow-2xl
          ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-white/80 border-gray-200"
          }
        `}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-center gap-4">
              <img
                src={logoSrc}
                alt="Logo Erick Reis"
                className="w-16 h-16 object-contain"
              />
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500">
                Érick Reis
              </p>
            </div>
            <div className="text-center lg:text-right">
              <small
                className={`block ${
                  darkMode ? "text-slate-400" : "text-gray-600"
                } mb-2`}
              >
                &copy; Érick Reis {new Date().getFullYear()}. Todos os Direitos
                Reservados.
              </small>
              <a
                href="#home"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-all duration-300 transform hover:scale-105"
                aria-label="Voltar ao topo"
              >
                Voltar ao topo ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
