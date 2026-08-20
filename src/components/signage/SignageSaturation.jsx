// import React from "react";

// import bgDesktop from "../../assets/signage/DESKTOP.png";
// import bgMobile from "../../assets/signage/MOBILE.png";

// const useCases = [
//   {
//     title: "In-Store Displays",
//     desc: "Promotions, branding and customer communication across retail environments",
//   },
//   {
//     title: "Window Displays",
//     desc: "High-brightness screens designed to attract attention from the street",
//   },
//   {
//     title: "Menu Boards",
//     desc: "Clear, consistent digital menus across single or multiple locations",
//   },
//   {
//     title: "Feature Displays",
//     desc: "Large-format LED walls for high-impact visual presence",
//   },
//   {
//     title: "Outdoor Displays",
//     desc: "Screens built for visibility in external environments",
//   },
// ];

// function FeatureIcon() {
//   return (
//     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/30 bg-transparent">
//       <svg
//         className="h-5 w-5 text-black"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
//         <circle cx="12" cy="12" r="4" />
//       </svg>
//     </div>
//   );
// }

// export default function SignageSaturation() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#CBEA33]">
//       <picture className="absolute inset-0 w-full h-full pointer-events-none">
//         <source media="(min-width: 1024px)" srcSet={bgDesktop} />
//         <img
//           src={bgMobile}
//           alt="Signage Background"
//           className="w-full h-full object-cover object-top"
//         />
//       </picture>

//       <div
//         className="
//           relative z-10 mx-auto max-w-[1440px] max-w-[1920px] max-w-[2560px]
//           px-5 sm:px-8 lg:px-16 min-[1920px]:px-24
//           py-12 sm:py-16 lg:py-24
//         "
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[80vh]">

//           <div className="lg:col-span-6 xl:col-span-5 text-left z-10 max-w-xl">
//             <h2
//               className="
//                 font-extrabold leading-[1.1] text-black tracking-tight
//                 text-3xl sm:text-4xl lg:text-5xl xl:text-[52px]
//               "
//             >
//               Designed Around <br />
//               <span>How Screens are Used</span>
//             </h2>

//             <p className="mt-4 sm:mt-5 text-black/90 font-normal text-xs sm:text-sm lg:text-[15px] max-w-md">
//               Designed around how screens are used across retail environments
//             </p>

//             <ul className="mt-8 space-y-4 max-w-md lg:max-w-lg">
//               {useCases.map((u, i) => (
//                 <li
//                   key={u.title}
//                   className={`pb-4 ${i !== useCases.length - 1
//                     ? "border-b border-black/15"
//                     : ""
//                     }`}
//                 >
//                   <div className="flex items-start gap-4">
//                     <FeatureIcon />
//                     <div>
//                       <p className="font-bold text-black text-sm sm:text-base leading-snug">
//                         {u.title}
//                       </p>
//                       <p className="text-black/80 font-normal text-xs sm:text-sm mt-0.5 leading-relaxed">
//                         {u.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";

import bgDesktop from "../../assets/signage/DESKTOP.png";
import bgMobile from "../../assets/signage/MOBILE.png";

const useCases = [
  {
    title: "In-Store Displays",
    desc: "Promotions, branding and customer communication across retail environments",
  },
  {
    title: "Window Displays",
    desc: "High-brightness screens designed to attract attention from the street",
  },
  {
    title: "Menu Boards",
    desc: "Clear, consistent digital menus across single or multiple locations",
  },
  {
    title: "Feature Displays",
    desc: "Large-format LED walls for high-impact visual presence",
  },
  {
    title: "Outdoor Displays",
    desc: "Screens built for visibility in external environments",
  },
];

function FeatureIcon() {
  return (
    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-black/30 bg-transparent">
      <svg
        className="h-4 w-4 sm:h-5 sm:w-5 text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    </div>
  );
}

export default function SignageSaturation() {
  return (
    <section
      data-header-theme="light"
      className="
        relative w-full bg-[#CBEA33] text-black overflow-hidden select-none
        aspect-[405/1001] lg:aspect-auto lg:min-h-screen
      "
    >
      {/* Background Image Layer */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <img
          src={bgMobile}
          alt="Signage Background"
          className="w-full h-full object-cover object-top"
        />
      </picture>

      {/* Content Container */}
      <div
        className="
          relative z-10 mx-auto w-full
          max-w-[1440px] min-[1920px]:max-w-[1920px] min-[2560px]:max-w-[2560px]
          px-4 sm:px-8 lg:px-16 min-[1920px]:px-24
          pt-8 sm:pt-12 lg:py-24
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-6 xl:col-span-5 text-left z-10 max-w-xl">
            <h2
              className="
                font-extrabold leading-[1.1] text-black tracking-tight
                text-2xl sm:text-4xl lg:text-5xl xl:text-[52px]
              "
            >
              Designed Around <br />
              <span>How Screens are Used</span>
            </h2>

            <p className="mt-2.5 sm:mt-5 text-black/90 font-normal text-xs sm:text-sm lg:text-[15px] max-w-md">
              Designed around how screens are used across retail environments
            </p>

            {/* List items with compact spacing for mobile view */}
            <ul className="mt-4 sm:mt-8 space-y-2.5 sm:space-y-4 max-w-md lg:max-w-lg">
              {useCases.map((u, i) => (
                <li
                  key={u.title}
                  className={`pb-2.5 sm:pb-4 ${i !== useCases.length - 1 ? "border-b border-black/15" : ""
                    }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <FeatureIcon />
                    <div>
                      <p className="font-bold text-black text-xs sm:text-base leading-snug">
                        {u.title}
                      </p>
                      <p className="text-black/80 font-normal text-[11px] sm:text-sm mt-0.5 leading-tight sm:leading-relaxed">
                        {u.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}