import React from 'react';
import { Navbar } from '@/components';
import SectionBadge from '@/components/ui/section-badge';

const AboutUs = () => {
  return (
    <section className='flex flex-col items-center'>
      <Navbar />
      <div className="mt-20">
        <SectionBadge title="Privacy Policy" />
      </div>
      <div className="mt-14 max-w-2xl text-center">
        <p className="">
          In the making
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
