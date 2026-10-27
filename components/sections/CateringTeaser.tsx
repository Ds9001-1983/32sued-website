'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Sparkles, Users, Utensils, Music } from 'lucide-react';

const services = [
  { icon: Users, title: 'Private Feiern', desc: 'Geburtstage, Jubiläen und besondere Anlässe' },
  { icon: Utensils, title: 'Catering', desc: 'Individuelle Menüs für Ihr Event' },
  { icon: Music, title: 'Firmenevents', desc: 'Tagungen, Weihnachtsfeiern und Teamevents' },
  { icon: Sparkles, title: 'Hochzeiten', desc: 'Ihr schönster Tag in einzigartiger Location' },
];

export default function CateringTeaser() {
  return (
    <section className="h-full w-full relative overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image src="/images/gallery/event-1.jpg" alt="Events im 32Süd" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-6 lg:py-0">
        <AnimatedSection className="text-center mb-6 lg:mb-8">
          <div className="gold-line mx-auto mb-3" />
          <h2 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl italic text-gold mb-2">Events &amp; Catering</h2>
          <p className="text-gray max-w-2xl mx-auto text-xs lg:text-sm">Feiern Sie Ihre besonderen Momente in einer einzigartigen Industriekulisse.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <motion.div whileHover={{ y: -5 }} className="dark-card p-4 lg:p-6 text-center group backdrop-blur-sm bg-dark-card/80">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                  <service.icon size={20} className="text-gold" />
                </div>
                <h3 className="text-cream text-xs lg:text-sm font-medium mb-1">{service.title}</h3>
                <p className="text-gray text-xs">{service.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-5 lg:mt-6" delay={0.5}>
          <a href="/catering" className="btn-gold inline-block text-xs">Anfrage stellen</a>
        </AnimatedSection>
      </div>
    </section>
  );
}
