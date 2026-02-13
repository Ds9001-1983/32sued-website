import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT, OPENING_HOURS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="32Süd" width={48} height={48} className="rounded-full" />
              <span className="font-[family-name:var(--font-script)] text-3xl italic text-gold">32Süd</span>
            </Link>
            <p className="text-gray text-sm leading-relaxed mb-6">
              Wo Industriegeschichte auf moderne bergische Küche trifft. Restaurant, Café und Bar auf dem historischen Steinmüllergelände.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-script)] text-xl italic text-gold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray text-sm hover:text-gold transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
              <li><Link href="/impressum" className="text-gray text-sm hover:text-gold transition-colors duration-300">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-gray text-sm hover:text-gold transition-colors duration-300">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="font-[family-name:var(--font-script)] text-xl italic text-gold mb-6">Öffnungszeiten</h3>
            <ul className="space-y-2">
              {OPENING_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className={item.closed ? 'text-gray-dark' : 'text-gray'}>{item.day}</span>
                  <span className={item.closed ? 'text-red' : 'text-cream/80'}>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-[family-name:var(--font-script)] text-xl italic text-gold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-gray text-sm">{CONTACT.street}<br />{CONTACT.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href={`tel:${CONTACT.phoneIntl}`} className="text-gray text-sm hover:text-gold transition-colors">{CONTACT.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-gray text-sm hover:text-gold transition-colors">{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-dark text-xs">&copy; {new Date().getFullYear()} {CONTACT.company}. Alle Rechte vorbehalten.</p>
          <p className="text-gray-dark text-xs">
            Made with ❤️ by{' '}
            <a href="https://superbrand.marketing" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">SUPERBRAND.marketing</a>
            {' '}– Dein Superheld für deine Werbung.
          </p>
        </div>
      </div>
    </footer>
  );
}
