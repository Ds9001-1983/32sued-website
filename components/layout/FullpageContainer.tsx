'use client';

import { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  label: string;
  component: ReactNode;
}

interface FullpageContainerProps {
  sections: Section[];
}

export default function FullpageContainer({ sections }: FullpageContainerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const lastScrollTime = useRef(0);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goToSection = useCallback((index: number, force = false) => {
    if (index < 0 || index >= sections.length || index === activeIndex) return;
    if (isAnimating && !force) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, activeIndex, sections.length]);

  const goNext = useCallback(() => goToSection(activeIndex + 1), [activeIndex, goToSection]);
  const goPrev = useCallback(() => goToSection(activeIndex - 1), [activeIndex, goToSection]);

  // Wheel handler (desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 1200) return;
      lastScrollTime.current = now;

      if (e.deltaY > 30) goNext();
      else if (e.deltaY < -30) goPrev();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) container.removeEventListener('wheel', handleWheel);
    };
  }, [goNext, goPrev, isMobile]);

  // Touch handler (mobile)
  useEffect(() => {
    if (isMobile) return; // On mobile we use native scroll snap

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaTime = Date.now() - touchStartTime.current;
      const velocity = Math.abs(deltaY) / deltaTime;

      if (Math.abs(deltaY) > 50 || velocity > 0.3) {
        if (deltaY > 0) goNext();
        else goPrev();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [goNext, goPrev, isMobile]);

  // Keyboard handler
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, isMobile]);

  // Mobile: use CSS scroll-snap
  if (isMobile) {
    return (
      <div className="fullpage-mobile">
        {sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className="fullpage-section-mobile"
          >
            {section.component}
          </section>
        ))}
      </div>
    );
  }

  // Desktop: Framer Motion fullpage
  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Section content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="h-screen w-full"
        >
          {sections[activeIndex].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => goToSection(i, true)}
            className="group relative flex items-center justify-end"
            aria-label={`Gehe zu ${section.label}`}
          >
            {/* Label tooltip */}
            <span className="absolute right-8 whitespace-nowrap text-xs text-cream/0 group-hover:text-cream/80 transition-all duration-300 font-medium tracking-wider uppercase">
              {section.label}
            </span>
            {/* Dot */}
            <motion.div
              className={`rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? 'w-3 h-3 bg-gold shadow-[0_0_12px_rgba(184,135,57,0.5)]'
                  : 'w-2 h-2 bg-cream/30 hover:bg-cream/60'
              }`}
              layout
            />
          </button>
        ))}
      </div>

      {/* Section counter */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center gap-3">
        <span className="text-gold font-[family-name:var(--font-script)] text-2xl italic">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        <div className="w-12 h-px bg-dark-border relative">
          <motion.div
            className="h-full bg-gold absolute left-0 top-0"
            initial={false}
            animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-gray-dark text-xs">
          {String(sections.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll hint on first section */}
      <AnimatePresence>
        {activeIndex === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
          >
            <span className="text-cream/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
