import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Parent Directory Imports
import NavOverlay from '../NavOverlay';
import Header from '../Header';
import HeadersH1 from '../HeadingH1';

// Single Asset Imports
import heroBgDesktop from '../../assets/corporate/01.png';
import heroBgMobile from '../../assets/corporate/1.png';

gsap.registerPlugin(ScrollTrigger);

const corporateLine1 = [
  { text: 'Start Connecting', color: '#ffffff' }
];

const corporateLine2 = [
  { text: 'Your ', color: '#ffffff' },
  { text: 'Workplace', color: '#D9FF00' }
];

const CorporateHero = () => {
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
              alt="Corporate Background Desktop"
              className="hidden md:block absolute inset-0 h-full w-full object-cover scale-100"
            />
            <img
              src={heroBgMobile}
              alt="Corporate Background Mobile"
              className="block md:hidden absolute inset-0 h-full w-full object-cover scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          {/* Main Hero Content Block */}
          <main
            ref={contentRef}
            className="relative z-10 flex flex-col justify-center flex-grow px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-8"
          >
            <div className="w-full md:w-[55%] lg:w-[52%] xl:w-[50%] reveal-text">

              {/* Heading Wrapper */}
              <div className="flex flex-col gap-0 md:gap-1 leading-tight mb-3 md:mb-8">
                <div className="whitespace-nowrap overflow-visible">
                  <HeadersH1
                    leading="0.8em"
                    letterSpacing="-0.06em"
                    parts={corporateLine1}
                  />
                </div>
                <div className="whitespace-nowrap overflow-visible">
                  <HeadersH1
                    leading="0.8em"
                    letterSpacing="-0.06em"
                    parts={corporateLine2}
                  />
                </div>
              </div>

              {/* Paragraph Copy */}
              <p className="text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] text-gray-200 font-sans font-normal leading-relaxed tracking-normal max-w-full md:max-w-[520px] lg:max-w-[580px]">
                Whether you're improving internal communication or modernising your office environment, Ilaan provides the tools to make it happen.
              </p>

              {/* Action CTA Button */}
              <div className="mt-6 md:mt-8 lg:mt-12">
                <button className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-3.5 bg-[#D9FF00] text-black font-semibold rounded-full hover:bg-[#c3e600] transition-all duration-300 text-[14px] md:text-[16px] lg:text-[17px] shadow-[0_10px_25px_rgba(217,255,0,0.35)] hover:scale-[1.02] active:scale-95 cursor-pointer">
                  <span>Make an Enquiry</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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

export default CorporateHero;
