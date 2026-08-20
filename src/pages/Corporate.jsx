import React, { useEffect } from 'react';
import CorporateHero from '../components/corporate/CorporateHero';
import Workplaces from '../components/corporate/Workplaces';
import Communication from '../components/corporate/Communication';
import RealTime from '../components/corporate/RealTime';
import CampusPlatform from '../components/corporate/CampusPlatform';
import Simplify from '../components/corporate/Simplify';
import TeamInform from '../components/corporate/TeamInform';
import Content from '../components/corporate/Content';
import StaticOffices from '../components/corporate/StaticOffices';
import CorporateFooter from '../components/corporate/CorporateFooter';

const Corporate = () => {
  useEffect(() => {
    // Dispatch resize event to force GSAP and Lenis to re-calculate scroll layouts
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  }, []);

  return (
    <div className="w-full bg-[#080808] text-white selection:bg-[#D9FF00]/30 selection:text-black">
      {/* 1. Corporate Hero */}
      <CorporateHero />

      {/* 2. Workplaces */}
      <Workplaces />

      {/* 3. Communication */}
      <Communication />

      {/* 4. RealTime */}
      <RealTime />

      {/* 5. CampusPlatform */}
      <CampusPlatform />

      {/* 6. Simplify */}
      <Simplify />

      {/* 7. TeamInform */}
      <TeamInform />

      {/* 8. Workplace */}
      <Content />

      {/* 9. StaticOffices */}
      <StaticOffices />

      {/* 10. CorporateFooter */}
      <CorporateFooter />
    </div>
  );
};

export default Corporate;
