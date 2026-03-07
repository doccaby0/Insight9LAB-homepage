import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-forest-green font-semibold tracking-widest text-xs uppercase mb-4 block">
            {t('faq.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            {t('faq.description')}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden transition-all hover:border-forest-green/30"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="text-forest-green shrink-0" size={20} />
                  <span className="font-bold text-zinc-800">{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-zinc-400" size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-0 text-zinc-500 leading-relaxed border-t border-zinc-50">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
