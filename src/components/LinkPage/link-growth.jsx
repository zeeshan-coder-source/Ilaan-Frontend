import React from "react";

import bgDesktop from "../../assets/LINK/growth-bg.png";
import bgMobile from "../../assets/signage/bgmobile.png";

const bullets = [
  "Staff updating paper labels",
  "Time-consuming price changes",
  "Risk of pricing errors",
  "Delays in promotions going live",
];

function CustomBulletIcon() {
  return (
    <span className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.3px] border-black bg-white">
      <span className="h-[8px] w-[8px] rounded-full bg-[#EEE602]" />
    </span>
  );
}

export default function ManualPricingSection() {
  return (
    <section
      className="
        relative w-full overflow-x-hidden bg-no-repeat bg-cover
        bg-center md:bg-right
        bg-[image:var(--sg-bg-mobile)]
        md:bg-[image:var(--sg-bg-desktop)]
        font-['Poppins',sans-serif]
      "
      style={{
        "--sg-bg-mobile": `url(${bgMobile})`,
        "--sg-bg-desktop": `url(${bgDesktop})`,
      }}
    >
      {/* Readability overlay on mobile */}
      <div className="absolute inset-0 bg-white/55 md:bg-transparent pointer-events-none" />

      <div className="relative mx-auto w-full px-6 sm:px-14 lg:px-24 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[75vh]">

          {/* Left Text Column */}
          <div className="lg:col-span-7 xl:col-span-6 text-left z-10 max-w-full lg:max-w-[711px]">

            {/* Main Heading — fluid: 30px → 70px */}
            <h1
              className="font-semibold text-[#000000] leading-[1.18] tracking-[0%]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.5rem, 4.375rem)' }}
            >
              Manual Pricing <br />
              Doesn't Scale
            </h1>

            {/* Accent Bar */}
            <div className="mt-4 h-[6px] w-[192px] bg-[#EEE602]" />

            {/* Description — fluid: 14px → 20px */}
            <p
              className="mt-6 sm:mt-8 lg:mt-10 text-[#000000] font-normal leading-[1.32]"
              style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.7rem, 1.265625rem)' }}
            >
              Retail environments still rely heavily on manual processes:
            </p>

            {/* Bulleted List */}
            <ul className="mt-4 sm:mt-6 w-full space-y-0">
              {bullets.map((text, i) => (
                <li key={i} className="border-b border-[#000000]/20 py-[10px] sm:py-[12px] flex items-center gap-[14px]">
                  <CustomBulletIcon />
                  {/* Bullet text — fluid: 13px → 18px */}
                  <span
                    className="text-[#000000] font-normal leading-[1.32]"
                    style={{ fontSize: 'clamp(0.8125rem, 0.35vw + 0.65rem, 1.125rem)' }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bottom Block */}
            <div className="mt-6 sm:mt-10">
              <div className="h-[4px] w-[42px] bg-[#EEE602] mb-4" />
              {/* Bottom text — fluid: 13px → 18px */}
              <p
                className="font-medium text-[#000000] leading-[1.32]"
                style={{ fontSize: 'clamp(0.8125rem, 0.35vw + 0.65rem, 1.125rem)' }}
              >
                As product ranges grow, <br />
                these challenges increase.
              </p>
            </div>

          </div>

          {/* Right Column Spacer */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </div>
    </section>
  );
}