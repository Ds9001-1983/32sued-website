'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface HeroProps {
  image: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  showCTA?: boolean;
  overlay?: 'dark' | 'medium' | 'light';
  height?: 'full' | 'large' | 'medium';
}

export default function Hero({
  image,
  imageAlt,
  title,
  subtitle,
  showLogo = false,
  showCTA = false,
  overlay = 'dark',
  height = 'full',
}: HeroProps) {
  const overlayOpacity = {
    dark: 'bg-black/60',
    medium: 'bg-black/45',
    light: 'bg-black/30',
  };

  const heightClass = {
    full: 'h-screen',
    large: 'h-[80vh]',
    medium: 'h-[60vh]',
  };

  return (
    <section className={`relative ${heightClass[height]} overflow-hidden`}>
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity[overlay]}`} />

      {/* Industrial texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/logo.png"
              alt="32Süd Logo"
              width={120}
              height={120}
              className="mb-6"
              priority
            />
          </motion.div>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-text-light mb-4"
          >
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-[family-name:var(--font-body)] text-lg md:text-xl text-text-light/80 max-w-2xl mb-10"
          >
            {subtitle}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="tel:+492261919693" variant="primary">
              Tisch reservieren
            </Button>
            <Button href="/speisekarte" variant="ghost">
              Speisekarte entdecken
            </Button>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {height === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-text-light/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-highlight rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
