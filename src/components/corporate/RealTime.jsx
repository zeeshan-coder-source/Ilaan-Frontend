import React from 'react';

// Asset Imports
import bgFull from '../../assets/corporate/04.png';
import bgMobile from '../../assets/corporate/4.png';
import immediateIcon from '../../assets/corporate/03 2.png';
import consistentIcon from '../../assets/corporate/02 3.png';
import visibleIcon from '../../assets/corporate/01 2.png';

const RealTime = () => {
  return (
    <section className="w-full relative bg-black text-white font-sans overflow-hidden min-h-fit sm:min-h-screen flex flex-col justify-between">

      {/* DESKTOP BACKGROUND IMAGE (04.png) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={bgFull}
          alt="RealTime Background Desktop"
          className="w-full h-full object-fill object-center"
        />
      </div>

      {/* MOBILE BACKGROUND IMAGE (4.png) */}
      <div className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={bgMobile}
          alt="RealTime Background Mobile"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* CONTENT WRAPPER - Added pb-10 on mobile for slight bottom space */}
      <div className="relative z-10 w-full mx-auto min-h-fit sm:min-h-screen flex flex-col justify-between px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 3xl:px-[100px] pt-4 sm:pt-8 lg:py-12 pb-10 sm:pb-6">

        {/* MAIN CONTENT AREA */}
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-12 my-0 lg:my-auto py-0 sm:py-4 lg:py-6"
          style={{ paddingTop: '100px' }}
        >
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">

            {/* Main Headline & Paragraph Area */}
            <div className="space-y-2 sm:space-y-3.5 pt-1 sm:pt-0">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl xl:text-[84px] min-[1920px]:text-[92px] font-bold text-white leading-[1.05] sm:leading-[1.0] tracking-tight">
                Visible. <br />
                Real-Time <br />
                <span className="text-[#B7DE07]">Communication</span>
              </h1>

              {/* Paragraph */}
              <p className="text-gray-300 text-[11px] sm:text-lg lg:text-xl font-normal leading-[1.35] sm:leading-[1.4] w-[200px] sm:w-auto sm:max-w-[580px] pt-0.5">
                Digital signage allows organisations to communicate in a way that is immediate, consistent, and highly visible.
              </p>
            </div>

            {/* 3 FEATURE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5 w-full max-w-[350px] sm:max-w-[820px] pt-1">

              {/* Card 1 - Immediate */}
              <div className="bg-black/90 lg:bg-black/40 backdrop-blur-md border border-[#B7DE07]/40 rounded-xl lg:rounded-2xl h-[93px] md:h-auto px-3.5 py-3 sm:p-5 flex flex-row md:flex-col items-center justify-start md:justify-center text-left md:text-center gap-3.5 sm:gap-4 hover:border-[#B7DE07] transition-all duration-300">
                <img
                  src={immediateIcon}
                  alt="Immediate"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain shrink-0"
                />
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-white text-sm sm:text-xl font-semibold">Immediate</h3>
                  <p className="text-gray-400 text-[11px] sm:text-sm leading-tight sm:leading-snug">
                    Share updates instantly when it matters most.
                  </p>
                </div>
              </div>

              {/* Card 2 - Consistent */}
              <div className="bg-black/90 lg:bg-black/40 backdrop-blur-md border border-[#B7DE07]/40 rounded-xl lg:rounded-2xl h-[93px] md:h-auto px-3.5 py-3 sm:p-5 flex flex-row md:flex-col items-center justify-start md:justify-center text-left md:text-center gap-3.5 sm:gap-4 hover:border-[#B7DE07] transition-all duration-300">
                <img
                  src={consistentIcon}
                  alt="Consistent"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain shrink-0"
                />
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-white text-sm sm:text-xl font-semibold">Consistent</h3>
                  <p className="text-gray-400 text-[11px] sm:text-sm leading-tight sm:leading-snug">
                    Deliver uniform messages across every location.
                  </p>
                </div>
              </div>

              {/* Card 3 - Highly Visible */}
              <div className="bg-black/90 lg:bg-black/40 backdrop-blur-md border border-[#B7DE07]/40 rounded-xl lg:rounded-2xl h-[93px] md:h-auto px-3.5 py-3 sm:p-5 flex flex-row md:flex-col items-center justify-start md:justify-center text-left md:text-center gap-3.5 sm:gap-4 hover:border-[#B7DE07] transition-all duration-300">
                <img
                  src={visibleIcon}
                  alt="Highly Visible"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain shrink-0"
                />
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-white text-sm sm:text-xl font-semibold">Highly Visible</h3>
                  <p className="text-gray-400 text-[11px] sm:text-sm leading-tight sm:leading-snug">
                    Ensure key messages are seen by the right people at the right time.
                  </p>
                </div>
              </div>

            </div>

            {/* Lime Accent Divider Bar */}
            <div className="w-10 sm:w-16 h-[2.5px] sm:h-[3px] bg-[#B7DE07] rounded-full pt-0.5" />

            {/* Bottom Descriptive Paragraph */}
            <div className="pt-0">
              <p className="text-gray-300 text-[11px] sm:text-base lg:text-lg font-normal leading-relaxed max-w-[380px] sm:max-w-[560px]">
                From reception areas to internal spaces, screens ensure key messages are seen by the right people at the right time.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default RealTime;