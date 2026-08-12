import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavOverlay from '../NavOverlay';
import Header from '../Header';
import HeadersH1 from '../HeadingH1';

import heroBgDesktop from '../../assets/LINK/link-page.png';
import heroBgMobile from '../../assets/signage/01_BG.png';

gsap.registerPlugin(ScrollTrigger);

const signageLine1 = [
    { text: 'Eliminate Manual ', color: '#ffffff' },
    { text: 'Pricing', color: '#D9FF00' }
];

const SignageHero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const bgRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.to(contentRef.current, {
                opacity: 0,
                y: -50,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom 40%',
                    scrub: true,
                },
            });

            gsap.from('.reveal-text', {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: 'power4.out',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Header
                onMenuOpen={() => setIsMenuOpen(true)}
                animationClass="reveal-text"
                logoClickable={false}
            />

            <div
                ref={heroRef}
                data-header-theme="dark"
                className="relative h-screen w-full bg-black text-white font-sans p-3 md:p-5 lg:p-6 flex items-center justify-center overflow-hidden"
            >
                <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_20px_rgba(217,255,0,0.1)]">

                    {/* Background Layer */}
                    <div ref={bgRef} className="absolute inset-0 z-0 h-full w-full">
                        <img src={heroBgDesktop} alt="Signage Background Desktop" className="hidden md:block absolute inset-0 h-full w-full object-cover" />
                        <img src={heroBgMobile} alt="Signage Background Mobile" className="block md:hidden absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Main Hero Content Block
                        - pt scales fluidly so content never clips at any viewport height
                    */}
                    <main
                        ref={contentRef}
                        className="relative z-10 flex flex-col justify-center flex-grow px-6 md:px-12 lg:px-16 pb-6"
                        style={{ paddingTop: 'clamp(4rem, 6vh + 1rem, 7rem)' }}
                    >
                        {/* Content column */}
                        <div className="w-full md:w-[60%] lg:w-[58%] xl:w-[52%] 2xl:w-[48%] reveal-text">

                            {/* Heading Wrapper — wraps on all screens below 2xl */}
                            <div
                                className="flex flex-col gap-0 md:gap-1 leading-tight 2xl:whitespace-nowrap"
                                style={{ marginBottom: 'clamp(0.75rem, 2vh, 3rem)' }}
                            >
                                <div>
                                    <HeadersH1
                                        leading="0.8em"
                                        letterSpacing="-0.06em"
                                        parts={signageLine1}
                                    />
                                </div>
                            </div>

                            {/* Paragraph — fluid: 14px → 23px */}
                            <p
                                className="text-gray-200 font-sans font-normal leading-relaxed tracking-normal max-w-full md:max-w-[480px] lg:max-w-[540px]"
                                style={{ fontSize: 'clamp(0.875rem, 0.8vw + 0.5rem, 1.4375rem)' }}
                            >
                                Digitise your shelves and update pricing instantly across your store.<br /><br className="hidden md:inline" />
                                Ilaan Link replaces paper labels with connected digital displays, helping you reduce manual work,
                                improve accuracy and operate more efficiently.
                            </p>

                            {/* CTA Button — gap fluid: mt scales with viewport height */}
                            <div style={{ marginTop: 'clamp(1rem, 2.5vh, 4rem)' }}>
                                <button className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 bg-[#FFFF00] text-black font-semibold rounded-full hover:bg-[#e6e600] transition-all duration-300 text-[13px] md:text-[14px] lg:text-[16px] shadow-[0_10px_25px_rgba(255,255,0,0.35)] hover:scale-[1.02] active:scale-95 cursor-pointer">
                                    Learn more
                                </button>
                            </div>

                        </div>
                    </main>

                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default SignageHero;
