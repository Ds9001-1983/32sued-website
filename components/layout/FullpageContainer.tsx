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
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const wheelAccumulator = useRef(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastTransitionTime = useRef(0);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goToSection = useCallback((index: number, force = false) => {
    if (index < 0 || index >= sections.length || index === activeIndex) return;
    const now = Date.now();
    if (!force && (isAnimating || now - lastTransitionTime.current < 900)) return;
    
    setDirection(index > activeIndex ? 1 : -1);
    setIsAnimating(true);
    lastTransitionTime.current = now;
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 850);
  }, [isAnimating, activeIndex, sections.length]);

  const goNext = useCallback(() => goToSection(activeIndex + 1), [activeIndex, goToSection]);
  const goPrev = useCallback(() => goToSection(activeIndex - 1), [activeIndex, goToSection]);

  // Wheel handler (desktop) - improved with accumulator for smooth trackpad support
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Accumulate wheel delta
      wheelAccumulator.current += e.deltaY;
      
      // Clear previous timeout
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      
      // Reset accumulator after inactivity
      wheelTimeout.current = setTimeout(() => {
        wheelAccumulator.current = 0;
      }, 200);
      
      // Trigger only when accumulated enough
      const threshold = 80;
      if (wheelAccumulator.current > threshold) {
        wheelAccumulator.current = 0;
        goNext();
      } else if (wheelAccumulator.current < -threshold) {
        wheelAccumulator.current = 0;
        goPrev();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) container.removeEventListener('wheel', handleWheel);
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    };
  }, [goNext, goPrev, isMobile]);

  // Touch handler (desktop fullpage mode - for tablets in landscape)
  useEffect(() => {
    if (isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent native scroll in fullpage mode
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 40) {
        if (deltaY > 0) goNext();
        else goPrev();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [goNext, goPrev, isMobile]);

  // Keyboard handler
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
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

  // Animation variants based on direction
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -60 : 60,
    }),
  };

  // Mobile: use CSS scroll-snap
  if (isMobile) {
    return (
      <div className="fullpage-mobile">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="fullpage-section-mobile"
          >
            <div className="h-[100dvh] w-full">
              {section.component}
            </div>
          </section>
        ))}
      </div>
    );
  }

  // Desktop: Framer Motion fullpage
  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Section content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="h-screen h-[100dvh] w-full"
        >
          {sections[activeIndex].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => goToSection(i, true)}
            className="group relative flex items-center justify-end"
            aria-label={`Gehe zu ${section.label}`}
          >
            {/* Label tooltip */}
            <span className="absolute right-7 whitespace-nowrap text-[10px] text-cream/0 group-hover:text-cream/80 transition-all duration-300 font-medium tracking-wider uppercase">
              {section.label}
            </span>
            {/* Dot */}
            <motion.div
              className={`rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? 'w-2.5 h-2.5 bg-gold shadow-[0_0_10px_rgba(184,135,57,0.5)]'
                  : 'w-1.5 h-1.5 bg-cream/30 hover:bg-cream/60'
              }`}
              layout
            />
          </button>
        ))}
      </div>

      {/* Section counter */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5">
        <span className="text-gold font-[family-name:var(--font-script)] text-xl italic">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        <div className="w-10 h-px bg-dark-border relative">
          <motion.div
            className="h-full bg-gold absolute left-0 top-0"
            initial={false}
            animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-gray-dark text-[10px]">
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
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1.5"
          >
            <span className="text-cream/40 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-6 bg-gradient-to-b from-gold to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
