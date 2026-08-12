import React from "react";

// Exact image import path
import shelfBgImage from "../../assets/LINK/fourth.png";

// Icon imports
import icon1 from "../../assets/LINK/icon-1 (1).png";
import icon2 from "../../assets/LINK/icon-1 (6).png";
import icon3 from "../../assets/LINK/icon-1 (7).png";
import icon4 from "../../assets/LINK/icon-1 (8).png";
import icon5 from "../../assets/LINK/icon-1 (9).png";

export default function CoreBenefits() {
  const benefits = [
    {
      id: 1,
      title: "Instant Price Updates",
      description: "Update pricing across all shelves in seconds",
      icon: <img src={icon1} alt="Icon 1" className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 object-contain" />,
    },
    {
      id: 2,
      title: "Reduced Labour Costs",
      description: "Eliminate manual label replacement",
      icon: <img src={icon2} alt="Icon 2" className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 object-contain" />,
    },
    {
      id: 3,
      title: "Improved Accuracy",
      description: "Ensure pricing is always correct and consistent",
      icon: <img src={icon3} alt="Icon 3" className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 object-contain" />,
    },
    {
      id: 4,
      title: "Faster Promotions",
      description: "Launch offers immediately across your store",
      icon: <img src={icon4} alt="Icon 4" className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 object-contain" />,
    },
    {
      id: 5,
      title: "Centralised Control",
      description: "Manage pricing from a single system",
      icon: <img src={icon5} alt="Icon 5" className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 object-contain" />,
    },
  ];

  return (
    <section className="relative w-full bg-[#0C0C0E] font-['Poppins',sans-serif] overflow-x-hidden min-h-[850px] flex items-center">

      {/* Main Content Container */}
      <div className="relative w-full mx-auto px-6 sm:px-14 lg:px-20 py-14 sm:py-16 lg:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Content — spans 7 cols on lg, 7 on xl */}
          <div className="lg:col-span-7 xl:col-span-7 text-left">

            {/* Title — fluid clamp: 28px mobile → 75px desktop */}
            <h2
              className="font-semibold text-white leading-[132%] tracking-[0%]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw + 0.5rem, 4.6875rem)" }}
            >
              CORE <span className="text-[#E5BA50]">BENEFITS</span>
            </h2>

            {/* Accent Line */}
            <div className="mt-3 h-[2px] w-[43px] bg-[#C69B26]" />

            {/* Subtitle — fluid clamp: 14px mobile → 23px desktop */}
            <p
              className="mt-5 sm:mt-6 text-white font-medium leading-[132%] tracking-[0%]"
              style={{ fontSize: "clamp(0.875rem, 0.7vw + 0.65rem, 1.4375rem)" }}
            >
              Built for Efficiency and Accuracy
            </p>

            {/*
              Cards Grid Layout:
              ─ Mobile  (default):    1 column, full-width, auto height
              ─ Tablet  (sm 640+):    2 columns
              ─ Laptop  (lg 1024+):   3 columns (fluid — fills the 7-col span safely)
              ─ Desktop (xl 1280+):   flex-wrap with exact Figma pixel widths
            */}
            <div className="mt-8 sm:mt-10
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              xl:flex xl:flex-wrap
              gap-4 sm:gap-5 w-full">

              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="
                    w-full xl:w-[298px]
                    h-auto
                    bg-gradient-to-b from-[#1C1C1E] to-[#0A0A0C]
                    border-[1.32px] border-[#E5BA50]
                    rounded-[20px] p-4 sm:p-5 xl:p-6
                    flex flex-col items-center justify-center text-center
                    min-h-[200px] sm:min-h-[240px] xl:min-h-[280px]
                  "
                >
                  {/* Icon */}
                  <div className="mb-3">{benefit.icon}</div>

                  {/* Card Title */}
                  <h3
                    className="text-white font-semibold tracking-wide font-['Poppins',sans-serif]"
                    style={{ fontSize: "21.12px", lineHeight: "1.4" }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Micro Line */}
                  <div className="my-2 xl:my-2.5 h-[2px] w-6 bg-[#E5BA50]" />

                  {/* Card Description */}
                  <p
                    className="text-gray-400 font-light font-['Poppins',sans-serif] max-w-[200px]"
                    style={{ fontSize: "15.84px", lineHeight: "132%" }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Area Spacer — desktop only */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5" />

        </div>
      </div>

      {/* Right Side Diagonal Cut Background Image — desktop only */}
      <div
        className="absolute top-0 right-0 bottom-0 w-full lg:w-[48%] h-full hidden lg:block pointer-events-none z-0"
        style={{
          clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {/* Diagonal Yellow Divider Line */}
        <div
          className="absolute inset-0 bg-[#E5BA50] z-10"
          style={{
            clipPath: "polygon(21.5% 0, 22.5% 0, 0.8% 100%, 0% 100%)",
          }}
        />

        {/* Image Container using fourth.png */}
        <div
          className="w-full h-full bg-cover bg-right bg-no-repeat scale-[1.15] origin-right"
          style={{
            backgroundImage: `url(${shelfBgImage})`,
          }}
        />
      </div>

    </section>
  );
}