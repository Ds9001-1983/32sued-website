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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/gallery/event-1.jpg" alt="Events im 32Süd" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl italic text-gold mb-4">Events &amp; Catering</h2>
          <p className="text-gray max-w-2xl mx-auto text-lg">Feiern Sie Ihre besonderen Momente in einer einzigartigen Industriekulisse.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div whileHover={{ y: -8 }} className="dark-card p-8 text-center group">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon size={28} className="text-gold" />
                </div>
                <h3 className="text-cream text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.6}>
          <a href="/catering" className="btn-gold inline-block">Anfrage stellen</a>
        </AnimatedSection>
      </div>
    </section>
  );
}
