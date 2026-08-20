import React from "react";

import bgDesktop from "../../assets/signage/bgdesktop.png";
import bgMobile from "../../assets/signage/bgmobile.png";

const bullets = [
  "High brightness for clear visibility in sunlight and bright environments.",
  "Built for 24/7 operation with commercial-grade reliability.",
  "Engineered for high-traffic spaces and demanding conditions.",
];

function CustomBulletIcon() {
  return (
    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#B7DE07] bg-transparent">
      <span className="h-1.5 w-1.5 rounded-full bg-[#B7DE07]" />
    </span>
  );
}

export default function SignageGrowth() {
  return (
    <section
      data-header-theme="light"
      className="
        relative w-full bg-no-repeat bg-cover bg-center md:bg-top
        bg-[image:var(--sg-bg-mobile)]
        md:bg-[image:var(--sg-bg-desktop)]
      "
      style={{
        "--sg-bg-mobile": `url(${bgMobile})`,
        "--sg-bg-desktop": `url(${bgDesktop})`,
      }}
    >
      <div
        className="
          mx-auto max-w-[1440px] max-w-[1920px] max-w-[2560px]
          px-5 sm:px-8 lg:px-16 min-[1920px]:px-24
        "
      >
        <div
          className="
            grid grid-cols-1 lg:grid-cols-12 gap-8 items-center
            min-h-screen pt-12 pb-64 sm:pb-80 md:py-20 lg:py-28
          "
        >
          <div className="lg:col-span-6 xl:col-span-5 text-left z-10 max-w-lg lg:max-w-xl">
            <h2
              className="
                font-extrabold leading-[1.08] text-black tracking-tight
                text-3xl sm:text-4xl lg:text-5xl xl:text-[56px]
              "
            >
              Built for <br />
              Performance, <br />
              <span className="text-[#B7DE07] block mt-1">
                Not Just Display
              </span>
            </h2>

            <p
              className="
                mt-5 sm:mt-6 text-black/90 leading-relaxed font-normal
                text-xs sm:text-sm lg:text-[15px] xl:text-[16px] max-w-md lg:max-w-lg
              "
            >
              Not all screens are designed for commercial environments. Ilaan
              digital signage solutions are selected and configured to perform
              reliably in demanding conditions, from bright shop windows to
              high-traffic indoor spaces.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4 max-w-md lg:max-w-lg">
              {bullets.map((text, i) => (
                <li
                  key={i}
                  className={`pb-3.5 sm:pb-4 ${i !== bullets.length - 1
                    ? "border-b border-black/15"
                    : ""
                    }`}
                >
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <CustomBulletIcon />
                    <p className="text-black font-normal text-xs sm:text-sm lg:text-[15px] leading-snug">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8">
              <p className="font-bold text-black text-xs sm:text-sm lg:text-[15px]">
                Performance you can rely on.
              </p>
              <p className="text-[#B7DE07] font-semibold text-xs sm:text-sm lg:text-[15px] mt-0.5">
                Every screen. Every environment
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />
        </div>
      </div>
    </section>
  );
}