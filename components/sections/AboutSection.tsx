'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/instagram/interior-hall-1.webp"
                  alt="Halle 32 - Industrielles Ambiente des 32Süd"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-dark-card border border-dark-border rounded-xl p-6 shadow-2xl hidden md:block">
                <p className="font-[family-name:var(--font-script)] text-gold text-3xl italic">Seit 2013</p>
                <p className="text-gray text-sm mt-1">auf dem Steinmüllergelände</p>
              </div>
              {/* Gold border accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold/30 rounded-tl-2xl" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right">
            <div>
              <div className="gold-line mb-6" />
              <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl italic text-gold mb-4">
                Über uns
              </h2>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-8 leading-tight">
                Vom Dampfkessel zum Genuss
              </h3>
              <p className="text-gray leading-relaxed mb-6">
                Im Herzen des historischen Steinmüllergeländes in Gummersbach verbinden wir industrielle Geschichte mit kulinarischer Leidenschaft. Wo einst Dampfkessel gefertigt wurden, servieren wir heute moderne bergische Küche in einem einzigartigen Ambiente.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                Unser Restaurant vereint die raue Schönheit der industriellen Architektur mit warmem, einladendem Design. Hohe Decken, historische Stahlträger und moderne Akzente schaffen einen Raum, der zum Verweilen einlädt – ob beim Businesslunch, romantischen Abendessen oder bei privaten Feiern.
              </p>

              {/* Quote */}
              <div className="border-l-2 border-gold pl-6 mb-8">
                <p className="font-[family-name:var(--font-script)] text-cream/90 text-xl italic leading-relaxed">
                  &ldquo;Gutes Essen ist nicht nur Nahrung – es ist ein Erlebnis, das Menschen zusammenbringt.&rdquo;
                </p>
                <p className="text-gold text-sm mt-3 tracking-wider uppercase">
                  Das Team vom 32Süd
                </p>
              </div>

              <a href="/restaurant" className="btn-gold-outline inline-block">
                Mehr erfahren
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
