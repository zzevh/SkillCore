import React from 'react';
import { Navbar } from '@/components';
import SectionBadge from '@/components/ui/section-badge';

const AboutUs = () => {
  return (
    <section className='flex flex-col items-center'>
      <Navbar />
      <div className="mt-20">
        <SectionBadge title="About Us" />
      </div>
      <div className="mt-14 max-w-2xl text-center">
        <p className="">
          At our core, we are a team of dedicated experts committed to delivering efficient work with impressive speed. Our talented team spans various fields, including graphic designers, developers, editors, and more, each bringing a unique set of skills and perspectives to the table. We pride ourselves on our collaborative approach, which allows us to transform ideas into reality.
        </p>
        <p className="mt-4">
          We understand that every project is a reflection of your vision. That's why we work closely with you to bring your ideas to life, ensuring that every detail aligns with your goals. Whether you're looking to launch a new product, revamp your brand, or create engaging content, we are here to support you every step of the way.
        </p>
        <p className="mt-4">
          Our philosophy is rooted in expert-driven, limitless creativity. We believe that building stunning projects should be effortless and accessible, which is why we focus on providing top-tier quality and performance in everything we do. With our innovative solutions, you can create your projects simply and quickly, enabling you to stay ahead of your competitors in today's fast-paced market.
        </p>
        <p className="mt-4">
          We invite you to partner with us on your next endeavor. Let us help you turn your dreams into reality and achieve your goals with creativity, efficiency, and excellence.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
