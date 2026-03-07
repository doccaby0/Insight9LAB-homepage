import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-zinc-50 py-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">I9L</span>
              </div>
              <span className="text-lg font-serif font-semibold tracking-tight text-forest-green">
                인사이트9교육연구소
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              인사이트9교육연구소(Insight 9 Lab)는 원예, 공예, 조향 등 데이터 기반의 프리미엄 기업 힐링 프로그램을 제공합니다. <br />
              서울, 경기, 강원, 전라, 경상, 제주 등 전국 출장 강의 및 연수 출강 전문.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-4">Contact</h4>
              <ul className="text-zinc-500 text-sm space-y-2">
                <li>T. <a href="tel:010-6400-0924" className="hover:text-forest-green transition-colors">010-6400-0924</a></li>
                <li>E. insight9edu@naver.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-4">Social</h4>
              <ul className="text-zinc-500 text-sm space-y-2">
                <li><a href="https://blog.naver.com/bijo972" target="_blank" rel="noopener noreferrer" className="hover:text-forest-green transition-colors">Naver Blog</a></li>
                <li><a href="https://www.youtube.com/@insight9edu" target="_blank" rel="noopener noreferrer" className="hover:text-forest-green transition-colors">YouTube</a></li>
                <li><a href="https://www.instagram.com/insight9_edu/" target="_blank" rel="noopener noreferrer" className="hover:text-forest-green transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs">
            © 2024 Insight 9 Lab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 text-xs hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-400 text-xs hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
