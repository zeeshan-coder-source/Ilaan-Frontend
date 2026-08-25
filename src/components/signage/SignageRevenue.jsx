// import React from "react";

// // Asset Imports
// import bgDesktop from "../../assets/signage/Group 1261156825.png";
// import bgMobile from "../../assets/signage/Group 1261156933.png";

// import target1 from "../../assets/signage/target 1.png";
// import target2 from "../../assets/signage/target 2.png";
// import target3 from "../../assets/signage/target 3.png";
// import trend2 from "../../assets/signage/trend 2.png";

// const featureList = [
//   {
//     id: 1,
//     title: "Visual clarity",
//     desc: "Clear and easy to understand",
//     icon: target1,
//   },
//   {
//     id: 2,
//     title: "Screen optimisation",
//     desc: "Designed to perform on any screen",
//     icon: target2,
//   },
//   {
//     id: 3,
//     title: "Consistent messaging",
//     desc: "Keep your brand message uniform",
//     icon: target3,
//   },
// ];

// export default function SignageRevenue() {
//   return (
//     <section
//       className="
//         relative w-full bg-black text-white overflow-hidden select-none
//         aspect-[402/861] lg:aspect-auto lg:min-h-screen lg:max-h-[1080px] min-[2560px]:max-h-[1440px]
//         flex items-center
//       "
//     >
//       {/* Background Image Layer */}
//       <picture className="absolute inset-0 w-full h-full pointer-events-none">
//         <source media="(min-width: 1024px)" srcSet={bgDesktop} />
//         <img
//           src={bgMobile}
//           alt="Retail store digital signage content background"
//           className="w-full h-full object-cover object-top lg:object-center opacity-90"
//         />
//       </picture>

//       {/* Dark Overlay Gradient for Readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-3/5 pointer-events-none" />

//       {/* Main Container */}
//       <div
//         className="
//           relative z-10 w-full mx-auto
//           px-4 sm:px-6 lg:px-12 min-[1504px]:px-16 min-[1920px]:px-24 min-[2560px]:px-32
//           py-8 sm:py-12 lg:py-16 min-[1920px]:py-20 min-[2560px]:py-28
//           max-w-[480px] lg:max-w-[2560px] 
//         "
//       >
//         {/* Left Side Content Container */}
//         <div className="w-full lg:max-w-[850px] min-[1504px]:max-w-[1000px] min-[1920px]:max-w-[1250px] min-[2560px]:max-w-[1550px] space-y-6 sm:space-y-8 lg:space-y-10 min-[1920px]:space-y-12">

//           {/* Heading Block (Figma 1:1 Matched Scaled Sizes) */}
//           <div>
//             <h2 className="font-['Falcon',sans-serif] text-[36px] sm:text-[56px] lg:text-[76px] min-[1504px]:text-[88px] min-[1920px]:text-[108px] min-[2560px]:text-[138px] font-black uppercase leading-[0.98] tracking-tight text-white">
//               CONTENT THAT
//             </h2>
//             <h2 className="font-['Falcon',sans-serif] text-[36px] sm:text-[56px] lg:text-[76px] min-[1504px]:text-[88px] min-[1920px]:text-[108px] min-[2560px]:text-[138px] font-black uppercase leading-[0.98] tracking-tight text-[#D0FF00] mt-1 sm:mt-2">
//               FITS THE SCREEN
//             </h2>

//             <p className="mt-4 sm:mt-6 lg:mt-8 text-[14px] sm:text-lg lg:text-2xl min-[1920px]:text-3xl min-[2560px]:text-4xl text-neutral-300 font-normal tracking-wide leading-relaxed">
//               Digital signage performs best <br className="hidden sm:inline" />
//               when supported by the right content.
//             </p>
//           </div>

//           {/* Feature List Items (Prominent Icons & Bigger Typography) */}
//           <div className="space-y-5 sm:space-y-7 min-[1920px]:space-y-9 min-[2560px]:space-y-12 lg:max-w-[800px] min-[1504px]:max-w-[950px] min-[1920px]:max-w-[1100px]">
//             {featureList.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center gap-4 sm:gap-6 lg:gap-8"
//               >
//                 {/* Circle Icon Badge */}
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 min-[1504px]:w-20 min-[1504px]:h-20 min-[1920px]:w-24 min-[1920px]:h-24 min-[2560px]:w-28 min-[2560px]:h-28 rounded-full bg-black/70 border border-neutral-800 flex items-center justify-center shrink-0">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-6 h-6 sm:w-8 sm:h-8 min-[1504px]:w-10 min-[1504px]:h-10 min-[1920px]:w-12 min-[1920px]:h-12 min-[2560px]:w-14 min-[2560px]:h-14 object-contain"
//                   />
//                 </div>

//                 {/* Text Block */}
//                 <div>
//                   <h3 className="text-[16px] sm:text-xl lg:text-2xl min-[1504px]:text-3xl min-[1920px]:text-4xl min-[2560px]:text-5xl font-bold text-white tracking-wide">
//                     {item.title}
//                   </h3>
//                   <p className="text-[13px] sm:text-base lg:text-lg min-[1504px]:text-xl min-[1920px]:text-2xl min-[2560px]:text-3xl text-neutral-400 mt-1">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Action Button (Figma Scaled CTA Button) */}
//           <div className="pt-3 sm:pt-6">
//             <button
//               className="
//                 inline-flex items-center justify-between gap-5 sm:gap-8 lg:gap-12
//                 px-6 sm:px-9 lg:px-12 min-[1920px]:px-14 min-[2560px]:px-18
//                 py-4 sm:py-5 lg:py-6 min-[1920px]:py-7 min-[2560px]:py-9
//                 rounded-2xl border-2 border-[#D0FF00] bg-black/60 backdrop-blur-md
//                 hover:bg-[#D0FF00]/10 transition-all duration-300 group
//               "
//             >
//               <span className="font-['Falcon',sans-serif] text-[13px] sm:text-lg lg:text-xl min-[1920px]:text-2xl min-[2560px]:text-3xl font-bold text-[#D0FF00] uppercase tracking-wider">
//                 LET'S CREATE CONTENT THAT CONNECTS
//               </span>

//               {/* Arrow Icon */}
//               <img
//                 src={trend2}
//                 alt="Arrow Icon"
//                 className="w-5 h-5 sm:w-7 sm:h-7 min-[1920px]:w-9 min-[1920px]:h-9 min-[2560px]:w-12 min-[2560px]:h-12 object-contain group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
//               />
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

// Asset Imports
import bgDesktop from "../../assets/signage/Group 1261156825.png";
import bgMobile from "../../assets/signage/Group 1261156933.png";

import target1 from "../../assets/signage/target 1.png";
import target2 from "../../assets/signage/target 2.png";
import target3 from "../../assets/signage/target 3.png";
import trend2 from "../../assets/signage/trend 2.png";

const featureList = [
  {
    id: 1,
    title: "Visual clarity",
    desc: "Clear and easy to understand",
    icon: target1,
  },
  {
    id: 2,
    title: "Screen optimisation",
    desc: "Designed to perform on any screen",
    icon: target2,
  },
  {
    id: 3,
    title: "Consistent messaging",
    desc: "Keep your brand message uniform",
    icon: target3,
  },
];

export default function SignageRevenue() {
  return (
    <section
      data-header-theme="dark"
      className="
        relative w-full bg-black text-white overflow-hidden select-none
        aspect-[402/861] lg:aspect-auto lg:min-h-screen lg:max-h-[1080px] min-[2560px]:max-h-[1440px]
        flex items-start lg:items-center
      "
    >
      {/* Background Image Layer */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <img
          src={bgMobile}
          alt="Retail store digital signage content background"
          className="w-full h-full object-cover object-top lg:object-center opacity-90"
        />
      </picture>

      {/* Dark Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-3/5 pointer-events-none" />

      {/* Main Responsive Grid Container */}
      <div
        className="
          relative z-10 w-full mx-auto
          px-4 sm:px-6 lg:px-12 min-[1504px]:px-16 min-[1920px]:px-24 min-[2560px]:px-32
          pt-14 sm:pt-16 lg:py-16 min-[1920px]:py-20 min-[2560px]:py-24
          max-w-[480px] lg:max-w-[2560px]
        "
      >
        {/* Left Side Expanded Content Container */}
        <div className="w-full lg:max-w-[850px] min-[1504px]:max-w-[1000px] min-[1920px]:max-w-[1250px] min-[2560px]:max-w-[1650px] space-y-4 sm:space-y-6 lg:space-y-10 min-[1920px]:space-y-12 min-[2560px]:space-y-16">

          {/* Heading Block */}
          <div>
            <h2 className="font-['Falcon',sans-serif] text-[32px] sm:text-[52px] lg:text-[76px] min-[1504px]:text-[88px] min-[1920px]:text-[108px] min-[2560px]:text-[145px] font-black uppercase leading-[0.98] tracking-tight text-white">
              CONTENT THAT
            </h2>
            <h2 className="font-['Falcon',sans-serif] text-[32px] sm:text-[52px] lg:text-[76px] min-[1504px]:text-[88px] min-[1920px]:text-[108px] min-[2560px]:text-[145px] font-black uppercase leading-[0.98] tracking-tight text-[#D0FF00] mt-0.5 sm:mt-1">
              FITS THE SCREEN
            </h2>

            <p className="mt-2.5 sm:mt-4 lg:mt-6 text-[12px] sm:text-base lg:text-xl min-[1920px]:text-2xl min-[2560px]:text-4xl text-neutral-300 font-normal tracking-wide leading-relaxed">
              Digital signage performs best <br className="hidden sm:inline" />
              when supported by the right content.
            </p>
          </div>

          {/* Feature List Items */}
          <div className="space-y-3.5 sm:space-y-5 lg:space-y-7 min-[1920px]:space-y-9 min-[2560px]:space-y-14 lg:max-w-[800px] min-[1504px]:max-w-[950px] min-[1920px]:max-w-[1100px] min-[2560px]:max-w-[1400px]">
            {featureList.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 sm:gap-5 lg:gap-8"
              >
                {/* Circle Icon Badge */}
                <div className="w-8 h-8 sm:w-14 sm:h-14 min-[1504px]:w-18 min-[1504px]:h-18 min-[1920px]:w-22 min-[1920px]:h-22 min-[2560px]:w-32 min-[2560px]:h-32 rounded-full bg-black/70 border border-neutral-800 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-4 h-4 sm:w-7 sm:h-7 min-[1504px]:w-9 min-[1504px]:h-9 min-[1920px]:w-11 min-[1920px]:h-11 min-[2560px]:w-16 min-[2560px]:h-16 object-contain"
                  />
                </div>

                {/* Text Block */}
                <div>
                  <h3 className="text-[13px] sm:text-lg lg:text-2xl min-[1504px]:text-3xl min-[1920px]:text-4xl min-[2560px]:text-5xl font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm lg:text-lg min-[1504px]:text-xl min-[1920px]:text-2xl min-[2560px]:text-3xl text-neutral-400 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Button */}
          <div className="pt-2 sm:pt-4 lg:pt-6">
            <button
              className="
                inline-flex items-center justify-between gap-4 sm:gap-7 lg:gap-10
                px-4 sm:px-8 lg:px-11 min-[1920px]:px-14 min-[2560px]:px-20
                py-2.5 sm:py-4 lg:py-6 min-[1920px]:py-7 min-[2560px]:py-10
                rounded-xl sm:rounded-2xl border sm:border-2 border-[#D0FF00] bg-black/60 backdrop-blur-md
                hover:bg-[#D0FF00]/10 transition-all duration-300 group
              "
            >
              <span className="font-['Falcon',sans-serif] text-[10px] sm:text-base lg:text-xl min-[1920px]:text-2xl min-[2560px]:text-4xl font-bold text-[#D0FF00] uppercase tracking-wider">
                LET'S CREATE CONTENT THAT CONNECTS
              </span>

              {/* Arrow Icon */}
              <img
                src={trend2}
                alt="Arrow Icon"
                className="w-3.5 h-3.5 sm:w-6 sm:h-6 min-[1920px]:w-8 min-[1920px]:h-8 min-[2560px]:w-14 min-[2560px]:h-14 object-contain group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}