'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutSection() {
  return (
    <section className="h-full w-full bg-dark relative overflow-hidden flex items-center">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-6 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden max-h-[45vh]">
                <Image
                  src="/images/instagram/interior-hall-1.webp"
                  alt="Halle 32 - Industrielles Ambiente des 32Süd"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-3 -right-3 bg-dark-card border border-dark-border rounded-xl p-3 lg:p-4 shadow-2xl hidden md:block">
                <p className="font-[family-name:var(--font-script)] text-gold text-xl lg:text-2xl italic">Seit 2013</p>
                <p className="text-gray text-xs mt-0.5">auf dem Steinmüllergelände</p>
              </div>
              {/* Gold border accent */}
              <div className="absolute -top-2 -left-2 w-14 h-14 border-l-2 border-t-2 border-gold/30 rounded-tl-2xl" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right">
            <div>
              <div className="gold-line mb-3" />
              <h2 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl italic text-gold mb-2">
                Über uns
              </h2>
              <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl lg:text-3xl text-white mb-4 leading-tight">
                Vom Dampfkessel zum Genuss
              </h3>
              <p className="text-gray leading-relaxed mb-4 text-sm">
                Im Herzen des historischen Steinmüllergeländes in Gummersbach verbinden wir industrielle Geschichte mit kulinarischer Leidenschaft. Wo einst Dampfkessel gefertigt wurden, servieren wir heute moderne bergische Küche in einem einzigartigen Ambiente.
              </p>

              {/* Quote */}
              <div className="border-l-2 border-gold pl-4 mb-4">
                <p className="font-[family-name:var(--font-script)] text-cream/90 text-base lg:text-lg italic leading-relaxed">
                  &ldquo;Gutes Essen ist nicht nur Nahrung – es ist ein Erlebnis, das Menschen zusammenbringt.&rdquo;
                </p>
                <p className="text-gold text-xs mt-1.5 tracking-wider uppercase">
                  Das Team vom 32Süd
                </p>
              </div>

              <a href="/restaurant" className="btn-gold-outline inline-block text-xs">
                Mehr erfahren
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
