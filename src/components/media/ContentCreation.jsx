// import React from 'react';

// // Assets Imports
// import imageIcon from '../../assets/media/photo 1.png';
// import handshakeIcon from '../../assets/media/photo 2 (1).png';
// import bulbIcon from '../../assets/media/photo 2.png';
// import chatIcon from '../../assets/media/photo 3.png';
// import screenIcon from '../../assets/media/photo 4.png';
// import targetIcon from '../../assets/media/photo 5.png';

// // Background Imports
// import bgFullImage from '../../assets/media/ChatGPT Image Jun 9, 2026, 05_37_21 PM 1.png';
// import mobileBgImage from '../../assets/media/Mediamobile9.png';

// const ContentCreation = () => {
//     return (
//         <section className="w-full text-white font-['Inter',sans-serif] relative overflow-hidden bg-[#050014] min-h-[600px] lg:min-h-[650px] xl:min-h-[750px] 3xl:min-h-[900px]">

//             {/* Desktop Background Image */}
//             <div
//                 className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
//                 style={{
//                     backgroundImage: `url("${bgFullImage}")`,
//                     backgroundSize: 'auto 100%',
//                     backgroundPosition: 'right center',
//                     backgroundRepeat: 'no-repeat',
//                 }}
//             />

//             {/* Mobile Background Image */}
//             <div
//                 className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
//                 style={{
//                     backgroundImage: `url("${mobileBgImage}")`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center bottom',
//                     backgroundRepeat: 'no-repeat',
//                 }}
//             />

//             {/* Main Content Container */}
//             {/* <div className="w-full max-w-[1800px] 3xl:max-w-[2200px] 4xl:max-w-full mx-auto relative z-10 flex flex-col justify-center items-center lg:items-start py-8 lg:py-12 3xl:py-24 px-4 sm:px-8 lg:px-12 4xl:px-16 pb-[320px] sm:pb-[420px] lg:pb-12 lg:min-h-[650px] xl:min-h-[750px] 3xl:min-h-[900px]"> */}
//             <div className="w-full 3xl:max-w-[2200px] 4xl:max-w-full mx-auto relative z-10 flex flex-col justify-center items-center lg:items-start py-8 lg:py-12 3xl:py-24 px-4 sm:px-8 lg:px-12 4xl:px-16 pb-[320px] sm:pb-[420px] lg:pb-12 lg:min-h-[650px] xl:min-h-[750px] 3xl:min-h-[900px]">

//                 {/* Section Title */}
//                 <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
//                     <h2 className="text-[37.8px] sm:text-[56px] lg:text-[72px] xl:text-[80px] 3xl:text-[96px] 4xl:text-[110px] font-semibold tracking-tight leading-none">
//                         Content <span className="text-[#E431A4]">Creation</span>
//                     </h2>

//                     {/* Pink Accent Line */}
//                     <div
//                         className="w-[140px] sm:w-[220px] 3xl:w-[280px] h-[3px] rounded-full mt-3 sm:mt-10"
//                         style={{
//                             background: 'linear-gradient(90deg, #FF00D6 0%, rgba(255, 0, 214, 0.4) 60%, transparent 100%)'
//                         }}
//                     />
//                 </div>

//                 {/* Cards Layout Grid / Flex */}
//                 <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 sm:gap-6 lg:gap-6 xl:gap-8 4xl:gap-10 w-full">

//                     {/* Left Column Stack */}
//                     <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 w-full lg:w-[320px] xl:w-[350px] 2xl:w-[433px] 3xl:w-[500px] 4xl:w-[680px] shrink-0">

//                         {/* Top Card */}
//                         <div className="w-full max-w-[325px] sm:max-w-none sm:w-[433px] lg:w-full h-auto sm:h-[287px] 4xl:h-[340px] min-h-[178px] bg-[#0A041D]/90 border border-[#4E1568] rounded-[20px] sm:rounded-[24px] p-4 sm:p-[24px] 2xl:p-[28px] 4xl:p-[36px] flex flex-col justify-between backdrop-blur-md shadow-lg mx-auto lg:mx-0 lg:mb-6 xl:mb-8">

//                             <div className="flex items-center gap-3 sm:gap-4 4xl:gap-6">
//                                 {/* Icon Box */}
//                                 <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] 2xl:w-[64px] 2xl:h-[63px] 4xl:w-[76px] 4xl:h-[76px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
//                                     <img
//                                         src={imageIcon}
//                                         alt="Content"
//                                         className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] 2xl:w-[28px] 2xl:h-[28px] 4xl:w-[34px] 4xl:h-[34px] object-contain"
//                                     />
//                                 </div>

//                                 {/* Heading + Line */}
//                                 <div>
//                                     <h3 className="text-white text-[16px] sm:text-[20px] 2xl:text-[23px] 4xl:text-[26px] font-medium leading-tight">
//                                         Content Designed for <br />
//                                         <span className="text-[#E431A4]">Screen Environments</span>
//                                     </h3>

//                                     {/* Fading Underline */}
//                                     <div
//                                         className="w-[32px] sm:w-[40px] h-[2px] mt-2 sm:mt-3"
//                                         style={{
//                                             background: "linear-gradient(90deg, #FF00D6 0%, transparent 100%)",
//                                         }}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Body Paragraph */}
//                             <p className="text-white/80 text-[13.5px] sm:text-[16px] 2xl:text-[18px] 4xl:text-[20px] font-normal leading-snug sm:leading-relaxed mt-1 sm:mt-0">
//                                 Effective campaigns depend on content that is built for digital displays.
//                             </p>
//                         </div>

//                         {/* Bottom Card */}
//                         <div className="hidden lg:flex w-full h-[106px] 4xl:h-[130px] bg-gradient-to-r from-[#530537]/60 via-[#0A041D]/90 to-[#0A041D]/90 border border-[#4E1568] rounded-[24px] px-[16px] 2xl:px-[20px] 4xl:px-[28px] items-center gap-[14px] 2xl:gap-[18px] 4xl:gap-[22px] backdrop-blur-md shadow-lg relative overflow-hidden">
//                             {/* Icon Box */}
//                             <div className="w-[48px] h-[48px] 2xl:w-[64px] 2xl:h-[63px] 4xl:w-[76px] 4xl:h-[76px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0 relative z-10">
//                                 <img src={handshakeIcon} alt="Partners" className="w-[22px] h-[22px] 2xl:w-[28px] 2xl:h-[28px] 4xl:w-[34px] 4xl:h-[34px] object-contain" />
//                             </div>

//                             {/* Text */}
//                             <div className="relative z-10">
//                                 <p className="text-white text-[14px] 2xl:text-[17px] 4xl:text-[20px] font-normal leading-tight">
//                                     Delivered in collaboration with <br />
//                                     <span className="text-[#E431A4] font-medium">trusted creative partners.</span>
//                                 </p>
//                                 <div
//                                     className="w-[30px] h-[2px] mt-2"
//                                     style={{
//                                         background: 'linear-gradient(90deg, #FF00D6 0%, transparent 100%)'
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                     </div>

//                     {/* Middle Card (4 Points) */}
//                     <div className="w-full max-w-[322px] sm:max-w-none sm:w-[320px] lg:w-[290px] xl:w-[300px] 2xl:w-[356px] 4xl:w-[460px] h-auto sm:h-[385px] 4xl:h-[480px] min-h-[348px] bg-[#0A041D]/90 border border-[#4E1568] rounded-[20px] sm:rounded-[24px] p-4 sm:p-[20px] 2xl:p-[24px] 4xl:p-[32px] flex flex-col justify-between gap-4 sm:gap-0 backdrop-blur-md shadow-lg shrink-0 mx-auto lg:mx-0">

//                         {/* Point 1 */}
//                         <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[16px] 4xl:gap-[20px]">
//                             <div className="w-[50px] h-[50px] 2xl:w-[64px] 2xl:h-[63px] 4xl:w-[72px] 4xl:h-[72px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
//                                 <img src={bulbIcon} alt="bulb" className="w-[20px] h-[20px] 2xl:w-[26px] 2xl:h-[26px] 4xl:w-[30px] 4xl:h-[30px] object-contain" />
//                             </div>
//                             <p className="text-white text-[16px] 2xl:text-[20px] 4xl:text-[23px] font-normal leading-snug">
//                                 Ilaan supports <span className="text-[#E431A4]">content <br />creation</span> to ensure:
//                             </p>
//                         </div>

//                         {/* Point 2 */}
//                         <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[16px] 4xl:gap-[20px]">
//                             <div className="w-[50px] h-[50px] 2xl:w-[64px] 2xl:h-[63px] 4xl:w-[72px] 4xl:h-[72px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
//                                 <img src={chatIcon} alt="messaging" className="w-[20px] h-[20px] 2xl:w-[26px] 2xl:h-[26px] 4xl:w-[30px] 4xl:h-[30px] object-contain" />
//                             </div>
//                             <p className="text-white text-[16px] 2xl:text-[20px] 4xl:text-[23px] font-normal leading-snug">
//                                 Messaging is clear <br />and impactful
//                             </p>
//                         </div>

//                         {/* Point 3 */}
//                         <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[16px] 4xl:gap-[20px]">
//                             <div className="w-[50px] h-[50px] 2xl:w-[64px] 2xl:h-[63px] 4xl:w-[72px] 4xl:h-[72px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
//                                 <img src={screenIcon} alt="optimised" className="w-[20px] h-[20px] 2xl:w-[26px] 2xl:h-[26px] 4xl:w-[30px] 4xl:h-[30px] object-contain" />
//                             </div>
//                             <p className="text-white text-[16px] 2xl:text-[20px] 4xl:text-[23px] font-normal leading-snug">
//                                 Content is optimised <br />for screens
//                             </p>
//                         </div>

//                         {/* Point 4 */}
//                         <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[16px] 4xl:gap-[20px]">
//                             <div className="w-[50px] h-[50px] 2xl:w-[64px] 2xl:h-[63px] 4xl:w-[72px] 4xl:h-[72px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
//                                 <img src={targetIcon} alt="campaigns" className="w-[20px] h-[20px] 2xl:w-[26px] 2xl:h-[26px] 4xl:w-[30px] 4xl:h-[30px] object-contain" />
//                             </div>
//                             <p className="text-white text-[16px] 2xl:text-[20px] 4xl:text-[23px] font-normal leading-snug">
//                                 Campaigns are <br />delivered effectively
//                             </p>
//                         </div>

//                     </div>

//                     {/* Bottom Card (Mobile position): Mobile Centered */}
//                     <div className="flex lg:hidden w-full max-w-[318px] sm:max-w-none sm:w-[433px] h-[78px] sm:h-[106px] bg-gradient-to-r from-[#530537]/60 via-[#0A041D]/90 to-[#0A041D]/90 border border-[#4E1568] rounded-[20px] sm:rounded-[24px] px-3.5 sm:px-[20px] items-center gap-3 sm:gap-[18px] backdrop-blur-md shadow-lg relative overflow-hidden shrink-0 mx-auto">
//                         {/* Icon Box */}
//                         <div className="w-[46px] h-[46px] sm:w-[64px] sm:h-[63px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0 relative z-10">
//                             <img src={handshakeIcon} alt="Partners" className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] object-contain" />
//                         </div>

//                         {/* Text */}
//                         <div className="relative z-10">
//                             <p className="text-white text-[13px] sm:text-[17px] font-normal leading-tight">
//                                 Delivered in collaboration with <br />
//                                 <span className="text-[#E431A4] font-medium">trusted creative partners.</span>
//                             </p>
//                             <div
//                                 className="w-[26px] sm:w-[30px] h-[2px] mt-1.5 sm:mt-2"
//                                 style={{
//                                     background: 'linear-gradient(90deg, #FF00D6 0%, transparent 100%)'
//                                 }}
//                             />
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default ContentCreation;

import React from 'react';

// Assets Imports
import imageIcon from '../../assets/media/photo 1.png';
import handshakeIcon from '../../assets/media/photo 2 (1).png';
import bulbIcon from '../../assets/media/photo 2.png';
import chatIcon from '../../assets/media/photo 3.png';
import screenIcon from '../../assets/media/photo 4.png';
import targetIcon from '../../assets/media/photo 5.png';

// Background Imports
import bgFullImage from '../../assets/media/ChatGPT Image Jun 9, 2026, 05_37_21 PM 1.png';
import mobileBgImage from '../../assets/media/Mediamobile9.png';

const ContentCreation = () => {
    return (
        <section className="w-full text-white font-['Inter',sans-serif] relative overflow-hidden bg-[#050014] min-h-[600px] lg:min-h-[650px] xl:min-h-[clamp(750px,39.06vw,900px)]">

            {/* Desktop Background Image */}
            <div
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url("${bgFullImage}")`,
                    backgroundSize: 'auto 100%',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Mobile Background Image */}
            <div
                className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url("${mobileBgImage}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Main Content Container — clamp() crossovers anchored at 1920px:
                identical to before below 1920, only grows beyond it, so the
                gap to the right-side background image no longer opens up on
                2560px+ screens. Nothing below 1920 changes. */}
            <div className="w-full max-w-[2400px] mx-auto relative z-10 flex flex-col justify-center items-center lg:items-start py-8 lg:py-12 xl:py-[clamp(48px,2.5vw,96px)] px-4 sm:px-8 lg:px-12 xl:px-[clamp(48px,2.5vw,64px)] pb-[320px] sm:pb-[420px] lg:pb-12 lg:min-h-[650px] xl:min-h-[clamp(750px,39.06vw,900px)]">

                {/* Section Title */}
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-[37.8px] sm:text-[56px] lg:text-[72px] xl:text-[clamp(80px,4.1667vw,110px)] font-semibold tracking-tight leading-none">
                        Content <span className="text-[#E431A4]">Creation</span>
                    </h2>

                    {/* Pink Accent Line */}
                    <div
                        className="w-[140px] sm:w-[clamp(220px,11.458vw,280px)] h-[3px] rounded-full mt-3 sm:mt-10"
                        style={{
                            background: 'linear-gradient(90deg, #FF00D6 0%, rgba(255, 0, 214, 0.4) 60%, transparent 100%)'
                        }}
                    />
                </div>

                {/* Cards Layout Grid / Flex */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 sm:gap-6 lg:gap-6 xl:gap-[clamp(32px,1.667vw,40px)] w-full">

                    {/* Left Column Stack */}
                    <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 w-full lg:w-[320px] xl:w-[350px] 2xl:w-[clamp(433px,22.552vw,680px)] shrink-0">

                        {/* Top Card */}
                        <div className="w-full max-w-[325px] sm:max-w-none sm:w-[433px] lg:w-full h-auto sm:h-[clamp(287px,14.948vw,340px)] min-h-[178px] bg-[#0A041D]/90 border border-[#4E1568] rounded-[20px] sm:rounded-[24px] p-4 sm:p-[24px] 2xl:p-[clamp(28px,1.458vw,36px)] flex flex-col justify-between backdrop-blur-md shadow-lg mx-auto lg:mx-0 lg:mb-6 xl:mb-8">

                            <div className="flex items-center gap-3 sm:gap-[clamp(16px,0.833vw,24px)]">
                                {/* Icon Box */}
                                <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] 2xl:w-[clamp(64px,3.333vw,76px)] 2xl:h-[clamp(63px,3.28vw,76px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                    <img
                                        src={imageIcon}
                                        alt="Content"
                                        className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] 2xl:w-[clamp(28px,1.458vw,34px)] 2xl:h-[clamp(28px,1.458vw,34px)] object-contain"
                                    />
                                </div>

                                {/* Heading + Line */}
                                <div>
                                    <h3 className="text-white text-[16px] sm:text-[20px] 2xl:text-[clamp(23px,1.198vw,26px)] font-medium leading-tight">
                                        Content Designed for <br />
                                        <span className="text-[#E431A4]">Screen Environments</span>
                                    </h3>

                                    {/* Fading Underline */}
                                    <div
                                        className="w-[32px] sm:w-[40px] h-[2px] mt-2 sm:mt-3"
                                        style={{
                                            background: "linear-gradient(90deg, #FF00D6 0%, transparent 100%)",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Body Paragraph */}
                            <p className="text-white/80 text-[13.5px] sm:text-[16px] 2xl:text-[clamp(18px,0.9375vw,20px)] font-normal leading-snug sm:leading-relaxed mt-1 sm:mt-0">
                                Effective campaigns depend on content that is built for digital displays.
                            </p>
                        </div>

                        {/* Bottom Card */}
                        <div className="hidden lg:flex w-full h-[clamp(106px,5.521vw,130px)] bg-gradient-to-r from-[#530537]/60 via-[#0A041D]/90 to-[#0A041D]/90 border border-[#4E1568] rounded-[24px] px-[16px] 2xl:px-[clamp(20px,1.0417vw,28px)] items-center gap-[14px] 2xl:gap-[clamp(18px,0.9375vw,22px)] backdrop-blur-md shadow-lg relative overflow-hidden">
                            {/* Icon Box */}
                            <div className="w-[48px] h-[48px] 2xl:w-[clamp(64px,3.333vw,76px)] 2xl:h-[clamp(63px,3.28vw,76px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0 relative z-10">
                                <img src={handshakeIcon} alt="Partners" className="w-[22px] h-[22px] 2xl:w-[clamp(28px,1.458vw,34px)] 2xl:h-[clamp(28px,1.458vw,34px)] object-contain" />
                            </div>

                            {/* Text */}
                            <div className="relative z-10">
                                <p className="text-white text-[14px] 2xl:text-[clamp(17px,0.885vw,20px)] font-normal leading-tight">
                                    Delivered in collaboration with <br />
                                    <span className="text-[#E431A4] font-medium">trusted creative partners.</span>
                                </p>
                                <div
                                    className="w-[30px] h-[2px] mt-2"
                                    style={{
                                        background: 'linear-gradient(90deg, #FF00D6 0%, transparent 100%)'
                                    }}
                                />
                            </div>
                        </div>

                    </div>

                    {/* Middle Card (4 Points) */}
                    <div className="w-full max-w-[322px] sm:max-w-none sm:w-[320px] lg:w-[290px] xl:w-[300px] 2xl:w-[clamp(356px,18.542vw,460px)] h-auto sm:h-[clamp(385px,20.052vw,480px)] min-h-[348px] bg-[#0A041D]/90 border border-[#4E1568] rounded-[20px] sm:rounded-[24px] p-4 sm:p-[20px] 2xl:p-[clamp(24px,1.25vw,32px)] flex flex-col justify-between gap-4 sm:gap-0 backdrop-blur-md shadow-lg shrink-0 mx-auto lg:mx-0">

                        {/* Point 1 */}
                        <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[clamp(16px,0.833vw,20px)]">
                            <div className="w-[50px] h-[50px] 2xl:w-[clamp(64px,3.333vw,72px)] 2xl:h-[clamp(63px,3.281vw,72px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                <img src={bulbIcon} alt="bulb" className="w-[20px] h-[20px] 2xl:w-[clamp(26px,1.354vw,30px)] 2xl:h-[clamp(26px,1.354vw,30px)] object-contain" />
                            </div>
                            <p className="text-white text-[16px] 2xl:text-[clamp(20px,1.0417vw,23px)] font-normal leading-snug">
                                Ilaan supports <span className="text-[#E431A4]">content <br />creation</span> to ensure:
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[clamp(16px,0.833vw,20px)]">
                            <div className="w-[50px] h-[50px] 2xl:w-[clamp(64px,3.333vw,72px)] 2xl:h-[clamp(63px,3.281vw,72px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                <img src={chatIcon} alt="messaging" className="w-[20px] h-[20px] 2xl:w-[clamp(26px,1.354vw,30px)] 2xl:h-[clamp(26px,1.354vw,30px)] object-contain" />
                            </div>
                            <p className="text-white text-[16px] 2xl:text-[clamp(20px,1.0417vw,23px)] font-normal leading-snug">
                                Messaging is clear <br />and impactful
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[clamp(16px,0.833vw,20px)]">
                            <div className="w-[50px] h-[50px] 2xl:w-[clamp(64px,3.333vw,72px)] 2xl:h-[clamp(63px,3.281vw,72px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                <img src={screenIcon} alt="optimised" className="w-[20px] h-[20px] 2xl:w-[clamp(26px,1.354vw,30px)] 2xl:h-[clamp(26px,1.354vw,30px)] object-contain" />
                            </div>
                            <p className="text-white text-[16px] 2xl:text-[clamp(20px,1.0417vw,23px)] font-normal leading-snug">
                                Content is optimised <br />for screens
                            </p>
                        </div>

                        {/* Point 4 */}
                        <div className="flex items-center gap-3 sm:gap-[12px] 2xl:gap-[clamp(16px,0.833vw,20px)]">
                            <div className="w-[50px] h-[50px] 2xl:w-[clamp(64px,3.333vw,72px)] 2xl:h-[clamp(63px,3.281vw,72px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                <img src={targetIcon} alt="campaigns" className="w-[20px] h-[20px] 2xl:w-[clamp(26px,1.354vw,30px)] 2xl:h-[clamp(26px,1.354vw,30px)] object-contain" />
                            </div>
                            <p className="text-white text-[16px] 2xl:text-[clamp(20px,1.0417vw,23px)] font-normal leading-snug">
                                Campaigns are <br />delivered effectively
                            </p>
                        </div>

                    </div>

                    {/* Bottom Card (Mobile position): Mobile Centered */}
                    <div className="flex lg:hidden w-full max-w-[318px] sm:max-w-none sm:w-[433px] h-[78px] sm:h-[106px] bg-gradient-to-r from-[#530537]/60 via-[#0A041D]/90 to-[#0A041D]/90 border border-[#4E1568] rounded-[20px] sm:rounded-[24px] px-3.5 sm:px-[20px] items-center gap-3 sm:gap-[18px] backdrop-blur-md shadow-lg relative overflow-hidden shrink-0 mx-auto">
                        {/* Icon Box */}
                        <div className="w-[46px] h-[46px] sm:w-[64px] sm:h-[63px] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0 relative z-10">
                            <img src={handshakeIcon} alt="Partners" className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] object-contain" />
                        </div>

                        {/* Text */}
                        <div className="relative z-10">
                            <p className="text-white text-[13px] sm:text-[17px] font-normal leading-tight">
                                Delivered in collaboration with <br />
                                <span className="text-[#E431A4] font-medium">trusted creative partners.</span>
                            </p>
                            <div
                                className="w-[26px] sm:w-[30px] h-[2px] mt-1.5 sm:mt-2"
                                style={{
                                    background: 'linear-gradient(90deg, #FF00D6 0%, transparent 100%)'
                                }}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContentCreation;