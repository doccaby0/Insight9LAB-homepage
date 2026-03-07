import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    type: 'consult',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xjgenoqd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ type: 'consult', name: '', company: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-forest-green rounded-[3rem] overflow-hidden shadow-2xl shadow-forest-green/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info Section */}
            <div className="p-12 md:p-20 text-white flex flex-col justify-between">
              <motion.div
                key={formData.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif mb-8 leading-tight">
                  {formData.type === 'consult' ? (
                    <>
                      {t('contact.title_1')} 
                      <span className="italic text-yellow-400">{t('contact.title_2')}</span> 
                      {t('contact.title_3')}
                      <br />
                      {t('contact.title_4')}
                      <span className="italic text-yellow-400">{t('contact.title_5')}</span>
                      {t('contact.title_6')}
                    </>
                  ) : (
                    <>
                      {t('contact.instructor_title_1')} <span className="italic text-yellow-400">{t('contact.instructor_title_2')}</span> {t('contact.instructor_title_3')}
                    </>
                  )}
                </h2>
                <p className="text-forest-green/60 text-lg mb-12 max-w-md leading-relaxed">
                  {formData.type === 'consult' ? t('contact.description') : t('contact.instructor_description')}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={18} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest">Phone</p>
                      <a href="tel:010-6400-0924" className="text-lg font-medium hover:text-yellow-400 transition-colors">010-6400-0924</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={18} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                      <p className="text-lg font-medium">insight9edu@naver.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm text-white/60">대표이사 구교준</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-12 md:p-20">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-forest-green/10 rounded-full flex items-center justify-center text-forest-green">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-serif">{t('contact.form.success')}</h3>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-forest-green font-medium underline underline-offset-4"
                  >
                    추가 문의하기
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4 mb-8">
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                      {t('contact.form.type')}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, type: 'consult'})}
                        className={`py-4 px-6 rounded-2xl border-2 transition-all font-bold text-sm ${
                          formData.type === 'consult' 
                            ? 'border-forest-green bg-forest-green/5 text-forest-green' 
                            : 'border-zinc-100 bg-zinc-50 text-zinc-400 hover:border-zinc-200'
                        }`}
                      >
                        {t('contact.form.type_consult')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, type: 'instructor'})}
                        className={`py-4 px-6 rounded-2xl border-2 transition-all font-bold text-sm ${
                          formData.type === 'instructor' 
                            ? 'border-forest-green bg-forest-green/5 text-forest-green' 
                            : 'border-zinc-100 bg-zinc-50 text-zinc-400 hover:border-zinc-200'
                        }`}
                      >
                        {t('contact.form.type_instructor')}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all"
                        placeholder="인사이트9"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green transition-all resize-none"
                      placeholder="프로그램명, 예상 인원, 희망 일자 등을 적어주세요."
                    />
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-red-500 text-sm">{t('contact.form.error')}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-5 bg-forest-green text-white rounded-2xl font-bold text-lg hover:bg-forest-deep transition-all flex items-center justify-center gap-3 shadow-xl shadow-forest-green/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
