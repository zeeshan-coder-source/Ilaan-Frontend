import React from 'react';
import Vector12 from '../../assets/media/Vector 12.png';
import Vector18 from '../../assets/media/Vector 18.png';
import GroupChart from '../../assets/media/Group 1261156785.png';
import GroupUsers from '../../assets/media/Group 1261156786.png';
import GroupRocket from '../../assets/media/Group 1261156787.png';
import PinkLogo3D from '../../assets/media/ChatGPT Image Jun 10, 2026, 01_53_25 PM 1.png';
import PhoneGlow from '../../assets/media/Group 1261156814.png';

const MediaFooter = () => {
    return (
        <section className="w-full bg-[#FF37FF] py-4 px-3 sm:py-6 sm:px-4 lg:py-8 lg:px-6 xl:py-10 xl:px-8 3xl:py-12 3xl:px-10 4xl:py-14 4xl:px-12 flex justify-center items-center font-['Inter',sans-serif]">
            {/* <div className="w-full max-w-[96%] sm:max-w-[95%] lg:max-w-[94%] mx-auto relative flex justify-center items-center"> */}
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
                        {/* Left: Text */}
                        <div className="col-span-4 flex flex-col items-start text-left space-y-4 xl:space-y-6 3xl:space-y-8">
                            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] 4xl:text-[90px] font-semibold leading-[1.08] tracking-tight text-white">
                                Start Your <br />
                                <span className="text-white">First Campaign</span>
                            </h2>

                            <p className="text-[#CCCCCC] text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-normal leading-[1.4] max-w-[480px] xl:max-w-[540px] 3xl:max-w-[650px] 4xl:max-w-[780px]">
                                Whether you're looking to reach new audiences or monetise your screens, Ilaan Media provides a simple way to get started.
                            </p>

                            <button className="inline-flex items-center gap-2.5 xl:gap-4 bg-[#FF37FF] hover:bg-[#e02be0] text-black font-semibold text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] px-5 py-2.5 sm:px-6 sm:py-3 xl:px-8 xl:py-4 3xl:px-10 3xl:py-4.5 4xl:px-12 4xl:py-5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,55,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer">
                                <span>Make an Enquiry</span>
                                <svg className="w-4 h-4 xl:w-6 xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Center: Logo (Exact 50% Horizontal Alignment) */}
                        <div className="col-span-4 flex justify-center items-center">
                            <img
                                src={PinkLogo3D}
                                alt="Ilaan Diamond Logo"
                                className="w-[160px] sm:w-[200px] lg:w-[240px] xl:w-[290px] 2xl:w-[340px] 3xl:w-[420px] 4xl:w-[480px] h-auto object-contain drop-shadow-[0_0_35px_rgba(255,55,255,0.5)]"
                            />
                        </div>

                        {/* Right: Phone */}
                        <div className="col-span-4 flex justify-end items-center">
                            <img
                                src={PhoneGlow}
                                alt="Campaign Smartphone Preview"
                                className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[440px] 2xl:max-w-[500px] 3xl:max-w-[600px] 4xl:max-w-[700px] h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex flex-col items-center text-center w-full max-w-[380px] space-y-5 mb-7">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.1] text-white tracking-tight">
                            Start Your <br />
                            First Campaign
                        </h2>
                        <p className="text-[#CCCCCC] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] font-normal">
                            Whether you're looking to reach new audiences or monetise your screens, Ilaan Media provides a simple way to get started.
                        </p>
                        <div className="py-2 flex justify-center items-center">
                            <img
                                src={PinkLogo3D}
                                alt="Ilaan Diamond Logo"
                                className="w-[120px] sm:w-[150px] md:w-[174px] h-auto object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <img
                                src={PhoneGlow}
                                alt="Campaign Mobile Preview"
                                className="w-[220px] sm:w-[258px] md:w-[290px] h-auto object-contain"
                            />
                        </div>
                        <div className="pt-1">
                            <button className="inline-flex items-center gap-2.5 bg-[#FF37FF] text-black font-medium text-[13px] sm:text-[14px] md:text-[15px] px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,55,255,0.5)] active:scale-95 cursor-pointer">
                                <span>Make an Enquiry</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Stats Bar */}
                    {/* <div className="w-full max-w-[1050px] lg:max-w-[1150px] xl:max-w-[1350px] 2xl:max-w-[1550px] 3xl:max-w-[1850px] 4xl:max-w-[2200px] border border-[#FF37FF]/60 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 3xl:p-9 4xl:p-12 bg-black/90 backdrop-blur-md relative overflow-hidden mt-2 lg:mt-4 3xl:mt-6 4xl:mt-8 mb-2 lg:mb-4"> */}
                    <div className="w-full max-w-[1050px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1300px] 3xl:max-w-[1850px] 4xl:max-w-[2250px] border border-[#FF37FF]/60 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 3xl:p-9 4xl:p-12 bg-black/90 backdrop-blur-md relative overflow-hidden mt-2 lg:mt-4 3xl:mt-6 4xl:mt-8 mb-2 lg:mb-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-[#FF37FF]/30">

                            <div className="flex items-center gap-3 md:gap-4 3xl:gap-6 text-left pt-2 lg:pt-0 lg:px-4 3xl:px-6">
                                <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] 4xl:w-[84px] 4xl:h-[84px] border border-[#FF37FF] bg-black rounded-[12px] lg:rounded-[14px] 3xl:rounded-[18px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,55,255,0.3)]">
                                    <img src={GroupChart} alt="Targeted Reach" className="w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 -rotate-45 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-white text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-semibold leading-tight mb-1">
                                        Targeted Reach
                                    </h3>
                                    <p className="text-white/70 text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] 3xl:text-[17px] 4xl:text-[20px] leading-snug font-normal">
                                        Connect with the right audience across premium screen locations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 md:gap-4 3xl:gap-6 text-left pt-4 md:pt-5 lg:pt-0 lg:px-4 3xl:px-6">
                                <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] 4xl:w-[84px] 4xl:h-[84px] border border-[#FF37FF] bg-black rounded-[12px] lg:rounded-[14px] 3xl:rounded-[18px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,55,255,0.3)]">
                                    <img src={GroupUsers} alt="High-Impact Visibility" className="w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 -rotate-45 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-white text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-semibold leading-tight mb-1">
                                        High-Impact Visibility
                                    </h3>
                                    <p className="text-white/70 text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] 3xl:text-[17px] 4xl:text-[20px] leading-snug font-normal">
                                        Capture attention with dynamic, data-driven digital campaigns.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 md:gap-4 3xl:gap-6 text-left pt-4 md:pt-5 lg:pt-0 lg:px-4 3xl:px-6">
                                <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 3xl:w-[68px] 3xl:h-[68px] 4xl:w-[84px] 4xl:h-[84px] border border-[#FF37FF] bg-black rounded-[12px] lg:rounded-[14px] 3xl:rounded-[18px] rotate-45 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,55,255,0.3)]">
                                    <img src={GroupRocket} alt="Seamless Campaign" className="w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 -rotate-45 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-white text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-semibold leading-tight mb-1">
                                        Seamless Campaign
                                    </h3>
                                    <p className="text-white/70 text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] 3xl:text-[17px] 4xl:text-[20px] leading-snug font-normal">
                                        Plan, launch, and manage campaigns with complete ease.
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

export default MediaFooter;