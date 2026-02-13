'use client';

import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CONTACT } from '@/lib/constants';

export default function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Besuchen Sie uns
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary mb-4">
            So finden Sie uns
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <AnimatedSection direction="left">
            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.8!2d7.5653!3d51.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bede3b5c6e5555%3A0x0!2sSteinm%C3%BCllerallee+10%2C+51643+Gummersbach!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="32Süd Standort auf Google Maps"
              />
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-primary mb-1">
                    Adresse
                  </h3>
                  <p className="text-primary/60">
                    {CONTACT.street}
                    <br />
                    {CONTACT.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-primary mb-1">
                    Telefon
                  </h3>
                  <a
                    href={`tel:${CONTACT.phoneIntl}`}
                    className="text-primary/60 hover:text-highlight transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-primary mb-1">
                    E-Mail
                  </h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-primary/60 hover:text-highlight transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-primary mb-1">
                    Öffnungszeiten
                  </h3>
                  <p className="text-primary/60">
                    Di – So: 11:30 – 14:30 &amp; 17:30 – 21:00 Uhr
                    <br />
                    <span className="text-primary/40">Montag: Ruhetag</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <Facebook size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-primary mb-1">
                    Social Media
                  </h3>
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/60 hover:text-highlight transition-colors"
                  >
                    Folgen Sie uns auf Facebook
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
