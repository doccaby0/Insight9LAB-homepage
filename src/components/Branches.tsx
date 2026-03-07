import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Home, Building2, Globe, Map } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Branches() {
  const { t } = useTranslation();

  const headOffice = t('branches.headOffice', { returnObjects: true }) as { name: string; location: string; serviceArea: string };
  const branches = t('branches.items', { returnObjects: true }) as Array<{ name: string; location: string; serviceArea: string }>;

  return (
    <section id="branches" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-green font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            {t('branches.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-zinc-900">
            {t('branches.title_1')}<br />
            <span className="italic text-forest-green drop-shadow-sm">{t('branches.title_2')}</span>
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed">
            {t('branches.description')}
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Head Office - Top Center (Now using the same cool style as branches) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <div className="group relative p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] border-2 border-forest-green shadow-[0_20px_40px_-12px_rgba(27,94,32,0.15)] hover:shadow-[0_32px_64px_-16px_rgba(27,94,32,0.2)] hover:-translate-y-1 transition-all duration-500 text-center">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-forest-green text-white px-8 py-2 rounded-full text-[11px] font-black tracking-[0.2em] uppercase z-10 shadow-lg">
                Head Office
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-forest-green/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-green group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                  <Home size={24} />
                </div>
                <h3 className="text-2xl font-serif text-zinc-900 mb-2 group-hover:text-forest-green transition-colors">{headOffice.name}</h3>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2 text-zinc-400 group-hover:text-forest-green transition-colors">
                    <MapPin size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">{headOffice.location}</span>
                  </div>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="flex items-center gap-1.5 px-4 py-1.5 bg-forest-green text-white rounded-full shadow-[0_0_15px_rgba(27,94,32,0.3)] group-hover:shadow-[0_0_25px_rgba(27,94,32,0.5)] transition-all duration-500"
                  >
                    <Globe size={12} className="animate-spin-slow" />
                    <span className="text-[11px] font-black tracking-wider uppercase">{headOffice.serviceArea}</span>
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-forest-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </motion.div>

          {/* Connection Line (Visual) */}
          <div className="relative h-12 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-forest-green to-transparent" />
          </div>

          {/* Branches Grid - Compact & Scannable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-5 bg-white/80 backdrop-blur-sm rounded-[1.5rem] border border-zinc-200/60 shadow-sm hover:border-forest-green/30 hover:shadow-xl hover:shadow-forest-green/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-forest-green/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center group-hover:bg-forest-green group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                    <Building2 size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-base font-serif text-zinc-900 group-hover:text-forest-green transition-colors leading-tight mb-1">
                      {branch.name}
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{branch.location}</span>
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-zinc-100 rounded-lg border border-zinc-200 group-hover:bg-forest-green/10 group-hover:border-forest-green/30 transition-all duration-500 w-fit shadow-sm"
                      >
                        <Map size={10} className="text-zinc-400 group-hover:text-forest-green transition-colors" />
                        <span className="text-[10px] font-bold text-zinc-500 group-hover:text-forest-green tracking-tight">{branch.serviceArea}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-forest-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
