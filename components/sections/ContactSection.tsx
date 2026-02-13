'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CONTACT, OPENING_HOURS } from '@/lib/constants';

export default function ContactSection() {
  return (
    <section className="py-24 lg:py-32 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl italic text-gold mb-4">Besuchen Sie uns</h2>
          <p className="text-gray max-w-2xl mx-auto text-lg">Wir freuen uns auf Ihren Besuch im Herzen des Steinmüllergeländes.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <div className="rounded-2xl overflow-hidden border border-dark-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.8!2d7.5653!3d51.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bede3b5c6e5555%3A0x0!2sSteinm%C3%BCllerallee+10%2C+51643+Gummersbach!5e0!3m2!1sde!2sde!4v1"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="32Süd Standort"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="space-y-6">
              <div className="dark-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><MapPin size={22} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium mb-1">Adresse</h3>
                  <p className="text-gray text-sm">{CONTACT.street}, {CONTACT.city}</p>
                  <p className="text-gray-dark text-xs mt-1">Auf dem Steinmüllergelände, neben der Halle 32</p>
                </div>
              </div>
              <div className="dark-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Phone size={22} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium mb-1">Telefon</h3>
                  <a href={`tel:${CONTACT.phoneIntl}`} className="text-gold hover:text-gold-light transition-colors text-sm">{CONTACT.phone}</a>
                </div>
              </div>
              <div className="dark-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Mail size={22} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium mb-1">E-Mail</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-gold hover:text-gold-light transition-colors text-sm">{CONTACT.email}</a>
                </div>
              </div>
              <div className="dark-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Clock size={22} className="text-gold" /></div>
                <div>
                  <h3 className="text-cream font-medium mb-2">Öffnungszeiten</h3>
                  <div className="space-y-1">
                    {OPENING_HOURS.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm gap-4">
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
