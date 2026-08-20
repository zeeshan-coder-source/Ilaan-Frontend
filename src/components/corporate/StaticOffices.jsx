import React from 'react';

// Background Assets Imports
import desktopBg from '../../assets/corporate/09 (1).png';
import mobileBg from '../../assets/corporate/09 (2).png';

// Icon Assets Imports
import teamsIcon from '../../assets/corporate/target 4 (2).png';
import chatIcon from '../../assets/corporate/target 2 (3).png';
import laptopIcon from '../../assets/corporate/target 3 (3).png';

const StaticOffices = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white font-sans overflow-hidden p-0 m-0 relative">

      {/* ================= DESKTOP & LARGE SCREENS VIEW ================= */}
      <div className="hidden md:flex w-full min-h-screen relative items-center justify-start px-10 lg:px-20 xl:px-22 py-16">

        {/* Desktop Image Background */}
        <img
          src={desktopBg}
          alt="Static Offices Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Left Dark Gradient Mask for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full md:w-[65%] lg:w-[55%] pointer-events-none z-1" />

        {/* Desktop Content Container */}
        <div className="relative z-10 w-full max-w-[580px] xl:max-w-[640px]">

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight uppercase leading-[1.05]">
            <span className="text-white block">FROM STATIC OFFICES</span>
            <span className="text-[#B7DE07] block">TO CONNECTED</span>
            <span className="text-[#B7DE07] block">WORKSPACES</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm lg:text-base xl:text-lg font-normal max-w-[460px] leading-relaxed mt-6 lg:mt-8">
            Workplaces are becoming more dynamic, flexible and distributed
          </p>

          {/* Bullet Items */}
          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-10">

            {/* Item 1 */}
            <div className="flex items-center space-x-4 lg:space-x-5">
              <div className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0 shadow-md">
                <img src={teamsIcon} alt="Keeping teams aligned" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <p className="text-base lg:text-lg font-semibold text-white tracking-wide">
                Keeping teams <span className="text-[#B7DE07]">aligned</span>
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-4 lg:space-x-5">
              <div className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0 shadow-md">
                <img src={chatIcon} alt="Delivering consistent messaging" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <p className="text-base lg:text-lg font-semibold text-white tracking-wide">
                Delivering <span className="text-[#B7DE07]">consistent</span> messaging
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-4 lg:space-x-5">
              <div className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0 shadow-md">
                <img src={laptopIcon} alt="Supporting modern ways of working" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <p className="text-base lg:text-lg font-semibold text-white tracking-wide">
                Supporting <span className="text-[#B7DE07]">modern</span> ways of working
              </p>
            </div>

          </div>

          {/* Bottom Callout Text */}
          <p className="text-xs lg:text-sm text-gray-300 font-normal mt-10 lg:mt-12 max-w-[480px] leading-relaxed">
            Organisations that invest in connected environments are{' '}
            <span className="text-[#B7DE07] font-semibold">better positioned to adapt and grow.</span>
          </p>

        </div>
      </div>


      {/* ================= MOBILE VIEW (Figma 402×796 Specs) ================= */}
      <div className="flex md:hidden w-full min-h-screen relative flex-col justify-between p-6">

        {/* Mobile Background Image */}
        <img
          src={mobileBg}
          alt="Mobile Background"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />

        {/* Top Dark Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent h-[75%] pointer-events-none z-1" />

        {/* Mobile Main Content */}
        <div className="relative z-10 space-y-5 pt-4">

          {/* Title */}
          <h2 className="text-3xl font-extrabold tracking-tight uppercase leading-[1.08]">
            <span className="text-white block">FROM STATIC OFFICES</span>
            <span className="text-[#B7DE07] block">TO CONNECTED</span>
            <span className="text-[#B7DE07] block">WORKSPACES</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-xs font-normal max-w-[290px] leading-relaxed pt-1">
            Workplaces are becoming more dynamic, flexible and distributed
          </p>

          {/* Feature List */}
          <div className="space-y-4 pt-3">

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={teamsIcon} alt="Keeping teams aligned" className="w-4 h-4 object-contain" />
              </div>
              <p className="text-xs font-semibold text-white tracking-wide">
                Keeping teams <span className="text-[#B7DE07]">aligned</span>
              </p>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={chatIcon} alt="Delivering consistent messaging" className="w-4 h-4 object-contain" />
              </div>
              <p className="text-xs font-semibold text-white tracking-wide">
                Delivering <span className="text-[#B7DE07]">consistent</span> messaging
              </p>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={laptopIcon} alt="Supporting modern ways of working" className="w-4 h-4 object-contain" />
              </div>
              <p className="text-xs font-semibold text-white tracking-wide">
                Supporting <span className="text-[#B7DE07]">modern</span> ways of working
              </p>
            </div>

          </div>

          {/* Mobile Bottom Text */}
          <p className="text-[11px] text-gray-300 font-normal pt-4 max-w-[300px] leading-relaxed">
            Organisations that invest in connected environments are{' '}
            <span className="text-[#B7DE07] font-semibold">better positioned to adapt and grow.</span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default StaticOffices