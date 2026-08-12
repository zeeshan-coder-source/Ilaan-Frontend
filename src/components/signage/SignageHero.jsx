import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Parent Directory Imports
import NavOverlay from '../NavOverlay';
import Header from '../Header';
import HeadersH1 from '../HeadingH1';

// Single Asset Imports
import heroBgDesktop from '../../assets/signage/herobgdesktop.png';
import heroBgMobile from '../../assets/signage/01_BG.png';

gsap.registerPlugin(ScrollTrigger);

const signageLine1 = [
  { text: 'Digital Signage That', color: '#ffffff' }
];

const signageLine2 = [
  { text: 'Works in the ', color: '#ffffff' },
  { text: 'Real World', color: '#D9FF00' }
];

const SignageHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll effect for background image
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

      // Smooth fade out content on scroll
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

      // Staggered Entrance Animation
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
      {/* Header Bar */}
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
        <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] md:rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_20px_rgba(217,255,0,0.1)]">

          {/* Background Layer */}
          <div ref={bgRef} className="absolute inset-0 z-0 h-full w-full">
            <img
              src={heroBgDesktop}
              alt="Signage Background Desktop"
              className="hidden md:block absolute inset-0 h-full w-full object-cover scale-100"
            />
            <img
              src={heroBgMobile}
              alt="Signage Background Mobile"
              className="block md:hidden absolute inset-0 h-full w-full object-cover scale-100"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Main Hero Content Block - Added top padding to prevent Header logo overlap */}
          <main
            ref={contentRef}
            className="relative z-10 flex flex-col justify-center flex-grow px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-8"
          >
            {/* Left Box width constrained so it stays on left half of screen */}
            <div className="w-full md:w-[52%] lg:w-[50%] xl:w-[48%] reveal-text">

              {/* Heading Wrapper - Fixed whitespace-nowrap prevents line-breaks */}
              <div className="flex flex-col gap-0 md:gap-1 leading-tight mb-3 md:mb-12">
                <div className="whitespace-nowrap overflow-visible">
                  <HeadersH1
                    leading="0.8em"
                    letterSpacing="-0.06em"
                    parts={signageLine1}
                  />
                </div>
                <div className="whitespace-nowrap overflow-visible">
                  <HeadersH1
                    leading="0.8em"
                    letterSpacing="-0.06em"
                    parts={signageLine2}
                  />
                </div>
              </div>

              {/* Paragraph Copy */}
              <p className="text-[16px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[23px] text-gray-200 font-sans font-normal leading-relaxed tracking-normal max-w-full md:max-w-[480px] lg:max-w-[540px]">
                Commercial displays designed for visibility, reliability and continuous use across real environments. <br className="hidden md:inline" />
                From single screens to large-scale installations, Ilaan provides the hardware to bring your setup to life.
              </p>

              {/* Action CTA Button */}
              <div className="mt-4 md:mt-6 lg:mt-16">
                <button className="inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 bg-[#D9FF00] text-black font-semibold rounded-full hover:bg-[#c3e600] transition-all duration-300 text-[13px] md:text-[14px] lg:text-[16px] shadow-[0_10px_25px_rgba(217,255,0,0.35)] hover:scale-[1.02] active:scale-95 cursor-pointer">
                  Learn more
                </button>
              </div>

            </div>
          </main>

        </div>

        {/* Navigation Overlay */}
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