// import React from 'react';

// // Exact File Imports from src/assets/media/
// import bgImage from '../../assets/media/Group 1261156807.png';
// import mobileBgImage from '../../assets/media/Mediamobile5.png';
// import heroImage from '../../assets/media/Group 1261156774.png';
// import checkIcon from '../../assets/media/Group 1261156806.png';
// import locationIcon from '../../assets/media/location (3) 1.png';
// import messengerIcon from '../../assets/media/messenger (1) 1.png';
// import tvIcon from '../../assets/media/wide-tv 1.png';
// import usersIcon from '../../assets/media/group (6) 1.png';
// import targetIcon from '../../assets/media/group (6) 2.png';
// import chartIcon from '../../assets/media/group (6) 3.png';

// const ForAdvertisers = () => {
//   const points = [
//     {
//       icon: locationIcon,
//       title: 'Reach customers',
//       subtitle: 'at the point of purchase',
//     },
//     {
//       icon: messengerIcon,
//       title: 'Deliver contextually',
//       subtitle: 'relevant messaging',
//     },
//     {
//       icon: tvIcon,
//       title: 'Extend digital campaigns',
//       subtitle: 'into physical environments',
//     },
//   ];

//   const bottomStats = [
//     {
//       icon: usersIcon,
//       title: 'High Visibility',
//       desc: 'Engage real audiences in real environments',
//     },
//     {
//       icon: targetIcon,
//       title: 'Relevant Impact',
//       desc: 'Deliver messages that matter',
//     },
//     {
//       icon: chartIcon,
//       title: 'Better Outcomes',
//       desc: 'Stronger connection drives better results',
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

//       {/* Figma Main Container */}
//       <div className="w-full 3xl:max-w-[2100px] 4xl:max-w-full mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12 xl:gap-16 3xl:gap-20 4xl:gap-24 relative z-10">

//         {/* LEFT COLUMN: Adjusted Gaps for 1:1 Figma Match */}
//         <div className="w-full lg:w-1/2 4xl:w-[48%] 4xl:max-w-[1150px] flex flex-col justify-between">

//           {/* Header Area */}
//           <div>
//             {/* Title */}
//             <h2 className="text-4xl sm:text-5xl xl:text-[54px] 2xl:text-[68px] 3xl:text-[80px] 4xl:text-[100px] font-semibold tracking-tight leading-none mb-4">
//               For <span className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent">Advertisers</span>
//             </h2>

//             {/* Pink Accent Line */}
//             <div className="w-12 h-[3px] bg-[#E000FF] rounded-full mb-6 xl:mb-8" />

//             {/* Subtitle */}
//             <h3 className="text-xl sm:text-2xl xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[40px] font-medium text-white/90 leading-tight mb-4 xl:mb-6">
//               Extend Your Reach into the Real World
//             </h3>

//             {/* Intro Text */}
//             <p className="text-white/60 text-base sm:text-lg 4xl:text-2xl mb-6 xl:mb-8">
//               Ilaan Media enables advertisers to:
//             </p>

//             {/* Points List with Exact Spacing */}
//             <div className="flex flex-col gap-6 xl:gap-8 4xl:gap-10 mb-6 xl:mb-8">
//               {points.map((point, index) => (
//                 <div key={index} className="flex items-center gap-4 xl:gap-5 4xl:gap-6">
//                   {/* Icon Box */}
//                   <div className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] 3xl:w-[83px] 3xl:h-[83px] 4xl:w-[96px] 4xl:h-[96px] rounded-[16px] bg-[#12052A]/80 border border-[#3B196C] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(224,0,255,0.15)]">
//                     <img src={point.icon} alt="" className="w-7 h-7 xl:w-8 xl:h-8 3xl:w-9 3xl:h-9 4xl:w-11 4xl:h-11 object-contain" />
//                   </div>

//                   {/* Text Block */}
//                   <div className="flex flex-col justify-center">
//                     <span className="text-white text-base sm:text-lg xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-normal leading-tight">
//                       {point.title}
//                     </span>
//                     <span className="text-white/60 text-sm sm:text-base xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-normal leading-tight mt-1">
//                       {point.subtitle}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Highlight Box (W: 651px, H: 144px) */}
//           <div className="w-full max-w-[651px] 3xl:max-w-[760px] 4xl:max-w-full h-[144px] 3xl:h-[160px] 4xl:h-[180px] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-8 4xl:px-10 flex items-center gap-6 4xl:gap-8 backdrop-blur-md shadow-lg shrink-0">
//             {/* Circle Check Icon (67px x 67px) */}
//             <div className="w-[67px] h-[67px] 4xl:w-[80px] 4xl:h-[80px] shrink-0 flex items-center justify-center">
//               <img src={checkIcon} alt="check" className="w-full h-full object-contain" />
//             </div>

//             {/* Banner Text */}
//             <p className="text-white text-lg sm:text-[24px] 4xl:text-[28px] font-normal leading-snug">
//               This creates a{' '}
//               <span className="bg-gradient-to-r from-[#994EEA] to-[#E730A2] bg-clip-text text-transparent font-medium">
//                 stronger connection
//               </span>{' '} <br />
//               between advertising and outcome.
//             </p>
//           </div>

//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="w-full lg:w-1/2 4xl:w-[50%] flex flex-col justify-between items-center lg:items-end 4xl:items-stretch gap-6">

//           {/* Main Showcase Image (Exact 863px x 665px) */}
//           <div className="w-full max-w-[863px] 3xl:max-w-[1000px] 4xl:max-w-full h-[clamp(420px,55vh,665px)] 3xl:h-[750px] 4xl:h-[840px] rounded-[30px] overflow-hidden border border-[#994EEA] shadow-[0_0_40px_rgba(224,0,255,0.15)] relative shrink-0">
//             <img
//               src={heroImage}
//               alt="Advertiser Showcase"
//               className="w-full h-full object-cover rounded-[30px]"
//             />
//           </div>

//           {/* Bottom Stats Bar (Exact 863px x 144px) */}
//           <div className="w-full max-w-[863px] 3xl:max-w-[1000px] 4xl:max-w-full h-auto min-h-[144px] 3xl:min-h-[160px] 4xl:min-h-[180px] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-6 backdrop-blur-md items-center shrink-0">
//             {bottomStats.map((stat, idx) => (
//               <div key={idx} className="flex items-center gap-4">
//                 {/* Icon: Exact 47.7px x 47.7px */}
//                 <div className="w-[47.7px] h-[47.7px] 4xl:w-[58px] 4xl:h-[58px] shrink-0 flex items-center justify-center">
//                   <img src={stat.icon} alt={stat.title} className="w-full h-full object-contain" />
//                 </div>
//                 <div className="space-y-1">
//                   <h4 className="text-white text-base font-normal leading-tight text-[21.6px] 4xl:text-[24px] tracking-tight">{stat.title}</h4>
//                   <p className="text-white/60 text-xs leading-tight text-[16.2px] 4xl:text-[18px] tracking-tight">{stat.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ForAdvertisers;
import React from 'react';

// Exact File Imports from src/assets/media/
import bgImage from '../../assets/media/Group 1261156807.png';
import mobileBgImage from '../../assets/media/Mediamobile5.png';
import heroImage from '../../assets/media/Group 1261156774.png';
import checkIcon from '../../assets/media/Group 1261156806.png';
import locationIcon from '../../assets/media/location (3) 1.png';
import messengerIcon from '../../assets/media/messenger (1) 1.png';
import tvIcon from '../../assets/media/wide-tv 1.png';
import usersIcon from '../../assets/media/group (6) 1.png';
import targetIcon from '../../assets/media/group (6) 2.png';
import chartIcon from '../../assets/media/group (6) 3.png';

const ForAdvertisers = () => {
  const points = [
    {
      icon: locationIcon,
      title: 'Reach customers',
      subtitle: 'at the point of purchase',
    },
    {
      icon: messengerIcon,
      title: 'Deliver contextually',
      subtitle: 'relevant messaging',
    },
    {
      icon: tvIcon,
      title: 'Extend digital campaigns',
      subtitle: 'into physical environments',
    },
  ];

  const bottomStats = [
    {
      icon: usersIcon,
      title: 'High Visibility',
      desc: 'Engage real audiences in real environments',
    },
    {
      icon: targetIcon,
      title: 'Relevant Impact',
      desc: 'Deliver messages that matter',
    },
    {
      icon: chartIcon,
      title: 'Better Outcomes',
      desc: 'Stronger connection drives better results',
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

      {/* Figma Main Container — plain vw/clamp() sizing below, NOT dependent on
          any custom Tailwind breakpoint (3xl/4xl) being configured, so it will
          scale correctly on 2560px+ screens regardless of tailwind.config.js */}
      <div className="w-full max-w-[2400px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-[clamp(24px,12vw,230px)] relative z-10">

        {/* LEFT COLUMN: fixed content-based width (not 50/50 split) so it never
            leaves unused space that turns into a growing gap at large screens */}
        <div className="w-full lg:w-[clamp(320px,34vw,700px)] shrink-0 flex flex-col justify-between">

          {/* Header Area */}
          <div>
            {/* Title */}
            <h2 className="text-[clamp(32px,3.33vw,68px)] font-semibold tracking-tight leading-none mb-[clamp(10px,0.8vw,18px)]">
              For <span className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent">Advertisers</span>
            </h2>

            {/* Pink Accent Line */}
            <div className="w-[clamp(40px,2.2vw,52px)] h-[3px] bg-[#E000FF] rounded-full mb-[clamp(16px,1.6vw,34px)]" />

            {/* Subtitle */}
            <h3 className="text-[clamp(18px,1.35vw,28px)] font-medium text-white/90 leading-tight mb-[clamp(10px,0.8vw,18px)]">
              Extend Your Reach into the Real World
            </h3>

            {/* Intro Text */}
            <p className="text-white/60 text-[clamp(14px,0.94vw,19px)] mb-[clamp(16px,1.6vw,34px)]">
              Ilaan Media enables advertisers to:
            </p>

            {/* Points List with fluid spacing */}
            <div className="flex flex-col gap-[clamp(16px,1.7vw,40px)] mb-[clamp(16px,1.6vw,34px)]">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-[clamp(12px,1.05vw,24px)]">
                  {/* Icon Box */}
                  <div className="w-[clamp(48px,3.33vw,90px)] h-[clamp(48px,3.33vw,90px)] rounded-[16px] bg-[#12052A]/80 border border-[#3B196C] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(224,0,255,0.15)]">
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
          <div className="w-full h-[clamp(100px,7.5vw,160px)] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-[clamp(20px,1.8vw,38px)] flex items-center gap-[clamp(14px,1.4vw,30px)] backdrop-blur-md shadow-lg shrink-0">
            {/* Circle Check Icon (Figma: 67px) */}
            <div className="w-[clamp(48px,3.5vw,72px)] h-[clamp(48px,3.5vw,72px)] shrink-0 flex items-center justify-center">
              <img src={checkIcon} alt="check" className="w-full h-full object-contain" />
            </div>

            {/* Banner Text */}
            <p className="text-white text-[clamp(15px,1.25vw,26px)] font-normal leading-snug">
              This creates a{' '}
              <span className="bg-gradient-to-r from-[#994EEA] to-[#E730A2] bg-clip-text text-transparent font-medium">
                stronger connection
              </span>{' '} <br />
              between advertising and outcome.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: flex-1 fills all remaining space exactly (no leftover
            gap between columns at any screen width) — width comes from flex
            layout, NOT from a Tailwind breakpoint, so it always works */}
        <div className="w-full lg:flex-1 lg:max-w-[clamp(863px,55vw,1500px)] flex flex-col justify-between items-stretch gap-[clamp(16px,1.6vw,34px)]">

          {/* Main Showcase Image (Figma: 863×665 at 1920 baseline) */}
          <div className="w-full h-[clamp(420px,34.6vw,760px)] rounded-[clamp(16px,1.56vw,30px)] overflow-hidden border border-[#994EEA] shadow-[0_0_40px_rgba(224,0,255,0.15)] relative shrink-0">
            <img
              src={heroImage}
              alt="Advertiser Showcase"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Stats Bar (Figma: 863×144 at 1920 baseline) */}
          <div className="w-full min-h-[clamp(100px,7.5vw,160px)] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-[clamp(20px,1.8vw,38px)] py-4 grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,1.4vw,30px)] backdrop-blur-md items-center shrink-0">
            {bottomStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-[clamp(10px,0.9vw,20px)]">
                {/* Icon (Figma: 47.7px) */}
                <div className="w-[clamp(32px,2.48vw,54px)] h-[clamp(32px,2.48vw,54px)] shrink-0 flex items-center justify-center">
                  <img src={stat.icon} alt={stat.title} className="w-full h-full object-contain" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-[clamp(15px,1.125vw,24px)] font-normal leading-tight tracking-tight">{stat.title}</h4>
                  <p className="text-white/60 text-[clamp(12px,0.84vw,18px)] leading-tight tracking-tight">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ForAdvertisers;