import React from 'react';
import Vector12 from '../../assets/media/Vector 12.png';
import Vector18 from '../../assets/media/Vector 18.png';
import GroupChart from '../../assets/LINK/target-1.png';
import GroupUsers from '../../assets/LINK/target-3.png';
import GroupRocket from '../../assets/LINK/target-2.png';
import LinkLogo3D from '../../assets/3d_Logo 1.png';
import FooterLeft from '../../assets/LINK/footer-left.png';

const CorporateFooter = () => {
  return (
    <section className="w-full overflow-x-hidden bg-[#D0FF00] py-4 px-2 sm:py-6 sm:px-3 lg:py-8 lg:px-4 xl:py-10 xl:px-5 3xl:py-12 3xl:px-6 4xl:py-14 4xl:px-8 flex justify-center items-center font-['Inter',sans-serif]">
      <div className="w-full max-w-full sm:max-w-full lg:max-w-[100%] mx-auto relative flex justify-center items-center">
        {/* Desktop Outline Container */}
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src={Vector18}
            alt="Desktop Outline Container"
            className="w-full h-full object-fill"
          />
        </div>
        {/* Mobile Outline Container */}
        <div className="lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src={Vector12}
            alt="Mobile Outline Container"
            className="w-full h-full object-fill"
          />
        </div>

        <div className="relative z-10 w-full h-full px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14 3xl:px-16 3xl:py-16 4xl:px-20 4xl:py-20 flex flex-col justify-between items-center text-center">

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-4 xl:gap-8 3xl:gap-12 items-center w-full mb-6 xl:mb-8 3xl:mb-12">
            {/* Left: Text Block Matched to Corporate Requirements */}
            <div className="col-span-4 flex flex-col items-start text-left space-y-4 xl:space-y-6 3xl:space-y-8">
              <h2
                className="font-bold leading-[1.05] tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 3.2vw + 0.5rem, 5.625rem)' }}
              >
                Start <br />
                Connecting <br />
                <span className="text-[#D0FF00]">Your Workplace</span>
              </h2>

              <p
                className="text-white font-normal leading-[1.4] max-w-[480px] xl:max-w-[540px] 3xl:max-w-[650px]"
                style={{ fontSize: 'clamp(0.8125rem, 0.8vw + 0.4rem, 1.75rem)' }}
              >
                Whether you're improving internal communication or modernising your office environment, Ilaan provides the tools to make it happen.
              </p>

              <button
                className="inline-flex items-center gap-2.5 xl:gap-4 bg-[#D0FF00] hover:bg-[#D0FF00] text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 xl:px-8 xl:py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,255,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                style={{ fontSize: 'clamp(0.875rem, 0.8vw + 0.4rem, 1.75rem)' }}
              >
                <span>Make an Enquiry</span>
                <svg className="w-4 h-4 xl:w-6 xl:h-6 3xl:w-7 3xl:h-7 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Center: Logo */}
            <div className="col-span-4 flex justify-center items-center">
              <img
                src={LinkLogo3D}
                alt="Ilaan Diamond Logo"
                className="w-[160px] sm:w-[200px] lg:w-[240px] xl:w-[290px] 2xl:w-[340px] 3xl:w-[420px] 4xl:w-[480px] h-auto object-contain drop-shadow-[0_0_35px_rgba(255,255,0,0.5)]"
              />
            </div>

            {/* Right: Phone Preview */}
            <div className="col-span-4 flex justify-end items-center">
              <img
                src={FooterLeft}
                alt="Corporate Smartphone Preview"
                className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[440px] 2xl:max-w-[500px] 3xl:max-w-[600px] 4xl:max-w-[700px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center text-center w-full max-w-[380px] mx-auto space-y-4 pt-4 mb-6">

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold leading-[1.08] text-white tracking-tight">
              Start <br />
              Connecting <br />
              <span className="text-[#D0FF00]">Your Workplace</span>
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-neutral-300 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.4] font-normal px-2 max-w-[320px]">
              Whether you're improving internal communication or modernising your office environment, Ilaan provides the tools to make it happen.
            </p>

            {/* 3D Diamond Logo */}
            <div className="pt-2 pb-1 flex justify-center items-center">
              <img
                src={LinkLogo3D}
                alt="Ilaan Diamond Logo"
                className="w-[130px] sm:w-[150px] h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,0,0.3)]"
              />
            </div>

            {/* Phone Image Preview */}
            <div className="flex justify-center items-center w-full">
              <img
                src={FooterLeft}
                alt="Corporate Mobile Preview"
                className="w-full max-w-[240px] sm:max-w-[270px] h-auto object-contain"
              />
            </div>

            {/* Action CTA Button */}
            <div className="pt-2 w-full flex justify-center">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D0FF00] text-black font-bold text-[13px] sm:text-[14px] px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(208,255,0,0.4)] active:scale-95 cursor-pointer">
                <span>Make an Enquiry</span>
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

          {/* Bottom Stats Cards Bar - 3 Columns matched to Image */}
          <div className="w-full border border-[#D0FF00]/60 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 3xl:p-9 4xl:p-12 bg-black/90 backdrop-blur-md relative overflow-hidden mt-2 lg:mt-4 3xl:mt-6 4xl:mt-8 mb-2 lg:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center divide-y md:divide-y-0 md:divide-x divide-[#D0FF00]/30">

              {/* Card 1: Connected Workplaces */}
              <div className="flex items-center gap-3.5 md:gap-4 3xl:gap-6 text-left py-3.5 md:py-0 md:px-4 3xl:px-6 first:pt-0 last:pb-0">
                <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
                  <img src={GroupChart} alt="Connected Workplaces" className="w-4 h-4 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight mb-0.5" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
                    Connected Workplaces
                  </h3>
                  <p className="text-white/70 leading-snug font-normal text-[11px] sm:text-xs md:text-sm">
                    Smart workplace solutions designed for modern teams
                  </p>
                </div>
              </div>

              {/* Card 2: Better Communication */}
              <div className="flex items-center gap-3.5 md:gap-4 3xl:gap-6 text-left py-3.5 md:py-0 md:px-4 3xl:px-6">
                <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
                  <img src={GroupUsers} alt="Better Communication" className="w-4 h-4 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight mb-0.5" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
                    Better Communication
                  </h3>
                  <p className="text-white/70 leading-snug font-normal text-[11px] sm:text-xs md:text-sm">
                    Improve collaboration and information sharing across offices.
                  </p>
                </div>
              </div>

              {/* Card 3: Seamless Integration */}
              <div className="flex items-center gap-3.5 md:gap-4 3xl:gap-6 text-left py-3.5 md:py-0 md:px-4 3xl:px-6 last:pb-0">
                <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
                  <img src={GroupRocket} alt="Seamless Integration" className="w-4 h-4 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight mb-0.5" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
                    Seamless Integration
                  </h3>
                  <p className="text-white/70 leading-snug font-normal text-[11px] sm:text-xs md:text-sm">
                    Easy-to-use systems built for efficiency and productivity.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateFooter;
