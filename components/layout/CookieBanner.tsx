'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: true, marketing: true, timestamp: Date.now() }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: false, marketing: false, timestamp: Date.now() }));
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ ...preferences, timestamp: Date.now() }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Cookie className="text-gold shrink-0" size={24} />
                <h3 className="font-[family-name:var(--font-script)] text-xl italic text-gold">Cookie-Einstellungen</h3>
              </div>
              <button onClick={acceptNecessary} className="text-gray-dark hover:text-cream transition-colors" aria-label="Schließen">
                <X size={20} />
              </button>
            </div>

            <p className="text-gray text-sm leading-relaxed mb-6">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.{' '}
              <Link href="/datenschutz" className="text-gold hover:text-gold-light underline">Mehr erfahren</Link>
            </p>

            <AnimatePresence>
              {showSettings && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mb-6 space-y-3 overflow-hidden">
                  <label className="flex items-center gap-3 text-sm text-cream/90">
                    <input type="checkbox" checked disabled className="accent-gold" />
                    Notwendig <span className="text-gray-dark">(immer aktiv)</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm text-cream/90 cursor-pointer">
                    <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))} className="accent-gold" />
                    Analyse &amp; Statistik
                  </label>
                  <label className="flex items-center gap-3 text-sm text-cream/90 cursor-pointer">
                    <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))} className="accent-gold" />
                    Marketing
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-wrap gap-3">
              <button onClick={acceptAll} className="btn-gold text-sm px-6 py-2.5">Alle akzeptieren</button>
              <button onClick={acceptNecessary} className="btn-gold-outline text-sm px-6 py-2.5">Nur notwendige</button>
              {!showSettings ? (
                <button onClick={() => setShowSettings(true)} className="text-gray-dark text-sm hover:text-cream transition-colors px-4 py-2.5">Einstellungen</button>
              ) : (
                <button onClick={savePreferences} className="text-gold text-sm hover:text-gold-light transition-colors px-4 py-2.5">Auswahl speichern</button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
