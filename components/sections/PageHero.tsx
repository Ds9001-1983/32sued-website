'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ image, imageAlt, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 text-center px-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 bg-gold mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-[family-name:var(--font-script)] text-xl md:text-2xl italic text-gold"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
