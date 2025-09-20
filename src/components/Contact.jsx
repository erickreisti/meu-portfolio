import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useLottie } from "lottie-react";
import sendMessage from "../assets/lottie-message.json";
import { useTheme } from "../hooks/useTheme";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const { darkMode } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4s3t8is",
        "template_jyeoh9n",
        form.current,
        "0PCfxOPAkpZ_HlAAN"
      )
      .then(() => {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar mensagem. Tente novamente.");
      });
  };

  const options = { animationData: sendMessage, loop: true };
  const { View } = useLottie(options);

  return (
    <div id="contact" className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500">
                  Contato
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Nome"
                  className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                />
                <textarea
                  required
                  name="message"
                  rows="6"
                  placeholder="Mensagem"
                  className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                ></textarea>

                {success && (
                  <p
                    className={`font-semibold text-center py-3 px-4 rounded-lg ${
                      darkMode
                        ? "text-green-400 bg-green-500/10 border border-green-500/20"
                        : "text-green-700 bg-green-50 border border-green-200"
                    }`}
                    aria-live="polite"
                  >
                    ✅ Mensagem enviada com sucesso!
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="flex justify-center">
              <div
                className={`w-full max-w-md p-8 rounded-3xl border ${
                  darkMode
                    ? "backdrop-blur-lg bg-white/5 border-white/20"
                    : "bg-white/60 border-gray-200"
                }`}
              >
                {View}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
