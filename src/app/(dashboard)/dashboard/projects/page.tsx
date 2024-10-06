import React from 'react';
import { Navbar } from '@/components';
import SectionBadge from '@/components/ui/section-badge';
import { Sidebarprojects } from '@/app/_components/Sidebarprojects';

const createproject = () => {
  return (
    <section className='flex flex-col items-center'>
      <Sidebarprojects />
    </section>
  );
};

export default createproject;
