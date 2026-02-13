'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="h-full w-full bg-dark relative overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-6 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Vertical title */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="flex lg:flex-col items-center lg:items-start gap-3">
              <div className="gold-line lg:hidden" />
              <div className="hidden lg:block w-0.5 h-10 bg-gold" />
              <h2 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl italic text-gold lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed]">
                Testimonials
              </h2>
            </div>
          </AnimatedSection>

          {/* Testimonial content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="dark-card p-5 md:p-6 lg:p-8"
              >
                <Quote size={24} className="text-gold/30 mb-3" />

                <h3 className="font-[family-name:var(--font-script)] text-xl md:text-2xl lg:text-3xl italic text-gold mb-3">
                  {TESTIMONIALS[current].name}
                </h3>

                <p className="text-cream/80 text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                  {TESTIMONIALS[current].text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-gray-dark text-xs">
                    {current + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
