import React from 'react';

// Relative Image Imports
import bgImage from '../../assets/media/secbg.png';
import mobileBgImage from '../../assets/media/Mediamobile4.png';
import hiw1 from '../../assets/media/hiw1.png';
import hiw2 from '../../assets/media/hiw2.png';
import hiw3 from '../../assets/media/hiw3.png';
import hiw4 from '../../assets/media/hiw4.png';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Locations',
      description: 'Select the environments that match your audience',
      icon: hiw1,
    },
    {
      number: '02',
      title: 'Plan Your Campaign',
      description: 'Define content and campaign duration',
      icon: hiw2,
    },
    {
      number: '03',
      title: 'Go Live',
      description: 'Launch across selected screens',
      icon: hiw3,
    },
    {
      number: '04',
      title: 'Track Activity',
      description: 'Monitor delivery and performance',
      icon: hiw4,
    },
  ];

  return (
    <section
      className="w-full bg-[#030014] py-[clamp(56px,6vw,140px)] px-4 relative overflow-hidden flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[clamp(560px,42vw,900px)] font-['Inter',sans-serif]"
    >
      {/* Desktop Background */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />
      {/* Mobile Background */}
      <div
        className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ backgroundImage: `url(${mobileBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' }}
      />
      <div className="w-full max-w-[clamp(340px,91vw,1900px)] mx-auto text-center relative z-10 flex flex-col gap-[clamp(40px,4.2vw,90px)]">

        {/* Header Section */}
        <div className="flex flex-col gap-[clamp(6px,0.5vw,12px)]">
          {/* Main Title */}
          <h2 className="text-[clamp(32px,4.4vw,86px)] font-semibold text-white tracking-normal leading-tight">
            How It <span className="bg-gradient-to-r from-[#FF00D6] to-[#E000FF] bg-clip-text text-transparent">Works</span>
          </h2>
          {/* Subtitle */}
          <p className="text-white text-[clamp(15px,1.35vw,27px)] font-medium leading-[152.9%]">
            Simple Campaign Workflow
          </p>
        </div>

        {/* Mobile Layout (< lg): Figma vertical stacked with connectors */}
        <div className="flex lg:hidden flex-col items-stretch w-full max-w-[440px] mx-auto gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Mobile Card: horizontal icon-left, text-right */}
              <div className="flex items-center gap-4 bg-[#090725] border border-[#2E1E52] rounded-[20px] px-4 py-5 hover:border-[#E000FF] transition-all duration-300">
                {/* Icon */}
                <div className="w-[72px] h-[72px] rounded-full border border-[#9A4EE9]/40 bg-[#120836]/90 flex items-center justify-center shadow-[0_0_20px_rgba(154,78,233,0.2)] shrink-0">
                  <img src={step.icon} alt={step.title} className="w-7 h-7 object-contain" />
                </div>
                {/* Text */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-[22px] font-medium text-[#9A4EE9] leading-tight">{step.number}</span>
                  <h3 className="text-white text-[18px] font-medium leading-snug">{step.title}</h3>
                  <div className="flex gap-1.5 pt-1 mb-1">
                    <div className="w-5 h-[3px] bg-[#9A4EE9] rounded-full" />
                    <div className="w-2.5 h-[3px] bg-[#9A4EE9] rounded-full opacity-50" />
                  </div>
                  <p className="text-white text-[13px] font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
              {/* Dashed vertical connector between cards */}
              {index < steps.length - 1 && (
                <div className="flex justify-center items-center" style={{ height: '36px' }}>
                  <div style={{ width: '2px', height: '100%', borderLeft: '2px dashed #9A4EE9', opacity: 0.6 }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop Layout (>= lg): horizontal cards with dashed connectors — fluid clamp() sizing matched to the Figma 1920 baseline (card 363×457, gap 72px, icon 100px, measured from the live Figma proto) */}
        <div className="hidden lg:flex flex-nowrap justify-center items-center mx-auto px-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>

              {/* Card */}
              <div
                className="relative z-10 w-[clamp(200px,18.9vw,380px)] h-[clamp(260px,23.8vw,478px)] bg-[#090725] border border-[#2E1E52] rounded-[clamp(20px,1.9vw,36px)] p-[clamp(16px,2.45vw,47px)] flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#E000FF] hover:shadow-[0_0_30px_rgba(154,78,233,0.3)] shrink-0"
              >
                {/* 1. Icon Container */}
                <div className="w-[clamp(56px,5.2vw,100px)] h-[clamp(56px,5.2vw,100px)] rounded-full border border-[#E531A4]/40 bg-[#120836]/90 flex items-center justify-center shadow-[0_0_25px_rgba(154,78,233,0.25)] shrink-0">
                  <img src={step.icon} alt={step.title} className="w-[38%] h-[38%] object-contain" />
                </div>

                {/* 2. Middle Block */}
                <div className="flex flex-col items-center justify-center">
                  {/* Step Number */}
                  <span className="text-[clamp(22px,2.5vw,48px)] font-medium text-[#9A4EE9] leading-tight tracking-normal">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-white text-[clamp(16px,1.67vw,32px)] font-medium leading-snug tracking-normal">
                    {step.title}
                  </h3>

                  {/* Underline Accents */}
                  <div className="flex gap-1.5 pt-[clamp(4px,0.4vw,8px)]">
                    <div className="w-[clamp(16px,1.3vw,26px)] h-[clamp(2px,0.16vw,3px)] bg-[#E531A4] rounded-full" />
                    <div className="w-[clamp(8px,0.65vw,13px)] h-[clamp(2px,0.16vw,3px)] bg-[#E531A4] rounded-full opacity-50" />
                  </div>
                </div>

                {/* 3. Description */}
                <p className="text-white text-[clamp(12px,1.05vw,20px)] font-light leading-relaxed max-w-[clamp(180px,14.6vw,290px)]">
                  {step.description}
                </p>
              </div>

              {/* Exact Figma Gap Separator */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex relative items-center justify-center w-[clamp(24px,3.75vw,90px)] h-[clamp(260px,23.8vw,478px)] shrink-0">

                  {/* Dashed Connecting Line */}
                  <div
                    className="absolute left-0 right-0 z-0"
                    style={{
                      top: 'clamp(50px, 5.05vw, 105px)',
                      borderTop: '3px dashed #9A4EE9'
                    }}
                  />

                  {/* Figma Ellipse Dot */}
                  <div
                    className="absolute -translate-y-1/2 z-10 rounded-full shrink-0"
                    style={{
                      top: 'clamp(50px, 5.05vw, 105px)',
                      width: '12.8px',
                      height: '12.8px',
                      backgroundColor: '#9A4EE9',
                      border: '1.6px solid #FFFFFF',
                      boxSizing: 'border-box'
                    }}
                  />

                </div>
              )}

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;