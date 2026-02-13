'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Lightbox from '@/components/ui/Lightbox';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: readonly GalleryImage[];
  title?: string;
  subtitle?: string;
}

export default function Gallery({ images, title, subtitle }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <AnimatedSection className="text-center mb-16">
            {subtitle && (
              <span className="font-[family-name:var(--font-accent)] text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary">
                {title}
              </h2>
            )}
          </AnimatedSection>
        )}

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <AnimatedSection key={image.src} delay={(index % 6) * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-sm cursor-pointer group break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500 flex items-center justify-center">
                  <span className="text-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-[family-name:var(--font-accent)] text-sm tracking-wider">
                    Vergrößern
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
