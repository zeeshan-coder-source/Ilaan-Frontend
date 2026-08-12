import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LinkEndCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#080808] border-t border-[#D0FF00]">
      <div className="mx-auto max-w-[1920px] px-5 sm:px-8 lg:px-16 min-[1920px]:px-24 py-24 md:py-32 text-center">
        <span className="text-[#D0FF00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
          Get Started
        </span>
        <h2 className="font-falcon font-bold text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] mt-6">
          Ready to Take Control <br />
          of <span className="text-[#D0FF00]">Your Pricing?</span>
        </h2>
        <p className="text-white/70 font-normal text-sm sm:text-base lg:text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Deploy digital shelf labels across your stores and make manual pricing
          a thing of the past.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 px-10 py-4 bg-[#D0FF00] text-black font-bold rounded-full hover:bg-[#c3e600] transition-all duration-300 text-[14px] md:text-base shadow-[0_10px_25px_-5px_rgba(208,255,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer">
            Get Started <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button className="flex items-center justify-center gap-2 px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 text-[14px] md:text-base hover:scale-105 active:scale-95 cursor-pointer">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
