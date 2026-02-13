'use client';

import { UtensilsCrossed } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { weeklyHighlights } from '@/lib/menuData';

export default function WeeklyMenu() {
  return (
    <section className="py-24 bg-surface industrial-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Diese Woche
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-text-light mb-4">
            Aktuelle Highlights
          </h2>
          <p className="text-text-light/60 max-w-xl mx-auto">
            Die Mittagskarte wechselt wöchentlich. Entdecken Sie unsere aktuellen Empfehlungen.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {weeklyHighlights.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.15}>
              <Card className="p-8 h-full bg-primary border border-text-light/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                    <UtensilsCrossed size={18} className="text-highlight" />
                  </div>
                  <span className="font-[family-name:var(--font-accent)] text-highlight text-2xl">
                    {item.price}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-text-light mb-2">
                  {item.name}
                </h3>
                <p className="text-text-light/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={0.4}>
          <Button href="/speisekarte" variant="primary">
            Komplette Speisekarte
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
