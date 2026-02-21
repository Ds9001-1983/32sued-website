'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FOOD_IMAGES } from '@/lib/constants';

export default function BestSelling() {
  return (
    <section className="h-full w-full bg-dark-surface relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-6 lg:py-0">
        {/* Header */}
        <AnimatedSection className="text-center mb-6 lg:mb-8">
          <div className="gold-line mx-auto mb-3" />
          <h2 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl italic text-gold mb-2">
            Unsere Empfehlungen
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-xs lg:text-sm">
            Entdecken Sie unsere beliebtesten Gerichte – frisch zubereitet mit regionalen Zutaten und kulinarischer Leidenschaft.
          </p>
        </AnimatedSection>

        {/* Food Grid - 3 columns with larger rectangular images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {FOOD_IMAGES.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-2.5 border border-dark-border group-hover:border-gold/40 transition-all duration-500">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent group-hover:from-dark/20 transition-all duration-500" />
                </div>
                <h3 className="text-cream text-sm font-medium mb-0.5">{item.name}</h3>
                <p className="text-gold text-sm font-[family-name:var(--font-script)] italic">{item.price}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA below the grid */}
        <AnimatedSection className="text-center mt-6 lg:mt-8" delay={0.5}>
          <a href="/speisekarte" className="btn-gold-outline inline-block text-xs">
            Speisekarte ansehen
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
