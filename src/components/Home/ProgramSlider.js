'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  TrendingUp,
  Scale,
  Network,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Ekonomi Kerakyatan',
    subtitle: 'Kemandirian Finansial',
    description:
      'Akses eksklusif ke ekosistem bisnis GRIB: TJM (Otomotif), Pasticuan (Import), Sentinel (Keamanan), dan Naga Autopart. Peluang usaha nyata untuk anggota.',
    icon: <TrendingUp size={32} />,
    cta: 'Lihat Peluang Bisnis',
    color: 'text-emerald-500',
    bgGradient: 'from-emerald-900/40 to-black',
  },
  {
    id: 2,
    title: 'Bantuan Hukum',
    subtitle: 'Keadilan Untuk Semua',
    description:
      'Layanan advokasi dan pendampingan hukum gratis di seluruh DPD. Kami hadir sebagai perisai hukum bagi masyarakat yang tertindas.',
    icon: <Scale size={32} />,
    cta: 'Cari LBH Terdekat',
    color: 'text-red-500',
    bgGradient: 'from-red-900/40 to-black',
  },
  {
    id: 3,
    title: 'Sinergi Bisnis',
    subtitle: 'Kolaborasi Strategis',
    description:
      'Integrasi hulu ke hilir 4 pilar bisnis utama. Dari penyediaan tenaga kerja (Sentinel) hingga distribusi suku cadang (Naga Autopart).',
    icon: <Network size={32} />,
    cta: 'Pelajari Model Bisnis',
    color: 'text-blue-500',
    bgGradient: 'from-blue-900/40 to-black',
  },
  {
    id: 4,
    title: 'Diklat & Sertifikasi',
    subtitle: 'SDM Unggul',
    description:
      'Pusat pelatihan terpadu: Mekanik, Security (Garda Pratama), hingga Digital Marketing. Sertifikasi resmi untuk jenjang karir profesional.',
    icon: <Award size={32} />,
    cta: 'Jadwal Pelatihan',
    color: 'text-[#D4AF37]',
    bgGradient: 'from-amber-900/40 to-black',
  },
];

export default function ProgramSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % programs.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length);

  // GSAP Animations
  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animate Slide Content Change
      tl.fromTo(
        '.slide-content-anim',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );

      // Animate Background transition
      gsap.to('.slide-bg-anim', {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.to('.slide-bg-anim', { opacity: 1, duration: 0.5 });
        },
      });
    },
    { scope: containerRef, dependencies: [activeIndex] }
  );

  // Initial Scroll Trigger
  useGSAP(
    () => {
      gsap.from('.program-header', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
      gsap.from('.slider-container', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#0a0a0a] overflow-hidden border-t border-[#333]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="program-header flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs">
                Program Unggulan
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl text-white uppercase font-bold leading-tight">
              Pilar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-600">
                Pergerakan
              </span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="group w-12 h-12 border border-[#333] hover:border-[#D4AF37] flex items-center justify-center transition-colors bg-black/50"
            >
              <ChevronLeft className="text-gray-400 group-hover:text-[#D4AF37]" />
            </button>
            <button
              onClick={nextSlide}
              className="group w-12 h-12 border border-[#333] hover:border-[#D4AF37] flex items-center justify-center transition-colors bg-black/50"
            >
              <ChevronRight className="text-gray-400 group-hover:text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* MAIN SLIDER AREA */}
        <div className="slider-container grid lg:grid-cols-12 border border-white/10 bg-[#0f0f0f] relative min-h-[500px]">
          {/* Left: Content (Col 7) */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Dynamic Background Gradient */}
            <div
              className={`slide-bg-anim absolute inset-0 bg-gradient-to-br ${programs[activeIndex].bgGradient} opacity-20 pointer-events-none`}
            ></div>

            <div className="relative z-10">
              <div className="slide-content-anim flex items-center gap-4 mb-6">
                <div
                  className={`p-3 bg-black/50 border border-white/10 ${programs[activeIndex].color}`}
                >
                  {programs[activeIndex].icon}
                </div>
                <span
                  className={`font-oswald text-xl uppercase tracking-widest ${programs[activeIndex].color}`}
                >
                  {programs[activeIndex].subtitle}
                </span>
              </div>

              <h3 className="slide-content-anim font-oswald text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
                {programs[activeIndex].title}
              </h3>

              <p className="slide-content-anim font-sans text-gray-400 text-lg leading-relaxed mb-10 max-w-xl border-l-2 border-white/10 pl-6">
                {programs[activeIndex].description}
              </p>

              <button className="slide-content-anim group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
                {programs[activeIndex].cta} <ArrowUpRight size={20} />
              </button>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#D4AF37]/20"></div>
          </div>

          {/* Right: Navigation List (Col 5) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#050505]">
            {programs.map((prog, idx) => (
              <button
                key={prog.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left p-6 border-b border-white/5 flex items-center gap-4 group transition-all duration-300 relative overflow-hidden ${
                  activeIndex === idx ? 'bg-[#111]' : 'hover:bg-[#0a0a0a]'
                }`}
              >
                {/* Active Indicator Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                    activeIndex === idx
                      ? 'bg-[#D4AF37]'
                      : 'bg-transparent group-hover:bg-[#333]'
                  }`}
                ></div>

                <span
                  className={`font-oswald text-2xl font-bold opacity-30 group-hover:opacity-100 transition-opacity ${
                    activeIndex === idx
                      ? 'text-[#D4AF37] opacity-100'
                      : 'text-gray-500'
                  }`}
                >
                  0{idx + 1}
                </span>

                <div className="flex-1">
                  <h4
                    className={`font-oswald text-lg uppercase transition-colors ${
                      activeIndex === idx
                        ? 'text-white'
                        : 'text-gray-500 group-hover:text-white'
                    }`}
                  >
                    {prog.title}
                  </h4>
                </div>

                {activeIndex === idx && (
                  <ArrowUpRight
                    className="text-[#D4AF37] animate-pulse"
                    size={20}
                  />
                )}
              </button>
            ))}

            {/* Tactical Info Box at bottom of list */}
            <div className="p-8 mt-auto hidden lg:block">
              <div className="text-xs text-gray-600 font-mono space-y-2">
                <p>SYS.STATUS: ONLINE</p>
                <p>MODULE: GRIB_ECO_V.2.4</p>
                <p>ENCRYPTION: SECURE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
