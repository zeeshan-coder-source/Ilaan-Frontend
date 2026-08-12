import React, { useEffect } from 'react';
import MediaHero from '../components/media/MediaHero';
import MediaSaturated from '../components/media/MediaSaturated';
import MediaShowcase from '../components/media/MediaShowcase';
import MediaVideo from '../components/media/MediaVideo';
import MediaPress from '../components/media/MediaPress';
import MediaCTA from '../components/media/MediaCTA';
import WhereItFits from '../components/media/WhereItFits';
import ContentCreation from '../components/media/ContentCreation';
import WhyThisMattersNow from '../components/media/WhyThisMattersNow';
import MediaFooter from '../components/media/MediaFooter';

const MediaPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  }, []);

  return (
    <div className="w-full bg-[#080808] text-white">
      <MediaHero />

      <MediaSaturated />

      <MediaShowcase />

      <MediaVideo />

      <MediaPress />

      <MediaCTA />

      <WhereItFits />

      <ContentCreation />

      <WhyThisMattersNow />

      <MediaFooter />

    </div>
  );
};

export default MediaPage;
                  