import React from 'react';

// Background Assets Imports
import desktopBg from '../../assets/corporate/08 (1).png';
import mobileBg from '../../assets/corporate/07 (2).png';

// Icon Assets Imports
import chatDotsIcon from '../../assets/corporate/target 4 (1).png';
import eyeIcon from '../../assets/corporate/target 2 (2).png';
import locationIcon from '../../assets/corporate/target 3 (2).png';

const Content = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white font-sans overflow-hidden p-0 m-0 relative">

      {/* ================= DESKTOP & LARGE SCREENS VIEW ================= */}
      <div className="hidden md:flex w-full min-h-screen relative items-center justify-start px-10 lg:px-20 xl:px-22 py-16">

        {/* Desktop Image Background */}
        <img
          src={desktopBg}
          alt="Content Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Left Dark Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-[60%] lg:w-[50%] pointer-events-none z-1" />

        {/* Desktop Content Container */}
        <div className="relative z-10 w-full max-w-[560px] xl:max-w-[620px]">

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight uppercase leading-[1.05]">
            <span className="text-white block">CONTENT THAT</span>
            <span className="text-[#B7DE07] block">FITS THE</span>
            <span className="text-white block">WORKPLACE</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm lg:text-base xl:text-lg font-normal max-w-[420px] leading-relaxed mt-6 lg:mt-8">
            Clear, effective communication depends on well-designed content.
          </p>

          {/* Feature Bullets */}
          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-12">

            {/* Item 1 */}
            <div className="flex items-center space-x-4 lg:space-x-5">
              <div className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0 shadow-md">
                <img src={chatDotsIcon} alt="Messages clear" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <div>
                <h4 className="text-base lg:text-lg font-semibold text-white tracking-wide">
                  Messages are clear
                </h4>
                <p className="text-xs lg:text-sm text-gray-400 font-normal mt-0.5">
                  and easy to understand
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-4 lg:space-x-5">
              <div className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0 shadow-md">
                <img src={eyeIcon} alt="Visually Consistent" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <div>
                <h4 className="text-base lg:text-lg font-semibold text-white tracking-wide">
                  Content is
                </h4>
                <p className="text-xs lg:text-sm text-gray-400 font-normal mt-0.5">
                  Visually Consistent
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-4 lg:space-x-5">
              <div className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0 shadow-md">
                <img src={locationIcon} alt="Communication aligned" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <div>
                <h4 className="text-base lg:text-lg font-semibold text-white tracking-wide">
                  Communication is aligned
                </h4>
                <p className="text-xs lg:text-sm text-gray-400 font-normal mt-0.5">
                  across locations
                </p>
              </div>
            </div>

          </div>

          {/* Desktop Footer Note */}
          <div className="mt-12 lg:mt-16 pt-2">
            <p className="text-xs lg:text-sm text-gray-300 font-normal">
              Delivered in collaboration with
            </p>
            <p className="text-xs lg:text-sm font-semibold text-[#B7DE07] mt-0.5">
              Trusted creative partners.
            </p>
          </div>

        </div>
      </div>


      {/* ================= MOBILE VIEW (Figma 402×821 Specs) ================= */}
      <div className="flex md:hidden w-full min-h-screen relative flex-col justify-between p-6">

        {/* Mobile Background Image */}
        <img
          src={mobileBg}
          alt="Mobile Background"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />

        {/* Top Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent h-[75%] pointer-events-none z-1" />

        {/* Mobile Top Content Area */}
        <div className="relative z-10 space-y-5 pt-4">

          <h2 className="text-3xl font-extrabold tracking-tight uppercase leading-[1.08]">
            <span className="text-white block">CONTENT THAT</span>
            <span className="text-[#B7DE07] block">FITS THE</span>
            <span className="text-white block">WORKPLACE</span>
          </h2>

          <p className="text-gray-300 text-xs font-normal max-w-[280px] leading-relaxed pt-1">
            Clear, effective communication depends on well-designed content.
          </p>

          <div className="space-y-4 pt-3">

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={chatDotsIcon} alt="Messages clear" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Messages are clear
                </h4>
                <p className="text-[11px] text-gray-400 font-normal">
                  and easy to understand
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={eyeIcon} alt="Visually Consistent" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Content is
                </h4>
                <p className="text-[11px] text-gray-400 font-normal">
                  Visually Consistent
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={locationIcon} alt="Communication aligned" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Communication is aligned
                </h4>
                <p className="text-[11px] text-gray-400 font-normal">
                  across locations
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile Footer Area */}
        <div className="relative z-10 pt-10 pb-2">
          <p className="text-[11px] text-gray-300 font-normal">
            Delivered in collaboration with
          </p>
          <p className="text-xs font-semibold text-[#B7DE07] mt-0.5">
            Trusted creative partners.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Content;