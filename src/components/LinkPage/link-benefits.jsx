import React from "react";

// Image Import Path
import shelfBgImage from "../../assets/LINK/benefit.png";

// Heading Component
import HeadersH1 from "../HeadingH1";

export default function ContentPerformsRetailSection() {
  const bulletPoints = [
    "Pricing is easy to read",
    "Information is consistent",
    "Displays are aligned across all shelves",
  ];

  return (
    <section className="relative w-full min-h-[750px] lg:min-h-[850px] bg-black text-white font-['Poppins',sans-serif] overflow-hidden flex items-center">

      {/* Background Image with Dark Gradient Overlay on the Left */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${shelfBgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full ml-0 pl-4 sm:pl-8 lg:pl-12 pr-3 sm:pr-6 lg:pr-10 py-16">
        <div className="max-w-[711px]">

          {/* Section Heading Block */}
          <div className="mb-6 space-y-1">
            <div className="whitespace-nowrap overflow-visible">
              <HeadersH1
                leading="0.85em"
                letterSpacing="-0.05em"
                parts={[{ text: "CONTENT", color: "#ffffff" }]}
              />
            </div>
            <div className="whitespace-nowrap overflow-visible">
              <HeadersH1
                leading="0.85em"
                letterSpacing="-0.05em"
                parts={[{ text: "THAT PERFORMS", color: "#ffffff" }]}
              />
            </div>
            <div className="whitespace-nowrap overflow-visible">
              <HeadersH1
                leading="0.85em"
                letterSpacing="-0.05em"
                parts={[{ text: "IN RETAIL", color: "#FFFF00" }]}
              />
            </div>
          </div>

          {/* Sub-heading (Figma: Size 30px, Regular, Line-height 132%, Color #FFFFFF) */}
          <h2 className="text-white text-[22px] sm:text-[28px] lg:text-[30px] font-normal leading-[132%] mb-3">
            Clear, Consistent Shelf Communication
          </h2>

          {/* Description Text (Figma: Size 20px, Medium, Line-height 132%, Color #FFFFFF) */}
          <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[132%] mb-8">
            Digital labels require clear and structured content.
          </p>

          {/* Bullet List (Figma: Dot 10px x 10px #D0FF00, Text Size 20px Regular) */}
          <div className="space-y-6 mb-10">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* 10px x 10px Solid Lime Dot */}
                <span className="w-[10px] h-[10px] rounded-full bg-[#FFFF00] shrink-0 inline-block" />

                {/* Text (Figma: Size 20px, Line-height 132%) */}
                <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[132%]">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Lime Accent Line (Figma: Width 55px, Height 2px, Color #D0FF00) */}
          <div className="w-[55px] h-[2px] bg-[#FFFF00]" />

        </div>
      </div>

    </section>
  );
}