import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, ExternalLink } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/sections/ContactForm';
import { CONTACT, OPENING_HOURS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie das Restaurant 32Süd in Gummersbach. Reservierungen unter 02261-919693. Steinmüllerallee 10, 51643 Gummersbach.',
};

export default function KontaktPage() {
  return (
    <>
      <Hero
        image="/images/gallery/service-1.jpg"
        imageAlt="Service im 32Süd"
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihren Besuch"
        overlay="dark"
        height="medium"
      />

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
                    Kontaktdaten
                  </span>
                  <h2 className="font-[family-name:var(--font-heading)] text-3xl text-primary mb-8">
                    So erreichen Sie uns
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase text-primary/80 mb-1">
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
                      <h3 className="font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase text-primary/80 mb-1">
                        Telefon
                      </h3>
                      <a
                        href={`tel:${CONTACT.phoneIntl}`}
                        className="text-primary/60 hover:text-highlight transition-colors text-lg"
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
                      <h3 className="font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase text-primary/80 mb-1">
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
                      <Facebook size={20} className="text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase text-primary/80 mb-1">
                        Social Media
                      </h3>
                      <a
                        href={CONTACT.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/60 hover:text-highlight transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>

                {/* Öffnungszeiten */}
                <div className="mt-10 p-6 bg-primary rounded-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={18} className="text-highlight" />
                    <h3 className="font-[family-name:var(--font-heading)] text-lg text-text-light">
                      Öffnungszeiten
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    {OPENING_HOURS.map((item) => (
                      <div
                        key={item.day}
                        className={`flex justify-between ${
                          item.closed ? 'text-text-light/30' : 'text-text-light/70'
                        }`}
                      >
                        <span className="font-[family-name:var(--font-accent)]">
                          {item.day}
                        </span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VYTAL Hinweis */}
                <div className="p-6 bg-primary/5 rounded-sm flex items-start gap-4">
                  <Image
                    src="/images/vytal-logo.png"
                    alt="VYTAL Mehrwegsystem"
                    width={50}
                    height={50}
                    className="rounded-sm"
                  />
                  <div>
                    <p className="text-primary/70 text-sm leading-relaxed">
                      Essen zum Mitnehmen? Wir arbeiten mit dem Mehrwegsystem von VYTAL.{' '}
                      <a
                        href="https://vytal.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-highlight hover:underline inline-flex items-center gap-1"
                      >
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
                <div className="relative h-[350px] rounded-sm overflow-hidden shadow-lg">
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

              <AnimatedSection direction="right" delay={0.2}>
                <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
                  Schreiben Sie uns
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-6">
                  Kontaktformular
                </h3>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
