import React from 'react';

// Asset Imports
import bgFull from '../../assets/corporate/03.png';
import bgMobile from '../../assets/corporate/3.png';
import mailIcon from '../../assets/corporate/mail 1.png';
import chatIcon from '../../assets/corporate/chat 1.png';
import stopIcon from '../../assets/corporate/stop 1.png';
import clockIcon from '../../assets/corporate/clock.png';

const Communication = () => {
  return (
    <section className="w-full relative bg-[#F7F8FA] text-[#0F172A] font-sans overflow-hidden min-h-screen flex flex-col justify-between">
      
      {/* DESKTOP BACKGROUND IMAGE (03.png) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
        <img 
          src={bgFull} 
          alt="Communication Background Desktop" 
          className="w-full h-full object-fill object-center"
        />
      </div>

      {/* MOBILE BACKGROUND IMAGE (3.png) */}
      <div className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
        <img 
          src={bgMobile} 
          alt="Communication Background Mobile" 
          className="w-full h-full object-fill object-top"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full mx-auto min-h-screen flex flex-col justify-between px-4 sm:px-10 md:px-14 lg:px-16 xl:px-20 3xl:px-[100px] pt-3 sm:pt-8 lg:py-12">
        
        {/* MAIN CONTENT AREA */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 my-0 lg:my-auto py-15 sm:py-4 lg:py-6">
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-start lg:justify-center space-y-2.5 sm:space-y-6 lg:space-y-7">
            
            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-3.5">
              <h1 className="text-[28px] sm:text-6xl lg:text-7xl xl:text-[84px] min-[1920px]:text-[92px] font-bold text-[#0A0A0A] leading-[1.05] sm:leading-[1.0] tracking-tight">
                Communication <br />
                Doesn’t Reach <br />
                <span className="text-[#B7DE07]">Everyone</span>
              </h1>
              
              {/* Paragraph */}
              <p className="text-neutral-800 text-[11px] sm:text-lg lg:text-xl font-normal leading-[1.3] sm:leading-[1.4] max-w-[480px]">
                Corporate environments often rely on fragmented <br className="hidden sm:inline" />
                communication methods.
              </p>
            </div>

            {/* 4 Rotated Diamond List Items */}
            <div className="space-y-4 sm:space-y-5 pt-1.5 sm:pt-1">
              
              {/* Item 1 */}
              <div className="flex items-center gap-2.5 sm:gap-5">
                <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl border-2 border-[#B7DE07] bg-white rotate-45 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={mailIcon} 
                    alt="Mail" 
                    className="-rotate-45 w-3 h-3 sm:w-5 sm:h-5 object-contain" 
                  />
                </div>
                <div className="max-w-[420px]">
                  <p className="text-[#0A0A0A] text-[11px] sm:text-base lg:text-lg font-semibold leading-tight sm:leading-snug">
                    Emails that are overlooked
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2.5 sm:gap-5">
                <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl border-2 border-[#B7DE07] bg-white rotate-45 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={chatIcon} 
                    alt="Chat" 
                    className="-rotate-45 w-3 h-3 sm:w-5 sm:h-5 object-contain" 
                  />
                </div>
                <div className="max-w-[430px]">
                  <p className="text-[#0A0A0A] text-[11px] sm:text-base lg:text-lg font-semibold leading-tight sm:leading-snug">
                    Inconsistent messaging across locations
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2.5 sm:gap-5">
                <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl border-2 border-[#B7DE07] bg-white rotate-45 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={stopIcon} 
                    alt="Visibility" 
                    className="-rotate-45 w-3 h-3 sm:w-5 sm:h-5 object-contain" 
                  />
                </div>
                <div className="max-w-[430px]">
                  <p className="text-[#0A0A0A] text-[11px] sm:text-base lg:text-lg font-semibold leading-tight sm:leading-snug">
                    Limited visibility in shared spaces
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-2.5 sm:gap-5">
                <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl border-2 border-[#B7DE07] bg-white rotate-45 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={clockIcon} 
                    alt="Clock" 
                    className="-rotate-45 w-3 h-3 sm:w-5 sm:h-5 object-contain" 
                  />
                </div>
                <div className="max-w-[430px]">
                  <p className="text-[#0A0A0A] text-[11px] sm:text-base lg:text-lg font-semibold leading-tight sm:leading-snug">
                    Difficulty keeping information up to date
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Highlight Text */}
            <div className="pt-1 sm:pt-4 pb-2 lg:pb-0">
              <p className="text-[11px] sm:text-base lg:text-lg font-semibold text-[#0A0A0A] leading-snug sm:leading-relaxed">
                As teams become more distributed, <br className="hidden sm:inline" />
                these <span className="text-[#B7DE07]">challenges increase.</span>
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Spacer */}
        <div />

      </div>

    </section>
  );
};

export default Communication;