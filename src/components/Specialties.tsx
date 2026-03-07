import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BarChart3, Lightbulb, Users, Quote, Star, CheckCircle2, Leaf } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTranslation } from 'react-i18next';

export default function Specialties() {
  const { t } = useTranslation();

  const specialties = [
    {
      icon: <Sparkles className="text-forest-green" />,
      title: t('about.specialties.personalized.title'),
      description: t('about.specialties.personalized.description')
    },
    {
      icon: <BarChart3 className="text-forest-green" />,
      title: t('about.specialties.data.title'),
      description: t('about.specialties.data.description')
    },
    {
      icon: <Lightbulb className="text-forest-green" />,
      title: t('about.specialties.rd.title'),
      description: t('about.specialties.rd.description')
    },
    {
      icon: <Users className="text-forest-green" />,
      title: t('about.specialties.partnership.title'),
      description: t('about.specialties.partnership.description')
    }
  ];

  const stressData = [
    { name: t('about.chart.before'), stress: 5, fill: '#E2E8F0' },
    { name: t('about.chart.after'), stress: 2.3, fill: '#1B5E20' },
  ];

  const translatedReviews = t('about.reviews.items', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-forest-green font-semibold tracking-widest text-xs uppercase mb-4 block">{t('about.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('about.title_1')}<span className="italic">{t('about.title_2')}</span></h2>
          <p className="text-zinc-600 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Trust Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif mb-8 leading-tight">
              {t('about.chart.trust_title_1')} <br />
              {t('about.chart.trust_title_2')}<span className="italic">{t('about.chart.trust_title_3')}</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-5xl font-serif text-forest-green mb-2">200+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">{t('about.chart.stat_1_label')}</div>
              </div>
              <div>
                <div className="text-5xl font-serif text-forest-green mb-2">4.9<span className="text-2xl">/5.0</span></div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">{t('about.chart.stat_2_label')}</div>
              </div>
            </div>

            <p className="text-zinc-600 leading-relaxed">
              {t('about.chart.trust_description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm"
          >
            <h4 className="text-lg font-serif mb-8 text-center">{t('about.chart.title')}</h4>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stressData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 14 }}
                    dy={10}
                  />
                  <YAxis 
                    domain={[0, 6]} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 12 }}
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="stress" radius={[10, 10, 0, 0]} barSize={50}>
                    {stressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-[10px] text-zinc-400 mt-6 italic">
              {t('about.chart.source')}
            </p>
          </motion.div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-3xl border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50 transition-all group"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-forest-green/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-forest-green transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Reviews */}
      <div className="relative py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="text-center mb-16">
          <span className="text-forest-green font-semibold tracking-widest text-xs uppercase mb-3 block">Testimonials</span>
          <h3 className="text-3xl md:text-4xl font-serif">{t('about.reviews.title')}</h3>
        </div>
        
        <div className="flex flex-col gap-4 overflow-hidden select-none">
          {/* First Row: Right to Left */}
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {[...translatedReviews, ...translatedReviews, ...translatedReviews].map((review, i) => (
              <div 
                key={i} 
                className="relative mx-2 px-4 py-4 bg-white border border-zinc-200/60 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 transition-all hover:shadow-[0_15px_30px_rgba(27,94,32,0.1)] group w-[220px] min-h-[110px] flex-shrink-0 overflow-hidden"
              >
                {/* Decorative background element */}
                <Leaf className="absolute -right-4 -bottom-4 w-16 h-16 text-forest-green/[0.03] -rotate-12 transition-colors group-hover:text-forest-green/[0.06]" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2.5 h-2.5 text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote className="w-3 h-3 text-forest-green/20" />
                </div>
                
                <p className="text-zinc-700 font-sans text-[12px] leading-snug whitespace-normal relative z-10 font-medium line-clamp-4">
                  {review}
                </p>
                
                <div className="mt-auto pt-2 flex items-center gap-2 border-t border-zinc-100/80 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center text-[8px] font-serif font-bold text-white shadow-sm">
                    I9L
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-800 leading-none">{t('about.reviews.participant')}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-1.5 h-1.5 text-forest-green" />
                      <span className="text-[7px] font-bold tracking-wider text-forest-green/60 uppercase">{t('about.reviews.verified')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: Left to Right */}
          <div className="flex animate-marquee-reverse whitespace-nowrap py-3">
            {[...translatedReviews, ...translatedReviews, ...translatedReviews].reverse().map((review, i) => (
              <div 
                key={i} 
                className="relative mx-2 px-4 py-4 bg-white border border-zinc-200/60 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2 transition-all hover:shadow-[0_15px_30px_rgba(27,94,32,0.1)] group w-[220px] min-h-[110px] flex-shrink-0 overflow-hidden"
              >
                {/* Decorative background element */}
                <Leaf className="absolute -right-4 -bottom-4 w-16 h-16 text-forest-green/[0.03] -rotate-12 transition-colors group-hover:text-forest-green/[0.06]" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2.5 h-2.5 text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote className="w-3 h-3 text-forest-green/20" />
                </div>
                
                <p className="text-zinc-700 font-sans text-[12px] leading-snug whitespace-normal relative z-10 font-medium line-clamp-4">
                  {review}
                </p>
                
                <div className="mt-auto pt-2 flex items-center gap-2 border-t border-zinc-100/80 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center text-[8px] font-serif font-bold text-white shadow-sm">
                    I9L
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-800 leading-none">{t('about.reviews.participant')}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-1.5 h-1.5 text-forest-green" />
                      <span className="text-[7px] font-bold tracking-wider text-forest-green/60 uppercase">{t('about.reviews.verified')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
