import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import { CONTACT, OPENING_HOURS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-primary text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kontakt */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="32Süd Logo"
                width={40}
                height={40}
              />
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-highlight">
                32Süd
              </h3>
            </div>
            <div className="space-y-3 text-text-light/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
                <span>
                  {CONTACT.street}
                  <br />
                  {CONTACT.city}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href={`tel:${CONTACT.phoneIntl}`}
                  className="hover:text-highlight transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-highlight transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook size={16} className="text-accent shrink-0" />
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl text-highlight mb-6">
              Öffnungszeiten
            </h3>
            <div className="space-y-2 text-sm">
              {OPENING_HOURS.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between ${
                    item.closed ? 'text-text-light/40' : 'text-text-light/70'
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

          {/* Navigation + Legal */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl text-highlight mb-6">
              Navigation
            </h3>
            <nav className="space-y-2 text-sm mb-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-text-light/70 hover:text-highlight transition-colors font-[family-name:var(--font-accent)] tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-2 text-sm border-t border-text-light/10 pt-4">
              <Link
                href="/impressum"
                className="block text-text-light/50 hover:text-highlight transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-text-light/50 hover:text-highlight transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-text-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-light/40 text-xs font-[family-name:var(--font-accent)]">
            &copy; {new Date().getFullYear()} Messing Gastronomie GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-text-light/30 text-xs">
            Bildnachweise: Dietmar Brensing (AVttention), Klaus Stange &amp; Judith Uessem (do it uessem)
          </p>
          <p className="text-text-light/30 text-xs mt-2">
            Made with ❤️ by{' '}
            <a
              href="https://superbrand.marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/50 hover:text-highlight transition-colors"
            >
              SUPERBRAND.marketing
            </a>{' '}
            – Dein Superheld für deine Werbung.
          </p>
        </div>
      </div>
    </footer>
  );
}
