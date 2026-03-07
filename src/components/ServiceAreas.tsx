import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MapPin, CheckCircle } from 'lucide-react';

export default function ServiceAreas() {
  const { t } = useTranslation();
  
  const regions = t('serviceAreas.regions', { returnObjects: true }) as string[];
  const keywords = t('serviceAreas.keywords', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-green font-semibold tracking-widest text-xs uppercase mb-4 block">
            {t('serviceAreas.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            {t('serviceAreas.title')}
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            {t('serviceAreas.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Regions List */}
          <div className="bg-zinc-50 p-10 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-forest-green" size={24} />
              <h3 className="text-xl font-serif font-bold">출강 가능 지역</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest-green/40" />
                  <span className="text-sm text-zinc-600 font-medium">{region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords / Services List */}
          <div className="bg-zinc-50 p-10 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="text-forest-green" size={24} />
              <h3 className="text-xl font-serif font-bold">주요 교육 서비스</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-xs font-bold text-zinc-500 hover:border-forest-green hover:text-forest-green transition-all cursor-default"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hidden SEO Text for AI Crawlers and Search Engines */}
        <div className="sr-only">
          인사이트9교육연구소(Insight 9 Lab)는 대한민국 전국 226개 시·군·구 모든 지역에 출장 강의를 제공합니다. 
          서울(강남구, 서초구, 송파구, 종로구 등), 경기도(수원, 용인, 성남, 고양, 화성 등), 인천, 강원도(춘천, 원주, 강릉), 
          충청도(충주, 청주, 천안, 아산), 대전, 세종, 전라도(전주, 익산, 군산, 광주, 목포, 여수), 
          경상도(포항, 구미, 경주, 대구, 울산, 부산, 창원, 진주), 제주도 등 전국 어디든 전문 강사진이 방문합니다.
          기업 힐링 프로그램, 원예 클래스, 아로마테라피 워크숍, 공예 체험, ESG 교육, HRD 역량 강화, EAP 스트레스 관리 등 
          맞춤형 소양 교육을 전국 최저가 수준의 합리적인 비용으로 제안합니다.
          Horticulture, Crafts, Aroma Therapy, Perfumery, ESG, Corporate Wellness, Employee Assistance Program (EAP), 
          HR Training, Team Building, Workshop in Seoul, Busan, Jeju, and all other Korean cities.
        </div>
      </div>
    </section>
  );
}
