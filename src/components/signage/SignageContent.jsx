import React from "react";

// Asset Imports
import bgDesktop from "../../assets/signage/Group 1261156827.png";
import bgMobile from "../../assets/signage/Group 1261156935.png";

import curveIcon from "../../assets/signage/curve 1.png";
import targetIcon from "../../assets/signage/target-outline-symbol-in-a-circle 1.png";

const bulletPoints = [
  "Digital displays capture significantly more attention than static signage.",
  "Content can be updated instantly across locations.",
  "Dynamic displays improve engagement and communication.",
];

const bottomFeatures = [
  {
    id: 1,
    title: "Optimised for digital formats",
    desc: "Built to perform across every screen and platform.",
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2560px]:w-20 min-[2560px]:h-20 text-[#D0FF00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="1" y1="20" x2="23" y2="20" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Designed for real environment",
    desc: "Created to stand out in real-world conditions.",
    icon: (
      <img
        src={curveIcon}
        alt="Designed for real environment"
        className="w-10 h-10 sm:w-12 sm:h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2560px]:w-20 min-[2560px]:h-20 object-contain"
      />
    ),
  },
  {
    id: 3,
    title: "Designed for real environment",
    desc: "Created to stand out in real-world conditions.",
    icon: (
      <img
        src={targetIcon}
        alt="Designed for real environment"
        className="w-10 h-10 sm:w-12 sm:h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2560px]:w-20 min-[2560px]:h-20 object-contain"
      />
    ),
  },
];

export default function SignageContent() {
  return (
    <section
      className="
        relative w-full bg-black text-white overflow-hidden select-none
        aspect-[402/786] lg:aspect-auto lg:min-h-screen lg:max-h-[1080px] min-[2560px]:max-h-[1440px]
        flex items-start lg:items-center
      "
    >
      {/* Background Image Layer */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <img
          src={bgMobile}
          alt="Retail storefront digital signage environment"
          className="w-full h-full object-cover object-top lg:object-center opacity-90"
        />
      </picture>

      {/* Dark Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-3/5 pointer-events-none" />

      {/* Main Container */}
      <div
        className="
          relative z-10 w-full mx-auto
          px-4 sm:px-6 lg:px-12 min-[1504px]:px-16 min-[1920px]:px-24 min-[2560px]:px-32
          pt-12 sm:pt-16 lg:py-12 min-[1920px]:py-16 min-[2560px]:py-24
          max-w-[480px] lg:max-w-[2560px]
        "
      >
        <div className="w-full lg:max-w-[850px] min-[1504px]:max-w-[1050px] min-[1920px]:max-w-[1300px] min-[2560px]:max-w-[1650px] space-y-5 sm:space-y-7 lg:space-y-9 min-[1920px]:space-y-12">

          {/* Heading Section - Massive Figma 1:1 Matched Sizes */}
          <div>
            <h2 className="font-['Falcon',sans-serif] text-[36px] sm:text-[58px] lg:text-[76px] min-[1504px]:text-[92px] min-[1920px]:text-[112px] min-[2560px]:text-[148px] font-black uppercase leading-[0.96] tracking-tight text-white">
              CONTENT
            </h2>
            <h2 className="font-['Falcon',sans-serif] text-[36px] sm:text-[58px] lg:text-[76px] min-[1504px]:text-[92px] min-[1920px]:text-[112px] min-[2560px]:text-[148px] font-black uppercase leading-[0.96] tracking-tight text-white mt-0.5">
              THAT PERFORMS
            </h2>
            <h2 className="font-['Falcon',sans-serif] text-[36px] sm:text-[58px] lg:text-[76px] min-[1504px]:text-[92px] min-[1920px]:text-[112px] min-[2560px]:text-[148px] font-black uppercase leading-[0.96] tracking-tight text-[#D0FF00] mt-0.5">
              IN RETAIL
            </h2>

            {/* Subtitle Tag */}
            <p className="mt-4 sm:mt-6 lg:mt-8 text-[12px] sm:text-lg lg:text-xl min-[1920px]:text-2xl min-[2560px]:text-3xl font-bold uppercase tracking-wider text-white">
              BUILT FOR REAL ENVIRONMENTS
            </p>

            {/* Description Paragraph */}
            <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-sm lg:text-base min-[1920px]:text-xl min-[2560px]:text-2xl text-neutral-300 max-w-sm sm:max-w-md lg:max-w-xl min-[1920px]:max-w-2xl leading-relaxed">
              Digital signage is widely adopted across sectors to improve visibility and engagement.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 sm:space-y-4 min-[1920px]:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl min-[1920px]:max-w-2xl">
            {bulletPoints.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-4">
                {/* Lime Dot */}
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D0FF00] shrink-0 mt-1.5" />
                <p className="text-[11px] sm:text-sm lg:text-base min-[1920px]:text-xl min-[2560px]:text-2xl text-neutral-200 leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Accent Horizontal Lime Bar */}
          <div className="w-10 sm:w-16 lg:w-20 h-[3px] sm:h-[4px] bg-[#D0FF00]" />

          {/* Bottom Features Row */}
          <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 pt-6 border-t border-neutral-800/80">
            {bottomFeatures.map((feat, index) => (
              <div
                key={feat.id}
                className={`flex items-center gap-4 ${
                  index !== bottomFeatures.length - 1 ? "border-r border-neutral-800 pr-4 lg:pr-6" : ""
                }`}
              >
                <div className="shrink-0">{feat.icon}</div>
                <div>
                  <h4 className="text-sm lg:text-base min-[1920px]:text-xl min-[2560px]:text-2xl font-bold text-white leading-tight">
                    {feat.title}
                  </h4>
                  <p className="text-xs lg:text-sm min-[1920px]:text-base min-[2560px]:text-xl text-neutral-400 mt-1">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}