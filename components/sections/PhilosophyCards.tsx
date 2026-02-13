'use client';

import { motion } from 'framer-motion';
import { Building2, ChefHat, Wine } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const philosophyItems = [
  {
    icon: Building2,
    title: 'Exklusive Atmosphäre',
    description: 'Industrie meets Moderne. Die großzügigen Räume erinnern an die alte Fabrikhalle und schaffen ein Flair zwischen rau und raffiniert.',
  },
  {
    icon: ChefHat,
    title: 'Moderne bergische Küche',
    description: 'Typisch bergische Gerichte, neu interpretiert. Hausgemachte Burger, Grillspezialitäten, vegetarische Menüs und saisonale Highlights.',
  },
  {
    icon: Wine,
    title: 'Erlesene Getränke',
    description: 'Von einzigartigen Cocktails bis zu erlesenen Weinen und besonderen Kaffeespezialitäten.',
  },
];

export default function PhilosophyCards() {
  return (
    <section className="py-24 lg:py-32 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl italic text-gold mb-4">Unsere Philosophie</h2>
          <p className="text-gray max-w-2xl mx-auto text-lg">Drei Säulen des Genusses</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <motion.div whileHover={{ y: -8 }} className="dark-card p-10 text-center group h-full">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-gold/20 transition-colors duration-500">
                  <item.icon size={36} className="text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-4">{item.title}</h3>
                <p className="text-gray leading-relaxed">{item.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
