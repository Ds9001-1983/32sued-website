'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function CateringTeaser() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/event-1.jpg"
          alt="Event im 32Süd"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimatedSection>
            <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Catering &amp; Events
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-text-light mb-6">
              Ihr Event. Unser Service.
            </h2>
            <p className="text-text-light/70 text-lg leading-relaxed mb-10">
              Von Hochzeiten über Firmenevents bis zu privaten Feiern – die Messing Gastronomie
              GmbH macht Ihr Event unvergesslich. Wir stehen Ihnen von der Planung bis zur
              Durchführung zur Seite.
            </p>
            <Button href="/catering" variant="primary">
              Event anfragen
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
