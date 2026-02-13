'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutSection() {
  return (
    <section className="py-12 lg:py-16 bg-dark relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden max-h-[60vh]">
                <Image
                  src="/images/instagram/interior-hall-1.webp"
                  alt="Halle 32 - Industrielles Ambiente des 32Süd"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-4 -right-4 bg-dark-card border border-dark-border rounded-xl p-4 lg:p-6 shadow-2xl hidden md:block">
                <p className="font-[family-name:var(--font-script)] text-gold text-2xl lg:text-3xl italic">Seit 2013</p>
                <p className="text-gray text-xs lg:text-sm mt-1">auf dem Steinmüllergelände</p>
              </div>
              {/* Gold border accent */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-gold/30 rounded-tl-2xl" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right">
            <div>
              <div className="gold-line mb-4 lg:mb-6" />
              <h2 className="font-[family-name:var(--font-script)] text-3xl md:text-4xl lg:text-5xl italic text-gold mb-3">
                Über uns
              </h2>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight">
                Vom Dampfkessel zum Genuss
              </h3>
              <p className="text-gray leading-relaxed mb-4 text-sm lg:text-base">
                Im Herzen des historischen Steinmüllergeländes in Gummersbach verbinden wir industrielle Geschichte mit kulinarischer Leidenschaft. Wo einst Dampfkessel gefertigt wurden, servieren wir heute moderne bergische Küche in einem einzigartigen Ambiente.
              </p>
              <p className="text-gray leading-relaxed mb-6 text-sm lg:text-base hidden lg:block">
                Unser Restaurant vereint die raue Schönheit der industriellen Architektur mit warmem, einladendem Design. Hohe Decken, historische Stahlträger und moderne Akzente schaffen einen Raum, der zum Verweilen einlädt – ob beim Businesslunch, romantischen Abendessen oder bei privaten Feiern.
              </p>

              {/* Quote */}
              <div className="border-l-2 border-gold pl-5 mb-6">
                <p className="font-[family-name:var(--font-script)] text-cream/90 text-lg lg:text-xl italic leading-relaxed">
                  &ldquo;Gutes Essen ist nicht nur Nahrung – es ist ein Erlebnis, das Menschen zusammenbringt.&rdquo;
                </p>
                <p className="text-gold text-xs mt-2 tracking-wider uppercase">
                  Das Team vom 32Süd
                </p>
              </div>

              <a href="/restaurant" className="btn-gold-outline inline-block text-sm">
                Mehr erfahren
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
