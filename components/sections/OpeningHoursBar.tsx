'use client';

import { Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/lib/constants';

export default function OpeningHoursBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="bg-primary py-4 border-b border-text-light/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-text-light/80 text-sm font-[family-name:var(--font-accent)]">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-highlight" />
            <span className="text-text-light/50">Mo: Ruhetag</span>
            <span className="text-text-light/30 hidden sm:inline">|</span>
            <span>Di – So: 11:30 – 14:30 &amp; 17:30 – 21:00</span>
          </div>
          <div className="hidden sm:block text-text-light/20">|</div>
          <a
            href={`tel:${CONTACT.phoneIntl}`}
            className="flex items-center gap-2 text-highlight hover:text-accent transition-colors"
          >
            <Phone size={14} />
            <span>Reservierung: {CONTACT.phone}</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
