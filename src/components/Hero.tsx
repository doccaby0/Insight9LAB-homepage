import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2000"
          alt="인사이트9교육연구소 기업 힐링 워크숍 - 아로마테라피, 원예, 공예 교육 현장"
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-forest-green border border-forest-green/30 rounded-full bg-forest-green/5">
            {t('hero.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-8 text-zinc-900">
            {t('hero.title_1')} <br />
            <span className="italic font-medium text-forest-green">{t('hero.title_2')}</span>{t('hero.title_3')}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-4 bg-forest-green text-white rounded-full font-medium hover:bg-forest-deep transition-all transform hover:scale-105 shadow-xl shadow-forest-green/20"
            >
              {t('hero.btn_programs')}
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all"
            >
              {t('hero.btn_contact')}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
