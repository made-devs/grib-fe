'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Globe,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Factory,
  Scale,
} from 'lucide-react';
import Image from 'next/image';

export default function ChinaOutpost() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.global-item', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  const missionPoints = [
    {
      icon: <Factory size={20} />,
      title: 'Logistics Optimization',
      desc: 'Memotong jalur distribusi, memastikan efisiensi rantai pasok langsung dari pabrik China ke gudang GRIB.',
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Technology Scouting',
      desc: 'Menjembatani transfer teknologi dan investasi asing untuk modernisasi UMKM di Indonesia.',
    },
    {
      icon: <Scale size={20} />,
      title: 'Asset Protection',
      desc: 'Mengawal legalitas investasi dan menjamin kualitas barang impor Pasticuan Group.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#080808] border-t border-[#333] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="global-item inline-flex items-center gap-2 mb-4">
            <Globe size={20} className="text-red-500 animate-spin-slow" />
            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs">
              Jaringan Internasional
            </span>
          </div>
          <h2 className="global-item font-oswald text-4xl md:text-6xl font-bold text-white uppercase leading-none mb-4">
            Global{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">
              Command Bridge
            </span>
          </h2>
          <p className="global-item text-gray-400 text-lg max-w-3xl mx-auto border-l-4 border-[#333] pl-4">
            Cabang Tiongkok adalah hub logistik GRIB Jaya, memastikan
            konektivitas efisien dan kualitas produk impor untuk seluruh anggota
            di Indonesia.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: VISUAL (Generic Photos framed as Tactical Ops) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 global-item">
            {/* Photo 1: Team Photo -> Strategic Liaison Unit */}
            <div className="aspect-4/5 relative overflow-hidden rounded-lg border border-white/10 group flex items-center justify-center">
              {/* Gambar tim biasa dijadikan background */}
              <Image
                src="/team3.webp"
                alt="Strategic Liaison Unit"
                fill
                className="object-cover transition-all duration-700 opacity-70"
                style={{ objectPosition: 'center' }}
                sizes="(max-width: 600px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30"></div>

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur border border-cyan-500/50">
                <p className="text-cyan-500 text-[10px] font-mono uppercase mb-1">
                  UNIT STATUS: OPERATIONAL
                </p>
                <h3 className="text-white font-bold uppercase text-sm flex items-center gap-2">
                  <Users size={16} /> Strategic Liaison Team
                </h3>
              </div>
            </div>

            {/* Photo 2: Travel Photo -> Quality Control Inspection */}
            <div className="aspect-4/5 relative overflow-hidden rounded-lg border border-white/10 group flex items-center justify-center">
              {/* Gambar jalan-jalan dijadikan background */}
              <Image
                src="/team4.webp"
                alt="Quality Control Inspection"
                fill
                className="object-cover transition-all duration-700 opacity-70"
                style={{ objectPosition: 'center' }}
                sizes="(max-width: 600px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30"></div>

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur border border-white/30">
                <p className="text-white/50 text-[10px] font-mono uppercase mb-1">
                  MISSION: QUALITY CONTROL
                </p>
                <h3 className="text-white font-bold uppercase text-sm flex items-center gap-2">
                  <Shield size={16} /> Site Inspection & Vetting
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT: MISSION POINTS */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="global-item font-oswald text-3xl text-white uppercase font-bold border-l-4 border-red-500 pl-4 mb-8">
              Tugas <span className="text-white/80">Utama</span> Cabang Tiongkok
            </h3>

            {missionPoints.map((point, i) => (
              <div
                key={i}
                className="global-item flex gap-4 p-6 bg-[#111] border border-white/10 rounded-lg group hover:border-cyan-500 transition-colors"
              >
                <div className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-red-500 group-hover:border-cyan-500 transition-colors shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-oswald text-xl text-white uppercase font-bold mb-1 group-hover:text-cyan-500 transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
