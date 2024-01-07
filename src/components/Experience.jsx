import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Javascript from "../assets/javascript.svg";
import React from "../assets/react.svg";
import Figma from "../assets/figma.svg";
import Tailwind from "../assets/tailwind.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Github from "../assets/github.svg";

export default function Experience() {
  return (
    <section name="skills" className="sm:my-24 h-screen sm:h-full">
      <div className="max-w-[1280px] mx-auto p-4 flex flex-col justify-start sm:justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold py-4 ">Skills</p>
        </div>

        <div className="w-full h-[400px] grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center">
       
        <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[100px] mx-auto rounded-full object-contain"
                  src={Html}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                    HTML<span className="text-xl">5</span>
                  </p>
                </div>
              </div>
            </div>
          </div>   <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[100px] mx-auto rounded-full object-contain"
                  src={Css}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                    CSS<span className="text-xl">5</span>
                  </p>
                </div>
              </div>
            </div>
          </div>   <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[80px] mx-auto rounded-full object-contain"
                  src={Javascript}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                    JAVASCRIPT
                  </p>
                </div>
              </div>
            </div>
          </div>   <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[100px] mx-auto rounded-full object-contain"
                  src={React}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                    REACT
                  </p>
                </div>
              </div>
            </div>
          </div>   <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[100px] mx-auto rounded-full object-contain"
                  src={Figma}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                    FIGMA
                  </p>
                </div>
              </div>
            </div>
          </div>   <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[100px] mx-auto rounded-full object-contain"
                  src={Tailwind}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                   TAILWIND
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[80px] mx-auto rounded-full object-contain"
                  src={Bootstrap}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                    BOOTSTRAP
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[120px] group [perspective:1000px] mx-auto my-auto">
            <div className="relative h-[140px] w-[140px] rounded-full shadow-md shadow-stone-900 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  className="h-[140px] w-[100px] mx-auto rounded-full object-contain"
                  src={Github}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-[140px] w-[140px] rounded-full bg-[#3454d1] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="text-sm font-bold">
                    GITHUB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
