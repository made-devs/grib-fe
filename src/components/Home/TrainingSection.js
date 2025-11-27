'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Wrench,
  Shield,
  Video,
  Brain,
  BookOpen,
  Users,
  Cpu,
  ArrowRight,
  Crosshair,
} from 'lucide-react';

const trainings = [
  {
    id: 1,
    title: 'Master Mechanic',
    provider: 'TJM Group',
    category: 'TECHNICAL',
    icon: <Wrench size={24} />,
    desc: 'Pelatihan intensif mesin mobil & motor, kelistrikan, hingga manajemen bengkel mandiri.',
    level: 'Hard Skill',
    demand: 90,
  },
  {
    id: 2,
    title: 'Tactical Security',
    provider: 'Sentinel x Range 19 USA',
    category: 'TACTICAL',
    icon: <Shield size={24} />,
    desc: 'Standar pengamanan internasional. VIP Bodyguard, Crowd Control, dan bela diri taktis.',
    level: 'Physical',
    demand: 95,
    special: true, // Highlight Range 19 USA
  },
  {
    id: 3,
    title: 'Live Commerce',
    provider: 'Pasticuan Group',
    category: 'DIGITAL',
    icon: <Video size={24} />,
    desc: 'Teknik live streaming, setup studio, dan psikologi penjualan untuk dominasi pasar online.',
    level: 'Soft Skill',
    demand: 85,
  },
  {
    id: 4,
    title: 'Sparepart Specialist',
    provider: 'Naga Autopart',
    category: 'BUSINESS',
    icon: <Cpu size={24} />,
    desc: 'Pengetahuan mendalam komponen otomotif, manajemen stok, dan strategi distribusi part.',
    level: 'Technical',
    demand: 80,
  },
  {
    id: 5,
    title: 'Debt Recovery',
    provider: 'GRIB Legal',
    category: 'TACTICAL',
    icon: <Users size={24} />,
    desc: 'Teknik negosiasi dan pemulihan aset sesuai koridor hukum dan SOP profesional.',
    level: 'Mediation',
    demand: 88,
  },
  {
    id: 6,
    title: 'AI & Future Tech',
    provider: 'GRIB Academy',
    category: 'DIGITAL',
    icon: <Brain size={24} />,
    desc: 'Pemanfaatan Artificial Intelligence untuk efisiensi bisnis dan administrasi organisasi.',
    level: 'Advanced',
    demand: 75,
  },
];

export default function TrainingSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Entrance Animation Stagger
      gsap.from('.training-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // 2. Marquee Animation (Text berjalan di background)
      gsap.to('.bg-marquee', {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#080808] overflow-hidden border-t border-[#333]"
    >
      {/* Background Marquee Text */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <div className="bg-marquee whitespace-nowrap font-oswald text-9xl font-bold text-white flex gap-10">
          <span>SKILL UPGRADE</span>
          <span>CERTIFICATION</span>
          <span>PROFESSIONAL</span>
          <span>SKILL UPGRADE</span>
          <span>CERTIFICATION</span>
          <span>PROFESSIONAL</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crosshair
                size={16}
                className="text-[#D4AF37] animate-spin-slow"
              />
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs">
                Pusat Diklat
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase leading-none">
              Pilih{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-600">
                Keahlianmu
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md text-right border-r-2 border-[#D4AF37] pr-4 hidden md:block">
            Tingkatkan nilai diri dengan sertifikasi resmi. Semua program
            dirancang oleh praktisi ahli di bidangnya.
          </p>
        </div>

        {/* Training Grid (Modules) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((item) => (
            <div
              key={item.id}
              className="training-card group relative bg-[#111] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 p-6 flex flex-col h-full overflow-hidden"
            >
              {/* Scan Line Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 pointer-events-none"></div>

              {/* Top Badge */}
              <div className="flex justify-between items-start mb-6">
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded border ${
                    item.category === 'TACTICAL'
                      ? 'text-red-500 border-red-900 bg-red-900/20'
                      : item.category === 'TECHNICAL'
                      ? 'text-blue-500 border-blue-900 bg-blue-900/20'
                      : item.category === 'DIGITAL'
                      ? 'text-cyan-500 border-cyan-900 bg-cyan-900/20'
                      : 'text-gray-400 border-gray-700 bg-gray-800'
                  }`}
                >
                  {item.category}
                </span>
                {item.special && (
                  <span className="text-[9px] font-bold text-[#D4AF37] border border-[#D4AF37] px-1 bg-[#D4AF37]/10 animate-pulse">
                    PREMIUM
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 group-hover:text-[#D4AF37] transition-colors text-gray-300">
                  <div className="p-2 bg-black border border-white/10 rounded group-hover:border-[#D4AF37]">
                    {item.icon}
                  </div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-mono text-gray-500 mb-2">
                  PROVIDER: {item.provider}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Stats / Footer */}
              <div className="pt-4 border-t border-white/5 mt-auto">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span>Market Demand</span>
                  <span className="text-[#D4AF37]">{item.demand}%</span>
                </div>
                {/* Progress Bar Simulation */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#D4AF37]"
                    style={{ width: `${item.demand}%` }}
                  ></div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-[#D4AF37] transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-[#D4AF37] transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-16 flex justify-center">
          <div className="relative group cursor-pointer">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            {/* Button */}
            <button className="relative px-8 py-4 bg-black border border-[#D4AF37] rounded-lg leading-none flex items-center gap-4">
              <div className="text-left">
                <span className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">
                  Siap Berkembang?
                </span>
                <span className="block text-white font-oswald text-xl font-bold uppercase">
                  Daftar Pelatihan Sekarang
                </span>
              </div>
              <div className="w-10 h-10 bg-[#D4AF37] text-black flex items-center justify-center rounded font-bold group-hover:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
