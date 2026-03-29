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

      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full py-6 lg:py-0">
        {/* Section header */}
        <AnimatedSection className="text-center mb-6 lg:mb-10">
          <div className="gold-line mx-auto mb-3" />
          <h2 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl italic text-gold">
            Das sagen unsere Gäste
          </h2>
        </AnimatedSection>

        {/* Testimonial content - centered horizontal layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="dark-card p-6 md:p-8 lg:p-10 text-center"
          >
            <Quote size={32} className="text-gold/20 mx-auto mb-4" />

            {/* Quote text first */}
            <p className="text-cream/90 text-base md:text-lg lg:text-xl leading-relaxed mb-6 max-w-2xl mx-auto font-[family-name:var(--font-script)] italic">
              &ldquo;{TESTIMONIALS[current].text}&rdquo;
            </p>

            {/* Stars */}
            <div className="flex gap-1 justify-center mb-3">
              {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Author with initials avatar */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                <span className="text-gold text-sm font-medium">
                  {TESTIMONIALS[current].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-gray text-sm">{TESTIMONIALS[current].name}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={prev}
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-gray-dark text-xs">
            {current + 1} / {TESTIMONIALS.length}
          </span>
          <button
            onClick={next}
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
