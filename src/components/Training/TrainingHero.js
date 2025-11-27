/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Award, GraduationCap } from 'lucide-react';

export default function TrainingHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from('.hero-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      })
        .from('.hero-title span', {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
        })
        .from('.hero-desc', { x: -30, opacity: 0, duration: 0.8 }, '-=0.5');
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[60vh] min-h-[500px] flex items-center bg-[#050505] overflow-hidden pt-20 border-b border-[#333]"
    >
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10"></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-full bg-linear-to-tr from-[#D4AF37]/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <div className="hero-badge inline-flex items-center gap-3 mb-6 border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-1 rounded-full">
            <GraduationCap size={16} className="text-[#D4AF37]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              GRIB Academy System
            </span>
          </div>

          <h1 className="hero-title font-oswald text-6xl md:text-8xl font-bold text-white uppercase leading-[0.9] mb-8">
            <span className="inline-block">Upgrade</span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-amber-700">
              Kapasitas
            </span>
          </h1>

          <p className="hero-desc text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l-4 border-[#D4AF37] pl-6">
            Pusat pelatihan terpadu untuk mencetak anggota yang profesional,
            berdaya saing, dan siap kerja. Pilih spesialisasi Anda sekarang.
          </p>

          <div className="hero-desc mt-8 flex gap-4 text-xs font-mono text-gray-500">
            <span>AVAILABLE MODULES: 10+</span>
            <span>//</span>
            <span>CERTIFIED: BNSP & INT&apos;L</span>
          </div>
        </div>
      </div>
    </section>
  );
}
