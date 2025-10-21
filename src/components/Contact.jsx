import { useRef, useState } from "react";
import { useLottie } from "lottie-react";
import sendMessage from "../assets/lottie-message.json";
import { useTheme } from "../hooks/useTheme";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode } = useTheme();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Configurações do EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validação das variáveis de ambiente
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Configuração do EmailJS não encontrada. Verifique as variáveis de ambiente."
        );
      }

      // Envia o email usando EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log("Email enviado com sucesso:", result);
      setSuccess(true);
      form.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert(`Erro ao enviar mensagem: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
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
                  name="user_name"
                  placeholder="Nome"
                  className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white placeholder-gray-300"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                />
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="E-mail"
                  className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white placeholder-gray-300"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                />
                <textarea
                  required
                  name="message"
                  rows="6"
                  placeholder="Mensagem"
                  className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white placeholder-gray-300"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
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
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:from-blue-700 hover:to-purple-700 hover:scale-105"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    "Enviar Mensagem"
                  )}
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
