import React from 'react';
import { Navbar } from '@/components';
import SectionBadge from '@/components/ui/section-badge';
import { SidebarDemo } from '@/app/_components/Sidebardemo';

const dashboard = () => {
  return (
    <section className='flex flex-col items-center'>
      <SidebarDemo />
    </section>
  );
};

export default dashboard;
