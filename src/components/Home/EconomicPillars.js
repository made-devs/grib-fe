'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Wrench,
  Globe,
  ShieldAlert,
  Settings,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const pillars = [
  {
    id: 'tjm',
    title: 'TJM Group',
    category: 'Otomotif & Bengkel',
    desc: 'Pusat pelatihan mekanik dan jaringan bengkel profesional. Mencetak tenaga ahli siap kerja dan pengusaha bengkel mandiri.',
    features: [
      'Pelatihan Mekanik Mobil/Motor',
      'Sertifikasi BNSP Otomotif',
      'Penyaluran Kerja Bengkel',
      'Setup Usaha Bengkel',
    ],
    icon: <Wrench size={32} />,
    color: 'text-red-500',
    borderColor: 'group-hover:border-red-500',
    bgGradient: 'from-red-900/20 to-black',
    image: '/tjm.webp',
  },
  {
    id: 'pasticuan',
    title: 'Pasticuan Group',
    category: 'Import & E-Commerce',
    desc: 'Gerbang bisnis import dan digital marketing. Akses langsung ke pabrik China dan pelatihan dominasi pasar online.',
    features: [
      'Akses Produk Import China',
      'Pelatihan Live Streaming',
      'Program Reseller & Dropship',
      'Manajemen E-Commerce',
    ],
    icon: <Globe size={32} />,
    color: 'text-cyan-500',
    borderColor: 'group-hover:border-cyan-500',
    bgGradient: 'from-cyan-900/20 to-black',
    image: '/pasticuan.webp',
  },
  {
    id: 'sentinel',
    title: 'Sentinel Group',
    category: 'Security & Taktis',
    desc: 'Penyedia jasa pengamanan profesional berstandar internasional. Solusi keamanan terpadu dari VIP hingga event besar.',
    features: [
      'Pelatihan Garda Pratama (Security)',
      'Pelatihan debt recovery',
      'Pelatihan bodyguard',
      'SOP keamanan acara dan event',
    ],
    icon: <ShieldAlert size={32} />,
    color: 'text-[#D4AF37]', // Gold for Sentinel
    borderColor: 'group-hover:border-[#D4AF37]',
    bgGradient: 'from-yellow-900/20 to-black',
    image: '/sentinel.webp',
  },
  {
    id: 'naga',
    title: 'Naga Autopart',
    category: 'Sparepart & Distribusi',
    desc: 'Distributor suku cadang kendaraan terlengkap. Mendukung UMKM dengan akses harga distributor tangan pertama.',
    features: [
      'Distribusi Sparepart Mobil',
      'Suplai Toko UMKM',
      'Suku Cadang Original',
      'Paket Usaha Toko Part',
    ],
    icon: <Settings size={32} />,
    color: 'text-orange-500',
    borderColor: 'group-hover:border-orange-500',
    bgGradient: 'from-orange-900/20 to-black',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
  },
];

export default function EconomicPillars() {
  const [activeId, setActiveId] = useState('sentinel'); // Default active: Sentinel
  const containerRef = useRef(null);

  // Initial animation
  useGSAP(
    () => {
      gsap.from('.pillar-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs">
              Ekosistem Bisnis
            </span>
          </div>
          <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white uppercase leading-none mb-6">
            4 Pilar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-700">
              Ekonomi
            </span>
          </h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl border-l-2 border-[#333] pl-4">
            Sinergi kekuatan bisnis GRIB Jaya untuk menciptakan lapangan kerja,
            peluang usaha, dan kemandirian finansial anggota.
          </p>
        </div>

        {/* Expandable Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
          {pillars.map((pillar) => {
            const isActive = activeId === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveId(pillar.id)}
                className={`
                  pillar-card group relative overflow-hidden rounded-xl border border-white/10 bg-[#111] 
                  transition-all duration-500 ease-out cursor-pointer
                  ${
                    isActive
                      ? 'lg:flex-[3] border-[#D4AF37] shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                      : 'lg:flex-[1] hover:border-white/30'
                  }
                `}
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 ${
                      isActive ? 'scale-110 grayscale-0' : 'grayscale scale-100'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${pillar.bgGradient} opacity-90 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                  {/* Top Icon (Always Visible) */}
                  <div
                    className={`absolute top-6 right-6 p-3 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive ? pillar.color : 'text-gray-500'
                    }`}
                  >
                    {pillar.icon}
                  </div>

                  {/* Vertical Text for Inactive State (Desktop Only) */}
                  <div
                    className={`hidden lg:block absolute bottom-8 left-8 origin-bottom-left -rotate-90 transition-opacity duration-300 ${
                      isActive
                        ? 'opacity-0 pointer-events-none'
                        : 'opacity-100 delay-300'
                    }`}
                  >
                    <h3 className="font-oswald text-2xl font-bold text-white uppercase whitespace-nowrap tracking-widest">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Main Content (Visible when Active) */}
                  <div
                    className={`flex flex-col gap-4 transition-all duration-500 ${
                      isActive
                        ? 'opacity-100 translate-y-0'
                        : 'lg:opacity-0 lg:translate-y-10'
                    }`}
                  >
                    {/* Title Area */}
                    <div>
                      <span
                        className={`inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider rounded bg-black/60 border border-white/10 ${pillar.color}`}
                      >
                        {pillar.category}
                      </span>
                      <h3 className="font-oswald text-3xl md:text-5xl font-bold text-white uppercase leading-none mb-2">
                        {pillar.title}
                      </h3>
                      <div
                        className={`h-1 w-24 ${pillar.color.replace(
                          'text',
                          'bg'
                        )} mt-2 mb-4`}
                      ></div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                      {pillar.desc}
                    </p>

                    {/* Feature List */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {pillar.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <CheckCircle2 size={16} className={pillar.color} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                      <button className="group/btn flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm hover:text-[#D4AF37] transition-colors">
                        Lihat Detail{' '}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </button>
                      {pillar.id === 'sentinel' && (
                        <span className="text-[10px] font-mono text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-1 bg-[#D4AF37]/10 rounded">
                          PARTNER: RANGE 19 USA
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tactical Corners */}
                <div
                  className={`absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 transition-colors duration-300 ${
                    isActive ? 'border-white/20' : 'border-transparent'
                  }`}
                ></div>
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 transition-colors duration-300 ${
                    isActive ? 'border-white/20' : 'border-transparent'
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
