'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CONTACT, OPENING_HOURS } from '@/lib/constants';

export default function ContactSection() {
  return (
    <section className="h-full w-full bg-dark-surface flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-6 lg:py-0">
        <AnimatedSection className="text-center mb-5 lg:mb-6">
          <div className="gold-line mx-auto mb-3" />
          <h2 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl italic text-gold mb-1.5">Besuchen Sie uns</h2>
          <p className="text-gray max-w-2xl mx-auto text-xs lg:text-sm">Wir freuen uns auf Ihren Besuch im Herzen des Steinmüllergeländes.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          <AnimatedSection direction="left">
            <div className="rounded-2xl overflow-hidden border border-dark-border h-[200px] lg:h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.8!2d7.5653!3d51.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bede3b5c6e5555%3A0x0!2sSteinm%C3%BCllerallee+10%2C+51643+Gummersbach!5e0!3m2!1sde!2sde!4v1"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7) contrast(1.2)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="32Süd Standort"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-2.5 lg:gap-3">
              <div className="dark-card p-3 lg:p-4 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><MapPin size={14} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium text-xs mb-0.5">Adresse</h3>
                  <p className="text-gray text-xs">{CONTACT.street}, {CONTACT.city}</p>
                </div>
              </div>
              <div className="dark-card p-3 lg:p-4 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Phone size={14} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium text-xs mb-0.5">Telefon</h3>
                  <a href={`tel:${CONTACT.phoneIntl}`} className="text-gold hover:text-gold-light transition-colors text-xs">{CONTACT.phone}</a>
                </div>
              </div>
              <div className="dark-card p-3 lg:p-4 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Mail size={14} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium text-xs mb-0.5">E-Mail</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-gold hover:text-gold-light transition-colors text-xs">{CONTACT.email}</a>
                </div>
              </div>
              <div className="dark-card p-3 lg:p-4 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Clock size={14} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium text-xs mb-0.5">Öffnungszeiten</h3>
                  <div className="space-y-0">
                    {OPENING_HOURS.map((item) => (
                      <div key={item.day} className="flex justify-between text-xs gap-1.5">
                        <span className={item.closed ? 'text-gray-dark' : 'text-gray'}>{item.day}</span>
                        <span className={item.closed ? 'text-red' : 'text-cream/80'}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
