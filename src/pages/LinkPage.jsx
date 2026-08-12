import React, { useEffect } from 'react';
import LinkHero from '../components/LinkPage/link-hero';
import LinkGrowth from '../components/LinkPage/link-growth';
import LinkSaturation from '../components/LinkPage/link-saturation';
import LinkNetworks from '../components/LinkPage/link-networks';
import LinkRevenue from '../components/LinkPage/link-revenue';
import LinkCTA from '../components/LinkPage/link-cta';
import LinkFeatures from '../components/LinkPage/link-features';
import LinkBenefits from '../components/LinkPage/link-benefits';
import LinkFooter from '../components/LinkPage/link-footer';

const LinkPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  }, []);

  return (
    <div className="w-full bg-[#080808] text-white overflow-x-hidden">
      <LinkHero />
      <LinkGrowth />
      <LinkSaturation />
      <LinkNetworks />
      <LinkRevenue />
      <LinkCTA />
      <LinkFeatures />
      <LinkBenefits />
      <LinkFooter />
    </div>
  );
};

export default LinkPage;
