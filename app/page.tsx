import Hero from '@/components/sections/Hero';
import OpeningHoursBar from '@/components/sections/OpeningHoursBar';
import StoryTeaser from '@/components/sections/StoryTeaser';
import WeeklyMenu from '@/components/sections/WeeklyMenu';
import CateringTeaser from '@/components/sections/CateringTeaser';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/gallery/interior-1.jpg"
        imageAlt="Restaurant 32Süd – Industrielles Ambiente auf dem Steinmüllergelände Gummersbach"
        title="32Süd"
        subtitle="Wo Industriegeschichte auf moderne bergische Küche trifft."
        showLogo
        showCTA
        overlay="dark"
        height="full"
      />
      <OpeningHoursBar />
      <StoryTeaser />
      <WeeklyMenu />
      <CateringTeaser />
      <ContactSection />
    </>
  );
}
