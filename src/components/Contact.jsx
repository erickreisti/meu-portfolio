import { useRef, useState } from "react";
import { useLottie } from "lottie-react";
import sendMessage from "../assets/lottie-message.json";
import { useTheme } from "../hooks/useTheme";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { darkMode } = useTheme();

  // Função para capitalizar a primeira letra do nome
  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  // Função de validação
  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validação do nome
    if (!name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    // Validação do email
    if (!email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Digite um email válido (exemplo: nome@email.com)";
    }

    // Validação da mensagem
    if (!message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    } else if (message.trim().length > 1000) {
      newErrors.message = "Mensagem não pode ter mais de 1000 caracteres";
    }

    return newErrors;
  };

  // Handler para capitalizar o nome enquanto digita
  const handleNameChange = (e) => {
    const input = e.target;
    const cursorPosition = input.selectionStart;
    const originalValue = input.value;

    // Aplica capitalização
    const capitalizedValue = capitalizeName(originalValue);

    // Atualiza o valor mantendo a posição do cursor
    if (originalValue !== capitalizedValue) {
      input.value = capitalizedValue;
      // Restaura a posição do cursor
      input.setSelectionRange(cursorPosition, cursorPosition);
    }

    // Limpa erro do campo
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  // Handler para validação em tempo real do email
  const handleEmailChange = (e) => {
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Handler para validação em tempo real da mensagem
  const handleMessageChange = (e) => {
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(form.current);

    // Aplica capitalização no nome antes de validar
    const name = formData.get("name");
    if (name) {
      formData.set("name", capitalizeName(name));
    }

    // Valida o formulário
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsLoading(false);

      // Rola até o primeiro erro
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = document.querySelector(
        `[name="${firstErrorField}"]`
      );
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        errorElement.focus();
      }
      return;
    }

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
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
                noValidate
              >
                {/* Campo Nome */}
                <div className="space-y-2">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Nome"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-blue-500 border-gray-300"
                    } ${
                      darkMode
                        ? "bg-white/10 text-white placeholder-gray-300"
                        : "bg-white text-gray-800 placeholder-gray-500"
                    }`}
                    onChange={handleNameChange}
                    onBlur={handleNameChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <span>⚠️</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Campo Email */}
                <div className="space-y-2">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="E-mail (exemplo: nome@email.com)"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-blue-500 border-gray-300"
                    } ${
                      darkMode
                        ? "bg-white/10 text-white placeholder-gray-300"
                        : "bg-white text-gray-800 placeholder-gray-500"
                    }`}
                    onChange={handleEmailChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <span>⚠️</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Campo Mensagem */}
                <div className="space-y-2">
                  <textarea
                    required
                    name="message"
                    rows="6"
                    placeholder="Mensagem (mínimo 10 caracteres)"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 resize-none transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-blue-500 border-gray-300"
                    } ${
                      darkMode
                        ? "bg-white/10 text-white placeholder-gray-300"
                        : "bg-white text-gray-800 placeholder-gray-500"
                    }`}
                    onChange={handleMessageChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <span>⚠️</span> {errors.message}
                    </p>
                  )}
                </div>

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
