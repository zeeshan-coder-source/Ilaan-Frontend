import React, { useState, useRef, useLayoutEffect } from 'react';
import { Menu, MapPin, Search, Navigation, Bell, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavOverlay from '../NavOverlay';
import { useNavigation } from '../../context/NavigationContext';

import mapImage from '../../assets/map.png';
import glasgowMapImage from '../../assets/glasgow_map.png';
import mediaLogoImage from '../../assets/medialogo.png';
import mediaBgImage from '../../assets/MediaBG.png';
import mobileBgImage from '../../assets/media/Mediamobile1.png';
import notigIcon from '../../assets/notigicon.png';
import yellowMicon from '../../assets/yellowmicon.png';
import blackMicon from '../../assets/blackmicon.png';
import blueMicon from '../../assets/bluemicon.png';
import purpleMicon from '../../assets/purplemicon.png';
import orangeMicon from '../../assets/orangemicon.png';
import greenMicon from '../../assets/greenmicon.png';
import pinkMicon from '../../assets/pinkmicon.png';
import redMicon from '../../assets/redmicon.png';
import arrorIcon from '../../assets/arror.png';
import blackMapIcon from '../../assets/blackmap.png';
import dashLogoImg from '../../assets/dashlogo.png';
import notificationIconImg from '../../assets/notificationicon.png';
import downArrowImg from '../../assets/downarrow.png';

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  { name: 'Glasgow', screens: 15, color: '#D9FF00', coords: { x: '62%', y: '52%' }, icon: yellowMicon },
  { name: 'Edinburgh', screens: 12, color: '#FF3B30', coords: { x: '69%', y: '56%' }, icon: redMicon },
  { name: 'Paisley', screens: 6, color: '#007AFF', coords: { x: '37%', y: '42%' }, icon: blueMicon },
  { name: 'East Kilbride', screens: 5, color: '#AF52DE', coords: { x: '44%', y: '52%' }, icon: purpleMicon },
  { name: 'Livingston', screens: 4, color: '#FFCC00', coords: { x: '68%', y: '52%' }, icon: yellowMicon },
  { name: 'Stirling', screens: 3, color: '#4CD964', coords: { x: '56%', y: '22%' }, icon: greenMicon },
  { name: 'Dumbarton', screens: 3, color: '#FF9500', coords: { x: '50%', y: '30%' }, icon: orangeMicon },
  { name: 'Kilmarnock', screens: 2, color: '#FF2D55', coords: { x: '39%', y: '18%' }, icon: pinkMicon },
];

const MediaHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Glasgow');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [activeMobileTab, setActiveMobileTab] = useState('list');
  const { navigateTo } = useNavigation();

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const mapCardRef = useRef(null);

  const filteredCities = CITIES.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: true,
        },
      });

      gsap.from(mapCardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from('.reveal-text-media', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const navLinks = ['Solutions', 'Locations', 'Industries', 'Resources', 'About Us', 'Contact'];
  const pageNumbers = [1, 2, 3, '...', 9];

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#04010a] text-white font-sans flex flex-col items-center justify-start overflow-hidden pt-6 pb-20 px-4 md:px-8"
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Background Image Layer - Desktop */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <img
          src={mediaBgImage}
          alt="Media Background Layer"
          className="w-full h-[102%] object-fit object-center"
        />
        <div className="absolute inset-0 bg-[#04010a]/15 pointer-events-none" />
      </div>

      {/* Background Image Layer - Mobile */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <img
          src={mobileBgImage}
          alt="Media Background Mobile"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#04010a]/10 pointer-events-none" />
      </div>

      {/* Main Navigation Header */}
      <header className="relative z-30 flex items-center justify-between w-full py-4 px-4 sm:px-6 md:px-8 xl:px-[clamp(32px,2.6vw,56px)] bg-transparent mx-auto">
        <div
          onClick={() => navigateTo('home')}
          className="flex items-center cursor-pointer hover:opacity-85 transition-opacity shrink-0"
        >
          <img
            src={mediaLogoImage}
            alt="Ilaan Media Logo"
            className="h-[42px] sm:h-[52px] md:h-[clamp(56px,4.2vw,80px)] w-auto object-contain"
          />
        </div>

        <nav className="hidden xl:flex items-center space-x-[clamp(24px,2.5vw,48px)] text-white font-normal">
          {navLinks.map((link) => {
            const href = '#' + link.toLowerCase().replace(' ', '-');
            return (
              <a
                key={link}
                href={href}
                className="hover:text-[#FF00D6] transition-colors duration-300 text-[clamp(16px,1.05vw,19px)] tracking-normal font-normal text-white/90 whitespace-nowrap leading-relaxed py-1"
              >
                {link}
              </a>
            );
          })}
        </nav>

        <div className="hidden xl:flex items-center space-x-[clamp(12px,1vw,20px)]">
          <button className="border border-white/20 hover:border-white/50 text-white rounded-xl px-[clamp(20px,1.8vw,32px)] py-[clamp(13px,1.15vw,18px)] text-[clamp(13.5px,0.85vw,15px)] font-semibold tracking-wider transition-all hover:scale-[1.02] active:scale-95 bg-transparent min-w-[118px] uppercase leading-tight">
            LOG IN
          </button>

          <button className="px-[clamp(20px,1.8vw,32px)] py-[clamp(13px,1.15vw,18px)] text-[clamp(13.5px,0.85vw,15px)] font-semibold tracking-wider text-white rounded-xl bg-gradient-to-r from-[#FF00D6] via-[#9F00FF] to-[#2B44FF] hover:opacity-95 transition-all flex items-center gap-3 shadow-[0_4px_25px_rgba(255,0,214,0.35)] hover:scale-[1.02] active:scale-95 whitespace-nowrap uppercase leading-tight">
            MAKE AN ENQUIRY <span className="text-xl font-light leading-none -mt-[1px]">→</span>
          </button>
        </div>

        {/* Mobile Header Right Section - Matches Figma */}
        <div className="flex xl:hidden items-center gap-2.5">
          <button className="px-3.5 py-2 text-[11px] font-bold text-white rounded-lg bg-gradient-to-r from-[#FF00D6] via-[#9F00FF] to-[#2B44FF] flex items-center gap-1.5 shadow-[0_2px_15px_rgba(255,0,214,0.35)] uppercase whitespace-nowrap">
            MAKE AN ENQUIRY <span className="text-sm font-light">→</span>
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-1.5 transition-transform active:scale-90 hover:scale-105 cursor-pointer text-white hover:text-[#E000FF] bg-transparent border-none outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Main Hero Banner Content */}
      <main ref={contentRef} className="relative z-20 flex flex-col items-center justify-center text-center mt-8 sm:mt-14 md:mt-[clamp(48px,3.5vw,64px)] px-4 max-w-5xl xl:max-w-[clamp(56rem,62vw,72rem)] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto w-full">
        <h1 className="reveal-text-media text-[34px] sm:text-[54px] md:text-[clamp(70px,4.7vw,104px)] 3xl:text-[116px] 4xl:text-[140px] font-semibold leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] text-white m-0 font-sans">
          Reach Customers <br />
          Where It <br className="inline sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] via-[#9F00FF] to-[#2B44FF]">Matters Most</span>
        </h1>

        <p className="reveal-text-media mt-4 sm:mt-8 text-[13px] sm:text-[18px] md:text-[clamp(18px,1.1vw,21px)] 3xl:text-2xl text-gray-300 font-normal leading-relaxed max-w-xs sm:max-w-3xl xl:max-w-[clamp(42rem,45vw,48rem)] 3xl:max-w-[1100px] opacity-90">
          Plan and run advertising campaigns across real-world <br className="hidden sm:inline" />
          screens in high-footfall environments.
        </p>

        <div className="reveal-text-media mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 sm:px-10 md:px-[clamp(28px,2.2vw,40px)] py-[14px] sm:py-[20px] md:py-[clamp(16px,1.35vw,22px)] bg-gradient-to-r from-[#FF00D6] via-[#9F00FF] to-[#2B44FF] text-white text-[13px] sm:text-[15px] md:text-[clamp(14.5px,0.95vw,16.5px)] 3xl:text-lg font-semibold tracking-wider rounded-xl hover:opacity-95 transition-all duration-300 shadow-[0_8px_30px_rgba(255,0,214,0.25)] flex items-center justify-center gap-2.5 leading-normal">
            MAKE AN ENQUIRY <span className="text-lg sm:text-xl font-light">→</span>
          </button>

          <button className="w-full sm:w-auto px-8 sm:px-10 md:px-[clamp(28px,2.2vw,40px)] py-[14px] sm:py-[20px] md:py-[clamp(16px,1.35vw,22px)] bg-[#050112]/40 border border-[#FF00D6]/30 hover:border-[#FF00D6] text-white text-[13px] sm:text-[15px] md:text-[clamp(14.5px,0.95vw,16.5px)] 3xl:text-lg font-semibold tracking-wider rounded-xl hover:bg-[#050112]/80 transition-all duration-300 flex items-center justify-center gap-2.5 leading-normal">
            VIEW LOCATIONS <MapPin size={17} className="text-[#FF00D6]" strokeWidth={2} />
          </button>
        </div>
      </main>

      {/* Interactive Map & Locations Card Section */}
      <div ref={mapCardRef} className="relative mt-10 sm:mt-14 md:mt-[clamp(48px,4vw,80px)] w-full xl:w-[94%] lg:w-[96%] 3xl:max-w-[2200px] 4xl:max-w-[2700px] mx-auto z-20 px-2 sm:px-5 lg:px-0">
        <div className="w-full border border-[#FF00D6]/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,0,214,0.18),0_20px_60px_rgba(0,0,0,0.75)] flex flex-col">

          {/* Inner Dashboard Header */}
          <div className="flex items-center justify-between px-5 py-4 sm:px-[clamp(24px,2.5vw,40px)] sm:py-[clamp(20px,2vw,32px)] border-b border-white/20">
            <div className="flex items-center">
              <img src={dashLogoImg} alt="ILAAN" className="h-[28px] sm:h-[clamp(32px,2.1vw,40px)] 3xl:h-[50px] w-auto object-contain" />
            </div>

            <div className="flex items-center gap-4 sm:gap-[clamp(20px,1.8vw,28px)]">
              <div className="relative cursor-pointer">
                <img src={notificationIconImg} alt="Notifications" className="h-[22px] sm:h-[clamp(22px,1.4vw,27px)] 3xl:h-[34px] w-auto object-contain opacity-95" />
                {/* <span className="absolute -top-1.5 -right-2 bg-[#FF2D55] text-white text-[10px] font-bold w-[16px] h-[16px] sm:w-[clamp(16px,1.05vw,20px)] sm:h-[clamp(16px,1.05vw,20px)] rounded-full flex items-center justify-center border-[1.5px] border-[#0d0820]">
                  6
                </span> */}
              </div>

              <div className="flex items-center gap-2.5 cursor-pointer group">
                <div className="hidden sm:flex flex-col text-right leading-none">
                  <span className="text-[clamp(14px,0.81vw,15.5px)] 3xl:text-lg font-bold text-white">John Roy</span>
                  <span className="text-[clamp(11px,0.65vw,12.5px)] 3xl:text-sm text-gray-400 mt-[4px] font-medium">Admin</span>
                </div>
                <div className="w-[30px] h-[30px] sm:w-[clamp(30px,1.9vw,36px)] sm:h-[clamp(30px,1.9vw,36px)] rounded-full border border-white/20 flex items-center justify-center shrink-0 hover:border-white/40 transition-colors">
                  <img src={downArrowImg} alt="▼" className="w-[11px] h-[11px] object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View Structure (< lg) matching Figma Image 1 */}
          <div className="block lg:hidden p-4 sm:p-6 flex flex-col gap-4">
            {/* Search Row */}
            <div className="flex items-center gap-3 w-full">
              <div className="relative flex-1 shrink-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Locations...."
                  className="w-full pl-4 pr-10 h-[44px] rounded-[14px] bg-[#0F152A] border-[0.69px] border-[#D5D5D5]/35 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-[#FF00D6]/60 transition-all"
                />
                <Search size={17} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <button className="w-[44px] h-[44px] rounded-[14px] bg-white flex items-center justify-center shrink-0 hover:bg-gray-100 active:scale-95 transition-all shadow-sm">
                <img src={blackMapIcon} alt="Map" className="w-[20px] h-[20px] object-contain" />
              </button>
            </div>

            {/* Showing Count */}
            <div className="flex items-center gap-2 px-1">
              <span className="w-[8px] h-[8px] rounded-full bg-[#D9FF00] shadow-[0_0_8px_rgba(217,255,0,0.85)] animate-pulse shrink-0" />
              <span className="text-[13px] font-medium text-gray-300">
                Showing {searchQuery ? filteredCities.length : 68} locations
              </span>
            </div>

            {/* Embedded Map Preview Box */}
            <div className="relative w-full h-[200px] sm:h-[240px] rounded-2xl border border-white/30 overflow-hidden shadow-lg">
              <img
                src={mapImage}
                alt="Glasgow City Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {CITIES.map((city) => {
                const isSelected = city.name === selectedCity;
                return (
                  <div
                    key={city.name}
                    style={{ left: city.coords.x, top: city.coords.y }}
                    onClick={() => setSelectedCity(city.name)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  >
                    <img
                      src={city.icon}
                      alt={city.name}
                      className={`w-4 h-6 object-contain drop-shadow-md transition-transform duration-200 ${isSelected ? 'scale-125' : 'scale-100'}`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Unified Locations List Container (Figma Image 1 style) */}
            <div className="flex flex-col border border-[#FF00D6]/30 bg-[#0d0722]/80 rounded-2xl overflow-hidden divide-y divide-white/10">
              {filteredCities.map((city) => {
                const isSelected = city.name === selectedCity;
                return (
                  <div
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`flex items-center justify-between px-4 h-[50px] cursor-pointer transition-all duration-200 ${isSelected ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'}`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={city.icon}
                        alt={city.name}
                        className="w-[20px] h-[24px] object-contain shrink-0"
                      />
                      <div className="flex items-baseline gap-2">
                        <span className="text-[14px] font-semibold text-white">{city.name}</span>
                        <span className="text-[12px] font-normal text-gray-400">{city.screens} Screens</span>
                      </div>
                    </div>
                    <img
                      src={arrorIcon}
                      alt=">"
                      className={`w-[14px] h-[14px] object-contain shrink-0 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-50'}`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls Mobile */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 w-full">
              <button
                disabled={currentPageNum === 1}
                onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white disabled:opacity-25 transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-1.5">
                {pageNumbers.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => typeof p === 'number' && setCurrentPageNum(p)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold transition-all ${p === currentPageNum
                      ? 'bg-[#FF00D6] text-white shadow-[0_0_10px_rgba(255,0,214,0.45)]'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPageNum === 9}
                onClick={() => setCurrentPageNum((p) => Math.min(9, p + 1))}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white disabled:opacity-25 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Desktop Split View Container (lg:) */}
          <div className="hidden lg:flex flex-row min-h-[clamp(450px,30vw,650px)] 3xl:min-h-[750px]">

            {/* Left Sidebar Location List */}
            <div className="w-[clamp(320px,21.5vw,412px)] shrink-0 flex flex-col p-[clamp(18px,1.5vw,24px)] gap-[clamp(14px,1.1vw,20px)]">

              <div className="flex items-center gap-[clamp(8px,0.7vw,12px)] w-full">
                <div className="relative flex-1 shrink-0">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Locations..."
                    className="w-full pl-5 pr-10 h-[clamp(40px,2.4vw,46px)] rounded-[clamp(10px,0.73vw,14px)] bg-[#0F152A] border-[0.69px] border-[#D5D5D5]/35 text-[clamp(13px,0.78vw,15px)] text-white placeholder-gray-500 focus:outline-none focus:border-[#FF00D6]/60 transition-all"
                  />
                  <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <button className="w-[clamp(40px,2.4vw,46px)] h-[clamp(40px,2.4vw,46px)] rounded-[clamp(10px,0.73vw,14px)] bg-white flex items-center justify-center shrink-0 hover:bg-gray-100 active:scale-95 transition-all shadow-sm">
                  <img src={blackMapIcon} alt="Map" className="w-[22px] h-[22px] object-contain" />
                </button>
              </div>

              <div className="flex items-center gap-2.5 px-1">
                <span className="w-[8px] h-[8px] rounded-full bg-[#D9FF00] shadow-[0_0_8px_rgba(217,255,0,0.85)] animate-pulse shrink-0" />
                <span className="text-[clamp(12px,0.73vw,14px)] font-semibold text-gray-400">
                  Showing {searchQuery ? filteredCities.length : 68} locations
                </span>
              </div>

              <div className="flex flex-col gap-[clamp(8px,0.5vw,10px)] overflow-y-auto no-scrollbar flex-1 w-full">
                {filteredCities.map((city) => {
                  const isSelected = city.name === selectedCity;
                  return (
                    <div
                      key={city.name}
                      onClick={() => setSelectedCity(city.name)}
                      className={`flex items-center justify-between px-[clamp(16px,1.25vw,24px)] h-[clamp(72px,4.5vw,88px)] rounded-[clamp(12px,0.89vw,17px)] cursor-pointer border backdrop-blur-sm transition-all duration-200 shrink-0 ${isSelected
                        ? 'bg-[#121212]/35 border-[#FF00D6] shadow-[0_0_18px_rgba(255,0,214,0.2)]'
                        : 'bg-[#121212]/35 border-white/[0.16] hover:border-white/30'
                        }`}
                    >
                      <div className="flex items-center gap-[clamp(10px,0.83vw,16px)]">
                        <img
                          src={city.icon}
                          alt={city.name}
                          className="w-[clamp(24px,1.55vw,30px)] h-[clamp(28px,1.82vw,35px)] object-contain shrink-0"
                        />
                        <div>
                          <div className="text-[clamp(17px,1.05vw,19px)] font-semibold text-white leading-snug">{city.name}</div>
                          <div className="text-[clamp(12.5px,0.78vw,14.5px)] text-gray-400 mt-[3px] font-normal leading-tight">{city.screens} Screens</div>
                        </div>
                      </div>
                      <img
                        src={arrorIcon}
                        alt=">"
                        className={`w-[clamp(16px,1.05vw,20px)] h-[clamp(16px,1.05vw,20px)] object-contain shrink-0 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-50'
                          }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls Desktop */}
              <div className="flex items-center justify-between pt-[clamp(12px,1vw,16px)] border-t border-[#FF00D6]/15 w-full">
                <button
                  disabled={currentPageNum === 1}
                  onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                  className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/[0.05] disabled:opacity-25 disabled:pointer-events-none transition-all"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-[clamp(6px,0.5vw,8px)]">
                  {pageNumbers.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => typeof p === 'number' && setCurrentPageNum(p)}
                      className={`w-[clamp(32px,2.08vw,40px)] h-[clamp(32px,2.08vw,40px)] rounded-xl flex items-center justify-center text-[clamp(12px,0.73vw,14px)] font-bold transition-all ${p === currentPageNum
                        ? 'bg-[#FF00D6] text-white shadow-[0_0_14px_rgba(255,0,214,0.45)]'
                        : 'text-gray-500 hover:text-white hover:bg-white/[0.05]'
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPageNum === 9}
                  onClick={() => setCurrentPageNum((p) => Math.min(9, p + 1))}
                  className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/[0.05] disabled:opacity-25 disabled:pointer-events-none transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Map Canvas Display Desktop */}
            <div className="flex-1 p-[clamp(24px,2.6vw,40px)] flex flex-col">
              <div className="relative flex-1 rounded-[clamp(16px,1.25vw,24px)] border-[1px] border-white/80 p-[clamp(10px,0.91vw,14px)] shadow-[0_4px_30px_rgba(0,0,0,0.4)] min-h-[clamp(360px,24vw,460px)] flex flex-col">

                <div className="relative flex-1 w-full h-full rounded-[clamp(10px,0.83vw,16px)] overflow-hidden">
                  <img
                    src={mapImage}
                    alt="Glasgow City Map"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {CITIES.map((city) => {
                    const isSelected = city.name === selectedCity;
                    return (
                      <div
                        key={city.name}
                        style={{ left: city.coords.x, top: city.coords.y }}
                        onClick={() => setSelectedCity(city.name)}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                      >
                        <img
                          src={city.icon}
                          alt={city.name}
                          className={`w-[clamp(16px,1.04vw,20px)] h-[clamp(22px,1.46vw,28px)] object-contain drop-shadow-md transition-transform duration-200 ${isSelected ? 'scale-125' : 'scale-100 group-hover:scale-110'
                            }`}
                        />
                        <div className={`absolute bottom-9 left-1/2 -translate-x-1/2 bg-[#0c071d]/95 border border-white/20 text-white rounded-lg py-1 px-2.5 text-[10px] font-bold whitespace-nowrap shadow-xl flex items-center gap-1.5 pointer-events-none transition-all duration-200 ${isSelected
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                          }`}>
                          <MapPin size={9} style={{ color: city.color }} fill={city.color} />
                          <span>{city.name}</span>
                          <span className="text-[#FF00D6] border-l border-white/20 pl-1.5 ml-0.5">{city.screens}S</span>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#0c071d]/95" />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaHero;