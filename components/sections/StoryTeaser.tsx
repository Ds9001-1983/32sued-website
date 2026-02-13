'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function StoryTeaser() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Unsere Geschichte
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary mb-6">
              Tradition trifft auf Moderne
            </h2>
            <p className="text-primary/70 leading-relaxed mb-8 text-lg">
              Im Herzen des historischen Steinmüllergeländes in Gummersbach servieren wir seit 2013
              eine moderne bergische Küche, die regionale Gerichte neu interpretiert – mit viel
              Charme und kulinarischer Hingabe.
            </p>
            <Button href="/restaurant" variant="secondary">
              Unsere Geschichte
            </Button>
          </AnimatedSection>

          {/* Image Grid */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-sm overflow-hidden">
                  <Image
                    src="/images/gallery/interior-1.jpg"
                    alt="Industrielles Interieur des 32Süd"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-40 rounded-sm overflow-hidden">
                  <Image
                    src="/images/gallery/food-1.jpg"
                    alt="Kulinarische Kreation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-40 rounded-sm overflow-hidden">
                  <Image
                    src="/images/gallery/detail-1.jpg"
                    alt="Industriedetail"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-sm overflow-hidden">
                  <Image
                    src="/images/gallery/interior-3.jpg"
                    alt="Modernes Ambiente"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
