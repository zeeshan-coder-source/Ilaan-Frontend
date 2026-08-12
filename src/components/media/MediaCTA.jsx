// import React from 'react';

// // Assets Imports
// import bgImage from '../../assets/media/BG.png';
// import mobileBgImage from '../../assets/media/Mediamobile6.png';
// import screenOwnersImage from '../../assets/media/Group 1261156774 (1).png';
// import checkIcon from '../../assets/media/Group 1261156806.png';
// import locationIcon from '../../assets/media/location (3) 1.png';
// import messengerIcon from '../../assets/media/messenger (1) 1.png';
// import tvIcon from '../../assets/media/wide-tv 1.png';

// const ForScreenOwners = () => {
//   const points = [
//     {
//       icon: locationIcon,
//       title: 'Monetise unused screen time',
//       subtitle: 'Turn idle time into income',
//     },
//     {
//       icon: messengerIcon,
//       title: 'Participate in brand campaigns',
//       subtitle: 'Partner with brands and grow visibility',
//     },
//     {
//       icon: tvIcon,
//       title: 'Generate additional revenue streams',
//       subtitle: 'Increase profitability with minimal effort',
//     },
//   ];

//   return (
//     <section
//       className="w-full min-h-[auto] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white font-['Inter',sans-serif] relative overflow-hidden py-10 xl:py-[50px] 3xl:py-[70px] px-6 xl:px-16 3xl:px-24"
//     >
//       {/* Desktop Background Overlay */}
//       <div
//         className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
//         style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
//       />
//       {/* Mobile Background Overlay */}
//       <div
//         className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
//         style={{ backgroundImage: `url(${mobileBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
//       />

//       {/* Main Container */}
//       <div className="w-full 3xl:max-w-[2100px] 4xl:max-w-full mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12 xl:gap-[60px] 3xl:gap-[80px] 4xl:gap-[96px] relative z-10">

//         {/* LEFT COLUMN: Height matches right image with smooth balanced spacing */}
//         <div className="w-full lg:w-1/2 4xl:w-[48%] 4xl:max-w-[1150px] flex flex-col justify-between py-[10px]">

//           {/* Top Content Block */}
//           <div>
//             {/* Title */}
//             <h2 className="text-4xl sm:text-5xl xl:text-[54px] 2xl:text-[68px] 3xl:text-[80px] 4xl:text-[100px] font-semibold tracking-tight leading-none">
//               For <span className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent">Screen Owners</span>
//             </h2>

//             {/* Pink Accent Line */}
//             <div className="w-[55px] h-[4px] bg-[#FF00D6] rounded-full mt-[18px] mb-[22px] xl:mt-[25px] xl:mb-[30px]" />

//             {/* Subtitle */}
//             <h3 className="text-xl sm:text-2xl xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[40px] font-medium text-white/90 leading-tight mb-[16px] xl:mb-[20px]">
//               Turn Screens into Revenue
//             </h3>

//             {/* Intro Paragraph */}
//             <p className="text-white/60 text-base sm:text-lg xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] mb-[24px] xl:mb-[36px] max-w-[580px] 4xl:max-w-[900px] leading-snug">
//               If you operate digital screens, Ilaan Media provides a way to unlock additional value.
//             </p>

//             {/* Points List */}
//             <div className="flex flex-col gap-[24px] xl:gap-[32px] 3xl:gap-[45px]">
//               {points.map((point, index) => (
//                 <div key={index} className="flex items-center gap-[16px] xl:gap-[20px] 4xl:gap-[24px]">
//                   {/* Icon Box */}
//                   <div className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] 3xl:w-[83px] 3xl:h-[83px] 4xl:w-[96px] 4xl:h-[96px] rounded-[16px] bg-[#12052A]/80 border border-[#3B196C] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(224,0,255,0.12)]">
//                     <img src={point.icon} alt="" className="w-7 h-7 xl:w-8 xl:h-8 3xl:w-9 3xl:h-9 4xl:w-11 4xl:h-11 object-contain" />
//                   </div>

//                   {/* Text Block */}
//                   <div className="flex flex-col justify-center">
//                     <span className="text-white text-base sm:text-lg xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-normal leading-tight">
//                       {point.title}
//                     </span>
//                     <span className="text-white/60 text-sm sm:text-base xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-normal leading-tight mt-[4px]">
//                       {point.subtitle}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Highlight Box - Perfectly aligned with image bottom */}
//           <div className="w-full max-w-[651px] 3xl:max-w-[760px] 4xl:max-w-full h-[144px] 3xl:h-[160px] 4xl:h-[180px] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-[28px] 4xl:px-10 flex items-center gap-[20px] 4xl:gap-8 backdrop-blur-md shadow-lg shrink-0 mt-[40px]">
//             {/* Circle Check Icon */}
//             <div className="w-[67px] h-[67px] 4xl:w-[80px] 4xl:h-[80px] shrink-0 flex items-center justify-center">
//               <img src={checkIcon} alt="check" className="w-full h-full object-contain" />
//             </div>

//             {/* Banner Text (24px) */}
//             <div className="text-white text-lg sm:text-[24px] 4xl:text-[28px] font-normal leading-snug">
//               <p className="text-white font-normal">More screens. More visibility.</p>
//               <p className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent font-medium">
//                 More revenue.
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="w-full lg:w-1/2 4xl:w-[50%] flex flex-col justify-center items-center lg:items-end 4xl:items-stretch">
//           {/* Main Showcase Image (863px x 857px) */}
//           <div className="w-full max-w-[863px] 3xl:max-w-[1000px] 4xl:max-w-full h-[480px] xl:h-[clamp(480px,66vh,857px)] 3xl:h-[800px] 4xl:h-[880px] rounded-[30px] overflow-hidden border border-[#994EEA] shadow-[0_0_40px_rgba(153,78,234,0.2)] relative shrink-0">
//             <img
//               src={screenOwnersImage}
//               alt="Screen Owners Showcase"
//               className="w-full h-full object-cover rounded-[30px]"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ForScreenOwners;


import React from 'react';

// Assets Imports
import bgImage from '../../assets/media/BG.png';
import mobileBgImage from '../../assets/media/Mediamobile6.png';
import screenOwnersImage from '../../assets/media/Group 1261156774 (1).png';
import checkIcon from '../../assets/media/Group 1261156806.png';
import locationIcon from '../../assets/media/location (3) 1.png';
import messengerIcon from '../../assets/media/messenger (1) 1.png';
import tvIcon from '../../assets/media/wide-tv 1.png';

const ForScreenOwners = () => {
  const points = [
    {
      icon: locationIcon,
      title: 'Monetise unused screen time',
      subtitle: 'Turn idle time into income',
    },
    {
      icon: messengerIcon,
      title: 'Participate in brand campaigns',
      subtitle: 'Partner with brands and grow visibility',
    },
    {
      icon: tvIcon,
      title: 'Generate additional revenue streams',
      subtitle: 'Increase profitability with minimal effort',
    },
  ];

  return (
    <section
      className="w-full min-h-[auto] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white font-['Inter',sans-serif] relative overflow-hidden py-[clamp(40px,5vw,110px)] px-[clamp(20px,4vw,96px)]"
    >
      {/* Desktop Background Overlay */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />
      {/* Mobile Background Overlay */}
      <div
        className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ backgroundImage: `url(${mobileBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />

      {/* Main Container — plain vw/clamp() sizing, not dependent on any custom
          Tailwind breakpoint (3xl/4xl), so it scales correctly at 2560px+ */}
      <div className="w-full max-w-[2400px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-[clamp(24px,12vw,230px)] relative z-10">

        {/* LEFT COLUMN: fixed content-based width so it never leaves unused
            space that turns into a growing gap at large screens */}
        <div className="w-full lg:w-[clamp(320px,34vw,700px)] shrink-0 flex flex-col justify-between py-[10px]">

          {/* Top Content Block */}
          <div>
            {/* Title */}
            <h2 className="text-[clamp(32px,3.33vw,68px)] font-semibold tracking-tight leading-none">
              For <span className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent">Screen Owners</span>
            </h2>

            {/* Pink Accent Line */}
            <div className="w-[clamp(40px,2.3vw,55px)] h-[4px] bg-[#FF00D6] rounded-full mt-[clamp(14px,1.3vw,26px)] mb-[clamp(16px,1.6vw,32px)]" />

            {/* Subtitle */}
            <h3 className="text-[clamp(18px,1.35vw,28px)] font-medium text-white/90 leading-tight mb-[clamp(10px,0.85vw,18px)]">
              Turn Screens into Revenue
            </h3>

            {/* Intro Paragraph */}
            <p className="text-white/60 text-[clamp(14px,0.94vw,19px)] mb-[clamp(18px,1.9vw,38px)] max-w-[clamp(320px,30vw,900px)] leading-snug">
              If you operate digital screens, Ilaan Media provides a way to unlock additional value.
            </p>

            {/* Points List */}
            <div className="flex flex-col gap-[clamp(18px,2.34vw,46px)]">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-[clamp(12px,1.05vw,24px)]">
                  {/* Icon Box */}
                  <div className="w-[clamp(48px,3.33vw,90px)] h-[clamp(48px,3.33vw,90px)] rounded-[16px] bg-[#12052A]/80 border border-[#3B196C] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(224,0,255,0.12)]">
                    <img src={point.icon} alt="" className="w-[45%] h-[45%] object-contain" />
                  </div>

                  {/* Text Block */}
                  <div className="flex flex-col justify-center">
                    <span className="text-white text-[clamp(15px,1.05vw,22px)] font-normal leading-tight">
                      {point.title}
                    </span>
                    <span className="text-white/60 text-[clamp(14px,1vw,21px)] font-normal leading-tight mt-1">
                      {point.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Highlight Box (Figma: 651×144 at 1920 baseline) */}
          <div className="w-full h-[clamp(100px,7.5vw,160px)] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-[clamp(18px,1.5vw,30px)] flex items-center gap-[clamp(14px,1.05vw,24px)] backdrop-blur-md shadow-lg shrink-0 mt-[clamp(24px,2.6vw,52px)]">
            {/* Circle Check Icon (Figma: 67px) */}
            <div className="w-[clamp(48px,3.5vw,72px)] h-[clamp(48px,3.5vw,72px)] shrink-0 flex items-center justify-center">
              <img src={checkIcon} alt="check" className="w-full h-full object-contain" />
            </div>

            {/* Banner Text */}
            <div className="text-white text-[clamp(15px,1.25vw,26px)] font-normal leading-snug">
              <p className="text-white font-normal">More screens. More visibility.</p>
              <p className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent font-medium">
                More revenue.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: flex-1 fills all remaining space exactly (no leftover
            gap at any screen width, capped so it doesn't overstretch on 4K) */}
        <div className="w-full lg:flex-1 lg:max-w-[clamp(863px,55vw,1500px)] flex flex-col justify-center items-stretch">
          {/* Main Showcase Image (Figma: 863×857 at 1920 baseline) */}
          <div className="w-full h-[clamp(420px,44.6vw,950px)] rounded-[clamp(16px,1.56vw,30px)] overflow-hidden border border-[#994EEA] shadow-[0_0_40px_rgba(153,78,234,0.2)] relative shrink-0">
            <img
              src={screenOwnersImage}
              alt="Screen Owners Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ForScreenOwners;