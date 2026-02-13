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
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consent = { necessary: true, analytics: true, marketing: true, timestamp: Date.now() };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    const consent = { necessary: true, analytics: false, marketing: false, timestamp: Date.now() };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const savePreferences = () => {
    const consent = { ...preferences, timestamp: Date.now() };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-surface text-text-light rounded-lg shadow-2xl border border-text-light/10 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Cookie size={24} className="text-highlight shrink-0" />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg">
                    Cookie-Einstellungen
                  </h3>
                </div>
                <button
                  onClick={acceptNecessary}
                  className="text-text-light/50 hover:text-text-light transition-colors"
                  aria-label="Schließen"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-text-light/70 text-sm mb-6 leading-relaxed">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu
                bieten. Einige Cookies sind für den Betrieb der Website notwendig, während andere
                uns helfen, die Website zu verbessern.{' '}
                <Link href="/datenschutz" className="text-highlight hover:underline">
                  Mehr erfahren
                </Link>
              </p>

              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-6 space-y-3 overflow-hidden"
                  >
                    <label className="flex items-center gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="accent-highlight"
                      />
                      <span className="text-text-light/90">
                        Notwendig{' '}
                        <span className="text-text-light/40">(immer aktiv)</span>
                      </span>
                    </label>
                    <label className="flex items-center gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences((p) => ({ ...p, analytics: e.target.checked }))
                        }
                        className="accent-highlight"
                      />
                      <span className="text-text-light/90">Analyse &amp; Statistik</span>
                    </label>
                    <label className="flex items-center gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences((p) => ({ ...p, marketing: e.target.checked }))
                        }
                        className="accent-highlight"
                      />
                      <span className="text-text-light/90">Marketing</span>
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-highlight text-primary font-[family-name:var(--font-accent)] text-xs tracking-wider uppercase rounded-sm hover:bg-accent transition-all duration-300"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-2.5 border border-text-light/20 text-text-light/80 font-[family-name:var(--font-accent)] text-xs tracking-wider uppercase rounded-sm hover:border-highlight hover:text-highlight transition-all duration-300"
                >
                  Nur notwendige
                </button>
                {!showSettings ? (
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-2.5 text-text-light/50 font-[family-name:var(--font-accent)] text-xs tracking-wider uppercase hover:text-highlight transition-all duration-300"
                  >
                    Einstellungen
                  </button>
                ) : (
                  <button
                    onClick={savePreferences}
                    className="px-6 py-2.5 text-highlight font-[family-name:var(--font-accent)] text-xs tracking-wider uppercase hover:text-accent transition-all duration-300"
                  >
                    Auswahl speichern
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
