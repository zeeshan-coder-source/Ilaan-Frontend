import React from "react";

import storeBgImage from "../../assets/LINK/feature.png";
import HeadersH1 from "../HeadingH1";

export default function RetailEnvironmentsSection() {
  const items = [
    {
      id: 1,
      title: "Convenience Retail",
      subtitle: "Frequent price updates and promotions",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Wholesale & Cash & Carry",
      subtitle: "Large product ranges and dynamic pricing",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Pharmacy",
      subtitle: "Accurate and compliant pricing",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z" />
          <path d="M8.5 8.5l7 7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-[680px] lg:min-h-[780px] bg-black text-white font-['Poppins',sans-serif] overflow-x-hidden flex items-center border-t border-[#FFFF00]">

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${storeBgImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full ml-0 pl-4 sm:pl-8 lg:pl-12 pr-4 sm:pr-6 lg:pr-10 py-10 lg:py-14">
        <div className="max-w-[750px]">

          {/* Title — wraps on mobile, nowrap from xl+ */}
          <div className="mb-4 sm:mb-5 space-y-0.5">
            <div className="overflow-hidden xl:whitespace-nowrap">
              <HeadersH1 leading="0.85em" letterSpacing="-0.05em" parts={[{ text: "Used Across", color: "#ffffff" }]} />
            </div>
            <div className="overflow-hidden xl:whitespace-nowrap">
              <HeadersH1 leading="0.85em" letterSpacing="-0.05em" parts={[{ text: "Retail Environments", color: "#FFFF00" }]} />
            </div>
          </div>

          {/* Subtitle — fluid: 15px → 22px */}
          <p
            className="text-white leading-[132%] font-normal mb-7 sm:mb-9 max-w-[650px]"
            style={{ fontSize: 'clamp(0.9375rem, 0.5vw + 0.75rem, 1.375rem)' }}
          >
            Digital signage performs best{" "}
            <br className="hidden sm:block" />
            when supported by the right content.
          </p>

          {/* Feature List */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 sm:gap-5">
                {/* Icon Badge — scales with screen */}
                <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[60px] lg:h-[60px] rounded-full border border-[#FFFF00] bg-black/50 backdrop-blur-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  {/* Item title — fluid: 16px → 22px */}
                  <h3
                    className="text-white font-normal leading-snug"
                    style={{ fontSize: 'clamp(1rem, 0.5vw + 0.8rem, 1.375rem)' }}
                  >
                    {item.title}
                  </h3>
                  {/* Item subtitle — fluid: 13px → 17px */}
                  <p
                    className="text-[#8C8D8D] font-normal mt-0.5"
                    style={{ fontSize: 'clamp(0.8125rem, 0.25vw + 0.7rem, 1.0625rem)' }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button — fluid text, full-width on mobile */}
          <button className="w-full sm:max-w-[580px] h-auto min-h-[52px] sm:min-h-[60px] lg:min-h-[64px] border border-[#FFFF00] rounded-[9px] bg-black/40 text-[#FFFF00] px-4 sm:px-6 py-3 sm:py-0 flex items-center justify-between gap-3 hover:bg-[#FFFF00] hover:text-black transition-all duration-300 group">
            <span
              className="font-bold tracking-wider uppercase text-left leading-tight"
              style={{ fontSize: 'clamp(0.75rem, 0.4vw + 0.6rem, 1.0625rem)' }}
            >
              LET'S CREATE CONTENT THAT CONNECTS
            </span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}