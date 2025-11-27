'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TrendingUp } from 'lucide-react';

export default function ProgramHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from('.prog-title', {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
      }).from(
        '.prog-line',
        {
          scaleX: 0,
          duration: 1,
          ease: 'expo.out',
        },
        '-=0.5'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] min-h-[500px] flex items-center bg-[#050505] overflow-hidden pt-20"
    >
      {/* Background Abstract Tech */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 to-transparent"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 text-[#D4AF37]">
            <TrendingUp size={24} />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Economic Division
            </span>
          </div>

          <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white uppercase leading-[0.9] mb-8">
            <div className="overflow-hidden">
              <span className="prog-title inline-block">Arsenal</span>
            </div>
            <div className="overflow-hidden">
              <span className="prog-title inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-700">
                Ekonomi
              </span>
            </div>
          </h1>

          <div className="prog-line w-32 h-2 bg-[#D4AF37] mb-8 origin-left"></div>

          <p className="prog-title text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            4 Pilar Bisnis Raksasa yang siap mengubah anggota GRIB Jaya menjadi
            pengusaha mandiri dan profesional. Satu ekosistem, jutaan peluang.
          </p>
        </div>
      </div>
    </section>
  );
}
