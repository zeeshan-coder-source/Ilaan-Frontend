import React from "react";

// Asset Imports
import bgDesk from "../../assets/signage/DESK.png";
import bgMbl from "../../assets/signage/mbl.png";

// Category Icon Imports
import shelves1 from "../../assets/signage/shelves 1.png";
import shelves2 from "../../assets/signage/shelves 2.png";
import shelves3 from "../../assets/signage/shelves 3.png";
import shelves4 from "../../assets/signage/shelves 4.png";
import shelves5 from "../../assets/signage/shelves 5.png";
import shelves6 from "../../assets/signage/shelves 6.png";
import shelves7 from "../../assets/signage/shelves 7.png";

const displayCategories = [
  {
    id: 1,
    title: "LED POSTERS &\nFREESTANDING\nDISPLAYS",
    icon: shelves1,
  },
  {
    id: 2,
    title: "INDOOR LED\nVIDEO\nWALLS",
    icon: shelves2,
  },
  {
    id: 3,
    title: "OUTDOOR\nLED\nDISPLAYS",
    icon: shelves3,
  },
  {
    id: 4,
    title: "TRANSPARENT\n& WINDOW\nDISPLAYS",
    icon: shelves4,
  },
  {
    id: 5,
    title: "CREATIVE &\nCUSTOM\nDISPLAYS",
    icon: shelves5,
  },
  {
    id: 6,
    title: "RENTAL &\nEVENT\nDISPLAYS",
    icon: shelves6,
  },
  {
    id: 7,
    title: "LCD\nDIGITAL\nSIGNAGE",
    icon: shelves7,
  },
];

// Figma card border style
const figmaLinearBorderStyle = {
  background:
    "linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, #D0FF00 0%, #D0FF00 35%, #575754 100%) border-box",
  border: "1px solid transparent",
  borderRadius: "15px",
};

export default function SignageDecision() {
  return (
    <section
      data-header-theme="dark"
      className="
        relative w-full bg-black text-white overflow-hidden font-sans select-none
        aspect-[401/1752] lg:aspect-auto lg:min-h-screen
      "
    >
      {/* Background Image Layer */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={bgDesk} />
        <img
          src={bgMbl}
          alt="Store Environment Background"
          className="w-full h-full object-contain object-top lg:object-center opacity-90"
        />
      </picture>

      {/* Dark Overlay Gradient on Left */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-3/5 pointer-events-none" />

      <div
        className="
          relative z-10 w-full mx-auto
          px-4 sm:px-6 lg:px-12 3xl:px-16 4xl:px-24
          py-6 sm:py-10 lg:py-12 3xl:py-14 4xl:py-20
          max-w-[838px] lg:max-w-[2560px] 3xl:max-w-[2560px] 4xl:max-w-[2560px]
        "
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* LEFT CONTENT AREA */}
          <div className="space-y-3.5 sm:space-y-5 lg:space-y-6 3xl:space-y-8 max-w-[803px] 3xl:max-w-[980px]">

            {/* Main Falcon Font Heading */}
            <div>
              <h1 className="font-['Falcon',sans-serif] text-[22px] sm:text-4xl lg:text-[48px] 3xl:text-[60px] 4xl:text-[72px] font-black tracking-normal text-white uppercase leading-[1.05]">
                DIGITISING THE STORE
              </h1>
              <h1 className="font-['Falcon',sans-serif] text-[22px] sm:text-4xl lg:text-[48px] 3xl:text-[60px] 4xl:text-[72px] font-black tracking-normal text-[#D0FF00] uppercase leading-[1.05] mt-0.5">
                ENVIRONMENT
              </h1>

              {/* Accent Line */}
              <div className="w-8 sm:w-12 h-[3px] bg-[#D0FF00] mt-2 sm:mt-4" />

              <p className="mt-2 text-[9px] sm:text-[13px] 3xl:text-[15px] text-neutral-300 font-normal tracking-wide">
                Explore display solutions that bring your store to life.
              </p>
            </div>

            {/* Display Category Cards Grid (4 Columns Fixed Layout) */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 lg:gap-3.5 3xl:gap-5 w-full max-w-[771px] 3xl:max-w-[950px]">
              {displayCategories.map((cat) => (
                <div
                  key={cat.id}
                  style={figmaLinearBorderStyle}
                  className="
                    flex flex-col items-center justify-between p-1.5 sm:p-3.5 3xl:p-5 text-center
                    hover:scale-[1.02] transition-all duration-300
                    aspect-square sm:aspect-auto h-auto sm:h-[181px] 3xl:h-[220px] w-full sm:w-[178px] 3xl:w-[220px]
                  "
                >
                  {/* Category Icon */}
                  <div className="my-auto h-6 sm:h-12 3xl:h-16 w-6 sm:w-12 3xl:w-16 flex items-center justify-center">
                    <img
                      src={cat.icon}
                      alt={cat.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Title */}
                  <p className="text-[7px] sm:text-[11px] 3xl:text-[13px] font-bold text-white tracking-normal whitespace-pre-line leading-[1.15] sm:leading-[1.25] uppercase">
                    {cat.title}
                  </p>

                  {/* Bottom Indicator Line */}
                  <div className="w-3 sm:w-5 h-[2px] bg-[#D0FF00] mt-1 sm:mt-2 shrink-0" />
                </div>
              ))}
            </div>

            {/* Bottom +18% Stat Card */}
            <div
              style={figmaLinearBorderStyle}
              className="
                p-3 sm:p-6 3xl:p-8 grid grid-cols-12 gap-2 sm:gap-5 items-center
                w-full max-w-[771px] 3xl:max-w-[950px] min-h-[145px] sm:min-h-[255px] 3xl:min-h-[300px]
              "
            >
              {/* Left Statement */}
              <div className="col-span-6 border-r border-neutral-800 pr-2 sm:pr-6">
                <p className="text-[7px] sm:text-[11px] 3xl:text-[13px] font-bold text-[#D0FF00] tracking-normal uppercase">
                  DIGITAL TRANSFORMATION
                </p>
                <p className="text-[7.5px] sm:text-xs 3xl:text-sm font-semibold text-neutral-300 tracking-normal mt-0.5 uppercase">
                  IS NO LONGER OPTIONAL,
                </p>

                <h3 className="font-['Falcon',sans-serif] text-[9px] sm:text-base 3xl:text-xl font-black text-white uppercase mt-1.5 sm:mt-4 tracking-normal leading-[1.2]">
                  IT'S A COMPETITIVE <br />
                  <span className="text-[#D0FF00]">REQUIREMENT.</span>
                </h3>

                <div className="w-6 sm:w-10 h-[2px] bg-[#D0FF00] mt-1.5 sm:mt-3" />
              </div>

              {/* Right Stat (+18%) */}
              <div className="col-span-6 pl-1.5 sm:pl-4">
                <span className="font-['Falcon',sans-serif] text-[26px] sm:text-[56px] 3xl:text-[72px] font-black text-[#D0FF00] tracking-tight leading-none block">
                  +18%
                </span>

                <p className="text-[7.5px] sm:text-xs 3xl:text-sm font-bold text-white tracking-wide mt-1 sm:mt-2">
                  Retail media growth
                </p>

                <p className="text-[6.5px] sm:text-[11px] 3xl:text-[13px] text-neutral-400 mt-1 leading-[1.3] sm:leading-[1.35] max-w-[280px] 3xl:max-w-[340px]">
                  Retail media is expected to account for a growing share of global ad spend, with continued double-digit growth
                </p>

                <p className="text-[6px] sm:text-[9px] 3xl:text-[11px] text-neutral-500 mt-1.5 sm:mt-2.5">
                  Source: <span className="text-[#D0FF00] font-semibold">eMarketer</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}