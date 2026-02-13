'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FOOD_IMAGES } from '@/lib/constants';

export default function BestSelling() {
  return (
    <section className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl italic text-gold mb-4">
            Unsere Empfehlungen
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-lg">
            Entdecken Sie unsere beliebtesten Gerichte – frisch zubereitet mit regionalen Zutaten und kulinarischer Leidenschaft.
          </p>
          <a href="/speisekarte" className="btn-gold-outline inline-block mt-8">
            Speisekarte ansehen
          </a>
        </AnimatedSection>

        {/* Food Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {FOOD_IMAGES.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group text-center"
              >
                {/* Circular image */}
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-dark-border group-hover:border-gold/50 transition-all duration-500">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-all duration-500" />
                </div>
                <h3 className="text-cream text-sm font-medium mb-1">{item.name}</h3>
                <p className="text-gold text-sm font-[family-name:var(--font-script)] italic">{item.price}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
