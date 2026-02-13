'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical title */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="flex lg:flex-col items-center lg:items-start gap-4">
              <div className="gold-line lg:hidden" />
              <div className="hidden lg:block w-0.5 h-16 bg-gold" />
              <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl lg:text-6xl italic text-gold lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed]">
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
                className="dark-card p-8 md:p-12"
              >
                <Quote size={40} className="text-gold/30 mb-6" />

                <h3 className="font-[family-name:var(--font-script)] text-3xl md:text-4xl italic text-gold mb-6">
                  {TESTIMONIALS[current].name}
                </h3>

                <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  {TESTIMONIALS[current].text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-gray-dark text-sm">
                    {current + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold transition-all"
                  >
                    <ChevronRight size={20} />
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
