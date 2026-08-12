// import React from 'react';


// // Assets Imports
// import bgImage from '../../assets/media/BG (1).png';
// import mobileBgImage from '../../assets/media/Mediamobile7.png';
// import ecosystemDiagram from '../../assets/media/Group 1261156775.png';
// import displayIcon from '../../assets/media/location (3) 1 (1).png';
// import studioIcon from '../../assets/media/Group 1261156806.png';
// import checkIcon from '../../assets/media/Group 1261156806.png';

// const WhereItFits = () => {
//     const ecosystemItems = [
//         {
//             icon: displayIcon,
//             title: 'Digital Signage',
//             description: 'The screens that deliver campaigns',
//             linkText: 'Internal Link',
//             linkUrl: '#',
//         },
//         {
//             icon: studioIcon,
//             title: 'Ilaan Studio',
//             description: 'The platform that controls content delivery',
//             linkText: 'Internal Link',
//             linkUrl: '#',
//         },
//     ];

//     return (
//         <section
//             className="w-full min-h-[auto] text-white font-['Inter',sans-serif] relative overflow-hidden py-10 xl:py-[50px] 3xl:py-[70px] px-6 xl:px-16 3xl:px-24 flex items-center justify-center"
//         >
//             {/* Desktop Background Overlay */}
//             <div
//                 className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
//                 style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
//             />
//             {/* Mobile Background Overlay */}
//             <div
//                 className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
//                 style={{ backgroundImage: `url(${mobileBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
//             />

//             {/* Figma Container */}
//             <div className="w-full 3xl:max-w-[2100px] 4xl:max-w-full mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 xl:gap-[60px] 3xl:gap-[80px] relative z-10">

//                 {/* LEFT COLUMN */}
//                 <div className="w-full lg:w-1/2 4xl:w-[48%] 4xl:max-w-[1150px] flex flex-col justify-between py-[10px]">

//                     <div>
//                         {/* Title: 80px */}
//                         <h2 className="text-4xl sm:text-6xl xl:text-[80px] 3xl:text-[96px] 4xl:text-[100px] font-semibold tracking-tight leading-none">
//                             Where <span className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent">It Fits</span>
//                         </h2>

//                         {/* Pink Accent Line */}
//                         <div className="w-[48px] h-[3px] bg-[#E000FF] rounded-full mt-[16px] mb-[32px]" />

//                         {/* Subtitle: 49px */}
//                         <h3 className="text-2xl sm:text-4xl xl:text-[32px] 3xl:text-[38px] 4xl:text-[44px] font-medium text-white leading-tight mb-[16px]">
//                             Part of a Connected Ecosystem
//                         </h3>

//                         {/* Subheading Text: 35px */}
//                         <p className="text-white/70 text-xl sm:text-2xl xl:text-[24px] 4xl:text-[28px] font-normal leading-snug mb-[40px]">
//                             Ilaan Media works alongside:
//                         </p>

//                         {/* List Items */}
//                         <div className="flex flex-col gap-[36px]">
//                             {ecosystemItems.map((item, index) => (
//                                 <div key={index} className="flex items-start gap-[24px]">
//                                     {/* Icon Box */}
//                                     <div className="w-[70px] h-[70px] xl:w-[83px] xl:h-[83px] 3xl:w-[96px] 3xl:h-[96px] 4xl:w-[110px] 4xl:h-[110px] rounded-[16px] bg-[#12052A]/80 border border-[#3B196C] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(224,0,255,0.12)]">
//                                         <img src={item.icon} alt="" className="w-[41px] h-[41px] 4xl:w-[50px] 4xl:h-[50px] object-contain" />
//                                     </div>

//                                     {/* Content Block */}
//                                     <div className="flex flex-col justify-center">
//                                         {/* Item Title: 36px */}
//                                         <h4 className="text-white text-xl sm:text-3xl xl:text-[36px] 3xl:text-[42px] 4xl:text-[48px] font-medium leading-tight">
//                                             {item.title}
//                                         </h4>

//                                         {/* Description: 23.28px */}
//                                         <p className="text-white/60 text-base sm:text-lg xl:text-[23.28px] 4xl:text-[26px] font-normal leading-snug mt-[6px]">
//                                             {item.description}
//                                         </p>

//                                         {/* Internal Link: 17px */}
//                                         <a
//                                             href={item.linkUrl}
//                                             className="text-[#994EEA] hover:text-[#FF00D6] text-[17px] 4xl:text-[20px] font-normal underline mt-[8px] transition-colors inline-block"
//                                         >
//                                             {item.linkText}
//                                         </a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Bottom Highlight Box: Exact 521px x 144px */}
//                     <div className="w-full max-w-[521px] 3xl:max-w-[640px] 4xl:max-w-full h-auto min-h-[144px] 3xl:min-h-[160px] 4xl:min-h-[180px] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-[24px] 4xl:px-8 py-4 flex items-center gap-[20px] 4xl:gap-6 backdrop-blur-md shadow-lg shrink-0 mt-[48px]">
//                         {/* Circle Check Icon */}
//                         <div className="w-[67px] h-[67px] 4xl:w-[80px] 4xl:h-[80px] shrink-0 flex items-center justify-center">
//                             <img src={checkIcon} alt="check" className="w-full h-full object-contain" />
//                         </div>

//                         {/* Banner Text: 18px */}
//                         <p className="text-white text-base sm:text-[18px] 4xl:text-[22px] font-normal leading-snug">
//                             This creates a connected system that supports both{' '}
//                             <span className="text-[#FF00D6] font-medium">advertisers</span> and{' '}
//                             <span className="text-[#FF00D6] font-medium">screen owners</span>
//                         </p>
//                     </div>

//                 </div>

//                 {/* RIGHT COLUMN */}
//                 <div className="w-full lg:w-1/2 4xl:w-[50%] flex flex-col justify-center items-center lg:items-end 4xl:items-stretch">

//                     {/* Main Ecosystem Image */}
//                     <div className="w-full h-auto flex items-center justify-center lg:justify-end 4xl:justify-stretch">
//                         <img
//                             src={ecosystemDiagram}
//                             alt="Connected Ecosystem Diagram"
//                             className="w-full max-w-[1103px] 4xl:max-w-full h-auto object-contain"
//                         />
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default WhereItFits;

import React from 'react';

// Assets Imports
import bgImage from '../../assets/media/BG (1).png';
import mobileBgImage from '../../assets/media/Mediamobile7.png';
import ecosystemDiagram from '../../assets/media/Group 1261156775.png';
import displayIcon from '../../assets/media/location (3) 1 (1).png';
import studioIcon from '../../assets/media/Group 1261156806.png';
import checkIcon from '../../assets/media/Group 1261156806.png';

const WhereItFits = () => {
    const ecosystemItems = [
        {
            icon: displayIcon,
            title: 'Digital Signage',
            description: 'The screens that deliver campaigns',
            linkText: 'Internal Link',
            linkUrl: '#',
        },
        {
            icon: studioIcon,
            title: 'Ilaan Studio',
            description: 'The platform that controls content delivery',
            linkText: 'Internal Link',
            linkUrl: '#',
        },
    ];

    return (
        <section
            className="w-full min-h-[auto] text-white font-['Inter',sans-serif] relative overflow-hidden py-[clamp(40px,5vw,110px)] px-[clamp(20px,4vw,96px)] flex items-center justify-center"
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

            {/* Figma Container — plain vw/clamp() sizing, not dependent on any
                custom Tailwind breakpoint (3xl/4xl), so it scales correctly
                on 2560px+ screens regardless of tailwind.config.js */}
            <div className="w-full max-w-[2400px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-[clamp(24px,6.55vw,130px)] relative z-10">

                {/* LEFT COLUMN: fixed content-based width so it never leaves
                    unused space that turns into a growing gap at large screens */}
                {/* <div className="w-full lg:w-[clamp(320px,28vw,560px)] shrink-0 flex flex-col justify-between py-[10px]"> */}
                <div className="w-full lg:w-[clamp(320px,28vw,700px)] shrink-0 flex flex-col justify-between py-[10px]">

                    <div>
                        {/* Title */}
                        <h2 className="text-[clamp(34px,4.17vw,92px)] font-semibold tracking-tight leading-none">
                            Where <span className="bg-gradient-to-r from-[#994EEA] to-[#FF00D6] bg-clip-text text-transparent">It Fits</span>
                        </h2>

                        {/* Pink Accent Line */}
                        <div className="w-[clamp(36px,2.2vw,52px)] h-[3px] bg-[#E000FF] rounded-full mt-[clamp(12px,0.9vw,18px)] mb-[clamp(22px,1.9vw,38px)]" />

                        {/* Subtitle */}
                        <h3 className="text-[clamp(20px,1.667vw,40px)] font-medium text-white leading-tight mb-[clamp(10px,0.9vw,20px)]">
                            Part of a Connected Ecosystem
                        </h3>

                        {/* Subheading Text */}
                        <p className="text-white/70 text-[clamp(16px,1.25vw,30px)] font-normal leading-snug mb-[clamp(24px,2.3vw,46px)]">
                            Ilaan Media works alongside:
                        </p>

                        {/* List Items */}
                        <div className="flex flex-col gap-[clamp(24px,1.875vw,42px)]">
                            {ecosystemItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-[clamp(16px,1.25vw,28px)]">
                                    {/* Icon Box */}
                                    <div className="w-[clamp(56px,4.32vw,116px)] h-[clamp(56px,4.32vw,116px)] rounded-[16px] bg-[#12052A]/80 border border-[#3B196C] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(224,0,255,0.12)]">
                                        <img src={item.icon} alt="" className="w-[clamp(28px,2.135vw,54px)] h-[clamp(28px,2.135vw,54px)] object-contain" />
                                    </div>

                                    {/* Content Block */}
                                    <div className="flex flex-col justify-center">
                                        {/* Item Title */}
                                        <h4 className="text-white text-[clamp(20px,1.875vw,46px)] font-medium leading-tight">
                                            {item.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-white/60 text-[clamp(14px,1.2125vw,28px)] font-normal leading-snug mt-[clamp(4px,0.35vw,8px)]">
                                            {item.description}
                                        </p>

                                        {/* Internal Link */}
                                        <a
                                            href={item.linkUrl}
                                            className="text-[#994EEA] hover:text-[#FF00D6] text-[clamp(13px,0.885vw,21px)] font-normal underline mt-[clamp(6px,0.45vw,10px)] transition-colors inline-block"
                                        >
                                            {item.linkText}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Highlight Box (Figma: 521×144 at 1920 baseline) */}
                    <div className="w-full max-w-[clamp(320px,27.1vw,660px)] min-h-[clamp(100px,7.5vw,160px)] bg-[#12052A]/70 border border-[#994EEA] rounded-[20px] px-[clamp(16px,1.35vw,30px)] py-4 flex items-center gap-[clamp(14px,1.15vw,26px)] backdrop-blur-md shadow-lg shrink-0 mt-[clamp(28px,2.7vw,54px)]">
                        {/* Circle Check Icon */}
                        <div className="w-[clamp(48px,3.49vw,76px)] h-[clamp(48px,3.49vw,76px)] shrink-0 flex items-center justify-center">
                            <img src={checkIcon} alt="check" className="w-full h-full object-contain" />
                        </div>

                        {/* Banner Text */}
                        <p className="text-white text-[clamp(14px,0.9375vw,22px)] font-normal leading-snug">
                            This creates a connected system that supports both{' '}
                            <span className="text-[#FF00D6] font-medium">advertisers</span> and{' '}
                            <span className="text-[#FF00D6] font-medium">screen owners</span>
                        </p>
                    </div>

                </div>

                {/* RIGHT COLUMN: flex-1 fills all remaining space exactly (no
                    leftover gap at any screen width), capped so the diagram
                    doesn't overstretch on 4K */}
                <div className="w-full lg:flex-1 lg:max-w-[clamp(320px,58vw,1700px)] flex flex-col justify-center items-center lg:items-end">

                    {/* Main Ecosystem Image (Figma: 1103px wide at 1920 baseline) */}
                    <div className="w-full h-auto flex items-center justify-center lg:justify-end">
                        <img
                            src={ecosystemDiagram}
                            alt="Connected Ecosystem Diagram"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhereItFits;