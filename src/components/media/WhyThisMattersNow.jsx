import React from 'react';

// Icons Imports (from src/assets/media/)
import screenIcon from '../../assets/media/Group 1261156779.png';
import graphIcon from '../../assets/media/Group 1261156782.png';
import speakerIcon from '../../assets/media/Group 1261156781.png';
import peopleIcon from '../../assets/media/Group 1261156780.png';
import targetIcon from '../../assets/media/Group 1261156829.png';

// Image / Showcase Imports
// import desktopShowcaseImg from '../../assets/media/dsktop.png';
import desktopShowcaseImg from '../../assets/media/mobile.png';
import mobileShowcaseImg from '../../assets/media/mobile.png';

// Section Background Overlays
import desktopBgOverlay from '../../assets/media/desktop.png';
import mobileBgOverlay from '../../assets/media/Mediamobile10.png';

// Card Background Image
import cardBgImage from '../../assets/media/Group 1261156813.png';

const WhyThisMattersNow = () => {
    return (
        <section className="w-full text-white font-['Inter',sans-serif] relative overflow-hidden bg-[#050014]">

            {/* Desktop Background Overlay */}
            <div
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url("${desktopBgOverlay}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Mobile Background Overlay */}
            <div
                className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url("${mobileBgOverlay}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* ── Main Section Layout Container ───────────────────────────────── */}
            <div className="w-full max-w-[2560px] mx-auto relative z-10
                            py-[clamp(32px,3.5vw,96px)]
                            px-[clamp(16px,4.5vw,120px)]
                            flex flex-col justify-center min-h-fit">

                {/* ── Two-column row ───────────────────────────────────────────── */}
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch
                                justify-between gap-8 lg:gap-[clamp(40px,4.5vw,140px)] w-full">

                    {/* ── LEFT COLUMN ────────────────────────────────────────── */}
                    <div className="flex flex-col justify-between items-center lg:item  s-start w-full lg:w-[63%] xl:w-[64%] 2xl:w-[65%] 4xl:w-[66%] shrink-0">

                        {/* Title Header & Top Small Card Row */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start
                                        justify-between w-full gap-6
                                        mb-6 lg:mb-[clamp(24px,2.2vw,56px)]">

                            {/* ── HEADING ──────────────────────────────────── */}
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
                                <h2 className="text-[clamp(36px,4vw,112px)] font-bold tracking-tight leading-[0.95]">
                                    WHY THIS <br />
                                    <span className="text-[#FF00D6]">MATTERS NOW</span>
                                </h2>
                                <div
                                    className="w-[clamp(120px,11vw,300px)] h-[clamp(3px,0.25vw,6px)] rounded-full mt-[clamp(10px,0.8vw,24px)]"
                                    style={{
                                        background: 'linear-gradient(90deg, #FF00D6 0%, rgba(255, 0, 214, 0.4) 60%, transparent 100%)'
                                    }}
                                />
                            </div>

                            {/* ── TOP CARD ───────────────────────────────────── */}
                            <div className="w-full max-w-[320px] sm:max-w-none
                                            lg:w-[clamp(280px,21vw,620px)]
                                            h-auto lg:h-[clamp(170px,11.5vw,330px)]
                                            min-h-[160px]
                                            bg-[#0A041D]/90 border border-[#4E1568]
                                            rounded-[20px] lg:rounded-[clamp(20px,1.6vw,36px)]
                                            p-4 lg:p-[clamp(16px,1.4vw,36px)]
                                            flex flex-col justify-between
                                            backdrop-blur-md shadow-lg shrink-0 mx-auto lg:mx-0">

                                <div className="flex items-center gap-[clamp(12px,1.2vw,28px)]">
                                    <div className="w-[clamp(44px,3.2vw,92px)] h-[clamp(44px,3.2vw,92px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                        <img src={screenIcon} alt="Screen Icon" className="w-[55%] h-[55%] object-contain" />
                                    </div>
                                    <div>
                                        <p className="text-white text-[clamp(15px,1.15vw,32px)] font-medium leading-tight">
                                            From Screens <br />
                                            <span className="text-[#FF00D6]">to Media Networks</span>
                                        </p>
                                        <div
                                            className="w-[clamp(28px,2vw,48px)] h-[2px] mt-1.5"
                                            style={{ background: 'linear-gradient(90deg, #FF00D6 0%, transparent 100%)' }}
                                        />
                                    </div>
                                </div>
                                <p className="text-white/80 text-[clamp(12px,0.85vw,23px)] font-normal leading-snug mt-2 lg:mt-0">
                                    Digital signage is evolving into a new advertising channel.
                                </p>
                            </div>

                        </div>

                        {/* ── MAIN BOTTOM CARD: 3 Pillars Layout ─────────────── */}
                        <div
                            className="w-full max-w-[320px] sm:max-w-none lg:w-full
                                       min-h-[300px] lg:min-h-[clamp(310px,21vw,600px)]
                                       bg-[#0A041D]/90 border border-[#4E1568]
                                       rounded-[20px] lg:rounded-[clamp(22px,2vw,44px)]
                                       p-5 lg:p-[clamp(22px,2.1vw,56px)]
                                       backdrop-blur-md shadow-lg mx-auto lg:mx-0
                                       relative overflow-hidden flex flex-col justify-between"
                            style={{
                                backgroundImage: `url("${cardBgImage}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center right',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >

                            {/* Card Intro Statement */}
                            <div className="flex items-start gap-[clamp(10px,1.1vw,24px)] mb-[clamp(16px,1.8vw,40px)]">
                                <img src={targetIcon} alt="Target Icon" className="w-[clamp(22px,1.5vw,42px)] h-[clamp(22px,1.5vw,42px)] object-contain mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-white text-[clamp(14px,1.25vw,33px)] font-medium leading-tight">
                                        As more environments adopt connected screens, <br className="hidden lg:block" />
                                        the <span className="text-[#FF00D6]">opportunity</span> to:
                                    </p>
                                    <div
                                        className="w-[clamp(40px,3vw,90px)] h-[clamp(2px,0.18vw,4px)] mt-2"
                                        style={{ background: 'linear-gradient(90deg, #FF00D6 0%, transparent 100%)' }}
                                    />
                                </div>
                            </div>

                            {/* 3 Points Grid */}
                            <div className="flex flex-col lg:flex-row items-start lg:items-center
                                            justify-between gap-6 lg:gap-3 xl:gap-4
                                            my-[clamp(16px,1.8vw,40px)]">

                                {/* Item 1 */}
                                <div className="flex lg:flex-col items-center lg:items-center text-left lg:text-center gap-4 lg:gap-[clamp(10px,1vw,24px)] w-full lg:w-1/3">
                                    <div className="w-[clamp(48px,3.6vw,104px)] h-[clamp(48px,3.6vw,104px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                        <img src={peopleIcon} alt="Audience" className="w-[50%] h-[50%] object-contain" />
                                    </div>
                                    <div>
                                        <p className="text-white text-[clamp(13px,0.92vw,26px)] font-medium leading-tight">
                                            Reach audiences <br />in physical spaces
                                        </p>
                                        <div className="hidden lg:block w-[clamp(20px,1.5vw,36px)] h-[2px] mx-auto mt-2 bg-[#FF00D6]/50" />
                                    </div>
                                </div>

                                {/* Divider Line */}
                                <div className="hidden lg:block w-[1px] h-[clamp(70px,4.5vw,130px)] bg-[#4E1568]/60 shrink-0" />

                                {/* Item 2 */}
                                <div className="flex lg:flex-col items-center lg:items-center text-left lg:text-center gap-4 lg:gap-[clamp(10px,1vw,24px)] w-full lg:w-1/3">
                                    <div className="w-[clamp(48px,3.6vw,104px)] h-[clamp(48px,3.6vw,104px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                        <img src={speakerIcon} alt="Messaging" className="w-[50%] h-[50%] object-contain" />
                                    </div>
                                    <div>
                                        <p className="text-white text-[clamp(13px,0.92vw,26px)] font-medium leading-tight">
                                            Deliver targeted <br />messaging
                                        </p>
                                        <div className="hidden lg:block w-[clamp(20px,1.5vw,36px)] h-[2px] mx-auto mt-2 bg-[#FF00D6]/50" />
                                    </div>
                                </div>

                                {/* Divider Line */}
                                <div className="hidden lg:block w-[1px] h-[clamp(70px,4.5vw,130px)] bg-[#4E1568]/60 shrink-0" />

                                {/* Item 3 */}
                                <div className="flex lg:flex-col items-center lg:items-center text-left lg:text-center gap-4 lg:gap-[clamp(10px,1vw,24px)] w-full lg:w-1/3">
                                    <div className="w-[clamp(48px,3.6vw,104px)] h-[clamp(48px,3.6vw,104px)] rounded-full bg-[#160B31] border border-[#4E1568] flex items-center justify-center shrink-0">
                                        <img src={graphIcon} alt="Campaigns" className="w-[50%] h-[50%] object-contain" />
                                    </div>
                                    <div>
                                        <p className="text-white text-[clamp(13px,0.92vw,26px)] font-medium leading-tight">
                                            Build measurable <br />campaigns
                                        </p>
                                        <div className="hidden lg:block w-[clamp(20px,1.5vw,36px)] h-[2px] mx-auto mt-2 bg-[#FF00D6]/50" />
                                    </div>
                                </div>

                            </div>

                            {/* Card Footer Tagline */}
                            <div className="mt-[clamp(14px,1.2vw,32px)] text-left">
                                <p className="text-white/90 text-[clamp(13px,0.95vw,26px)]">
                                    continues to <span className="text-[#FF00D6] font-medium">grow.</span>
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* ── RIGHT COLUMN: Display Screens Frame Showcase ────────── */}
                    <div className="w-full max-w-[320px] sm:max-w-none
                                    lg:w-[clamp(280px,28vw,780px)]
                                    flex flex-col justify-stretch shrink-0 mx-auto lg:mx-0">

                        {/* Desktop Showcase Image */}
                        <img
                            src={desktopShowcaseImg}
                            alt="Digital Signage Showcase Desktop"
                            className="hidden lg:block w-full h-full min-h-[clamp(480px,36vw,980px)]
                                       object-cover rounded-[clamp(28px,2.2vw,48px)]
                                       border border-[#4E1568] shadow-2xl"
                        />

                        {/* Mobile Showcase Image */}
                        <img
                            src={mobileShowcaseImg}
                            alt="Digital Signage Showcase Mobile"
                            className="block lg:hidden w-full h-[310px] sm:h-[400px]
                                       object-cover rounded-[20px] border border-[#4E1568] shadow-2xl"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyThisMattersNow;
