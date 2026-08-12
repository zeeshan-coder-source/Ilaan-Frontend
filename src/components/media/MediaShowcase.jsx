// import React from 'react';

// // Relative Assets Imports
// import rightImg from '../../assets/media/rightshaoe.png';
// import mobileBgImage from '../../assets/media/Mediamobile3.png';
// import logoIcon from '../../assets/media/Logos_ 1.png';
// import internetTvIcon from '../../assets/media/internet-tv 1.png';
// import reachIcon from '../../assets/media/reach (1) 1.png';
// import lineChartIcon from '../../assets/media/line-chart (1) 1.png';
// import targetIcon from '../../assets/media/target (3) 1.png';

// const SolutionSection = () => {
//   const bottomFeatures = [
//     {
//       id: 1,
//       title: 'Real Environments',
//       desc: 'Reach people where they live, work & move',
//       icon: internetTvIcon,
//     },
//     {
//       id: 2,
//       title: 'Extended Reach',
//       desc: 'Go beyond digital and reach more',
//       icon: reachIcon,
//     },
//     {
//       id: 3,
//       title: 'Better Impact',
//       desc: 'Be present in the moments that drive decisions',
//       icon: lineChartIcon,
//     },
//   ];

//   return (
//     <section className="w-full bg-[#060521] min-h-fit py-12 lg:py-16 3xl:py-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative">

//       {/* Mobile Background Overlay */}
//       <div
//         className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
//         style={{
//           backgroundImage: `url("${mobileBgImage}")`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       />

//       {/* ── Main Container Wrapper ── */}
//       <div className="w-full h-full 3xl:max-w-[2400px] 4xl:max-w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 4xl:px-16 flex flex-col lg:flex-row items-center justify-between relative z-10">

//         {/* ── LEFT: Text & Content Area ── */}
//         <div className="w-full lg:w-[48%] xl:w-[45%] 4xl:w-[48%] 4xl:max-w-[1150px] flex flex-col justify-center space-y-4 sm:space-y-5 xl:space-y-6 3xl:space-y-8 4xl:space-y-10 z-20 shrink-0 py-4 sm:py-6 lg:py-0">

//           {/* Logo / Top Icon */}
//           <div className="w-10 h-10 sm:w-12 sm:h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 flex items-center justify-start">
//             <img src={logoIcon} alt="Ilaan Logo" className="w-full h-full object-contain" />
//           </div>

//           {/* Title with Underline */}
//           <div>
//             <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] 3xl:text-[84px] 4xl:text-[100px] font-bold text-white tracking-tight leading-tight sm:leading-none">
//               The <span className="bg-gradient-to-r from-[#FF00D6] via-[#A100FF] to-[#6000FF] bg-clip-text text-transparent">Solution</span>
//             </h2>
//             <div className="w-12 sm:w-14 h-1.5 4xl:w-20 4xl:h-2 bg-[#FF00D6] rounded-full mt-2 sm:mt-3" />
//           </div>

//           {/* Subheading */}
//           <div className="space-y-0.5 sm:space-y-1">
//             <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-[36px] 3xl:text-[44px] 4xl:text-[52px] font-bold text-white tracking-tight">
//               A New Way to Access
//             </h3>
//             <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-[36px] 3xl:text-[44px] 4xl:text-[52px] font-bold bg-gradient-to-r from-[#FF00D6] via-[#A100FF] to-[#6000FF] bg-clip-text text-transparent tracking-tight">
//               Physical Media
//             </h3>
//           </div>

//           {/* Paragraph Description */}
//           <p className="text-[#A0A0B0] text-sm sm:text-base md:text-lg 3xl:text-xl 4xl:text-2xl max-w-[500px] 3xl:max-w-[660px] 4xl:max-w-[1000px] leading-relaxed">
//             Ilaan Media provides access to advertising space across connected digital screens in real environments.
//           </p>

//           {/* Highlight Card with Target Icon */}
//           <div className="w-full max-w-[520px] 3xl:max-w-[660px] 4xl:max-w-[1050px] bg-[#100a30]/80 border border-white/10 rounded-2xl p-4 sm:p-5 4xl:p-8 flex items-center gap-4 sm:gap-5 4xl:gap-8 shadow-lg backdrop-blur-md">
//             <div className="w-12 h-12 sm:w-14 sm:h-14 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 rounded-2xl bg-[#1b1242] border border-[#FF00D6]/30 flex items-center justify-center shrink-0">
//               <img src={targetIcon} alt="Target Icon" className="w-6 h-6 sm:w-7 sm:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 object-contain" />
//             </div>
//             <div className="w-[1px] h-10 sm:h-12 4xl:h-14 bg-white/10 shrink-0" />
//             <p className="text-xs sm:text-sm md:text-base 3xl:text-lg 4xl:text-2xl text-gray-200 font-normal leading-snug">
//               This allows brands to extend their reach beyond online channels and into physical spaces where{' '}
//               <span className="text-[#FF00D6] font-semibold">decisions are made.</span>
//             </p>
//           </div>

//           {/* Bottom 3 Features Grid (Mobile/Tab Responsive) */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 4xl:gap-10 pt-2 w-full max-w-[580px] 3xl:max-w-[720px] 4xl:max-w-[1050px]">
//             {bottomFeatures.map((feat) => (
//               <div key={feat.id} className="flex flex-col space-y-1.5 sm:space-y-2 4xl:space-y-3">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 3xl:w-14 3xl:h-14 4xl:w-18 4xl:h-18 rounded-2xl bg-[#140b38] border border-white/10 flex items-center justify-center shrink-0">
//                   <img src={feat.icon} alt={feat.title} className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-7 3xl:h-7 4xl:w-9 4xl:h-9 object-contain" />
//                 </div>
//                 <h4 className="text-white text-sm sm:text-base 3xl:text-lg 4xl:text-2xl font-semibold pt-0.5 sm:pt-1">{feat.title}</h4>
//                 <p className="text-xs 3xl:text-sm 4xl:text-lg text-[#8E8AAB] leading-relaxed">{feat.desc}</p>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* ── RIGHT Visual: Mobile/Tab Stack View ── */}
//         <div className="w-full lg:hidden mt-8 flex items-center justify-center z-10">
//           <img
//             src={rightImg}
//             alt="The Solution Visual"
//             className="w-full max-w-[600px] h-auto object-contain drop-shadow-[0_0_40px_rgba(161,0,255,0.2)]"
//           />
//         </div>

//       </div>

//       {/* ── RIGHT Visual: Desktop Anchored Edge-to-Edge (1024px+) ── */}
//       <div className="hidden lg:flex lg:w-[52%] xl:w-[55%] h-full lg:absolute right-0 top-0 bottom-0 items-center justify-end pointer-events-none z-0">
//         <img
//           src={rightImg}
//           alt="The Solution Visual"
//           className="w-full h-full object-contain lg:object-right object-center max-h-[100%] drop-shadow-[0_0_60px_rgba(161,0,255,0.2)] pointer-events-auto"
//         />
//       </div>

//     </section>
//   );
// };

// export default SolutionSection;
import React from 'react';

// Relative Assets Imports
import rightImg from '../../assets/media/rightshaoe.png';
import mobileBgImage from '../../assets/media/Mediamobile3.png';
import logoIcon from '../../assets/media/Logos_ 1.png';
import internetTvIcon from '../../assets/media/internet-tv 1.png';
import reachIcon from '../../assets/media/reach (1) 1.png';
import lineChartIcon from '../../assets/media/line-chart (1) 1.png';
import targetIcon from '../../assets/media/target (3) 1.png';

const SolutionSection = () => {
  const bottomFeatures = [
    {
      id: 1,
      title: 'Real Environments',
      desc: 'Reach people where they live, work & move',
      icon: internetTvIcon,
    },
    {
      id: 2,
      title: 'Extended Reach',
      desc: 'Go beyond digital and reach more',
      icon: reachIcon,
    },
    {
      id: 3,
      title: 'Better Impact',
      desc: 'Be present in the moments that drive decisions',
      icon: lineChartIcon,
    },
  ];

  return (
    <section className="w-full bg-[#060521] min-h-[clamp(560px,44vw,980px)] lg:h-[100vh] py-[clamp(24px,3vw,56px)] flex flex-col lg:flex-row items-center justify-between overflow-hidden relative">

      {/* Mobile Background Overlay */}
      <div
        className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: `url("${mobileBgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── Main Container Wrapper ── */}
      <div className="w-full h-full max-w-[2600px] mx-auto px-[clamp(28px,5vw,90px)] flex flex-col lg:flex-row items-center justify-between relative z-10">

        {/* ── LEFT: Text & Content Area ── */}
        <div className="w-full lg:w-[46%] flex flex-col justify-center gap-[clamp(16px,1.8vw,38px)] z-20 shrink-0 py-4 lg:py-0">

          {/* Logo / Top Icon */}
          <div className="w-[clamp(40px,3.5vw,80px)] h-[clamp(40px,3.5vw,80px)] flex items-center justify-start">
            <img src={logoIcon} alt="Ilaan Logo" className="w-full h-full object-contain" />
          </div>

          {/* Title with Underline */}
          <div>
            <h2 className="text-[clamp(36px,3.8vw,84px)] font-semibold text-white tracking-tight leading-tight">
              The <span className="bg-gradient-to-r from-[#FF00D6] via-[#A100FF] to-[#6000FF] bg-clip-text text-transparent">Solution</span>
            </h2>
            <div className="w-[clamp(48px,2.4vw,126px)] h-[clamp(4px,0.32vw,7px)] bg-[#FF00D6] rounded-full mt-[clamp(8px,0.8vw,16px)]" />
          </div>

          {/* Subheading */}
          {/* <div className="space-y-0.5">
            <h3 className="text-[clamp(20px,2vw,44px)] font-bold text-white tracking-tight">
              A New Way to Access
            </h3>
            <h3 className="text-[clamp(20px,2vw,44px)] font-bold bg-gradient-to-r from-[#FF00D6] via-[#A100FF] to-[#6000FF] bg-clip-text text-transparent tracking-tight">
              Physical Media
            </h3>
          </div> */}

          <div className="space-y-[10px]">
            <h3 className="text-[clamp(22px,3.2vw,48px)] leading-[1.05] font-semibold text-white tracking-[-0.02em]">
              A New Way to Access
            </h3>

            <h3 className="text-[clamp(22px,3.2vw,48px)] leading-[1.05] font-semibold tracking-[-0.02em] bg-gradient-to-r from-[#FF00D6] via-[#A100FF] to-[#6000FF] bg-clip-text text-transparent">
              Physical Media
            </h3>
          </div>

          {/* Paragraph Description */}
          <p className="text-[#A0A0B0] text-[clamp(15px,1.1vw,24px)] max-w-[clamp(300px,32vw,660px)] leading-relaxed">
            Ilaan Media provides access to advertising space across connected digital screens in real environments.
          </p>

          {/* Highlight Card with Target Icon */}
          <div className="w-full max-w-[clamp(300px,29vw,640px)] bg-[#100a30]/80 border border-white/10 rounded-2xl p-[clamp(14px,1.4vw,30px)] flex items-center gap-[clamp(12px,1.5vw,32px)] shadow-lg backdrop-blur-md">
            <div className="w-[clamp(44px,3.6vw,76px)] h-[clamp(44px,3.6vw,76px)] rounded-2xl bg-gradient-to-br from-[#A100FF] to-[#6000FF] border border-[#FF00D6]/30 flex items-center justify-center shrink-0">
              <img src={targetIcon} alt="Target Icon" className="w-[55%] h-[55%] object-contain" />
            </div>
            <div className="w-[1px] h-[clamp(36px,2.7vw,60px)] bg-white/10 shrink-0" />
            <p className="text-[clamp(13px,1vw,22px)] text-gray-200 font-normal leading-snug">
              This allows brands to extend their reach beyond online channels and into physical spaces where{' '}
              <span className="text-[#FF00D6] font-semibold">decisions are made.</span>
            </p>
          </div>

          {/* Bottom 3 Features Grid (Mobile/Tab Responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(16px,1.9vw,42px)] pt-[clamp(4px,0.5vw,12px)] w-full max-w-[clamp(300px,31vw,680px)]">
            {bottomFeatures.map((feat) => (
              <div key={feat.id} className="flex flex-row items-center sm:flex-col sm:items-start gap-3 sm:gap-0 sm:space-y-[clamp(6px,0.65vw,14px)]">
                <div className="w-[clamp(38px,3.1vw,64px)] h-[clamp(38px,3.1vw,64px)] rounded-2xl bg-[#140b38] border border-white/10 flex items-center justify-center shrink-0">
                  <img src={feat.icon} alt={feat.title} className="w-[50%] h-[50%] object-contain" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white text-[clamp(16px,1.15vw,25px)] font-medium leading-snug">{feat.title}</h4>
                  <p className="text-[clamp(13px,0.85vw,18px)] text-[#8E8AAB] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT Visual: Mobile/Tab Stack View ── */}
        <div className="w-full lg:hidden mt-8 flex items-center justify-center z-10">
          <img
            src={rightImg}
            alt="The Solution Visual"
            className="w-full max-w-[600px] h-auto object-contain drop-shadow-[0_0_40px_rgba(161,0,255,0.2)]"
          />
        </div>

      </div>

      {/* ── RIGHT Visual: Desktop Anchored Edge-to-Edge (1024px+) ──
          object-cover always fills the container fully at any viewport size
          (no letterboxing/empty-margin gap like object-contain caused at
          very wide screens where the container's aspect ratio no longer
          matched the image's) */}
      <div className="hidden lg:flex lg:w-[54%] h-full lg:absolute right-0 top-0 bottom-0 items-center justify-end pointer-events-none z-0">
        <img
          src={rightImg}
          alt="The Solution Visual"
          className="w-full h-full object-cover object-right drop-shadow-[0_0_60px_rgba(161,0,255,0.2)] pointer-events-auto"
        />
      </div>

    </section>
  );
};

export default SolutionSection;