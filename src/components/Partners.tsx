import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const partnerCategories = [
  {
    key: "corporate",
    partners: [
      { 
        name: "한국은행", 
        logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODAgODAiPgo8cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik00MCAxMGEzMCAzMCAwIDEgMSAwIDYwIDMwIDMwIDAgMCAxIDAtNjB6IiBmaWxsPSIjMDAzNDc4Ii8+CjxwYXRoIGQ9Ik00MCAyNWM4IDAgMTUgNyAxNSAxNXMtNyAxNS0xNSAxNS0xNS03LTE1LTE1IDctMTUgMTUtMTV6IiBmaWxsPSIjMDBhYmU3Ii8+CjxwYXRoIGQ9Ik0yNSA0MGMwLTggNy0xNSAxNS0xNXMxNSA3IDE1IDE1LTcgMTUtMTUgMTUtMTUtNy0xNS0xNXoiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIuMyIvPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSInTm90byBTYW5zIEtSJywnTWFsdW4gR290aGljJyxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjI4IiBmaWxsPSIjMDAzNDc4Ij7V9L3A773A773APC90ZXh0Pgo8dGV4dCB4PSI4MCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzAwMzQ3OCI+QkFOSyBPRiBLT1JFQTwvdGV4dD4KPC9zdmc+" 
      },
      "삼성SHP", "SK스토아", "현대인프라코어", "신한라이프",
      "BGF리테일", "필립모리스", "HPE", "한국애질런트", "듀폰코리아",
      "캄텍", "LH한국토지주택공사", "고용노동부", "공무원연금공단", "국립산림과학원",
      "ABL생명", "강남구청", "고양시청", "부천소사구청", "용산구청",
      "근로복지공단", "기상청", "법무부", "병무청", "의정부시청",
      "사회경제진흥원", "선거관리위원회", "전북경제통상진흥원", "중소기업기술진흥원", "한국남부발전",
      "한국동서발전", "한국디자인진흥원", "한국산업기술기획 평가원", "범죄피해자센터", "환영철강",
      "한국산업인력공단", "한국석유공사", "한국수력원자력공사", "한국식품연구원", "한국핵융합 에너지연구원",
      "항공안전기술원", "해양 경찰청", "호국원", "동해해양경찰서", "JDC제주면세점",
      "경남외국인근로자지원센터", "전북창조경제혁신센터", "선박해양플랜트", "보건복지부",
      "SSIS", "한국사회보장정보원", "P&G", "국민연금공단", "경기일자리재단",
      "IDT", "PNB은행", "아모레퍼시픽"
    ]
  },
  {
    key: "education",
    partners: [
      "경기도교육청", "강서양천 교육지원청", "강진교육지원청", "군산교육지원청", "김천교육지원청",
      "경기남부교육지원청", "남원교육지원청", "동두천양주 교육지원청", "보령교육지원청", "부안교육지원청",
      "서산교육지원청", "성동광진교육지원청", "시흥교육지원청", "안성 교육지원청", "연천교육지원청",
      "익산교육지원청", "인천광역시남부교육청", "인천광역시교육청", "임실교육지원청", "정읍교육지원청",
      "태안 교육지원청", "강원특별자치도교육청", "군산대학교", "부산고신대학교", "충남도립대학교",
      "한국기술대학교", "전국 초, 중, 고등학교", "강원상지대학교", "전국 어린이집,유치원", "경기평생학습관"
    ]
  },
  {
    key: "welfare",
    partners: [
      "강남구 가족센터", "오산시 가족센터", "광주 동구 가족센터", "음성군 가족센터", "진천 가족센터",
      "목포시 가족센터", "군산시 가족센터", "장수군 가족센터", "전주시 건강가정지원센터", "서울시 광진구 육아종합지원센터",
      "진주시 육아종합지원센터", "고양시 육아종합지원센터", "경기이천 육아종합지원센터", "김천시 육아종합지원센터", "노원구 육아종합지원센터",
      "군산시청소년상담복지센터", "진안 청소년 상담복지센터", "쉴랜드", "발달장애인평생학습관", "꿈드림",
      "늘푸른도서관", "산들도서관", "설림도서관", "김포시립양곡도서관", "군산장애인복지관",
      "청소년문화의집", "청소년수련원", "대한민국 교육봉사단", "다솜학교", "부산남구키즈클럽",
      "부산어린이집", "광명시립 둥지어린이집", "서울 키움센터1호", "순창군건강장수과", "대구드림스타트",
      "동대문구가족센터", "단양 가족센터"
    ]
  },
  {
    key: "fire",
    partners: [
      "전남 소방본부", "전북 소방본부", "서울금천구소방서", "서울 구로소방서", "서울 용산소방서",
      "서울관악소방서", "서울서초소방서", "서울 은평구 소방서", "서울성동소방서", "보성 소방서",
      "장흥 소방서", "나주 소방서", "해남 소방서", "영암 소방서", "영광 소방서",
      "고흥 소방서", "화순 소방서", "강진 소방서", "진도 소방서", "함평 소방서",
      "담양소방서", "여수 소방서", "목포 소방서", "장성 소방서", "경기재난본부"
    ]
  }
];

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="partners" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-forest-green font-semibold tracking-widest text-xs uppercase mb-4 block">{t('partners.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('partners.title_1')}<span className="italic">{t('partners.title_2')}</span></h2>
          <p className="text-zinc-500 leading-relaxed">
            {t('partners.description')}
          </p>
        </div>

        <div className="space-y-24">
          {partnerCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
                <h3 className="text-2xl font-serif text-forest-green">
                  {t(`partners.categories.${category.key}`)}
                </h3>
                <div className="h-px flex-grow bg-zinc-200" />
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  {category.partners.length} Partners
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.partners.map((partner, index) => {
                  const isObject = typeof partner === 'object';
                  const name = isObject ? partner.name : partner;
                  const logo = isObject ? partner.logo : null;

                  return (
                    <motion.div 
                      key={`${category.key}-${index}`}
                      whileHover={{ scale: 1.02, backgroundColor: '#F0FDF4' }}
                      className="bg-white px-5 py-3 rounded-xl border border-zinc-100 shadow-sm flex items-center justify-center text-center transition-all cursor-default min-h-[64px] min-w-[120px]"
                    >
                      {logo ? (
                        <img 
                          src={logo} 
                          alt={name} 
                          className="h-9 w-auto object-contain max-w-[180px]" 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <span 
                        className={`text-zinc-600 text-sm font-medium hover:text-forest-green transition-colors ${logo ? 'hidden' : 'block'}`}
                      >
                        {name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block px-8 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
            <p className="text-zinc-500 text-sm">
              <span className="text-forest-green font-bold">1,000+</span> 이상의 기업 및 기관이 인사이트9 Lab의 프리미엄 교육을 경험했습니다.
            </p>
          </div>
        </div>

        {/* Hidden SEO Text for Partners & Track Record */}
        <div className="sr-only">
          인사이트9교육연구소(Insight 9 Lab)는 한국은행, 삼성SHP, SK스토아, 현대인프라코어, 신한라이프, BGF리테일, 필립모리스, HPE, 한국애질런트, 듀폰코리아, 캄텍, LH한국토지주택공사, 고용노동부, 공무원연금공단, 국립산림과학원, ABL생명, 강남구청, 고양시청, 부천소사구청, 용산구청, 근로복지공단, 기상청, 법무부, 병무청, 의정부시청, 사회경제진흥원, 선거관리위원회, 전북경제통상진흥원, 중소기업기술진흥원, 한국남부발전, 한국동서발전, 한국디자인진흥원, 한국산업기술기획평가원, 범죄피해자센터, 환영철강, 한국산업인력공단, 한국석유공사, 한국수력원자력공사, 한국식품연구원, 한국핵융합에너지연구원, 항공안전기술원, 해양경찰청, 호국원, 동해해양경찰서, JDC제주면세점, 경남외국인근로자지원센터, 전북창조경제혁신센터, 선박해양플랜트, 보건복지부, SSIS, 한국사회보장정보원, P&G, 국민연금공단, 경기일자리재단, IDT, PNB은행, 아모레퍼시픽 등 수많은 기업에 출강한 실적을 보유하고 있습니다.
          또한 경기도교육청, 강원특별자치도교육청 등 전국 교육지원청과 군산대학교, 충남도립대학교 등 대학교, 그리고 전국 소방본부 및 소방서에 힐링 프로그램을 제공했습니다.
          Insight 9 Lab has provided corporate training and healing workshops to major organizations including Bank of Korea, Samsung, SK, Hyundai, P&G, and various government agencies across South Korea.
        </div>
      </div>
    </section>
  );
}
