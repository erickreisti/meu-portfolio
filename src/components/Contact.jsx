import { useRef } from "react";
import emailjs from "emailjs-com";

import { useLottie } from "lottie-react";
import sendMessage from "../assets/lottie-message.json";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4s3t8is",
      "template_jyeoh9n",
      form.current,
      "0PCfxOPAkpZ_HlAAN"
    );

    e.target.reset();
  };

  // LOTTIE ANIMATION

  const options = {
    animationData: sendMessage,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      name="contact"
      id="contact"
      className="flex justify-center items-center my-24"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full p-2"
      >
        <div className="pb-8">
          <p className="text-5xl font-bold py-4">Contact</p>
        </div>
        <input
          className="p-2 border-2 font-medium text-black bg-[#f7f4f3] rounded-lg outline-none focus:border-[#3f65ff] focus:bg-[#f7f4f3]"
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          className="my-4 p-2 border-2 font-medium text-black bg-[#f7f4f3] rounded-lg outline-none focus:border-[#3f65ff] focus:bg-[#f7f4f3]"
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <textarea
          className="p-2 border-2 font-medium text-black bg-[#f7f4f3] rounded-lg outline-none focus:border-[#3f65ff] focus:bg-[#f7f4f3]"
          name="message"
          rows="10"
          placeholder="Mensagem"
        ></textarea>
        <button
          type="submit"
          className="text-white font-semibold bg-[#3f65ff] hover:bg-[#3454d1] px-4 py-3 my-8 mx-auto flex items-center rounded-lg"
        >
          Fale comigo!
        </button>
      </form>
      <div className="hidden lg:flex w-1/3 pointer-events-none">{View}</div>
    </div>
  );
}
