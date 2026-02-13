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
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/gallery/event-1.jpg" alt="Events im 32Süd" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 lg:mb-14">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-script)] text-3xl md:text-4xl lg:text-5xl italic text-gold mb-3">Events &amp; Catering</h2>
          <p className="text-gray max-w-2xl mx-auto text-sm lg:text-lg">Feiern Sie Ihre besonderen Momente in einer einzigartigen Industriekulisse.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div whileHover={{ y: -8 }} className="dark-card p-5 lg:p-8 text-center group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon size={24} className="text-gold lg:hidden" />
                  <service.icon size={28} className="text-gold hidden lg:block" />
                </div>
                <h3 className="text-cream text-sm lg:text-lg font-medium mb-1 lg:mb-2">{service.title}</h3>
                <p className="text-gray text-xs lg:text-sm hidden md:block">{service.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8 lg:mt-12" delay={0.6}>
          <a href="/catering" className="btn-gold inline-block text-sm">Anfrage stellen</a>
        </AnimatedSection>
      </div>
    </section>
  );
}
