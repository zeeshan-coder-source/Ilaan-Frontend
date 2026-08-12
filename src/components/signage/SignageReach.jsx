// import React from "react";

// // Asset Imports
// import bgDesktop from "../../assets/signage/BG_Image.png";
// import bgMobile from "../../assets/signage/Group 1261156931.png";

// // Features List
// const reachSteps = [
//   {
//     id: 1,
//     title: "Assess your space",
//     icon: (
//       <svg
//         className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-6 min-[1920px]:h-6 text-[#D0FF00]"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//         <polyline points="14 2 14 8 20 8" />
//         <circle cx="11.5" cy="14.5" r="2.5" />
//         <path d="M13.25 16.25L15 18" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     title: "Recommend the right display types",
//     icon: (
//       <svg
//         className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-6 min-[1920px]:h-6 text-[#D0FF00]"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     title: "Configure layouts",
//     icon: (
//       <svg
//         className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-6 min-[1920px]:h-6 text-[#D0FF00]"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//         <circle cx="12" cy="12" r="3" />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     title: "Support installation",
//     icon: (
//       <svg
//         className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-6 min-[1920px]:h-6 text-[#D0FF00]"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//       </svg>
//     ),
//   },
// ];

// // Reusable Figma Gradient Border (135deg Lime-to-Grey Gradient)
// const figmaLinearBorderStyle = {
//   background:
//     "linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, #D0FF00 0%, #3B3B38 100%) border-box",
//   border: "1px solid transparent",
//   borderRadius: "16px",
// };

// export default function SignageReach() {
//   return (
//     <section
//       className="
//         relative w-full bg-black text-white overflow-hidden select-none
//         aspect-[402/911] lg:aspect-auto lg:min-h-screen
//       "
//     >
//       {/* Background Image Layer */}
//       <picture className="absolute inset-0 w-full h-full pointer-events-none">
//         <source media="(min-width: 1024px)" srcSet={bgDesktop} />
//         <img
//           src={bgMobile}
//           alt="Coffee environment signage background"
//           className="w-full h-full object-cover object-top lg:object-center opacity-90"
//         />
//       </picture>

//       {/* Dark Gradient Overlay for Left Readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-3/5 pointer-events-none" />

//       {/* Main Responsive Grid Container */}
//       <div
//         className="
//           relative z-10 w-full mx-auto
//           px-4 sm:px-6 lg:px-12 min-[1504px]:px-16 min-[1920px]:px-24 min-[2560px]:px-32
//           py-6 sm:py-10 lg:py-16 min-[1920px]:py-24 min-[2560px]:py-32
//           max-w-[480px] lg:max-w-[2560px]
//         "
//       >
//         {/* Left Side Expanded Content Container */}
//         <div className="w-full lg:max-w-[650px] min-[1504px]:max-w-[720px] min-[1920px]:max-w-[850px] min-[2560px]:max-w-[1100px] space-y-4 sm:space-y-6 lg:space-y-8 min-[1920px]:space-y-10">

//           {/* Heading */}
//           <div>
//             <h2 className="font-['Falcon',sans-serif] text-[24px] sm:text-[36px] lg:text-[48px] min-[1504px]:text-[56px] min-[1920px]:text-[68px] min-[2560px]:text-[90px] font-black uppercase leading-[1.02] tracking-tight text-white">
//               DESIGNED <br />
//               AROUND <br />
//               YOUR
//             </h2>
//             <h2 className="font-['Falcon',sans-serif] text-[24px] sm:text-[36px] lg:text-[48px] min-[1504px]:text-[56px] min-[1920px]:text-[68px] min-[2560px]:text-[90px] font-black uppercase leading-[1.02] tracking-tight text-[#D0FF00] mt-0.5">
//               ENVIRONMENT
//             </h2>

//             <p className="mt-2.5 text-[11px] sm:text-xs lg:text-base min-[1920px]:text-xl min-[2560px]:text-2xl text-neutral-300 font-normal tracking-wide">
//               Every setup is different.
//             </p>
//           </div>

//           {/* Steps Box Container - Expanded Width & Scaled Borders */}
//           <div
//             style={figmaLinearBorderStyle}
//             className="
//               p-4 sm:p-6 lg:p-7 min-[1920px]:p-9 min-[2560px]:p-12
//               w-full lg:max-w-[580px] min-[1504px]:max-w-[640px] min-[1920px]:max-w-[750px] min-[2560px]:max-w-[980px]
//             "
//           >
//             <div className="space-y-3.5 sm:space-y-5 min-[1920px]:space-y-7">
//               {reachSteps.map((step, index) => (
//                 <div
//                   key={step.id}
//                   className={`
//                     flex items-center gap-3.5 sm:gap-5 lg:gap-6 pb-3 sm:pb-4 min-[1920px]:pb-6
//                     ${index !== reachSteps.length - 1
//                       ? "border-b border-neutral-800"
//                       : "pb-0"
//                     }
//                   `}
//                 >
//                   {/* Circle Icon Badge */}
//                   <div className="w-7 h-7 sm:w-10 sm:h-10 min-[1920px]:w-14 min-[1920px]:h-14 min-[2560px]:w-16 min-[2560px]:h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
//                     {step.icon}
//                   </div>

//                   {/* Step Title */}
//                   <p className="text-[11px] sm:text-sm lg:text-base min-[1920px]:text-xl min-[2560px]:text-2xl font-medium text-white tracking-wide">
//                     {step.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Statement Quote Block */}
//           <div className="flex items-start gap-3 sm:gap-4 lg:gap-5 pt-1 sm:pt-3">
//             {/* Lime Left Vertical Accent Line */}
//             <div className="w-[2px] sm:w-[3px] min-[1920px]:w-[4px] h-10 sm:h-12 min-[1920px]:h-16 min-[2560px]:h-20 bg-[#D0FF00] shrink-0 mt-0.5" />

//             <p className="text-[11px] sm:text-sm lg:text-base min-[1920px]:text-xl min-[2560px]:text-2xl text-white leading-[1.35] tracking-wide">
//               These improvements deliver both <br className="hidden sm:inline" />
//               <span className="text-[#D0FF00] font-bold">
//                 immediate efficiency
//               </span>{" "}
//               and long-term <br className="hidden sm:inline" />
//               <span className="text-[#D0FF00] font-bold">
//                 operational value.
//               </span>
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

// Asset Imports
import bgDesktop from "../../assets/signage/BG_Image.png";
import bgMobile from "../../assets/signage/Group 1261156931.png";

// Features List
const reachSteps = [
  {
    id: 1,
    title: "Assess your space",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2560px]:w-10 min-[2560px]:h-10 text-[#D0FF00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="11.5" cy="14.5" r="2.5" />
        <path d="M13.25 16.25L15 18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Recommend the right display types",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2560px]:w-10 min-[2560px]:h-10 text-[#D0FF00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Configure layouts",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2560px]:w-10 min-[2560px]:h-10 text-[#D0FF00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Support installation",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2560px]:w-10 min-[2560px]:h-10 text-[#D0FF00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

// Reusable Figma Gradient Border (135deg Lime-to-Grey Gradient)
const figmaLinearBorderStyle = {
  background:
    "linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, #D0FF00 0%, #3B3B38 100%) border-box",
  border: "1.5px solid transparent",
  borderRadius: "20px",
};

export default function SignageReach() {
  return (
    <section
      className="
        relative w-full bg-black text-white overflow-hidden select-none
        aspect-[402/911] lg:aspect-auto lg:min-h-screen lg:max-h-[1080px] min-[2560px]:max-h-[1440px]
        flex items-start lg:items-center
      "
    >
      {/* Background Image Layer */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <img
          src={bgMobile}
          alt="Coffee environment signage background"
          className="w-full h-full object-cover object-top lg:object-center opacity-90"
        />
      </picture>

      {/* Dark Gradient Overlay for Left Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-3/5 pointer-events-none" />

      {/* Main Responsive Grid Container */}
      <div
        className="
          relative z-10 w-full mx-auto
          px-4 sm:px-6 lg:px-12 min-[1504px]:px-16 min-[1920px]:px-24 min-[2560px]:px-32
          pt-12 sm:pt-16 lg:py-16 min-[1920px]:py-20 min-[2560px]:py-24
          max-w-[480px] lg:max-w-[2560px]
        "
      >
        {/* Left Side Expanded Content Container */}
        <div className="w-full lg:max-w-[800px] min-[1504px]:max-w-[950px] min-[1920px]:max-w-[1150px] min-[2560px]:max-w-[1500px] space-y-5 sm:space-y-7 lg:space-y-9 min-[1920px]:space-y-12">

          {/* Heading - Prominent & Scaled Up */}
          <div>
            <h2 className="font-['Falcon',sans-serif] text-[32px] sm:text-[52px] lg:text-[68px] min-[1504px]:text-[80px] min-[1920px]:text-[96px] min-[2560px]:text-[128px] font-black uppercase leading-[0.98] tracking-tight text-white">
              DESIGNED <br />
              AROUND <br />
              YOUR
            </h2>
            <h2 className="font-['Falcon',sans-serif] text-[32px] sm:text-[52px] lg:text-[68px] min-[1504px]:text-[80px] min-[1920px]:text-[96px] min-[2560px]:text-[128px] font-black uppercase leading-[0.98] tracking-tight text-[#D0FF00] mt-0.5 sm:mt-1">
              ENVIRONMENT
            </h2>

            <p className="mt-3 sm:mt-5 text-[13px] sm:text-base lg:text-xl min-[1920px]:text-2xl min-[2560px]:text-3xl text-neutral-300 font-normal tracking-wide">
              Every setup is different.
            </p>
          </div>

          {/* Steps Box Container - Expanded Width & Upscaled Content */}
          <div
            style={figmaLinearBorderStyle}
            className="
              p-5 sm:p-7 lg:p-8 min-[1920px]:p-10 min-[2560px]:p-14
              w-full lg:max-w-[650px] min-[1504px]:max-w-[750px] min-[1920px]:max-w-[900px] min-[2560px]:max-w-[1200px]
            "
          >
            <div className="space-y-4 sm:space-y-6 min-[1920px]:space-y-8">
              {reachSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`
                    flex items-center gap-4 sm:gap-6 lg:gap-7 pb-3.5 sm:pb-5 min-[1920px]:pb-7
                    ${index !== reachSteps.length - 1
                      ? "border-b border-neutral-800"
                      : "pb-0"
                    }
                  `}
                >
                  {/* Circle Icon Badge */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 min-[1920px]:w-18 min-[1920px]:h-18 min-[2560px]:w-22 min-[2560px]:h-22 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>

                  {/* Step Title */}
                  <p className="text-[13px] sm:text-base lg:text-lg min-[1504px]:text-xl min-[1920px]:text-2xl min-[2560px]:text-3xl font-medium text-white tracking-wide">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Statement Quote Block - Prominent Accent Line & Text */}
          <div className="flex items-start gap-3.5 sm:gap-5 lg:gap-6 pt-2 sm:pt-4">
            {/* Lime Left Vertical Accent Line */}
            <div className="w-[3px] sm:w-[4px] min-[1920px]:w-[5px] h-12 sm:h-16 lg:h-20 min-[1920px]:h-24 min-[2560px]:h-32 bg-[#D0FF00] shrink-0 mt-0.5" />

            <p className="text-[12px] sm:text-base lg:text-xl min-[1504px]:text-2xl min-[1920px]:text-3xl min-[2560px]:text-4xl text-white leading-[1.3] tracking-wide">
              These improvements deliver both <br className="hidden sm:inline" />
              <span className="text-[#D0FF00] font-bold">
                immediate efficiency
              </span>{" "}
              and long-term <br className="hidden sm:inline" />
              <span className="text-[#D0FF00] font-bold">
                operational value.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}