import hash from "../assets/hash-white.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-8 bg-[#3454d1]">
      <div className="max-w-[1280px] mx-auto p-4 flex flex-col w-full">
        <div className="flex p-4 items-center justify-center">
          <img
            src={hash}
            alt="logo Erick Reis"
            className="w-[10%] object-contain"
          />
          <p className="font-bold text-[#f7f4f3] text-4xl">Érick Reis</p>
        </div>
        <div className="flex gap-4 p-4 items-center justify-center">
          <small className="text-[#f7f4f3]">
            &copy; Érick Reis. Todos os Direitos Reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}
