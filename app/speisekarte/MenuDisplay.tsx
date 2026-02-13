'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sprout } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { mittagskarte, abendkarte, type MenuSection, type MenuItem } from '@/lib/menuData';

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-primary/10 last:border-b-0 group">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-[family-name:var(--font-heading)] text-lg text-primary group-hover:text-secondary transition-colors">
            {item.name}
          </h4>
          {item.tags?.includes('vegetarisch') && (
            <span className="inline-flex items-center gap-1 text-green-600 text-xs" title="Vegetarisch">
              <Leaf size={12} />
            </span>
          )}
          {item.tags?.includes('vegan') && (
            <span className="inline-flex items-center gap-1 text-green-700 text-xs" title="Vegan">
              <Sprout size={12} />
            </span>
          )}
        </div>
        <p className="text-primary/50 text-sm leading-relaxed">{item.description}</p>
      </div>
      <span className="font-[family-name:var(--font-accent)] text-highlight text-lg shrink-0 pt-1">
        {item.price}
      </span>
    </div>
  );
}

function MenuSectionDisplay({ section }: { section: MenuSection }) {
  return (
    <div className="space-y-12">
      {section.categories.map((category) => (
        <AnimatedSection key={category.name}>
          <div className="mb-6">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-primary mb-2">
              {category.name}
            </h3>
            {category.description && (
              <p className="text-primary/50 text-sm">{category.description}</p>
            )}
            <div className="w-16 h-0.5 bg-highlight mt-3" />
          </div>
          <div>
            {category.items.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

export default function MenuDisplay() {
  const [activeTab, setActiveTab] = useState<'mittag' | 'abend'>('mittag');

  const tabs = [
    { id: 'mittag' as const, label: 'Mittagskarte', subtitle: mittagskarte.subtitle },
    { id: 'abend' as const, label: 'Abendkarte', subtitle: abendkarte.subtitle },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info Banner */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary/50 text-sm font-[family-name:var(--font-accent)] tracking-wide">
            Die Mittagskarte wechselt wöchentlich. Aktuelle Highlights finden Sie hier.
          </p>
        </AnimatedSection>

        {/* Tab Navigation */}
        <div className="sticky top-20 z-20 bg-background/95 backdrop-blur-sm pb-6 mb-8">
          <div className="flex justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase transition-all duration-300 rounded-sm ${
                  activeTab === tab.id
                    ? 'text-text-light'
                    : 'text-primary/60 hover:text-primary'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-sm"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
          <p className="text-center text-primary/40 text-xs mt-3 font-[family-name:var(--font-accent)]">
            {tabs.find((t) => t.id === activeTab)?.subtitle}
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mb-8 text-xs text-primary/50 font-[family-name:var(--font-accent)]">
          <span className="flex items-center gap-1">
            <Leaf size={12} className="text-green-600" /> Vegetarisch
          </span>
          <span className="flex items-center gap-1">
            <Sprout size={12} className="text-green-700" /> Vegan
          </span>
        </div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'mittag' ? (
              <MenuSectionDisplay section={mittagskarte} />
            ) : (
              <MenuSectionDisplay section={abendkarte} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Allergen Note */}
        <AnimatedSection className="mt-16 text-center" delay={0.3}>
          <div className="p-6 bg-primary/5 rounded-sm">
            <p className="text-primary/50 text-xs leading-relaxed">
              Alle Preise in Euro inkl. MwSt. Allergene und Zusatzstoffe erfragen Sie bitte bei
              unserem Servicepersonal. Wir informieren Sie gerne über die in unseren Speisen
              enthaltenen Allergene.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
