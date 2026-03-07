import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ko: {
    translation: {
      nav: {
        brand: '인사이트9교육연구소',
        about: '소개',
        programs: '프로그램',
        branches: '지사현황',
        partners: '파트너',
        contact: '상담신청',
        call: '상담 바로가기'
      },
      hero: {
        badge: 'Insight 9 Lab',
        title_1: "우리는 '프로그램'이 아닌",
        title_2: "경험",
        title_3: "을 설계합니다.",
        description: "아로마, 원예, 공예를 통한 감각적 치유와 데이터로 증명되는 압도적인 몰입의 순간을 선사합니다.",
        btn_programs: "프로그램 둘러보기",
        btn_contact: "상담 신청하기",
        scroll: "Scroll Down"
      },
      about: {
        badge: "About Insight 9 Lab",
        title_1: "인사이트9이 ",
        title_2: "특별한 이유",
        description: "우리는 교육의 본질을 '변화'에 둡니다. 참여자가 스스로를 돌보고, 조직 내에서 새로운 에너지를 발견할 수 있도록 정교하게 설계된 4가지 핵심 가치를 약속합니다.",
        specialties: {
          personalized: {
            title: "개인화된 경험",
            description: "공장에서 찍어내는 교육이 아닌, 세상에 하나뿐인 나만의 작품과 향기를 만듭니다."
          },
          data: {
            title: "데이터 기반 성과",
            description: "단순 감상을 넘어 수치로 증명되는 힐링 효과를 리포트로 제공합니다."
          },
          rd: {
            title: "R&D 혁신",
            description: "기업 교육 목표와 조직 문화에 맞춘 전용 프로그램을 상시 개발합니다."
          },
          partnership: {
            title: "HR/EAP 컨설팅 전문가 파트너십",
            description: "국내 유수 HR/EAP 기업 컨설팅 전문가들이 선택한 검증된 파트너입니다."
          }
        },
        chart: {
          title: "스트레스 완화 효과",
          before: "참여 전",
          after: "참여 후",
          trust_title_1: "데이터로 증명되는",
          trust_title_2: "압도적인 ",
          trust_title_3: "신뢰의 수치",
          stat_1_label: "연간 운영 프로그램",
          stat_2_label: "참여자 평균 만족도",
          trust_description: "인사이트9은 단순한 힐링을 넘어 실질적인 변화를 추구합니다. 자체 R&D를 통해 개발된 프로그램은 참여 전후의 스트레스 지수 변화를 데이터로 입증하며, HR 담당자들에게 확신을 드립니다.",
          source: "* 2024년 참여자 1,200명 대상 자체 설문 데이터 기반"
        },
        reviews: {
          title: "참여자의 목소리",
          verified: "Verified",
          participant: "참여자",
          items: [
            "없음! 완벽! 갓벽!", "완벽한 힐링 연수!", "너무 좋았습니다 완벽했습니다", "완벽하다", "없어요 최고", "없음 완전대만족!", "없어요. 매우 만족합니다.", "매우 좋음", "매우 좋았다. 맛사지와 스트레칭이 도움됨", "더할나위없이 좋았음", "모두 만족합니다.", "프로그램 준비가 완벽하고 전문적이며 세심하게 진행을 하셨다", "너무 행복한 시간 이었습니다", "모든 순간이 인상적이었습니다", "모든 과정이 알차고 만족스러웠습니다 또하고싶어요 즐거운 시간이었습니다", "모든시간이 유익했어요!!!", "다 좋아요! ㅎㅎ", "다 좋았어요", "다 좋았습니다", "너무 좋았습니다.", "없음 너무 좋아요!", "없어요 너무좋아요", "없음 넘좋았어요", "만족합니다", "만족", "없음 만족합니다", "없음 만족", "좋았음 내년에도 다시하고 싶음", "또 하고 싶네요", "아로마프로그램 더 주세요~!!!", "자주 해주세요", "계속해주세요", "계속하면 좋겠다.", "꾸준히 매년 이 연수 받으면 좋겠습니다", "자주 이런 프로그램으로 교사들이 힐링할수 있게 해주세요", "이런 기회가 더 자주 있었으면 합니다", "자주 기회가 있었으면 좋겠습니다^^", "앞으로도 이런 좋은 프로그램을 많이 접해볼 수 있으면 좋겠다", "앞으로 많은 힐링 프로그램 부탁드립니다.", "학교로 찾아와주시는 다양한 프로그램이 더 많아졌으면 좋겠습니다", "이런 원예치유 프로그램이 많아졌으면 좋겠습니다!", "식멍 강의를 계속해 주세요", "힐링 프로그램 넘 감사합니다", "힐링되는 연수 감사드려요", "오늘 연수 넘 유익했고 힐링이었어요 감사합니다", "이런 연수 준비해주셔서 감사합니다 덕분에 많은 힘이 납니다", "너무 힐링되어서 좋았습니다. 수업 정말 열심히 해주셨어요", "좋은 연수 준비해주셔서 감사합니다", "정말 감사드립니다.", "좋은연수감사합니다", "좋은프로그램 감사합니다", "친절하게 알려주셔서 감사합니다", "친절하고 좋은향기로 너무 힐링되었어요 너무너무 감사합니바", "다양한 향을 경험하고 취향을 알아가는 과정 자체가 뜻깊었어요 강사님들이 친절하고 자세히 대해주셔서 따뜻했던 시간이었습니다 감사합니다!", "친절하고 아껴주시는 마음이 느껴져서 좋았습니다.", "친절하게 설명해 주셔서 너무 좋았어요", "강사님의 따뜻한 말씀, 전문적 지식이 돋보였어요.", "강사님의 칭찬과 독려", "진행자분과 대표님의 친절함과 다정함", "좋은 향들, 다정한 말투, 얘쁜 선물까지 좋아요.", "마지막 명상. 친절한 사장님과 강사", "선물. 기분 좋은 유쾌한 강의", "소소한 선물을 계속 받으니 소확행! 확실한 행복!", "선물 많이줌, 재미있음", "선물", "만드는 기쁨 가져가는 기쁨 감사합니다", "스트레스 완화 아로마 테라피 제품 득템", "나만의 아로마를 만들 수 있어서 좋았다. 힐링되는 시간이었습니다", "향기, 스트레스, 마사지, 명상 등 너무 의미있는 시간이였어요!", "스트레스를 해소하고 다른 걱정을 잊고 집중할 수 있어서 좋았다", "교내에서 편안하게 힐링할 수 있어서 좋았어요", "명상. 짧지만 가장 편안한 시간", "명상 시간 좋았어요~!", "명상시간이 좋았습니다.", "명상과 음악", "마지막에 노래들으면서 명상하기가 좋았습니다", "향기와 명상, 차분하고 열정적인 강의에 감사드려요~~", "선생님과 함께 손 마사지 함께 마주보며 웃기 음악들으며 명상", "실제 쉽게 활용할 수 있는 마사지 방법을 알게 돼서 좋았습니다. 선물로 많은 것을 주셔서 평소에도 힐링할 수 있을 것 같습니다. 감사합니다.", "나만의 향수를 만들 수 있어 좋았어요", "나만의 향수 만들기", "나의 향을 찾아 세상에 하나뿐인 향수 만들기", "충분한 시향을 통한 나만의 퍼퓸 만들기", "내가 좋아하는 향을 알아갈 수 있어서 좋고, 선생님들하고 대화나누면서 향수를 만들어서 즐거운 시간이 되었습니다.", "나만의 향기를 만든다는점이 너무 좋다", "나만의 향기찾는과정", "나만의 시간을 가질수있었음", "나에게 맞는 아로마향을 찾을수있어 좋았다", "자신에게 맞는 향 찾기 및 명상", "방법도 알려주시고 저에게 적합한 향을 알려주신 것도 너무 좋았습니다~!!", "향 다 맡아보고 좋은 것 골라내는 게 너무 재밌었고 효능을 자세히 알려주셔서 좋았어요!", "다양한 향을 경험해 볼수 있어서 좋았습니다", "다양한 향 체험", "여러 향들을 맡으며 힐링이 되었어요.", "시향을 하면서 다양한 향기를 경험할 수 있었다.", "향에 대한 설명 굿", "향들이 너무 좋고 설명이 좋았음", "아로마의 다양한 효능 설명", "교사의 스트레스 유형에 따른 오일의 유용성을 자세하고 효과적으로 안내해줌", "새로운 내용을 배우는 뜻깊은 시간이었습니다"
          ]
        }
      },
      programs: {
        badge: "Program Portfolio",
        title: "150가지 이상의 다채로운 프로그램",
        description: "인사이트9은 단체 강의 문의가 있을 때마다 해당 기관과 기업의 목적, 참여자 특성은 물론 담당자가 중요하게 생각하는 참여도, 만족도, 현장 반응까지 세심하게 반영한 프로그램을 새롭게 연구·개발해 제공합니다. 이러한 과정이 축적되어 현재 150가지 이상의 프로그램으로 확장되었으며, 몰입감 있는 완성도 높은 결과물을 통해 참여자들의 자발적인 재참여를 이끌어내고 있습니다.",
        explore: "프로그램 상세보기",
        items: {
          aroma: {
            title: "아로마테라피 프로그램",
            description: "38가지 프리미엄 아로마 오일을 활용하여 나만의 고유한 향기를 창조하고 심신의 안정을 찾는 하이엔드 테라피 클래스입니다."
          },
          garden: {
            title: "원예 프로그램",
            description: "살아있는 이끼와 자연물을 활용하여 유리 용기 속에 나만의 작은 숲을 설계하는 감각적인 원예 활동입니다."
          },
          craft: {
            title: "공예 프로그램",
            description: "전통 자개의 영롱한 빛을 현대적인 소품에 담아내는 품격 있는 공예 체험입니다."
          },
          esg: {
            title: "ESG 프로그램",
            description: "웜아트와 펄프 클레이를 활용하여 버려지는 자원을 예술로 재탄생시키는 친환경 업사이클링 프로그램입니다."
          }
        }
      },
      branches: {
        badge: "Branch Network",
        title_1: "전국 어디서나,",
        title_2: "인사이트9",
        description: "인사이트9은 전국 주요 거점 지사를 통해 전국 어디서나 동일한 고품질의 프리미엄 교육 서비스를 제공합니다.",
        headOffice: { name: "충청도 (충주) 본원", location: "Chungju", serviceArea: "전국 출강" },
        items: [
          { name: "서울 지사", location: "Seoul", serviceArea: "지역 출강" },
          { name: "경기도 지사", location: "Gyeonggi", serviceArea: "지역 출강" },
          { name: "강원도 지사", location: "Gangwon", serviceArea: "지역 출강" },
          { name: "전라북도 지사", location: "North Jeolla", serviceArea: "지역 출강" },
          { name: "전라남도 지사", location: "South Jeolla", serviceArea: "지역 출강" },
          { name: "경상북도 지사", location: "North Gyeongsang", serviceArea: "지역 출강" },
          { name: "경상남도 지사", location: "South Gyeongsang", serviceArea: "지역 출강" },
          { name: "제주 지사", location: "Jeju", serviceArea: "지역 출강" }
        ]
      },
      serviceAreas: {
        badge: "Service Coverage",
        title: "전국 226개 시·군·구 출장 강의",
        description: "인사이트9교육연구소는 서울, 부산, 대구, 인천, 광주, 대전, 울산, 세종, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주 등 전국 226개 모든 시·군·구 지역에 전문 강사진이 직접 찾아갑니다.",
        regions: [
          "서울 전 지역", "경기도 전 지역", "인천광역시", "강원도", "충청북도", "충청남도", "대전광역시", "세종특별자치시",
          "전라북도", "전라남도", "광주광역시", "경상북도", "경상남도", "대구광역시", "울산광역시", "부산광역시", "제주도"
        ],
        keywords: [
          "전국 출장 강의", "시군구 출장강의", "원예", "공예", "조향", "힐링", "기업 출강", "연수 출강", 
          "EAP", "HRD", "서울 출장", "경기 출장", "부산 출장", "제주 출장", "전 지역 출강"
        ]
      },
      partners: {
        badge: "Our Track Record",
        title_1: "검증된 ",
        title_2: "출강 실적",
        description: "인사이트9 Lab은 국내 유수의 기업 및 기관 1,000여 곳 이상에 직접 찾아가 프리미엄 교육을 진행했습니다. 압도적인 실적이 품질을 증명합니다.",
        categories: {
          corporate: "기업 & 공공기관 출강",
          education: "교육 기관 출강",
          welfare: "사회복지 & 가족 지원 출강",
          fire: "소방본부 & 소방서 출강"
        }
      },
      contact: {
        badge: "Get in Touch",
        title_1: "임직원에게는 ",
        title_2: "재충전",
        title_3: "을,",
        title_4: "담당자에게는 ",
        title_5: "확신",
        title_6: "을.",
        description: "인사이트9 Lab은 귀사의 조직 문화에 가장 적합한 힐링 솔루션을 제안합니다. 지금 바로 상담을 시작하세요.",
        instructor_title_1: "인사이트9교육연구소와 함께할 ",
        instructor_title_2: "전문 강사",
        instructor_title_3: "님을 모십니다.",
        instructor_description: "인사이트9 Lab의 혁신적인 힐링 프로그램에 함께하실 역량 있는 강사님들의 지원을 기다립니다. 귀하의 전문성이 빛날 수 있는 기회를 제안해 드립니다.",
        form: {
          type: "문의 유형",
          type_consult: "상담 신청",
          type_instructor: "강사 등록",
          name: "성함",
          email: "이메일",
          company: "기업/기관명",
          phone: "연락처",
          message: "문의내용",
          submit: "신청하기",
          sending: "전송 중...",
          success: "접수 완료! 확인 후 빠른 시일 내에 연락드리겠습니다.",
          error: "오류가 발생했습니다. 잠시 후 다시 시도해주세요."
        }
      },
      faq: {
        badge: "FAQ",
        title: "자주 묻는 질문",
        description: "인사이트9 Lab의 서비스와 프로그램에 대해 궁금해하시는 점들을 모았습니다.",
        items: [
          {
            question: "인사이트9교육연구소는 어떤 프로그램을 제공하나요?",
            answer: "인사이트9은 원예(테라리움, 가드닝), 공예(자개, 업사이클링), 조향(아로마테라피, 향수 만들기), ESG 교육 등 기업 임직원을 위한 프리미엄 힐링 및 소양 프로그램을 제공합니다."
          },
          {
            question: "전국 어디든 출장 강의가 가능한가요?",
            answer: "네, 서울, 경기, 인천은 물론 강원, 충청, 전라, 경상, 제주도까지 대한민국 전 지역 226개 시·군·구 어디든 전문 강사진이 직접 방문하여 강의를 진행합니다."
          },
          {
            question: "기업 맞춤형 프로그램 개발이 가능한가요?",
            answer: "인사이트9은 자체 R&D 연구소를 통해 기업의 교육 목적, 참여자 특성, 조직 문화에 맞춘 150가지 이상의 맞춤형 프로그램을 보유하고 있으며 상시 신규 개발이 가능합니다."
          },
          {
            question: "프로그램 진행 시간과 인원은 어떻게 되나요?",
            answer: "일반적으로 1.5시간에서 3시간 사이로 진행되며, 인원은 소규모 팀 단위부터 수백 명 규모의 대규모 강연까지 유연하게 조절 가능합니다."
          }
        ]
      }
    }
  },
  en: {
    translation: {
      nav: {
        brand: 'Insight 9 Lab',
        about: 'About',
        programs: 'Programs',
        branches: 'Branches',
        partners: 'Partners',
        contact: 'Contact',
        call: 'Consultation'
      },
      hero: {
        badge: 'Insight 9 Lab',
        title_1: "We design ",
        title_2: "Experiences",
        title_3: ", not just 'Programs'.",
        description: "Experience sensory healing through aroma, gardening, and crafts, with overwhelming moments of immersion proven by data.",
        btn_programs: "Explore Programs",
        btn_contact: "Request Consultation",
        scroll: "Scroll Down"
      },
      about: {
        badge: "About Insight 9 Lab",
        title_1: "Why Insight 9 is ",
        title_2: "Special",
        description: "We focus on 'change' as the essence of education. We promise four core values designed to help participants care for themselves and discover new energy within the organization.",
        specialties: {
          personalized: {
            title: "Personalized Experience",
            description: "We create one-of-a-kind works and scents, not factory-made education."
          },
          data: {
            title: "Data-Driven Results",
            description: "We provide reports on healing effects proven by numbers, beyond simple appreciation."
          },
          rd: {
            title: "R&D Innovation",
            description: "We constantly develop exclusive programs tailored to corporate goals and organizational culture."
          },
          partnership: {
            title: "HR/EAP Expert Partnership",
            description: "We are a proven partner chosen by leading HR/EAP corporate consulting experts in Korea."
          }
        },
        chart: {
          title: "Stress Relief Effect",
          before: "Before",
          after: "After",
          trust_title_1: "Proven by Data",
          trust_title_2: "Overwhelming ",
          trust_title_3: "Trust Figures",
          stat_1_label: "Annual Programs",
          stat_2_label: "Avg. Satisfaction",
          trust_description: "Insight 9 Education Research Institute pursues practical change beyond simple healing. Programs developed through in-house R&D prove the change in stress levels before and after participation with data, providing confidence to HR managers.",
          source: "* Based on internal survey data of 1,200 participants in 2024"
        },
        reviews: {
          title: "Voices of Participants",
          verified: "Verified",
          participant: "Participant",
          items: [
            "None! Perfect!", "Perfect healing training!", "It was so good, it was perfect", "Perfect", "Nothing better, the best", "None, completely satisfied!", "None. Very satisfied.", "Very good", "It was very good. Massage and stretching helped", "Couldn't be better", "Satisfied with everything.", "Program preparation was perfect, professional, and meticulous", "It was such a happy time", "Every moment was impressive", "The whole process was fruitful and satisfying. I want to do it again. It was a pleasant time", "Every hour was beneficial!!!", "Everything is good! haha", "Everything was good", "Everything was great", "It was so good.", "None, so good!", "None, so good", "None, it was great", "Satisfied", "Satisfied", "None, satisfied", "None, satisfied", "It was good, I want to do it again next year", "I want to do it again", "Give us more aroma programs~!!!", "Please do it often", "Please keep doing it", "I hope you continue.", "I hope to receive this training every year", "Please let teachers heal with these programs often", "I hope there are more opportunities like this", "I hope to have opportunities often^^", "I hope to experience many good programs like this in the future", "Please provide many healing programs in the future.", "I hope there are more diverse programs that visit schools", "I hope there are more horticultural therapy programs like this!", "Please continue the 'Plant-Mung' lectures", "Thank you so much for the healing program", "Thank you for the healing training", "Today's training was so beneficial and healing. Thank you", "Thank you for preparing this training. It gives me a lot of strength", "It was so healing and good. You worked really hard on the class", "Thank you for preparing a good training", "Thank you very much.", "Thank you for the good training", "Thank you for the good program", "Thank you for the kind guidance", "It was so healing with kind words and good scents. Thank you so so much", "The process of experiencing various scents and finding my preference was meaningful. It was a warm time because the instructors were kind and detailed. Thank you!", "It was good because I could feel the kindness and care.", "It was so good because you explained it kindly", "The instructor's warm words and professional knowledge stood out.", "Instructor's praise and encouragement", "The kindness and sweetness of the moderator and the CEO", "Good scents, kind tone, and even pretty gifts are great.", "Last meditation. Kind owner and instructor", "Gifts. Pleasant and cheerful lecture", "Receiving small gifts continuously is 'Small but Certain Happiness'!", "Gave many gifts, fun", "Gifts", "Joy of making, joy of taking, thank you", "Got stress-relieving aromatherapy products", "It was good to be able to make my own aroma. It was a healing time", "Scent, stress, massage, meditation, etc. were such meaningful times!", "It was good to be able to relieve stress and focus while forgetting other worries", "It was good to be able to heal comfortably within the school", "Meditation. Short but most comfortable time", "Meditation time was good~!", "Meditation time was great.", "Meditation and music", "It was good to meditate while listening to songs at the end", "Thank you for the scent, meditation, and calm yet passionate lecture~~", "Hand massage with the teacher, laughing while facing each other, meditating while listening to music", "It was good to learn massage methods that can be easily used in real life. I think I can heal in my daily life because you gave me many things as gifts. Thank you.", "It was good to be able to make my own perfume", "Making my own perfume", "Finding my scent and making the only perfume in the world", "Making my own perfume through sufficient scenting", "It was good to be able to find out the scents I like, and it was a fun time making perfume while talking with the teachers.", "I love that I can create my own scent", "Process of finding my own scent", "I could have my own time", "It was good to find the aroma scent that suits me", "Finding the right scent and meditation", "It was so good that you taught me the method and the scent that suits me~!!", "It was so fun to smell all the scents and pick the good ones, and it was good that you explained the effects in detail!", "It was good to be able to experience various scents", "Various scent experiences", "It was healing while smelling various scents.", "I was able to experience various scents while scenting.", "Explanation about scents was good", "The scents were so good and the explanation was great", "Explanation of various effects of aroma", "Detailed and effective guidance on the usefulness of oils according to the teacher's stress type", "It was a meaningful time learning new things"
          ]
        }
      },
      programs: {
        badge: "Program Portfolio",
        title: "150+ Diverse Programs",
        description: "Insight 9 Education Research Institute researches and develops new programs that meticulously reflect the purpose of the organization, participant characteristics, and key metrics such as engagement and satisfaction for every group lecture inquiry. This process has led to over 150 specialized programs that deliver immersive, high-quality results and drive voluntary re-participation.",
        explore: "View Program Details",
        items: {
          aroma: {
            title: "Aromatherapy Program",
            description: "A high-end therapy class where you create your own unique scent and find peace of mind using 38 kinds of premium aroma oils."
          },
          garden: {
            title: "Gardening Program",
            description: "A sensory gardening activity where you design your own small forest in a glass container using live moss and natural materials."
          },
          craft: {
            title: "Craft Program",
            description: "A prestigious craft experience that captures the brilliant light of traditional mother-of-pearl in modern accessories."
          },
          esg: {
            title: "ESG Program",
            description: "An eco-friendly upcycling program that transforms discarded resources into art using Warm Art and Pulp Clay."
          }
        }
      },
      branches: {
        badge: "Branch Network",
        title_1: "Anywhere in the country,",
        title_2: "Insight 9 Lab",
        description: "Insight 9 Lab provides the same high-quality premium educational services anywhere in the country through major branch offices nationwide.",
        headOffice: { name: "Chungcheong (Chungju) Head", location: "Chungju", serviceArea: "Nationwide Lectures" },
        items: [
          { name: "Seoul Branch", location: "Seoul", serviceArea: "Local Lectures" },
          { name: "Gyeonggi Branch", location: "Gyeonggi", serviceArea: "Local Lectures" },
          { name: "Gangwon Branch", location: "Gangwon", serviceArea: "Local Lectures" },
          { name: "North Jeolla Branch", location: "North Jeolla", serviceArea: "Local Lectures" },
          { name: "South Jeolla Branch", location: "South Jeolla", serviceArea: "Local Lectures" },
          { name: "North Gyeongsang Branch", location: "North Gyeongsang", serviceArea: "Local Lectures" },
          { name: "South Gyeongsang Branch", location: "South Gyeongsang", serviceArea: "Local Lectures" },
          { name: "Jeju Branch", location: "Jeju", serviceArea: "Local Lectures" }
        ]
      },
      serviceAreas: {
        badge: "Service Coverage",
        title: "Lectures in All 226 Districts Nationwide",
        description: "Insight 9 Lab's professional instructors visit all 226 cities, counties, and districts across South Korea, including Seoul, Busan, Incheon, Gyeonggi, and Jeju.",
        regions: [
          "All Seoul Districts", "All Gyeonggi Districts", "Incheon", "Gangwon", "Chungcheong", "Daejeon", "Sejong",
          "Jeolla", "Gwangju", "Gyeongsang", "Daegu", "Ulsan", "Busan", "Jeju Island"
        ],
        keywords: [
          "Nationwide On-site", "All Districts", "Horticulture", "Crafts", "Aroma", "Healing", "Corporate Training", 
          "EAP", "HRD", "Seoul On-site", "Busan On-site", "Jeju On-site", "Full Coverage"
        ]
      },
      partners: {
        badge: "Our Track Record",
        title_1: "Proven ",
        title_2: "Lecture Performance",
        description: "Insight 9 Lab has conducted premium education at over 1,000 leading companies and institutions in Korea. Our overwhelming track record proves our quality.",
        categories: {
          corporate: "Corporate & Public Lectures",
          education: "Educational Institution Lectures",
          welfare: "Social Welfare & Family Support Lectures",
          fire: "Fire Headquarters & Station Lectures"
        }
      },
      contact: {
        badge: "Get in Touch",
        title_1: "",
        title_2: "Recharge",
        title_3: " for Employees,",
        title_4: "",
        title_5: "Confidence",
        title_6: " for Managers.",
        description: "Insight 9 Lab proposes the most suitable healing solutions for your organizational culture. Start your consultation now.",
        instructor_title_1: "Join Insight 9 as a ",
        instructor_title_2: "Professional Instructor",
        instructor_title_3: ".",
        instructor_description: "We are looking for competent instructors to join Insight 9 Lab's innovative healing programs. We offer opportunities where your expertise can shine.",
        form: {
          type: "Inquiry Type",
          type_consult: "Consultation",
          type_instructor: "Instructor Registration",
          name: "Name",
          email: "Email",
          company: "Company",
          phone: "Phone",
          message: "Message",
          submit: "Submit",
          sending: "Sending...",
          success: "Inquiry received! We will contact you shortly after reviewing your details.",
          error: "An error occurred. Please try again later."
        }
      },
      faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        description: "Common questions about Insight 9 Lab's services and programs.",
        items: [
          {
            question: "What programs does Insight 9 Lab provide?",
            answer: "Insight 9 provides premium healing and education programs for corporate employees, including horticulture (terrariums, gardening), crafts (mother-of-pearl, upcycling), perfumery (aromatherapy, perfume making), and ESG education."
          },
          {
            question: "Is on-site lecture available nationwide?",
            answer: "Yes, our professional instructors visit all 226 cities, counties, and districts across South Korea, including Seoul, Gyeonggi, Incheon, Gangwon, Chungcheong, Jeolla, Gyeongsang, and Jeju Island."
          },
          {
            question: "Can you develop customized programs for companies?",
            answer: "Yes, Insight 9 has over 150 customized programs and can develop new ones at any time through our in-house R&D lab to match corporate goals, participant characteristics, and organizational culture."
          },
          {
            question: "What is the duration and capacity of the programs?",
            answer: "Programs typically run between 1.5 to 3 hours, and the capacity is flexible, ranging from small team units to large-scale lectures with hundreds of participants."
          }
        ]
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
