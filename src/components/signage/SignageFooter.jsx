// import React from 'react';
// import Vector12 from '../../assets/media/Vector 12.png';
// import Vector18 from '../../assets/media/Vector 18.png';
// import GroupChart from '../../assets/LINK/target-1.png';
// import GroupUsers from '../../assets/LINK/target-3.png';
// import GroupRocket from '../../assets/LINK/target-2.png';
// import LinkLogo3D from '../../assets/3d_Logo 1.png';
// import FooterLeft from '../../assets/LINK/footer-left.png';

// const SignageFooter = () => {
//   return (
//     <section className="w-full overflow-x-hidden bg-[#D0FF00] py-4 px-2 sm:py-6 sm:px-3 lg:py-8 lg:px-4 xl:py-10 xl:px-5 3xl:py-12 3xl:px-6 4xl:py-14 4xl:px-8 flex justify-center items-center font-['Inter',sans-serif]">
//       <div className="w-full max-w-full sm:max-w-full lg:max-w-[100%] mx-auto relative flex justify-center items-center">
//         {/* Desktop Outline Container */}
//         <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
//           <img
//             src={Vector18}
//             alt="Desktop Outline Container"
//             className="w-full h-full object-fill"
//           />
//         </div>
//         {/* Mobile Outline Container */}
//         <div className="lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
//           <img
//             src={Vector12}
//             alt="Mobile Outline Container"
//             className="w-full h-full object-fill"
//           />
//         </div>

//         <div className="relative z-10 w-full h-full px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14 3xl:px-16 3xl:py-16 4xl:px-20 4xl:py-20 flex flex-col justify-between items-center text-center">

//           {/* Desktop Layout — unchanged */}
//           <div className="hidden lg:grid grid-cols-12 gap-4 xl:gap-8 3xl:gap-12 items-center w-full mb-6 xl:mb-8 3xl:mb-12">
//             {/* Left: Text */}
//             <div className="col-span-4 flex flex-col items-start text-left space-y-4 xl:space-y-6 3xl:space-y-8">
//               {/* Heading — fluid: 32px → 90px */}
//               <h2
//                 className="font-semibold leading-[1.08] tracking-tight text-white"
//                 style={{ fontSize: 'clamp(2rem, 3vw + 0.5rem, 5.625rem)' }}
//               >
//                 Start <span className="text-white">Digitising</span> <br />
//                 <span className="text-[#D0FF00]">Your Shelves</span>
//               </h2>

//               {/* Paragraph — fluid: 13px → 28px */}
//               <p
//                 className="text-white font-normal leading-[1.4] max-w-[480px] xl:max-w-[540px] 3xl:max-w-[650px]"
//                 style={{ fontSize: 'clamp(0.8125rem, 0.8vw + 0.4rem, 1.75rem)' }}
//               >
//                 Whether you're running a single store or a national chain, Ilaan Link provides a simple way to keep every price accurate, always.
//               </p>

//               {/* Button — fluid: 14px → 28px */}
//               <button
//                 className="inline-flex items-center gap-2.5 xl:gap-4 bg-[#D0FF00] hover:bg-[#D0FF00] text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 xl:px-8 xl:py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,255,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
//                 style={{ fontSize: 'clamp(0.875rem, 0.8vw + 0.4rem, 1.75rem)' }}
//               >
//                 <span>Make an Enquiry</span>
//                 <svg className="w-4 h-4 xl:w-6 xl:h-6 3xl:w-7 3xl:h-7 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             </div>

//             {/* Center: Logo */}
//             <div className="col-span-4 flex justify-center items-center">
//               <img
//                 src={LinkLogo3D}
//                 alt="Ilaan Diamond Logo"
//                 className="w-[160px] sm:w-[200px] lg:w-[240px] xl:w-[290px] 2xl:w-[340px] 3xl:w-[420px] 4xl:w-[480px] h-auto object-contain drop-shadow-[0_0_35px_rgba(255,255,0,0.5)]"
//               />
//             </div>

//             {/* Right: Phone */}
//             <div className="col-span-4 flex justify-end items-center">
//               <img
//                 src={FooterLeft}
//                 alt="Shelf Label Smartphone Preview"
//                 className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[440px] 2xl:max-w-[500px] 3xl:max-w-[600px] 4xl:max-w-[700px] h-auto object-contain"
//               />
//             </div>
//           </div>

//           {/* Mobile Layout */}
//           <div className="lg:hidden flex flex-col items-center text-center w-full max-w-[380px] mx-auto space-y-5 mb-7">
//             <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.1] text-black tracking-tight">
//               Get Your <br />
//               Pricing Right
//             </h2>
//             <p className="text-[#333333] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] font-normal">
//               Whether you're running a single store or a national chain, Ilaan Link provides a simple way to keep every price accurate, always.
//             </p>
//             <div className="py-2 flex justify-center items-center">
//               <img
//                 src={LinkLogo3D}
//                 alt="Ilaan Diamond Logo"
//                 className="w-[120px] sm:w-[150px] md:w-[174px] h-auto object-contain"
//               />
//             </div>
//             <div className="flex justify-center items-center w-full">
//               <img
//                 src={FooterLeft}
//                 alt="Shelf Label Mobile Preview"
//                 className="w-full max-w-[220px] sm:max-w-[258px] md:max-w-[290px] h-auto object-contain"
//               />
//             </div>
//             <div className="pt-1 w-full flex justify-center">
//               <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFFF00] text-black font-medium text-[13px] sm:text-[14px] md:text-[15px] px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,0,0.5)] active:scale-95 cursor-pointer">
//                 <span>Make an Enquiry</span>
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Bottom Stats Bar — 3-column feature cards
//                         Mobile:  1 col, stacked with horizontal dividers
//                         md+:     3 cols with vertical dividers
//                     */}
//           <div className="w-full border border-[#D0FF00]/60 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 3xl:p-9 4xl:p-12 bg-black/90 backdrop-blur-md relative overflow-hidden mt-2 lg:mt-4 3xl:mt-6 4xl:mt-8 mb-2 lg:mb-4">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center divide-y md:divide-y-0 md:divide-x divide-[#D0FF00]/30">

//               {/* Card 1: Smarter Campaigns */}
//               <div className="flex items-center gap-3 md:gap-4 3xl:gap-6 text-left py-4 md:py-0 md:px-4 3xl:px-6 first:pt-0 last:pb-0">
//                 <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
//                   <img src={GroupChart} alt="Smarter Campaigns" className="w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold leading-tight mb-1" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
//                     Smarter Campaigns
//                   </h3>
//                   <p className="text-white/70 leading-snug font-normal" style={{ fontSize: 'clamp(0.6875rem, 0.3vw + 0.5rem, 1.0625rem)' }}>
//                     Data-driven strategies that deliver results.
//                   </p>
//                 </div>
//               </div>

//               {/* Card 2: Real Connections */}
//               <div className="flex items-center gap-3 md:gap-4 3xl:gap-6 text-left py-4 md:py-0 md:px-4 3xl:px-6">
//                 <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
//                   <img src={GroupUsers} alt="Real Connections" className="w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold leading-tight mb-1" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
//                     Real Connections
//                   </h3>
//                   <p className="text-white/70 leading-snug font-normal" style={{ fontSize: 'clamp(0.6875rem, 0.3vw + 0.5rem, 1.0625rem)' }}>
//                     Reach the right audience where they are.
//                   </p>
//                 </div>
//               </div>

//               {/* Card 3: Seamless Execution */}
//               <div className="flex items-center gap-3 md:gap-4 3xl:gap-6 text-left py-4 md:py-0 md:px-4 3xl:px-6 last:pb-0">
//                 <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
//                   <img src={GroupRocket} alt="Seamless Execution" className="w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold leading-tight mb-1" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
//                     Seamless Execution
//                   </h3>
//                   <p className="text-white/70 leading-snug font-normal" style={{ fontSize: 'clamp(0.6875rem, 0.3vw + 0.5rem, 1.0625rem)' }}>
//                     Simple, efficient, and built for growth.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default SignageFooter;
import React from 'react';
import Vector12 from '../../assets/media/Vector 12.png';
import Vector18 from '../../assets/media/Vector 18.png';
import GroupChart from '../../assets/LINK/target-1.png';
import GroupUsers from '../../assets/LINK/target-3.png';
import GroupRocket from '../../assets/LINK/target-2.png';
import LinkLogo3D from '../../assets/3d_Logo 1.png';
import FooterLeft from '../../assets/LINK/footer-left.png';

const SignageFooter = () => {
  return (
    <section
      data-header-theme="light"
      className="w-full overflow-x-hidden bg-[#D0FF00] py-4 px-2 sm:py-6 sm:px-3 lg:py-8 lg:px-4 xl:py-10 xl:px-5 3xl:py-12 3xl:px-6 4xl:py-14 4xl:px-8 flex justify-center items-center font-['Inter',sans-serif]"
    >
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
            {/* Left: Text Block Matched to Figma */}
            <div className="col-span-4 flex flex-col items-start text-left space-y-4 xl:space-y-6 3xl:space-y-8">
              <h2
                className="font-bold leading-[1.05] tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 3.2vw + 0.5rem, 5.625rem)' }}
              >
                Start <br />
                Building Your <br />
                <span className="text-[#D0FF00]">Digital Setup</span>
              </h2>

              <p
                className="text-white font-normal leading-[1.4] max-w-[480px] xl:max-w-[540px] 3xl:max-w-[650px]"
                style={{ fontSize: 'clamp(0.8125rem, 0.8vw + 0.4rem, 1.75rem)' }}
              >
                Whether you need a single screen or a full installation, Ilaan provides the hardware and expertise to deliver
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
                alt="Shelf Label Smartphone Preview"
                className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[440px] 2xl:max-w-[500px] 3xl:max-w-[600px] 4xl:max-w-[700px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile Layout — Exact Figma 1:1 Matched */}
          <div className="lg:hidden flex flex-col items-center text-center w-full max-w-[380px] mx-auto space-y-4 pt-4 mb-6">

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold leading-[1.08] text-white tracking-tight">
              Start <br />
              Building Your <br />
              <span className="text-[#D0FF00]">Digital Setup</span>
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-neutral-300 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.4] font-normal px-2 max-w-[320px]">
              Whether you need a single screen or a full installation, Ilaan provides the hardware and expertise to deliver
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
                alt="Shelf Label Mobile Preview"
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

          {/* Bottom Stats Cards Bar */}
          <div className="w-full border border-[#D0FF00]/60 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 3xl:p-9 4xl:p-12 bg-black/90 backdrop-blur-md relative overflow-hidden mt-2 lg:mt-4 3xl:mt-6 4xl:mt-8 mb-2 lg:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center divide-y md:divide-y-0 md:divide-x divide-[#D0FF00]/30">

              {/* Card 1 */}
              <div className="flex items-center gap-3.5 md:gap-4 3xl:gap-6 text-left py-3.5 md:py-0 md:px-4 3xl:px-6 first:pt-0 last:pb-0">
                <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
                  <img src={GroupChart} alt="Smarter Campaigns" className="w-4 h-4 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight mb-0.5" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
                    Smarter Campaigns
                  </h3>
                  <p className="text-white/70 leading-snug font-normal text-[11px] sm:text-xs md:text-sm">
                    Data-driven strategies that deliver results.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-3.5 md:gap-4 3xl:gap-6 text-left py-3.5 md:py-0 md:px-4 3xl:px-6">
                <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
                  <img src={GroupUsers} alt="Real Connections" className="w-4 h-4 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight mb-0.5" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
                    Real Connections
                  </h3>
                  <p className="text-white/70 leading-snug font-normal text-[11px] sm:text-xs md:text-sm">
                    Reach the right audience where they are.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-3.5 md:gap-4 3xl:gap-6 text-left py-3.5 md:py-0 md:px-4 3xl:px-6 last:pb-0">
                <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] border border-[#D0FF00] bg-black rounded-[12px] lg:rounded-[14px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,0,0.3)]">
                  <img src={GroupRocket} alt="Seamless Execution" className="w-4 h-4 md:w-6 md:h-6 3xl:w-8 3xl:h-8 -rotate-45 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight mb-0.5" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.6rem, 1.5rem)' }}>
                    Seamless Execution
                  </h3>
                  <p className="text-white/70 leading-snug font-normal text-[11px] sm:text-xs md:text-sm">
                    Simple, efficient, and built for growth.
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

export default SignageFooter;