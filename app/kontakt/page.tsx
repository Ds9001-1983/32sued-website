import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ExternalLink } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/sections/ContactForm';
import { CONTACT, OPENING_HOURS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie das Restaurant 32Süd in Gummersbach. Reservierungen unter 02261-919693. Steinmüllerallee 10, 51643 Gummersbach.',
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        image="/images/gallery/service-1.jpg"
        imageAlt="Service im 32Süd"
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihren Besuch"
      />

      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <div className="gold-line mb-6" />
                  <h2 className="font-[family-name:var(--font-script)] text-3xl italic text-gold mb-2">Kontaktdaten</h2>
                  <p className="text-gray">So erreichen Sie uns</p>
                </div>

                <div className="space-y-6">
                  <div className="dark-card p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><MapPin size={20} className="text-gold" /></div>
                    <div>
                      <h3 className="text-cream text-sm font-medium mb-1">Adresse</h3>
                      <p className="text-gray text-sm">{CONTACT.street}<br />{CONTACT.city}</p>
                    </div>
                  </div>

                  <div className="dark-card p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Phone size={20} className="text-gold" /></div>
                    <div>
                      <h3 className="text-cream text-sm font-medium mb-1">Telefon</h3>
                      <a href={`tel:${CONTACT.phoneIntl}`} className="text-gold hover:text-gold-light transition-colors">{CONTACT.phone}</a>
                    </div>
                  </div>

                  <div className="dark-card p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Mail size={20} className="text-gold" /></div>
                    <div>
                      <h3 className="text-cream text-sm font-medium mb-1">E-Mail</h3>
                      <a href={`mailto:${CONTACT.email}`} className="text-gold hover:text-gold-light transition-colors text-sm">{CONTACT.email}</a>
                    </div>
                  </div>

                  <div className="dark-card p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Instagram size={20} className="text-gold" /></div>
                    <div>
                      <h3 className="text-cream text-sm font-medium mb-1">Social Media</h3>
                      <div className="flex items-center gap-4">
                        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors text-sm">Instagram</a>
                        <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors text-sm">Facebook</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Öffnungszeiten */}
                <div className="dark-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={18} className="text-gold" />
                    <h3 className="text-cream font-medium">Öffnungszeiten</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    {OPENING_HOURS.map((item) => (
                      <div key={item.day} className={`flex justify-between ${item.closed ? 'text-gray-dark' : 'text-gray'}`}>
                        <span>{item.day}</span>
                        <span className={item.closed ? 'text-red' : 'text-cream/80'}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VYTAL */}
                <div className="dark-card p-5 flex items-start gap-4">
                  <Image src="/images/vytal-logo.png" alt="VYTAL Mehrwegsystem" width={50} height={50} className="rounded-lg" />
                  <div>
                    <p className="text-gray text-sm leading-relaxed">
                      Essen zum Mitnehmen? Wir arbeiten mit dem Mehrwegsystem von VYTAL.{' '}
                      <a href="https://vytal.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light inline-flex items-center gap-1">
                        Mehr Infos <ExternalLink size={12} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Map + Form */}
            <div className="space-y-12">
              <AnimatedSection direction="right">
                <div className="relative h-[350px] rounded-2xl overflow-hidden border border-dark-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.8!2d7.5653!3d51.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bede3b5c6e5555%3A0x0!2sSteinm%C3%BCllerallee+10%2C+51643+Gummersbach!5e0!3m2!1sde!2sde!4v1"
                    width="100%" height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7) contrast(1.2)' }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="32Süd Standort"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="gold-line mb-6" />
                <h3 className="font-[family-name:var(--font-script)] text-2xl italic text-gold mb-6">Schreiben Sie uns</h3>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
