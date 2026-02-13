import type { Metadata } from 'next';
import Image from 'next/image';
import { Users, ChefHat, Lightbulb, Sparkles } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import EventForm from '@/components/sections/EventForm';

export const metadata: Metadata = {
  title: 'Catering & Events',
  description: 'Catering und Eventservice der Messing Gastronomie GmbH. Hochzeiten, Firmenevents und Privatveranstaltungen auf dem Steinmüllergelände Gummersbach.',
};

const services = [
  { icon: ChefHat, title: 'Individuelle Speisenplanung', description: 'Maßgeschneiderte Menüs für jeden Anlass' },
  { icon: Users, title: 'Professioneller Service', description: 'Geschultes Personal für reibungslosen Ablauf' },
  { icon: Lightbulb, title: 'Full-Service-Arrangement', description: 'Vom Geschirr bis zum Licht, vom Mobiliar bis zur Musik' },
  { icon: Sparkles, title: 'Flexibilität & Kreativität', description: 'Individuelle Lösungen mit Liebe zum Detail' },
];

const eventImages = [
  { src: '/images/gallery/event-1.jpg', alt: 'Event auf dem Steinmüllergelände' },
  { src: '/images/gallery/event-2.jpg', alt: 'Veranstaltung im 32Süd' },
  { src: '/images/gallery/event-3.jpg', alt: 'Event-Atmosphäre' },
  { src: '/images/gallery/event-4.jpg', alt: 'Festliche Veranstaltung' },
  { src: '/images/gallery/event-5.jpg', alt: 'Gesellige Atmosphäre' },
  { src: '/images/gallery/terrace-1.jpg', alt: 'Terrasse für Events' },
];

export default function CateringPage() {
  return (
    <>
      <PageHero
        image="/images/gallery/event-3.jpg"
        imageAlt="Event im 32Süd Gummersbach"
        title="Catering & Events"
        subtitle="Ihr Event. Unser Service."
      />

      {/* Intro */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gray text-lg leading-relaxed">
              Neben unserem Restaurantbetrieb bietet die Messing Gastronomie GmbH einen umfassenden Eventservice. Ob Hochzeit, Firmenevent oder Privatveranstaltung – wir stehen Ihnen von der Planung bis zur Durchführung zur Seite.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl italic text-gold mb-4">Unsere Leistungen</h2>
            <p className="text-gray">Rundum-Service für Ihr Event</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="dark-card p-8 h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <service.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-cream text-lg font-medium mb-3">{service.title}</h3>
                  <p className="text-gray text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-script)] text-cream/90 text-xl md:text-2xl italic leading-relaxed">
              &ldquo;Feiern Sie in unseren Räumlichkeiten auf dem Steinmüllergelände, in der angrenzenden Halle 32, oder nutzen Sie unseren Außer-Haus-Service an Ihrem Wunschort.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-script)] text-4xl italic text-gold">Event-Impressionen</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {eventImages.map((image, index) => (
              <AnimatedSection key={image.src} delay={index * 0.1}>
                <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Form */}
      <section className="py-24 bg-dark-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-script)] text-4xl italic text-gold mb-4">Event anfragen</h2>
            <p className="text-gray">Schildern Sie uns Ihre Wünsche – wir erstellen Ihnen ein individuelles Angebot.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <EventForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
