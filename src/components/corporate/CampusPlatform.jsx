// import React from 'react';

// // Asset Imports
// import studioBgImg from '../../assets/corporate/ChatGPT Image May 13, 2026, 08_00_00 PM 1.png';
// import signageScreenImg from '../../assets/corporate/Group 153.png';
// import linkFullImg from '../../assets/corporate/Group 152.png';
// import mediaScreensImg from '../../assets/corporate/Group 154.png';

// // Icons Imports
// import studioIcon from '../../assets/corporate/monitor 1.png';
// import userIcon from '../../assets/corporate/user 1.png';

// import webData1 from '../../assets/corporate/web-data 1.png';
// import webData2 from '../../assets/corporate/web-data 2.png';
// import webData3 from '../../assets/corporate/web-data 3.png';
// import webData4 from '../../assets/corporate/web-data 4.png';

// import monitor2 from '../../assets/corporate/monitor 2.png';
// import monitor3 from '../../assets/corporate/monitor 3.png';
// import monitor4 from '../../assets/corporate/monitor 4.png';
// import christmasStars from '../../assets/corporate/christmas-stars 1.png';

// const CampusPlatform = () => {
//   return (
//     <section className="w-full bg-black text-white font-sans py-6 sm:py-8 lg:py-10 2xl:py-12 px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12 flex justify-center overflow-x-hidden">

//       {/* Container - Restored Max Width Boundary for Perfect 4K/1920px Proportions */}
//       <div className="w-full mx-auto space-y-6 lg:space-y-8 2xl:space-y-10">

//         {/* ================= TOP SECTION (Title + Card 01) ================= */}
//         <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 2xl:gap-10">

//           {/* Left Column: Title + Subtitle + 4 Metrics */}
//           <div className="w-full lg:w-[42%] 2xl:w-[40%] flex flex-col justify-between space-y-4 sm:space-y-6 py-1 shrink-0">
//             <div className="space-y-2.5 sm:space-y-3.5 lg:space-y-4 2xl:space-y-5">
//               <p className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase">
//                 HOW ILAAN ENABLES THIS
//               </p>
//               <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[62px] font-extrabold tracking-tight text-white leading-[1.06]">
//                 CONNECTED <br />
//                 <span className="text-[#B7DE07]">CAMPUS</span> <br />
//                 PLATFORM
//               </h1>
//               <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg leading-relaxed max-w-[480px] pt-1">
//                 Ilaan brings together the tools required to manage communication across corporate environment.
//               </p>
//             </div>

//             {/* Lime Accent Line */}
//             <div className="w-10 sm:w-12 h-[3px] bg-[#B7DE07] rounded-full" />

//             {/* 4 Feature Metrics */}
//             <div className="grid grid-cols-4 gap-1.5 sm:gap-3 pt-2 sm:pt-4 border-t border-gray-800/80 max-w-[500px]">
//               <div className="flex flex-col items-center text-center space-y-1.5 pr-1 border-r border-gray-800">
//                 <img src={webData1} alt="Connected Platform" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 object-contain" />
//                 <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold text-gray-300 leading-tight">
//                   CONNECTED<br />PLATFORM
//                 </span>
//               </div>

//               <div className="flex flex-col items-center text-center space-y-1.5 pr-1 border-r border-gray-800">
//                 <img src={webData2} alt="Reliable & Secure" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 object-contain" />
//                 <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold text-gray-300 leading-tight">
//                   RELIABLE &<br />SECURE
//                 </span>
//               </div>

//               <div className="flex flex-col items-center text-center space-y-1.5 pr-1 border-r border-gray-800">
//                 <img src={webData3} alt="Real-Time Control" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 object-contain" />
//                 <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold text-gray-300 leading-tight">
//                   REAL-TIME<br />CONTROL
//                 </span>
//               </div>

//               <div className="flex flex-col items-center text-center space-y-1.5">
//                 <img src={webData4} alt="Smart Insights" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 object-contain" />
//                 <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold text-gray-300 leading-tight">
//                   SMART<br />INSIGHTS
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: CARD 01 - Height Scaled to Match Figma Proportions */}
//           <div className="w-full lg:w-[56%] 2xl:w-[58%] h-[420px] sm:h-[480px] lg:h-[510px] xl:h-[570px] 2xl:h-[620px] bg-[#0b0b0b] border border-white/20 rounded-tl-none rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] p-5 sm:p-7 xl:p-9 2xl:p-12 relative overflow-hidden flex flex-col justify-between shrink-0">

//             {/* Background Graphic */}
//             <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-end justify-end">
//               <img 
//                 src={studioBgImg} 
//                 alt="ILAAN Studio Interface" 
//                 className="w-full h-full object-cover object-bottom"
//               />
//             </div>

//             {/* Card Content Overlay */}
//             <div className="relative z-10 space-y-2.5 sm:space-y-3.5 w-full">
//               <div className="flex items-center space-x-2.5 sm:space-x-3.5">
//                 <div className="w-7 h-7 sm:w-9 sm:h-9 2xl:w-10 2xl:h-10 bg-[#B7DE07] rounded-lg flex items-center justify-center p-1.5 shrink-0">
//                   <img src={studioIcon} alt="Studio Icon" className="w-3.5 h-3.5 sm:w-5 sm:h-5 object-contain" />
//                 </div>
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight whitespace-nowrap">
//                   <span className="text-[#B7DE07] mr-1">01</span> ILAAN Studio
//                 </h2>
//               </div>

//               <p className="text-gray-300 text-[11px] sm:text-xs xl:text-base 2xl:text-lg leading-relaxed max-w-[420px]">
//                 Control every screen from one place. Keep content consistent, visible and across your entire network.
//               </p>
//             </div>

//             {/* Bottom Actions */}
//             <div className="relative z-10 pt-4 flex flex-wrap items-center gap-3 sm:gap-6">
//               <button className="bg-[#B7DE07] text-black font-extrabold text-[11px] sm:text-xs xl:text-sm 2xl:text-base px-5 sm:px-6 2xl:px-7 py-2 sm:py-2.5 2xl:py-3 rounded-full flex items-center space-x-2 hover:bg-lime-400 transition-all">
//                 <img src={userIcon} alt="User Icon" className="w-3 h-3 sm:w-3.5 sm:h-3.5 object-contain" />
//                 <span>Login</span>
//                 <span className="text-xs sm:text-sm font-bold text-black">›</span>
//               </button>

//               <button className="text-white text-[11px] sm:text-xs xl:text-sm 2xl:text-base font-semibold flex items-center space-x-1.5 hover:text-[#B7DE07] transition-colors">
//                 <span>Learn more</span>
//                 <span className="text-sm sm:text-base 2xl:text-lg text-white">→</span>
//               </button>
//             </div>
//           </div>

//         </div>


//         {/* ================= BOTTOM 3 CARDS ROW (Matching Scaled Heights) ================= */}
//         <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-6 xl:gap-8">

//           {/* CARD 02: ILAAN Digital Signage */}
//           <div className="w-full lg:w-[32%] h-[340px] sm:h-[370px] lg:h-[410px] xl:h-[440px] 2xl:h-[460px] bg-[#B7DE07] text-black rounded-tl-none rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] p-5 sm:p-6 2xl:p-8 flex flex-col justify-between shrink-0">
//             <div className="space-y-2.5 sm:space-y-3.5">
//               <div className="flex items-center space-x-2.5 sm:space-x-3">
//                 <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center p-1.5 shrink-0">
//                   <img src={monitor2} alt="Signage Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain invert" />
//                 </div>
//                 <h2 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold tracking-tight text-black whitespace-nowrap">
//                   02 <span className="font-bold">ILAAN Digital Signage</span>
//                 </h2>
//               </div>

//               {/* Display Preview */}
//               <div className="w-full h-[125px] sm:h-[150px] xl:h-[175px] 2xl:h-[190px] rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-black/5">
//                 <img 
//                   src={signageScreenImg} 
//                   alt="Digital Signage Banner Display" 
//                   className="w-full h-full object-cover" 
//                 />
//               </div>

//               <p className="text-black/90 text-[11px] sm:text-xs xl:text-sm 2xl:text-base font-medium leading-relaxed">
//                 Displays built for commercial use. Reliable, high-performance screens designed for retail, QSR and high-traffic environments.
//               </p>
//             </div>

//             <button className="text-black text-[11px] sm:text-xs xl:text-sm 2xl:text-base font-bold flex items-center space-x-1 hover:opacity-75 transition-opacity self-start pt-1">
//               <span>Learn more</span>
//               <span className="text-sm xl:text-base 2xl:text-lg text-black font-bold">→</span>
//             </button>
//           </div>


//           {/* CARD 03: ILAAN Link */}
//           <div className="w-full lg:w-[23%] h-[340px] sm:h-[370px] lg:h-[410px] xl:h-[440px] 2xl:h-[460px] bg-[#0b0b0b] border border-gray-800/80 rounded-tl-none rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] p-5 sm:p-6 2xl:p-8 flex flex-col justify-between relative overflow-hidden shrink-0">

//             {/* FULL BACKGROUND IMAGE */}
//             <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
//               <img 
//                 src={linkFullImg} 
//                 alt="ILAAN Link Background" 
//                 className="w-full h-full object-cover object-center" 
//               />
//             </div>

//             {/* TOP HEADER OVERLAY */}
//             <div className="relative z-10 space-y-2">
//               <div className="flex items-center space-x-2.5 sm:space-x-3">
//                 <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#B7DE07] rounded-lg flex items-center justify-center p-1.5 shrink-0">
//                   <img src={monitor3} alt="ILAAN Link Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
//                 </div>
//                 <h2 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-white tracking-tight whitespace-nowrap">
//                   <span className="text-[#B7DE07] mr-1">03</span> ILAAN Link
//                 </h2>
//               </div>

//               <div className="w-8 h-[2px] bg-[#B7DE07]" />
//             </div>

//             {/* BOTTOM CONTENT OVERLAY */}
//             <div className="relative z-10 space-y-2 pt-10 sm:pt-14 lg:pt-16">
//               <p className="text-gray-300 text-[11px] sm:text-xs xl:text-sm 2xl:text-base leading-relaxed max-w-[280px]">
//                 Reduce manual work across your store. Update pricing instantly and eliminate repetitive tasks.
//               </p>

//               <button className="text-white text-[11px] sm:text-xs xl:text-sm 2xl:text-base font-semibold flex items-center space-x-1 hover:text-[#B7DE07] transition-colors self-start">
//                 <span>Learn more</span>
//                 <span className="text-sm xl:text-base 2xl:text-lg text-[#B7DE07] font-bold">→</span>
//               </button>
//             </div>

//           </div>


//           {/* CARD 04: ILAAN Media */}
//           <div className="w-full lg:w-[32%] h-[340px] sm:h-[370px] lg:h-[410px] xl:h-[440px] 2xl:h-[460px] bg-[#EADBE6] text-black rounded-tl-none rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] p-5 sm:p-6 2xl:p-8 flex flex-col justify-between shrink-0">
//             <div className="space-y-2.5 sm:space-y-3.5">
//               <div className="flex items-center space-x-2.5 sm:space-x-3">
//                 <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#D91280] rounded-lg flex items-center justify-center p-1.5 shrink-0">
//                   <img src={monitor4} alt="Media Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
//                 </div>
//                 <h2 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold tracking-tight text-black whitespace-nowrap">
//                   <span className="text-[#D91280] mr-1">04</span> ILAAN Media
//                 </h2>
//               </div>

//               {/* Retail Media Display Container */}
//               <div className="w-full h-[125px] sm:h-[150px] xl:h-[175px] 2xl:h-[190px] rounded-2xl overflow-hidden flex items-center justify-center">
//                 <img 
//                   src={mediaScreensImg} 
//                   alt="ILAAN Retail Media Displays" 
//                   className="w-full h-full object-contain" 
//                 />
//               </div>

//               <p className="text-black/80 text-[11px] sm:text-xs xl:text-sm 2xl:text-base font-medium leading-relaxed">
//                 Access retail media in the real world. Run campaigns across a growing network of in-store screens.
//               </p>
//             </div>

//             <button className="text-black text-[11px] sm:text-xs xl:text-sm 2xl:text-base font-bold flex items-center space-x-1 hover:opacity-75 transition-opacity self-start pt-1">
//               <span>Learn more</span>
//               <span className="text-sm xl:text-base 2xl:text-lg text-black font-bold">→</span>
//             </button>
//           </div>

//         </div>


//         {/* ================= BOTTOM BANNER BAR ================= */}
//         <div className="w-full min-h-[80px] lg:h-[105px] xl:h-[115px] border border-[#B7DE07]/50 rounded-[29px] bg-black px-4 sm:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">

//           {/* Left Feature Details */}
//           <div className="flex items-center space-x-3">
//             <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#B7DE07] rounded-xl flex items-center justify-center shrink-0">
//               <img src={christmasStars} alt="Stars Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
//             </div>
//             <div>
//               <p className="text-[9px] sm:text-[11px] font-extrabold text-white tracking-wider uppercase leading-tight">
//                 ONE PLATFORM.
//               </p>
//               <p className="text-[9px] sm:text-[11px] font-extrabold text-gray-400 tracking-wider uppercase leading-tight">
//                 ENDLESS POSSIBILITIES
//               </p>
//             </div>
//           </div>

//           {/* Middle Slogan */}
//           <div className="text-center">
//             <h3 className="text-[15px] sm:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[34px] font-normal italic tracking-tight text-white leading-tight">
//               BUILD <span className="font-extrabold text-[#B7DE07]">SMARTER</span> LEARNING ENVIRONMENTS.
//             </h3>
//           </div>

//           {/* Right Action Button */}
//           <div>
//             <button className="bg-[#B7DE07] text-black font-extrabold text-[11px] sm:text-xs xl:text-sm 2xl:text-base px-5 sm:px-6 py-2 sm:py-2.5 2xl:py-3 rounded-full flex items-center space-x-1.5 hover:bg-lime-400 transition-colors whitespace-nowrap">
//               <span>Explore ILAAN Platform</span>
//               <span className="text-xs sm:text-sm text-black font-bold ml-0.5">→</span>
//             </button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default CampusPlatform;
import React from 'react';

// Asset Imports
import studioBgImg from '../../assets/corporate/ChatGPT Image May 13, 2026, 08_00_00 PM 1.png';
import signageScreenImg from '../../assets/corporate/Group 153.png';
import linkFullImg from '../../assets/corporate/Group 152.png';
import mediaScreensImg from '../../assets/corporate/Group 154.png';

// Icons Imports
import studioIcon from '../../assets/corporate/monitor 1.png';
import userIcon from '../../assets/corporate/user 1.png';

import webData1 from '../../assets/corporate/web-data 1.png';
import webData2 from '../../assets/corporate/web-data 2.png';
import webData3 from '../../assets/corporate/web-data 3.png';
import webData4 from '../../assets/corporate/web-data 4.png';

import monitor2 from '../../assets/corporate/monitor 2.png';
import monitor3 from '../../assets/corporate/monitor 3.png';
import monitor4 from '../../assets/corporate/monitor 4.png';
import christmasStars from '../../assets/corporate/christmas-stars 1.png';

const CampusPlatform = () => {
  return (
    <section className="w-full bg-black text-white font-sans py-6 sm:py-8 lg:py-10 2xl:py-12 3xl:py-16 px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12 3xl:px-16 flex justify-center overflow-x-hidden">
      
      {/* Dynamic Main Container - Scaled for 1920px & 2560px 4K Screens */}
      <div className="w-full mx-auto space-y-6 lg:space-y-8 2xl:space-y-10 3xl:space-y-14">
        
        {/* ================= TOP SECTION (Title + Card 01) ================= */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 2xl:gap-10 3xl:gap-14">
          
          {/* Left Column: Title + Subtitle + 4 Metrics */}
          <div className="w-full lg:w-[42%] 2xl:w-[40%] flex flex-col justify-between space-y-4 sm:space-y-6 py-1 shrink-0">
            <div className="space-y-2.5 sm:space-y-3.5 lg:space-y-4 2xl:space-y-5 3xl:space-y-7">
              <p className="text-[10px] sm:text-xs 3xl:text-base font-bold tracking-widest text-gray-400 uppercase">
                HOW ILAAN ENABLES THIS
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[62px] 3xl:text-[78px] font-bold tracking-tight text-white leading-[1.05]">
                CONNECTED <br />
                <span className="text-[#B7DE07]">CAMPUS</span> <br />
                PLATFORM
              </h1>
              <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg 3xl:text-2xl leading-relaxed max-w-[480px] 3xl:max-w-[650px] pt-1">
                Ilaan brings together the tools required to manage communication across corporate environment.
              </p>
            </div>

            {/* Lime Accent Line */}
            <div className="w-10 sm:w-12 3xl:w-20 h-[3px] 3xl:h-[4px] bg-[#B7DE07] rounded-full" />

            {/* 4 Feature Metrics */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 pt-2 sm:pt-4 border-t border-gray-800/80 max-w-[500px] 3xl:max-w-[680px]">
              <div className="flex flex-col items-center text-center space-y-1.5 pr-1 border-r border-gray-800">
                <img src={webData1} alt="Connected Platform" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 3xl:w-9 3xl:h-9 object-contain" />
                <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs 3xl:text-base font-semibold text-gray-300 leading-tight">
                  CONNECTED<br />PLATFORM
                </span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5 pr-1 border-r border-gray-800">
                <img src={webData2} alt="Reliable & Secure" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 3xl:w-9 3xl:h-9 object-contain" />
                <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs 3xl:text-base font-semibold text-gray-300 leading-tight">
                  RELIABLE &<br />SECURE
                </span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5 pr-1 border-r border-gray-800">
                <img src={webData3} alt="Real-Time Control" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 3xl:w-9 3xl:h-9 object-contain" />
                <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs 3xl:text-base font-semibold text-gray-300 leading-tight">
                  REAL-TIME<br />CONTROL
                </span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <img src={webData4} alt="Smart Insights" className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 3xl:w-9 3xl:h-9 object-contain" />
                <span className="text-[8px] sm:text-[10px] xl:text-[11px] 2xl:text-xs 3xl:text-base font-semibold text-gray-300 leading-tight">
                  SMART<br />INSIGHTS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: CARD 01 - Studio (Increased Height & Text Sizing for 4K) */}
          <div className="w-full lg:w-[56%] 2xl:w-[58%] h-[420px] sm:h-[480px] lg:h-[510px] xl:h-[570px] 2xl:h-[630px] 3xl:h-[780px] bg-[#0b0b0b] border border-white/20 rounded-tl-none rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] 3xl:rounded-tr-[48px] 3xl:rounded-br-[48px] 3xl:rounded-bl-[48px] p-5 sm:p-7 xl:p-9 2xl:p-12 3xl:p-16 relative overflow-hidden flex flex-col justify-between shrink-0">
            
            {/* Background Graphic */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-end justify-end">
              <img 
                src={studioBgImg} 
                alt="ILAAN Studio Interface" 
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            {/* Card Content Overlay */}
            <div className="relative z-10 space-y-2 sm:space-y-3 3xl:space-y-4 w-full">
              
              {/* Icon + Title */}
              <div className="flex items-center space-x-2.5 sm:space-x-3.5 3xl:space-x-5">
                <div className="w-7 h-7 sm:w-9 sm:h-9 2xl:w-10 2xl:h-10 3xl:w-16 3xl:h-16 bg-[#B7DE07] rounded-lg 3xl:rounded-2xl flex items-center justify-center p-1.5 shrink-0">
                  <img src={studioIcon} alt="Studio Icon" className="w-3.5 h-3.5 sm:w-5 sm:h-5 3xl:w-8 3xl:h-8 object-contain" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-white tracking-tight whitespace-nowrap">
                  <span className="text-[#B7DE07] mr-1">01</span> ILAAN Studio
                </h2>
              </div>

              {/* LIME UNDERLINE */}
              <div className="w-8 sm:w-10 3xl:w-16 h-[2.5px] 3xl:h-[4px] bg-[#B7DE07] my-2 3xl:my-3" />

              {/* EXACT 4 LINES TEXT */}
              <p className="text-gray-300 text-[11px] sm:text-xs xl:text-base 2xl:text-lg 3xl:text-2xl leading-relaxed max-w-[310px] sm:max-w-[330px] xl:max-w-[350px] 2xl:max-w-[400px] 3xl:max-w-[500px]">
                Control every screen from one place. Keep content consistent, visible and across your entire network.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 pt-4 flex flex-wrap items-center gap-3 sm:gap-6 3xl:gap-8">
              <button className="bg-[#B7DE07] text-black font-extrabold text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl px-5 sm:px-6 2xl:px-7 3xl:px-10 py-2 sm:py-2.5 2xl:py-3 3xl:py-4 rounded-full flex items-center space-x-2 3xl:space-x-3 hover:bg-lime-400 transition-all">
                <img src={userIcon} alt="User Icon" className="w-3 h-3 sm:w-3.5 sm:h-3.5 3xl:w-5 3xl:h-5 object-contain" />
                <span>Login</span>
                <span className="text-xs sm:text-sm 3xl:text-lg font-bold text-black">›</span>
              </button>

              <button className="text-white text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl font-semibold flex items-center space-x-1.5 3xl:space-x-2.5 hover:text-[#B7DE07] transition-colors">
                <span>Learn more</span>
                <span className="text-sm sm:text-base 2xl:text-lg 3xl:text-2xl text-white">→</span>
              </button>
            </div>
          </div>

        </div>


        {/* ================= BOTTOM 3 CARDS ROW (Height & Font Scaled for 4K) ================= */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-6 xl:gap-8 3xl:gap-12">
          
          {/* CARD 02: ILAAN Digital Signage */}
          <div className="w-full lg:w-[32%] h-[340px] sm:h-[370px] lg:h-[410px] xl:h-[440px] 2xl:h-[480px] 3xl:h-[600px] bg-[#B7DE07] text-black rounded-tl-none rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] 3xl:rounded-tr-[40px] 3xl:rounded-br-[40px] 3xl:rounded-bl-[40px] p-5 sm:p-6 2xl:p-8 3xl:p-12 flex flex-col justify-between shrink-0">
            <div className="space-y-2.5 sm:space-y-3.5 3xl:space-y-6">
              <div className="flex items-center space-x-2.5 sm:space-x-3 3xl:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 3xl:w-12 3xl:h-12 bg-black rounded-lg 3xl:rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <img src={monitor2} alt="Signage Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 3xl:w-6 3xl:h-6 object-contain invert" />
                </div>
                <h2 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-extrabold tracking-tight text-black whitespace-nowrap">
                  02 <span className="font-bold">ILAAN Digital Signage</span>
                </h2>
              </div>

              {/* Display Preview */}
              <div className="w-full h-[125px] sm:h-[150px] xl:h-[175px] 2xl:h-[200px] 3xl:h-[260px] rounded-2xl 3xl:rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-black/5">
                <img 
                  src={signageScreenImg} 
                  alt="Digital Signage Banner Display" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <p className="text-black/90 text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl font-medium leading-relaxed">
                Displays built for commercial use. Reliable, high-performance screens designed for retail, QSR and high-traffic environments.
              </p>
            </div>

            <button className="text-black text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl font-bold flex items-center space-x-1 3xl:space-x-2 hover:opacity-75 transition-opacity self-start pt-1">
              <span>Learn more</span>
              <span className="text-sm xl:text-base 2xl:text-lg 3xl:text-2xl text-black font-bold">→</span>
            </button>
          </div>


          {/* CARD 03: ILAAN Link */}
          <div className="w-full lg:w-[23%] h-[340px] sm:h-[370px] lg:h-[410px] xl:h-[440px] 2xl:h-[480px] 3xl:h-[600px] bg-[#0b0b0b] border border-gray-800/80 rounded-tl-none rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] 3xl:rounded-tr-[40px] 3xl:rounded-br-[40px] 3xl:rounded-bl-[40px] p-5 sm:p-6 2xl:p-8 3xl:p-12 flex flex-col justify-between relative overflow-hidden shrink-0">
            
            {/* FULL BACKGROUND IMAGE */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <img 
                src={linkFullImg} 
                alt="ILAAN Link Background" 
                className="w-full h-full object-cover object-center" 
              />
            </div>

            {/* TOP HEADER OVERLAY */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center space-x-2.5 sm:space-x-3 3xl:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 3xl:w-12 3xl:h-12 bg-[#B7DE07] rounded-lg 3xl:rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <img src={monitor3} alt="ILAAN Link Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 3xl:w-6 3xl:h-6 object-contain" />
                </div>
                <h2 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-white tracking-tight whitespace-nowrap">
                  <span className="text-[#B7DE07] mr-1">03</span> ILAAN Link
                </h2>
              </div>

              <div className="w-8 3xl:w-14 h-[2px] 3xl:h-[3px] bg-[#B7DE07]" />
            </div>

            {/* BOTTOM CONTENT OVERLAY */}
            <div className="relative z-10 space-y-2 pt-10 sm:pt-14 lg:pt-16 3xl:pt-28">
              <p className="text-gray-300 text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl leading-relaxed max-w-[280px] 3xl:max-w-[360px]">
                Reduce manual work across your store. Update pricing instantly and eliminate repetitive tasks.
              </p>

              <button className="text-white text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl font-semibold flex items-center space-x-1 3xl:space-x-2 hover:text-[#B7DE07] transition-colors self-start">
                <span>Learn more</span>
                <span className="text-sm xl:text-base 2xl:text-lg 3xl:text-2xl text-[#B7DE07] font-bold">→</span>
              </button>
            </div>

          </div>


          {/* CARD 04: ILAAN Media */}
          <div className="w-full lg:w-[32%] h-[340px] sm:h-[370px] lg:h-[410px] xl:h-[440px] 2xl:h-[480px] 3xl:h-[600px] bg-[#EADBE6] text-black rounded-tl-none rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] 3xl:rounded-tr-[40px] 3xl:rounded-br-[40px] 3xl:rounded-bl-[40px] p-5 sm:p-6 2xl:p-8 3xl:p-12 flex flex-col justify-between shrink-0">
            <div className="space-y-2.5 sm:space-y-3.5 3xl:space-y-6">
              <div className="flex items-center space-x-2.5 sm:space-x-3 3xl:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 3xl:w-12 3xl:h-12 bg-[#D91280] rounded-lg 3xl:rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  <img src={monitor4} alt="Media Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 3xl:w-6 3xl:h-6 object-contain" />
                </div>
                <h2 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold tracking-tight text-black whitespace-nowrap">
                  <span className="text-[#D91280] mr-1">04</span> ILAAN Media
                </h2>
              </div>

              {/* Retail Media Display Container */}
              <div className="w-full h-[125px] sm:h-[150px] xl:h-[175px] 2xl:h-[200px] 3xl:h-[260px] rounded-2xl 3xl:rounded-3xl overflow-hidden flex items-center justify-center">
                <img 
                  src={mediaScreensImg} 
                  alt="ILAAN Retail Media Displays" 
                  className="w-full h-full object-contain" 
                />
              </div>

              <p className="text-black/80 text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl font-medium leading-relaxed">
                Access retail media in the real world. Run campaigns across a growing network of in-store screens.
              </p>
            </div>

            <button className="text-black text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl font-bold flex items-center space-x-1 3xl:space-x-2 hover:opacity-75 transition-opacity self-start pt-1">
              <span>Learn more</span>
              <span className="text-sm xl:text-base 2xl:text-lg 3xl:text-2xl text-black font-bold">→</span>
            </button>
          </div>

        </div>


        {/* ================= BOTTOM BANNER BAR (4K Scaled) ================= */}
        <div className="w-full min-h-[80px] lg:h-[105px] xl:h-[115px] 3xl:h-[145px] border border-[#B7DE07]/50 rounded-[29px] 3xl:rounded-[40px] bg-black px-4 sm:px-8 3xl:px-12 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Left Feature Details */}
          <div className="flex items-center space-x-3 3xl:space-x-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 3xl:w-12 3xl:h-12 bg-[#B7DE07] rounded-xl flex items-center justify-center shrink-0">
              <img src={christmasStars} alt="Stars Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4 3xl:w-6 3xl:h-6 object-contain" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[11px] 3xl:text-sm font-bold text-white tracking-wider uppercase leading-tight">
                ONE PLATFORM.
              </p>
              <p className="text-[9px] sm:text-[11px] 3xl:text-sm font-bold text-gray-400 tracking-wider uppercase leading-tight">
                ENDLESS POSSIBILITIES
              </p>
            </div>
          </div>

          {/* Middle Slogan */}
          <div className="text-center">
            <h3 className="text-[15px] sm:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[44px] font-normal italic tracking-tight text-white leading-tight">
              BUILD <span className="font-extrabold text-[#B7DE07]">SMARTER</span> LEARNING ENVIRONMENTS.
            </h3>
          </div>

          {/* Right Action Button */}
          <div>
            <button className="bg-[#B7DE07] text-black font-bold text-[11px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-xl px-5 sm:px-6 3xl:px-9 py-2 sm:py-2.5 2xl:py-3 3xl:py-4 rounded-full flex items-center space-x-1.5 3xl:space-x-2 hover:bg-lime-400 transition-colors whitespace-nowrap">
              <span>Explore ILAAN Platform</span>
              <span className="text-xs sm:text-sm 3xl:text-lg text-black font-bold ml-0.5">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CampusPlatform;