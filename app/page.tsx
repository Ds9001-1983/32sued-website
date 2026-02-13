import Hero from '@/components/sections/Hero';
import OpeningHoursBar from '@/components/sections/OpeningHoursBar';
import AboutSection from '@/components/sections/AboutSection';
import BestSelling from '@/components/sections/BestSelling';
import CateringTeaser from '@/components/sections/CateringTeaser';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <OpeningHoursBar />
      <AboutSection />
      <BestSelling />
      <CateringTeaser />
      <Testimonials />
      <ContactSection />
    </>
  );
}
