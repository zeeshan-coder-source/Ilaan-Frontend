import React from "react";

// Background image import path
import bgImage from "../../assets/LINK/third.png";

export default function ConnectedPricingSystem() {
  return (
    <section
      className="
        relative w-full overflow-x-hidden bg-[#FFF8CC]
        bg-no-repeat bg-cover
        bg-center sm:bg-right
        font-['Poppins',sans-serif] min-h-[680px] lg:min-h-[820px]
        flex items-center
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Soft yellow decorative background circles */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#FFE875]/60 pointer-events-none" />
      <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#FFE875]/60 pointer-events-none" />

      {/* Light overlay on mobile to keep text readable over centered bg image */}
      <div className="absolute inset-0 bg-[#FFF8CC]/60 sm:bg-transparent pointer-events-none" />

      {/* Container Box */}
      <div className="relative mx-auto w-full px-6 sm:px-16 lg:px-28 py-14 sm:py-16 lg:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Content Box */}
          <div className="lg:col-span-7 xl:col-span-6 text-left">

            {/* Heading: scale smoothly across breakpoints */}
            {/* Heading: fluid clamp() — 28px on 320px screen → 100px on 1920px screen */}
            <h2
              className="font-semibold text-[#000000] leading-[107%] tracking-[0%] max-w-full lg:max-w-[757px]"
              style={{ fontSize: 'clamp(1.75rem, 2.5vw + 1.2rem, 6.25rem)' }}
            >
              A Connected <br />
              Pricing System
            </h2>

            {/* Paragraph: Poppins Light 27px */}
            {/* Paragraph: fluid clamp() — 14px → 27px */}
            <p
              className="mt-6 sm:mt-[36px] text-[#000000] font-light leading-[153%] tracking-[0%] max-w-full lg:max-w-[711px]"
              style={{ fontSize: 'clamp(0.875rem, 0.6vw + 0.75rem, 1.6875rem)' }}
            >
              Ilaan Link digitises shelf-edge pricing, allowing you to manage and update prices across your entire store instantly.
            </p>

            {/* Accent Line */}
            <div className="mt-8 sm:mt-[42px] h-[5px] w-[78px] bg-[#FDC521] rounded-full" />

            {/* Bottom Text: Poppins Medium 27px */}
            {/* Bottom Text: fluid clamp() — 14px → 27px */}
            <p
              className="mt-5 sm:mt-[28px] text-[#000000] font-medium leading-[153%] tracking-[0%] max-w-full lg:max-w-[711px]"
              style={{ fontSize: 'clamp(0.875rem, 0.6vw + 0.75rem, 1.6875rem)' }}
            >
              No manual changes. No delays. No inconsistencies.
            </p>

          </div>

          {/* Right Spacer (desktop only) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </div>

      {/* Circular Icon
          - Mobile/Tablet: horizontally centered (left-1/2), sits at 80% down the section
          - Desktop (lg+): snaps to left-[56%] at the background curve apex
      */}
      <div className="absolute left-1/2 lg:left-[56%] top-[80%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
        <div className="h-20 w-20 sm:h-24 sm:w-24 lg:h-24 lg:w-24 xl:h-28 xl:w-28 rounded-full border-[3px] border-[#FDC521] bg-white shadow-xl flex items-center justify-center pointer-events-auto">
          <svg
            className="h-12 w-12 text-[#FDC521]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}