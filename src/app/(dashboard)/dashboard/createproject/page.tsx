import React from 'react';
import { Navbar } from '@/components';
import SectionBadge from '@/components/ui/section-badge';
import { Sidebarcreateproject } from '@/app/_components/Sidebarcreateproject';

const createproject = () => {
  return (
    <section className='flex flex-col items-center'>
      <Sidebarcreateproject />
    </section>
  );
};

export default createproject;
