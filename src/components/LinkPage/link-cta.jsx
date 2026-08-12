import React from "react";

// Store / Retailer Image Import Path
import storePersonBg from "../../assets/LINK/six.png";

// Same heading font as hero (Falcon)
import HeadersH1 from "../HeadingH1";

export default function SaveTimeSection() {
  const features = [
    {
      id: 1,
      text: "Reduce time spent on pricing updates",
      icon: (
        <svg className="w-[18px] h-[18px] text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      id: 2,
      text: "Minimise human error",
      icon: (
        <svg className="w-[18px] h-[18px] text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: 3,
      text: "Ensure consistency across stores",
      icon: (
        <svg className="w-[18px] h-[18px] text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 4,
      text: "Improve overall operational efficiency",
      icon: (
        <svg className="w-[18px] h-[18px] text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    /* Outer Box - Full Width with Margin around Border */
    <div
      className="w-full h-full min-h-[950px] lg:min-h-[1000px] bg-cover bg-center rounded-[33px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl relative font-['Poppins',sans-serif] m-1 sm:m-2 lg:m-3"
      style={{ backgroundImage: `url(${storePersonBg})` }}
    >
      {/* Border layer - visible on left, fades out toward right */}
      <div
        className="absolute inset-0 rounded-[33px] border border-[#D0FF00]/40 pointer-events-none z-20"
        style={{ maskImage: 'linear-gradient(to right, black 0%, black 55%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 0%, black 55%, transparent 100%)' }}
      />

      {/* Left Column Text Content */}
      <div className="lg:col-span-7 p-4 sm:p-7 lg:p-9 xl:p-10 flex flex-col justify-start text-left z-10 lg:pl-14 xl:pl-20 pt-8 sm:pt-10 lg:pt-14 xl:pt-16">
        <div>
          {/* Title Block */}
          <div className="max-w-[582px] mb-4 space-y-2">
            <div className="whitespace-nowrap overflow-visible">
              <HeadersH1
                leading="0.8em"
                letterSpacing="-0.06em"
                xlText="88px"
                parts={[{ text: 'Save Time.', color: '#ffffff' }]}
              />
            </div>
            <div className="whitespace-nowrap overflow-visible">
              <HeadersH1
                leading="0.8em"
                letterSpacing="-0.06em"
                xlText="88px"
                parts={[{ text: 'Reduce Errors.', color: '#ffffff' }]}
              />
            </div>
            <div className="whitespace-nowrap overflow-visible">
              <HeadersH1
                leading="0.8em"
                letterSpacing="-0.06em"
                xlText="88px"
                parts={[{ text: 'Improve Control.', color: '#FFFF00' }]}
              />
            </div>
          </div>

          {/* Subtitle Text */}
          <p className="text-white text-[18px] sm:text-[21px] leading-[132%] font-normal mt-6 mb-10 max-w-[711px]">
            With Ilaan Link, retailers can:
          </p>

          {/* Inner Feature Box */}
          <div className="w-full max-w-[582px] border border-[#D0FF00]/50 rounded-[12px] p-5 sm:p-6 bg-black flex flex-col justify-between mb-10">
            {features.map((feature, idx) => (
              <div key={feature.id} className="w-full">
                <div className="flex items-center gap-4 py-3">
                  <div className="w-[34px] h-[34px] rounded-full bg-[#FFFF00] flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-white text-[16px] sm:text-[19px] font-normal leading-[115%]">
                    {feature.text}
                  </span>
                </div>

                {/* Inner Divider */}
                {idx < features.length - 1 && (
                  <div className="h-[1px] w-full bg-white/10 mt-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Text */}
        <div className="border-l-2 border-[#D0FF00] pl-4 py-0.5 text-[19px] sm:text-[23px] leading-[157%] text-white max-w-[711px] mt-4">
          <p>This creates both immediate savings</p>
          <p>
            and <span className="text-[#FFFF00] font-semibold">long-term value</span>
          </p>
        </div>
      </div>

    </div>
  );
}