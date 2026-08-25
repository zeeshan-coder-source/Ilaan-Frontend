import React from 'react';

// Asset Imports
import bgFull from '../../assets/corporate/02.png';
import bgMobile from '../../assets/corporate/2.png';
import groupIcon from '../../assets/corporate/group (1) 1.png';
import barsIcon from '../../assets/corporate/bars 1.png';
import megaphoneIcon from '../../assets/corporate/megaphone (2) 1.png';
import group148Icon from '../../assets/corporate/Group 148.png';
import rightUpIcon from '../../assets/corporate/right-up 1.png';
import logoImg from '../../assets/corporate/logo.png';

const Workplaces = () => {
  return (
    <section className="w-full relative bg-[#F7F8FA] text-[#0F172A] font-sans overflow-hidden min-h-screen flex flex-col justify-between">

      {/* DESKTOP BACKGROUND IMAGE (02.png) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={bgFull}
          alt="Workplace Background Desktop"
          className="w-full h-full object-fill object-center"
        />
      </div>

      {/* MOBILE BACKGROUND IMAGE (2.png) */}
      <div className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={bgMobile}
          alt="Workplace Background Mobile"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full mx-auto min-h-screen flex flex-col justify-start lg:justify-between px-4 sm:px-10 md:px-14 lg:px-16 xl:px-20 3xl:px-[100px]">

        {/* TOP HEADER / NAV BAR */}
        <header className="w-full flex items-center justify-between pt-4 pb-2 sm:py-8 lg:py-10">
          {/* Logo with Text */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <img
              src={logoImg}
              alt="Logo Icon"
              className="h-6 sm:h-8 lg:h-9 xl:h-10 w-auto object-contain"
            />
            <span className="text-[11px] sm:text-sm lg:text-base font-bold tracking-wider text-black uppercase font-sans">
              THE MODERN WORKPLACE
            </span>
          </div>

          {/* Navigation Links & Top CTA Button (Desktop Only) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-semibold text-black">
              <a href="#insights" className="hover:text-[#B7DE07] transition-colors">Insights</a>
              <a href="#resources" className="hover:text-[#B7DE07] transition-colors">Resources</a>
              <a href="#solutions" className="hover:text-[#B7DE07] transition-colors">Solutions</a>
              <a href="#about" className="hover:text-[#B7DE07] transition-colors">About Us</a>
            </nav>

            <button className="inline-flex items-center gap-2 bg-[#B7DE07] hover:bg-[#a5cb05] text-black font-bold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-[10px] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm">
              <span>Explore Insights</span>
              <img
                src={rightUpIcon}
                alt="arrow"
                className="w-3.5 h-3.5 lg:w-4 lg:h-4 object-contain"
              />
            </button>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 mt-20 sm:mt-2 lg:my-auto py-1 sm:py-4 lg:py-6">
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-7">

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3.5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[84px] min-[1920px]:text-[92px] font-bold text-[#0A0A0A] leading-[1.0] tracking-tight">
                Workplaces <br />
                <span className="text-[#0A0A0A]">are </span>
                <span className="text-[#B7DE07]">evolving.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-neutral-800 text-xs sm:text-lg lg:text-xl font-normal leading-[1.35] sm:leading-[1.4] max-w-[480px]">
                With hybrid working and distributed teams <br className="hidden sm:inline" />
                increasing the need for clear and <br className="hidden sm:inline" />
                effective communication.
              </p>
            </div>

            {/* 3 Stat / Benefit Bullet Items */}
            <div className="space-y-3 sm:space-y-6 pt-1">

              {/* Item 1 */}
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-9 h-9 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl border-2 border-[#B7DE07] bg-white rotate-45 flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src={groupIcon}
                    alt="Employees Satisfaction"
                    className="-rotate-45 w-4 h-4 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <div className="space-y-0.5 max-w-[420px]">
                  <p className="text-[#0A0A0A] text-xs sm:text-sm lg:text-base font-semibold leading-snug">
                    Nearly 60% of employees say internal communication impacts their job satisfaction.
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium">Source: Gallup</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-9 h-9 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl border-2 border-[#B7DE07] bg-white rotate-45 flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src={barsIcon}
                    alt="Performance"
                    className="-rotate-45 w-4 h-4 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <div className="space-y-0.5 max-w-[430px]">
                  <p className="text-[#0A0A0A] text-xs sm:text-sm lg:text-base font-semibold leading-snug">
                    Organisations with effective communication are 3.5 times more likely to outperform their peers.
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium">Source: McKinsey</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-9 h-9 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl border-2 border-[#B7DE07] bg-white rotate-45 flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src={megaphoneIcon}
                    alt="Digital Signage Growth"
                    className="-rotate-45 w-4 h-4 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <div className="space-y-0.5 max-w-[430px]">
                  <p className="text-[#0A0A0A] text-xs sm:text-sm lg:text-base font-semibold leading-snug">
                    The global digital signage market continues to grow, driven in part by corporate adoption for internal communication.
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium">Source: Markets and Markets</p>
                </div>
              </div>

            </div>

            {/* Bottom CTA Button */}
            <div className="pt-1 sm:pt-2 pb-6 lg:pb-0">
              <button className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-2.5 sm:py-4 bg-black hover:bg-neutral-800 text-white font-semibold rounded-[6px] transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-md hover:scale-105 active:scale-95 cursor-pointer">
                <span>Explore the Insights</span>
                <img
                  src={group148Icon}
                  alt="arrow"
                  className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 object-contain"
                />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Spacer */}
        <div />

      </div>

    </section>
  );
};

export default Workplaces;