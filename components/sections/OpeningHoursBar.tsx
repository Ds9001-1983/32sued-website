'use client';

import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/lib/constants';

export default function OpeningHoursBar() {
  return (
    <section className="bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3">
            <Clock size={18} className="text-gold" />
            <span className="text-cream/80 text-sm">
              <span className="text-gold font-medium">Di–So</span> 11:30 – 14:30 &amp; 17:30 – 21:00 | <span className="text-red">Mo Ruhetag</span>
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-center gap-3">
            <MapPin size={18} className="text-gold" />
            <span className="text-cream/80 text-sm">{CONTACT.street}, {CONTACT.city}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors">
              <Phone size={18} />
              <span className="text-sm font-medium">{CONTACT.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
