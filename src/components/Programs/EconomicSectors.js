'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Wrench,
  Zap,
  Globe,
  Smartphone,
  Shield,
  Radio,
  Settings,
  Box,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    id: 'tjm',
    title: 'TJM GROUP',
    subtitle: 'Otomotif & Bengkel',
    desc: 'Divisi teknis yang mencetak mekanik handal dan pengusaha bengkel. Fokus pada hard-skill mesin dan manajemen bisnis otomotif.',
    theme: 'red', // Theme identifier
    colorClass: 'text-red-500',
    bgClass: 'bg-red-500',
    borderClass: 'border-red-500',
    gradient: 'from-red-900/40 to-black',
    skills: [
      { name: 'Mekanik Mobil', icon: <Wrench size={18} />, level: 90 },
      { name: 'Mekanik Motor', icon: <Settings size={18} />, level: 85 },
      { name: 'AC & Electrical', icon: <Zap size={18} />, level: 80 },
      { name: 'Manajemen Bengkel', icon: <Box size={18} />, level: 75 },
    ],
    cta: 'Daftar Pelatihan TJM Group',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80',
  },
  {
    id: 'pasticuan',
    title: 'PASTICUAN',
    subtitle: 'Import & Digital',
    desc: 'Gerbang bisnis global. Membuka akses produk impor termurah langsung dari pabrik China dan strategi dominasi pasar digital.',
    theme: 'cyan',
    colorClass: 'text-cyan-500',
    bgClass: 'bg-cyan-500',
    borderClass: 'border-cyan-500',
    gradient: 'from-cyan-900/40 to-black',
    skills: [
      { name: 'Import Mastery', icon: <Globe size={18} />, level: 85 },
      { name: 'Live Streaming', icon: <Radio size={18} />, level: 95 },
      { name: 'Marketplace Ads', icon: <Smartphone size={18} />, level: 90 },
      { name: 'Dropship System', icon: <Box size={18} />, level: 100 },
    ],
    cta: 'Jadi Reseller Produk Impor',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
  },
  {
    id: 'sentinel',
    title: 'SENTINEL',
    subtitle: 'Security & Taktis',
    desc: 'Satuan pengamanan elite. Bekerja sama dengan Range 19 USA untuk standar internasional dalam proteksi VIP dan pengamanan aset.',
    theme: 'gold',
    colorClass: 'text-[#D4AF37]',
    bgClass: 'bg-[#D4AF37]',
    borderClass: 'border-[#D4AF37]',
    gradient: 'from-yellow-900/40 to-black',
    skills: [
      { name: 'Garda Pratama', icon: <Shield size={18} />, level: 100 },
      { name: 'VIP Bodyguard', icon: <Shield size={18} />, level: 95 },
      { name: 'Crowd Control', icon: <Shield size={18} />, level: 90 },
      { name: 'Debt Recovery', icon: <Shield size={18} />, level: 85 },
    ],
    cta: 'Daftar Pelatihan Security',
    badge: 'RANGE 19 USA PARTNER',
    image:
      'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?auto=format&fit=crop&q=80',
  },
  {
    id: 'naga',
    title: 'NAGA AUTOPARTS',
    subtitle: 'Sparepart & Supply',
    desc: 'Rantai pasok suku cadang nasional. Memberikan akses harga distributor tangan pertama untuk memberdayakan UMKM bengkel.',
    theme: 'orange',
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-500',
    borderClass: 'border-orange-500',
    gradient: 'from-orange-900/40 to-black',
    skills: [
      { name: 'Parts Knowledge', icon: <Settings size={18} />, level: 80 },
      { name: 'Supply Chain', icon: <Box size={18} />, level: 85 },
      { name: 'Toko Sparepart', icon: <Box size={18} />, level: 90 },
      { name: 'Sales Strategy', icon: <TrendingUp size={18} />, level: 88 },
    ],
    cta: 'Buka Toko Sparepart',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
  },
];

export default function EconomicSectors() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animate Sector Cards on Scroll
      const sectors = gsap.utils.toArray('.sector-row');

      sectors.forEach((sector, i) => {
        gsap.from(sector.querySelector('.sector-content'), {
          scrollTrigger: {
            trigger: sector,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
          x: -50,
          opacity: 0,
          duration: 1,
        });

        gsap.from(sector.querySelector('.sector-visual'), {
          scrollTrigger: {
            trigger: sector,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
          scale: 0.9,
          opacity: 0,
          duration: 1,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] relative">
      {sectors.map((sector, idx) => (
        <div
          key={idx}
          className="sector-row min-h-screen flex items-center py-20 border-t border-[#333] relative overflow-hidden"
        >
          {/* Background Glow */}
          <div
            className={`absolute top-0 right-0 w-full h-full bg-gradient-to-l ${sector.gradient} opacity-10 pointer-events-none`}
          ></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                idx % 2 === 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              }`}
            >
              {/* CONTENT SIDE */}
              <div
                className={`sector-content ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                {/* Header */}
                <div className="mb-8">
                  <span
                    className={`inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider border rounded bg-black/50 ${sector.colorClass} ${sector.borderClass}`}
                  >
                    SECTOR 0{idx + 1} // {sector.subtitle}
                  </span>
                  <h2 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-none mb-6">
                    {sector.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-[#333] pl-6">
                    {sector.desc}
                  </p>
                  {sector.badge && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37] rounded text-[#D4AF37] text-xs font-bold uppercase animate-pulse">
                      <Shield size={12} /> {sector.badge}
                    </div>
                  )}
                </div>

                {/* Skill Loadout Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {sector.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-[#151515] border border-white/5 p-4 rounded group hover:border-white/20 transition-colors"
                    >
                      <div
                        className={`flex items-center gap-2 mb-2 ${sector.colorClass}`}
                      >
                        {skill.icon}
                        <span className="font-bold uppercase text-xs tracking-wider">
                          {skill.name}
                        </span>
                      </div>
                      {/* Progress Bar Decor */}
                      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${sector.bgClass}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`group relative px-8 py-4 bg-transparent border ${sector.borderClass} ${sector.colorClass} font-bold uppercase tracking-widest overflow-hidden hover:text-black transition-colors`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {sector.cta} <ArrowRight size={20} />
                  </span>
                  <div
                    className={`absolute inset-0 ${sector.bgClass} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0`}
                  ></div>
                </button>
              </div>

              {/* VISUAL SIDE */}
              <div
                className={`sector-visual ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                } relative`}
              >
                <div className="aspect-[4/5] md:aspect-square relative rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />

                  {/* Overlay UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                  {/* Corner HUD */}
                  <div
                    className={`absolute top-4 right-4 ${sector.colorClass}`}
                  >
                    <CheckCircle2 size={32} />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                      <div>
                        <p className="text-gray-500 text-xs font-mono mb-1">
                          PROGRAM STATUS
                        </p>
                        <p className="text-white font-bold uppercase">
                          OPEN REGISTRATION
                        </p>
                      </div>
                      <div
                        className={`font-oswald text-4xl font-bold opacity-20 ${sector.colorClass}`}
                      >
                        0{idx + 1}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`h-1 flex-1 rounded-full ${
                            dot <= 3 ? sector.bgClass : 'bg-gray-800'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Backdrop Box */}
                <div
                  className={`absolute -inset-4 border-2 ${sector.borderClass} opacity-20 rounded-xl -z-10 translate-x-4 translate-y-4`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
