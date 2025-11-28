'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  ShieldCheck,
  Utensils,
  Sprout,
  HardHat,
  CheckCircle2,
  Handshake,
} from 'lucide-react';
import Image from 'next/image';

const programs = [
  {
    id: 1,
    title: 'Makan Bergizi Gratis',
    desc: 'Mengawal distribusi program makan siang gratis agar tepat sasaran dan memberdayakan UMKM/katering lokal anggota GRIB.',
    icon: <Utensils size={24} />,
    code: 'MBG-2025',
  },
  {
    id: 2,
    title: 'Swasembada Pangan',
    desc: 'Mendukung ketahanan pangan nasional melalui optimalisasi lahan dan distribusi pupuk yang diawasi Satgas GRIB.',
    icon: <Sprout size={24} />,
    code: 'FOOD-SEC',
  },
  {
    id: 3,
    title: 'Hilirisasi Industri',
    desc: 'Menyiapkan SDM terampil dan bersertifikat (via TJM & Sentinel) untuk mengisi kebutuhan industri nasional.',
    icon: <HardHat size={24} />,
    code: 'IND-4.0',
  },
];

export default function GovernmentAlignment() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      tl.from('.align-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }).from(
        '.align-card',
        {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'back.out(1.2)',
        },
        '-=0.4'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#080808] border-y border-[#333] overflow-hidden"
    >
      {/* Background Flag Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-red-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 border border-[#D4AF37] rounded bg-[#D4AF37]/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
                  State Alignment
                </span>
              </div>
            </div>

            <h2 className="align-title font-oswald text-4xl md:text-6xl font-bold text-white uppercase leading-none mb-6">
              Mengawal <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-[#D4AF37]">
                Mandat Rakyat
              </span>
            </h2>

            <p className="align-title text-gray-400 text-lg leading-relaxed border-l-4 border-red-600 pl-6">
              GRIB Jaya tegak lurus dalam satu komando mendukung penuh
              pemerintahan
              <strong className="text-white"> Presiden Prabowo Subianto</strong>
              . Kami hadir bukan sebagai penonton, tapi sebagai garda terdepan
              eksekusi program kerakyatan.
            </p>
          </div>

          {/* Right Column: Alliance Card (Photo + Quote) */}
          <div className="align-title bg-[#111] border border-white/10 rounded-xl overflow-hidden relative group hover:border-[#D4AF37] transition-all duration-500 shadow-2xl">
            {/* 1. PHOTO PLACEHOLDER AREA */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>

              {/* TIPS: Ganti src gambar di bawah ini dengan foto asli Hercules & Prabowo.
                    Pastikan rasionya landscape (16:9) agar pas.
                */}
              <Image
                src="/grib5.webp"
                alt="Prabowo Subianto & Hercules"
                fill
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Gradient Overlay bawah agar teks terbaca */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-[#111] to-transparent z-10"></div>

              {/* Badge di atas foto */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                  <Handshake size={12} /> Strategic Alliance
                </span>
              </div>
            </div>

            {/* 2. QUOTE AREA */}
            <div className="p-8 relative z-20 -mt-6">
              <div className="absolute -top-10 right-8 text-[#D4AF37] bg-[#111] p-3 rounded-full border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>

              <p className="font-oswald text-xl text-white uppercase leading-relaxed mb-6 italic">
                &quot;Tidak ada alasan untuk tidak berkeringat. Semua harus
                kerja keras, kerja ikhlas, kerja tuntas untuk bangsa ini di
                bawah kepemimpinan Bapak Prabowo.&quot;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden border border-[#D4AF37] shrink-0">
                  {/* Placeholder Foto Hercules Kecil */}
                  <Image
                    src="/grib.webp"
                    alt="Hercules"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                    Komando Pusat
                  </p>
                  <p className="text-white font-bold text-sm">
                    H. Hercules R.M.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="align-card group relative bg-[#0f0f0f] border border-white/5 hover:border-[#D4AF37] p-6 rounded-lg transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-linear-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-black border border-white/10 rounded text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                    {prog.icon}
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 border border-gray-800 px-2 py-1 rounded">
                    {prog.code}
                  </span>
                </div>

                <h3 className="font-oswald text-xl text-white font-bold uppercase mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {prog.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {prog.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] text-green-500 font-bold uppercase tracking-wider">
                  <CheckCircle2 size={12} />
                  <span>Siap Didukung</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
