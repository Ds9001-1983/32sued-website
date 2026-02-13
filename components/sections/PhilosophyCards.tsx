'use client';

import { Building2, ChefHat, Wine } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';

const philosophyItems = [
  {
    icon: Building2,
    title: 'Exklusive Atmosphäre',
    description:
      'Industrie meets Moderne. Die großzügigen Räume erinnern an die alte Fabrikhalle und schaffen ein Flair zwischen rau und raffiniert.',
  },
  {
    icon: ChefHat,
    title: 'Moderne bergische Küche',
    description:
      'Typisch bergische Gerichte, neu interpretiert. Hausgemachte Burger, Grillspezialitäten, vegetarische Menüs und saisonale Highlights.',
  },
  {
    icon: Wine,
    title: 'Erlesene Getränke',
    description:
      'Von einzigartigen Cocktails bis zu erlesenen Weinen und besonderen Kaffeespezialitäten.',
  },
];

export default function PhilosophyCards() {
  return (
    <section className="py-24 bg-surface industrial-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Unsere Philosophie
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-text-light">
            Drei Säulen des Genusses
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.15}>
              <Card className="p-8 h-full bg-primary border border-text-light/10 text-center">
                <div className="w-16 h-16 rounded-full bg-highlight/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-highlight" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-text-light mb-4">
                  {item.title}
                </h3>
                <p className="text-text-light/60 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
