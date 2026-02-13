'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CONTACT } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="32Süd Logo"
              width={50}
              height={50}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-[family-name:var(--font-heading)] text-text-light text-xl hidden sm:block">
              32Süd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-highlight'
                    : 'text-text-light/80 hover:text-highlight'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-highlight text-primary font-[family-name:var(--font-accent)] text-xs tracking-wider uppercase rounded-sm hover:bg-accent transition-all duration-300"
            >
              <Phone size={14} />
              <span>Reservieren: {CONTACT.phone}</span>
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-text-light hover:text-highlight transition-colors"
              aria-label="Menü öffnen"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-primary/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`font-[family-name:var(--font-heading)] text-3xl transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-highlight'
                        : 'text-text-light hover:text-highlight'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              href={`tel:${CONTACT.phoneIntl}`}
              className="mt-12 inline-flex items-center gap-2 px-8 py-3.5 bg-highlight text-primary font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase rounded-sm"
            >
              <Phone size={16} />
              <span>Reservieren: {CONTACT.phone}</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
