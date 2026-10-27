'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGES, CONTACT } from '@/lib/constants';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />
          {/* Vignette effect */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,10,10,0.6) 100%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Animated gold line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isLoaded ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="h-0.5 bg-gold mb-8"
            />

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-[family-name:var(--font-script)] text-gold text-xl md:text-2xl lg:text-3xl italic mb-4"
            >
              Restaurant · Café · Bar
            </motion.h2>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-8xl text-white leading-[0.95] mb-6"
            >
              Genuss trifft{' '}
              <span className="font-[family-name:var(--font-script)] italic text-gold block md:inline">
                Geschichte
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-gray text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-lg"
            >
              Moderne bergische Küche in historischem Industrieambiente auf dem Steinmüllergelände Gummersbach.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
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

      {/* Slide navigation - positioned bottom-left to avoid overlap with scroll hint */}
      <div className="absolute bottom-6 md:bottom-8 left-6 lg:left-8 z-20 flex items-center gap-4 md:gap-6">
        <button onClick={prev} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all" aria-label="Vorheriges Bild">
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-cream/30 hover:bg-cream/50'
              }`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all" aria-label="Nächstes Bild">
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
