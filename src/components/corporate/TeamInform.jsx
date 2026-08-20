import React from 'react';

// Background Assets
import desktopBg from '../../assets/corporate/07 (1).png';
import mobileBg from '../../assets/corporate/06 (1).png';

// Icons
import megaphoneIcon from '../../assets/corporate/target 4.png';
import chatDotsIcon from '../../assets/corporate/target 2 (1).png';
import paperPlaneIcon from '../../assets/corporate/target 3 (1).png';

const TeamInformed = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white font-sans overflow-hidden p-0 m-0 relative">
      
      {/* ================= DESKTOP & LARGE SCREENS VIEW ================= */}
      <div className="hidden md:flex w-full min-h-screen relative items-center justify-start px-12 lg:px-24 xl:px-22 py-20">
        
        {/* Desktop Background Image */}
        <img 
          src={desktopBg} 
          alt="Desktop Background" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0" 
        />

        {/* Left Dark Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full md:w-[65%] lg:w-[55%] pointer-events-none z-1" />

        {/* Content Box (Increased width & gaps on Large Screens) */}
        <div className="relative z-10 w-full max-w-[560px] xl:max-w-[640px]">
          
          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase leading-[1.05]">
            <span className="text-white block">KEEP TEAMS</span>
            <span className="text-white block">INFORMED</span>
            <span className="text-[#B7DE07] block">& ENGAGED</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-base lg:text-lg xl:text-xl font-normal max-w-[420px] xl:max-w-[480px] leading-relaxed mt-8 lg:mt-12 xl:mt-14">
            Digital displays improve how employees interact with workplace information.
          </p>

          {/* Feature Items Container (Increased Vertical Gaps) */}
          <div className="space-y-8 lg:space-y-10 xl:space-y-12 mt-12 lg:mt-16 xl:mt-20">
            
            {/* Item 1 */}
            <div className="flex items-center space-x-5 lg:space-x-6">
              <div className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[60px] xl:h-[60px] rounded-full border border-gray-700 bg-black/80 flex items-center justify-center shrink-0 shadow-lg">
                <img src={megaphoneIcon} alt="Company updates" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-base lg:text-lg xl:text-xl font-semibold text-white tracking-wide leading-snug">
                  Company updates
                </h4>
                <p className="text-xs lg:text-sm text-gray-400 font-normal mt-1">
                  Share important news and updates instantly.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-5 lg:space-x-6">
              <div className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[60px] xl:h-[60px] rounded-full border border-gray-700 bg-black/80 flex items-center justify-center shrink-0 shadow-lg">
                <img src={chatDotsIcon} alt="Announcements" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-base lg:text-lg xl:text-xl font-semibold text-white tracking-wide leading-snug">
                  Announcements
                </h4>
                <p className="text-xs lg:text-sm text-gray-400 font-normal mt-1">
                  Highlight key announcements that matter.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-5 lg:space-x-6">
              <div className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[60px] xl:h-[60px] rounded-full border border-gray-700 bg-black/80 flex items-center justify-center shrink-0 shadow-lg">
                <img src={paperPlaneIcon} alt="Key operational messages" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-base lg:text-lg xl:text-xl font-semibold text-white tracking-wide leading-snug">
                  Key operational messages
                </h4>
                <p className="text-xs lg:text-sm text-gray-400 font-normal mt-1">
                  Communicate critical operational information effectively.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* ================= MOBILE VIEW (UNCHANGED) ================= */}
      <div className="flex md:hidden w-full min-h-screen relative flex-col justify-between p-6">
        
        <img 
          src={mobileBg} 
          alt="Mobile Background" 
          className="absolute inset-0 w-full h-full object-cover object-top z-0" 
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent h-[70%] pointer-events-none z-1" />

        <div className="relative z-10 space-y-6 pt-4">
          
          <h2 className="text-3xl font-extrabold tracking-tight uppercase leading-[1.08]">
            <span className="text-white block">KEEP TEAMS</span>
            <span className="text-white block">INFORMED</span>
            <span className="text-[#B7DE07] block">& ENGAGED</span>
          </h2>

          <p className="text-gray-300 text-xs font-normal max-w-[300px] leading-relaxed pt-1">
            Digital displays improve how employees interact with workplace information.
          </p>

          <div className="space-y-5 pt-4">
            
            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={megaphoneIcon} alt="Company updates" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Company updates
                </h4>
                <p className="text-[11px] text-gray-400 font-normal">
                  Share important news and updates instantly.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={chatDotsIcon} alt="Announcements" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Announcements
                </h4>
                <p className="text-[11px] text-gray-400 font-normal">
                  Highlight key announcements that matter.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-[37px] h-[37px] rounded-full border border-gray-700/80 bg-black/80 flex items-center justify-center shrink-0">
                <img src={paperPlaneIcon} alt="Key operational messages" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Key operational messages
                </h4>
                <p className="text-[11px] text-gray-400 font-normal leading-tight">
                  Communicate critical operational information effectively.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TeamInformed;