import React from 'react';

// Single Full Graphic Asset Background
import fullBannerBg from '../../assets/corporate/Group 1261156911.png';

// Left Side List Icons (Green stroke style)
import chatIcon from '../../assets/corporate/chat (1) 1.png';
import settingsIcon from '../../assets/corporate/settings 1.png';
import checkMarkIcon from '../../assets/corporate/check-mark 7.png';
import upIcon from '../../assets/corporate/up 1.png';
import handshakeIcon from '../../assets/corporate/handshake 1.png';

const Simplify = () => {
  return (
    <section className="w-full min-h-screen bg-black text-black font-sans flex items-center justify-center overflow-hidden p-0 m-0">
      
      {/* Full-Width Edge-to-Edge Container with Figma Graphic Background */}
      <div 
        className="w-full w-screen min-h-screen relative bg-cover bg-center bg-no-repeat flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 2xl:p-24"
        style={{ backgroundImage: `url(${fullBannerBg})` }}
      >

        {/* Content Column Area */}
        <div className="w-full max-w-[650px] relative z-10 pt-8 sm:pt-12">
          
          {/* Main Headline */}
          <h1 className="text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[76px] font-bold tracking-tight leading-[1.02]">
            <span className="text-black block">SIMPLIFY</span>
            <span className="text-[#B7DE07] block">WORKPLACES</span>
            <span className="text-[#B7DE07] block">COMMUNICATION</span>
          </h1>

          {/* Under-Heading Separator Line (121px line + 3 dots match Figma) */}
          <div className="flex items-center space-x-2 my-5 sm:my-6">
            {/* 121px Solid Line */}
            <div 
              className="w-[121px] h-[5px] rounded-full" 
              style={{ backgroundColor: '#7D9C27' }} 
            />
            {/* 3 Green Dots */}
            <div className="flex space-x-1">
              <span className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#7D9C27' }} />
              <span className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#7D9C27' }} />
              <span className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#7D9C27' }} />
            </div>
          </div>

          {/* Subheading */}
          <p className="text-black text-lg sm:text-xl font-normal tracking-tight mb-6">
            Digital systems allow organisations to:
          </p>

          {/* 4 Points List Section */}
          <div className="space-y-5">
            
            {/* Item 1 */}
            <div className="flex items-center space-x-3.5">
              {/* 74px Gradient Vertical Accent Line */}
              <div 
                className="w-[5px] h-[74px] rounded-full shrink-0"
                style={{
                  background: 'linear-gradient(180deg, #7D9C27 0%, #DEF59F 100%)'
                }}
              />
              {/* 80x73 Black Box */}
              <div className="w-[80px] h-[73px] bg-black rounded-[14px] flex items-center justify-center shrink-0">
                <img src={chatIcon} alt="Icon" className="w-[54px] h-[54px] object-contain" />
              </div>
              <div className="pl-1">
                <h4 className="text-base sm:text-lg font-bold text-black uppercase tracking-wide leading-tight">
                  DELIVER CONSISTENT MESSAGING
                </h4>
                <p className="text-sm font-normal text-gray-700">
                  across locations
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-3.5">
              {/* 74px Gradient Vertical Accent Line */}
              <div 
                className="w-[5px] h-[74px] rounded-full shrink-0"
                style={{
                  background: 'linear-gradient(180deg, #7D9C27 0%, #DEF59F 100%)'
                }}
              />
              {/* 80x73 Black Box */}
              <div className="w-[80px] h-[73px] bg-black rounded-[14px] flex items-center justify-center shrink-0">
                <img src={settingsIcon} alt="Icon" className="w-[54px] h-[54px] object-contain" />
              </div>
              <div className="pl-1">
                <h4 className="text-base sm:text-lg font-bold text-black uppercase tracking-wide leading-tight">
                  REDUCE RELIANCE
                </h4>
                <p className="text-sm font-normal text-gray-700">
                  on manual updates
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-3.5">
              {/* 74px Gradient Vertical Accent Line */}
              <div 
                className="w-[5px] h-[74px] rounded-full shrink-0"
                style={{
                  background: 'linear-gradient(180deg, #7D9C27 0%, #DEF59F 100%)'
                }}
              />
              {/* 80x73 Black Box */}
              <div className="w-[80px] h-[73px] bg-black rounded-[14px] flex items-center justify-center shrink-0">
                <img src={checkMarkIcon} alt="Icon" className="w-[54px] h-[54px] object-contain" />
              </div>
              <div className="pl-1">
                <h4 className="text-base sm:text-lg font-bold text-black uppercase tracking-wide leading-tight">
                  ENSURE INFORMATION
                </h4>
                <p className="text-sm font-normal text-gray-700">
                  is always current
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center space-x-3.5">
              {/* 74px Gradient Vertical Accent Line */}
              <div 
                className="w-[5px] h-[74px] rounded-full shrink-0"
                style={{
                  background: 'linear-gradient(180deg, #7D9C27 0%, #DEF59F 100%)'
                }}
              />
              {/* 80x73 Black Box */}
              <div className="w-[80px] h-[73px] bg-black rounded-[14px] flex items-center justify-center shrink-0">
                <img src={upIcon} alt="Icon" className="w-[54px] h-[54px] object-contain" />
              </div>
              <div className="pl-1">
                <h4 className="text-base sm:text-lg font-bold text-black uppercase tracking-wide leading-tight">
                  IMPROVE COMMUNICATION
                </h4>
                <p className="text-sm font-normal text-gray-700">
                  efficiency
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner Badge: 453px x 73px Exact Figma Match */}
        <div className="self-start relative z-10 pt-6">
          <div 
            className="w-full max-w-[453px] h-[73px] bg-black text-white px-5 rounded-l-2xl rounded-tr-2xl rounded-br-[42px] flex items-center space-x-4 shadow-xl"
          >
            {/* 54x54 Icon */}
            <img 
              src={handshakeIcon} 
              alt="Handshake" 
              className="w-[54px] h-[54px] object-contain shrink-0" 
            />
            
            {/* Text Block */}
            <div className="leading-tight">
              <span className="block text-sm font-extrabold text-white tracking-wide uppercase">
                THIS CREATES A MORE
              </span>
              <span className="block text-xs font-semibold text-[#B7DE07] tracking-wider uppercase">
                ALIGNED AND INFORMED WORKFORCE.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Simplify;