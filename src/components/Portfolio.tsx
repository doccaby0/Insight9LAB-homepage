import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t } = useTranslation();

  const programs = [
    {
      id: 1,
      category: 'aroma',
      title: t('programs.items.aroma.title'),
      description: t('programs.items.aroma.description'),
    },
    {
      id: 2,
      category: 'garden',
      title: t('programs.items.garden.title'),
      description: t('programs.items.garden.description'),
    },
    {
      id: 3,
      category: 'craft',
      title: t('programs.items.craft.title'),
      description: t('programs.items.craft.description'),
    },
    {
      id: 4,
      category: 'esg',
      title: t('programs.items.esg.title'),
      description: t('programs.items.esg.description'),
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-forest-green font-semibold tracking-[0.2em] text-xs uppercase mb-6 block">{t('programs.badge')}</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight text-zinc-900">
              {t('programs.title')}
            </h2>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl">
              {t('programs.description')}
            </p>
          </div>
          <motion.a
            href="https://drive.google.com/file/d/1yjUpV7i1GX45Cz-JHfI--Le-uU8PC3MV/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-forest-green text-white rounded-full font-bold hover:bg-forest-deep transition-all shadow-xl shadow-forest-green/10 whitespace-nowrap"
          >
            {t('programs.explore')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100 rounded-3xl overflow-hidden">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white p-10 hover:bg-zinc-50 transition-colors duration-500"
            >
              <div className="flex gap-8 items-start">
                <span className="text-zinc-200 font-serif text-4xl italic leading-none pt-1">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-forest-green transition-colors duration-500">{program.title}</h3>
                  <p className="text-zinc-500 text-base leading-relaxed max-w-md">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
