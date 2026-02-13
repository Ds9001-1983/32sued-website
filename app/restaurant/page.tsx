import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import PhilosophyCards from '@/components/sections/PhilosophyCards';
import Gallery from '@/components/sections/Gallery';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { GALLERY_IMAGES } from '@/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Restaurant – Unsere Geschichte',
  description: 'Erfahren Sie mehr über das 32Süd auf dem historischen Steinmüllergelände in Gummersbach. Industriegeschichte trifft auf moderne bergische Küche.',
};

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        image="/images/gallery/interior-2.jpg"
        imageAlt="Gastraum des Restaurant 32Süd"
        title="Das 32Süd"
        subtitle="Vom Dampfkessel zum Genuss"
      />

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="gold-line mb-6" />
              <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl italic text-gold mb-4">Unsere Geschichte</h2>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-8">Vom Dampfkessel zum Genuss</h3>
              <div className="space-y-4 text-gray leading-relaxed text-lg">
                <p>
                  Wo einst die Firma Steinmüller Dampfkessel und Industrieanlagen fertigte, servieren wir heute kulinarische Highlights. Die authentischen Überbleibsel der alten Fabrikhalle – rauer Beton, massive Stahlträger, großzügige Fensterfronten – bilden das einzigartige Ambiente, in dem Industriegeschichte und moderne Gastronomie verschmelzen.
                </p>
                <p>
                  Das 32Süd verbindet den rauen Charme der industriellen Vergangenheit mit zeitgenössischem Design und kulinarischer Exzellenz. Seit 2013 sind wir ein fester Bestandteil der Gummersbacher Gastronomie und laden Sie ein, diese besondere Atmosphäre selbst zu erleben.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/interior-4.jpg"
                  alt="Bar-Bereich des 32Süd"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <PhilosophyCards />

      <Gallery images={GALLERY_IMAGES} title="Impressionen" subtitle="Galerie" />
    </>
  );
}
