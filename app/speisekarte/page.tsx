import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import MenuDisplay from './MenuDisplay';

export const metadata: Metadata = {
  title: 'Speisekarte',
  description:
    'Entdecken Sie unsere Speisekarte: Moderne bergische Küche, Burger, Steaks, vegetarische Gerichte und saisonale Highlights im 32Süd Gummersbach.',
};

export default function SpeisekartePage() {
  return (
    <>
      <Hero
        image="/images/gallery/food-2.jpg"
        imageAlt="Kulinarische Kreation im 32Süd"
        title="Speisekarte"
        subtitle="Moderne bergische Küche, neu interpretiert"
        overlay="dark"
        height="medium"
      />
      <MenuDisplay />
    </>
  );
}
