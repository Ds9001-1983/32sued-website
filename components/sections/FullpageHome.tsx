'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import BestSelling from '@/components/sections/BestSelling';
import CateringTeaser from '@/components/sections/CateringTeaser';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';

const FullpageContainer = dynamic(
  () => import('@/components/layout/FullpageContainer'),
  { ssr: false }
);

const sections = [
  {
    id: 'hero',
    label: 'Start',
    component: <Hero />,
  },
  {
    id: 'about',
    label: 'Über uns',
    component: <AboutSection />,
  },
  {
    id: 'menu',
    label: 'Speisekarte',
    component: <BestSelling />,
  },
  {
    id: 'catering',
    label: 'Catering',
    component: <CateringTeaser />,
  },
  {
    id: 'testimonials',
    label: 'Bewertungen',
    component: <Testimonials />,
  },
  {
    id: 'contact',
    label: 'Kontakt',
    component: <ContactSection />,
  },
];

export default function FullpageHome() {
  // Hide footer and prevent body scroll on homepage (fullpage mode)
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }
    document.body.style.overflow = 'hidden';

    return () => {
      if (footer) {
        footer.style.display = '';
      }
      document.body.style.overflow = '';
    };
  }, []);

  return <FullpageContainer sections={sections} />;
}
