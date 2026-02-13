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
    <section className="py-16 lg:py-20 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Vertical title */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="flex lg:flex-col items-center lg:items-start gap-4">
              <div className="gold-line lg:hidden" />
              <div className="hidden lg:block w-0.5 h-12 bg-gold" />
              <h2 className="font-[family-name:var(--font-script)] text-3xl md:text-4xl lg:text-5xl italic text-gold lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed]">
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
                className="dark-card p-6 md:p-8 lg:p-12"
              >
                <Quote size={32} className="text-gold/30 mb-4 lg:mb-6" />

                <h3 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl italic text-gold mb-4 lg:mb-6">
                  {TESTIMONIALS[current].name}
                </h3>

                <p className="text-cream/80 text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 max-w-2xl">
                  {TESTIMONIALS[current].text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6 lg:mb-8">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-gray-dark text-sm">
                    {current + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
                  >
                    <ChevronRight size={18} />
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
