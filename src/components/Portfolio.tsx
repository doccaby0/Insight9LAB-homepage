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
        <div className="mb-24">
          <div className="max-w-3xl">
            <span className="text-forest-green font-semibold tracking-[0.2em] text-xs uppercase mb-6 block">{t('programs.badge')}</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight text-zinc-900">
              {t('programs.title')}
            </h2>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl">
              {t('programs.description')}
            </p>
          </div>
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
