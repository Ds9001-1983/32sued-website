'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGES, CONTACT } from '@/lib/constants';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGES[current].src}
            alt={HERO_IMAGES[current].alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-gold mb-8"
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[family-name:var(--font-script)] text-gold text-2xl md:text-3xl italic mb-4"
            >
              Restaurant · Café · Bar
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6"
            >
              Genuss trifft{' '}
              <span className="font-[family-name:var(--font-script)] italic text-gold">
                Geschichte
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Moderne bergische Küche in historischem Industrieambiente auf dem Steinmüllergelände Gummersbach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <a href={`tel:${CONTACT.phoneIntl}`} className="btn-gold">
                Tisch reservieren
              </a>
              <a href="/speisekarte" className="btn-gold-outline">
                Speisekarte
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all" aria-label="Vorheriges Bild">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-cream/30 hover:bg-cream/50'}`} aria-label={`Bild ${i + 1}`} />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all" aria-label="Nächstes Bild">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-0.5 h-8 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
