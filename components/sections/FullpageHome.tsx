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
    component: (
      <div className="h-screen h-[100dvh] w-full">
        <Hero />
      </div>
    ),
  },
  {
    id: 'about',
    label: 'Über uns',
    component: (
      <div className="h-screen h-[100dvh] w-full flex items-center overflow-hidden bg-dark">
        <div className="w-full max-h-screen overflow-y-auto scrollbar-hide">
          <AboutSection />
        </div>
      </div>
    ),
  },
  {
    id: 'menu',
    label: 'Speisekarte',
    component: (
      <div className="h-screen h-[100dvh] w-full flex items-center overflow-hidden bg-dark-surface">
        <div className="w-full">
          <BestSelling />
        </div>
      </div>
    ),
  },
  {
    id: 'catering',
    label: 'Catering',
    component: (
      <div className="h-screen h-[100dvh] w-full flex items-center overflow-hidden">
        <div className="w-full">
          <CateringTeaser />
        </div>
      </div>
    ),
  },
  {
    id: 'testimonials',
    label: 'Bewertungen',
    component: (
      <div className="h-screen h-[100dvh] w-full flex items-center overflow-hidden bg-dark">
        <div className="w-full">
          <Testimonials />
        </div>
      </div>
    ),
  },
  {
    id: 'contact',
    label: 'Kontakt',
    component: (
      <div className="h-screen h-[100dvh] w-full flex items-center overflow-hidden bg-dark-surface">
        <div className="w-full max-h-screen overflow-y-auto scrollbar-hide">
          <ContactSection />
        </div>
      </div>
    ),
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
