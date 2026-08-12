import React from 'react';
import rightImg from '../../assets/media/rightimg.png';
import mobileBgImage from '../../assets/media/Mediamobile2.png';
import icon1 from '../../assets/group_5_1.png';
import icon2 from '../../assets/group_5_2.png';
import icon3 from '../../assets/group_5_3.png';
import icon4 from '../../assets/group_5_4.png';
import icon5 from '../../assets/group_5_5.png';

const PROBLEMS = [
  { num: '01', icon: icon1, text: 'Online advertising is crowded and expensive' },
  { num: '02', icon: icon2, text: 'Attention is fragmented across channels' },
  { num: '03', icon: icon3, text: 'Reaching customers in physical environments is difficult' },
  { num: '04', icon: icon4, text: 'Traditional out-of-home lacks flexibility' },
  { num: '05', icon: icon5, text: 'Digital lacks physical presence' },
];

const MediaSaturated = () => {
  return (
    <section className="w-full bg-[#060521] min-h-fit py-[clamp(48px,6vw,140px)] px-6 sm:px-10 lg:px-[clamp(48px,5vw,160px)] flex items-center justify-center overflow-hidden relative">

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

      <div className="w-full max-w-[3400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[clamp(32px,3.3vw,100px)] relative z-10">

        {/* ── LEFT: Text & Problem List Content ── */}
        <div className="w-full lg:w-[42%] flex flex-col justify-center gap-6 lg:gap-[clamp(20px,1.7vw,56px)] shrink-0">

          {/* Main Title — gradient matches Figma stops: 0% #ED03B8 → 100% #4C10F7 */}
          <h2 className="text-[clamp(28px,2.9vw,110px)] font-semibold leading-[1.15] bg-gradient-to-r from-[#ED03B8] to-[#4C10F7] bg-clip-text text-transparent tracking-tight whitespace-normal xl:whitespace-nowrap w-fit">
            Digital Reach Is Saturated
          </h2>

          {/* Description */}
          <p className="text-white/70 font-normal text-[clamp(14px,0.95vw,30px)] leading-relaxed max-w-[clamp(280px,28vw,820px)]">
            Brands today face increasing challenges in connecting with their audience effectively
          </p>

          {/* Problem List */}
          <div className="flex flex-col gap-[clamp(20px,2.8vw,25px)] pt-1">
            {PROBLEMS.map((item) => (
              <div key={item.num} className="flex items-center gap-[clamp(12px,1.1vw,28px)]">
                {/* Icon Box */}
                <div className="w-[clamp(44px,4.4vw,100px)] h-[clamp(44px,4.4vw,100px)] rounded-2xl bg-[#1B0F38] border border-[#7C3AED]/15 flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-[55%] h-[55%] object-contain"
                  />
                </div>

                {/* Number Badge Capsule */}
                <span className="text-[clamp(11px,0.75vw,18px)] font-bold text-[#9910F5] bg-[#140C31] border border-white/10 px-2.5 py-1.5 rounded-full shrink-0">
                  {item.num}
                </span>

                {/* Text Label */}
                <span className="text-[clamp(14px,1vw,28px)] text-white/90 font-normal leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image Display Section (fluid, keeps growing on ultra-wide/4K) ── */}
        <div className="w-full lg:w-[54%] shrink-0 flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[clamp(320px,47vw,2200px)] h-auto flex items-center justify-center">
            <img
              src={rightImg}
              alt="Digital World vs Physical World"
              className="w-full h-auto object-contain max-h-[clamp(280px,42vw,1900px)] drop-shadow-[0_0_50px_rgba(255,0,215,0.4)] "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaSaturated;