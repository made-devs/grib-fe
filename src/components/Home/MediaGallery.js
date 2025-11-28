'use client';

import React, { useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Play,
  Maximize2,
  Aperture,
  Radio,
  LayoutGrid,
  Film,
  Image as ImageIcon,
} from 'lucide-react';
import Image from 'next/image';

// --- DATA DUMMY ---
const allMedia = [
  // Videos
  {
    id: 1,
    type: 'VIDEO',
    src: '/team2.webp',
    title: 'Profil Organisasi 2024',
    cat: 'KEGIATAN',
    duration: '04:20',
  },
  // Photos
  {
    id: 2,
    type: 'FOTO',
    src: '/grib4.webp',
    title: 'Apel Akbar Satu Komando',
    cat: 'KEGIATAN',
  },
  {
    id: 3,
    type: 'FOTO',
    src: '/sentinel3.webp',
    title: 'Pelatihan Garda Pratama',
    cat: 'DIKLAT',
  },
  {
    id: 4,
    type: 'FOTO',
    src: '/sentinel2.webp',
    title: 'Pengamanan VVIP',
    cat: 'SENTINEL',
  },
  {
    id: 5,
    type: 'FOTO',
    src: '/tjm2.webp',
    title: 'Bengkel TJM Pusat',
    cat: 'TJM GROUP',
  },
  {
    id: 6,
    type: 'FOTO',
    src: '/pasticuan2.webp',
    title: 'Pelatihan Wirausaha Pasticuan',
    cat: 'PASTICUAN',
  },
];

const socialFeed = [
  {
    id: 1,
    platform: 'tiktok',
    views: '1.2M',
    desc: 'Cuplikan Pelatihan Garda Pratama @Sentinelforces',
  },
  {
    id: 2,
    platform: 'instagram',
    views: '45K',
    desc: 'Bakti Sosial GRIB Jaya Peduli Bencana',
  },
  {
    id: 3,
    platform: 'tiktok',
    views: '890K',
    desc: 'Keseruan Touring Nasional Satu Komando',
  },
  {
    id: 4,
    platform: 'youtube',
    views: '120K',
    desc: 'Podcast: Masa Depan Ekonomi Kerakyatan',
  },
];

export default function MediaGallery() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  // --- LOGIC FILTER MANUAL ---
  const filteredData = useMemo(() => {
    if (activeFilter === 'ALL') return allMedia;
    return allMedia.filter(
      (item) => item.type === activeFilter || item.cat === activeFilter
    );
  }, [activeFilter]);

  useGSAP(
    () => {
      // Animasi Stagger saat filter berubah
      gsap.fromTo(
        '.gallery-item-anim',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );

      // Social Feed Marquee
      gsap.to(scrollRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: 30,
        repeat: -1,
      });
    },
    { scope: containerRef, dependencies: [activeFilter] }
  ); // Re-run animasi saat filter berubah

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#050505] overflow-hidden border-t border-[#333]"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="media-title">
            <div className="inline-flex items-center gap-2 mb-2 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded bg-[#D4AF37]/5">
              <Aperture size={14} className="animate-spin-slow" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Dokumentasi Lapangan
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase leading-none">
              Lensa{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-amber-700">
                Pergerakan
              </span>
            </h2>
          </div>

          {/* TAB FILTER (MANUAL) */}
          <div className="flex gap-2 text-xs md:text-sm font-bold overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {[
              { label: 'SEMUA', val: 'ALL', icon: <LayoutGrid size={14} /> },
              { label: 'VIDEO', val: 'VIDEO', icon: <Film size={14} /> },
              { label: 'FOTO', val: 'FOTO', icon: <ImageIcon size={14} /> },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setActiveFilter(tab.val)}
                className={`
                   flex items-center gap-2 px-4 py-2 border rounded transition-all whitespace-nowrap
                   ${
                     activeFilter === tab.val
                       ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                       : 'bg-transparent text-gray-500 border-[#333] hover:border-[#D4AF37] hover:text-white'
                   }
                 `}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN LAYOUT (Manual Flex/Grid) --- */}
        {/* Featured Video Section (Always visible on ALL/VIDEO) */}
        {(activeFilter === 'ALL' || activeFilter === 'VIDEO') && (
          <div className="grid lg:grid-cols-12 gap-6 mb-8 h-auto lg:h-[500px]">
            {/* LEFT: MAIN VIDEO (8 Cols) - Height Full */}
            <div className="lg:col-span-8 h-[300px] lg:h-full video-frame relative group bg-[#111] border border-white/10 overflow-hidden rounded-sm">
              <Image
                src={allMedia[0].src}
                alt="Video Thumbnail"
                fill
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 900px) 100vw, 900px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-[#D4AF37]/90 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-[0_0_30px_#D4AF37]">
                  <Play size={32} fill="black" className="ml-1" />
                </button>
              </div>
              {/* HUD */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-white font-mono text-xs tracking-widest">
                  REC ● [LIVE FEED]
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-oswald text-xl md:text-2xl uppercase font-bold">
                    {allMedia[0].title}
                  </h3>
                  <p className="text-[#D4AF37] text-xs font-mono">
                    DURATION: {allMedia[0].duration}
                  </p>
                </div>
                <Maximize2
                  className="text-white hover:text-[#D4AF37] cursor-pointer"
                  size={20}
                />
              </div>
              {/* Brackets */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50"></div>
            </div>

            {/* RIGHT: SIDE LIST (4 Cols) - Flex Column agar fit height */}
            <div className="lg:col-span-4 flex flex-col gap-6 h-full">
              {/* Item 1 */}
              <div className="gallery-item-anim flex-1 relative group overflow-hidden border border-white/10 bg-[#111] min-h-[150px]">
                <Image
                  src={allMedia[1].src}
                  alt={allMedia[1].title}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 400px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-bold font-oswald uppercase text-lg">
                    {allMedia[1].title}
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="gallery-item-anim flex-1 relative group overflow-hidden border border-white/10 bg-[#111] min-h-[150px]">
                <Image
                  src={allMedia[2].src}
                  alt={allMedia[2].title}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 400px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-bold font-oswald uppercase text-lg">
                    {allMedia[2].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Grid (Tampil sisa data berdasarkan filter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.slice(activeFilter === 'ALL' ? 3 : 0).map((item) => (
            <div
              key={item.id}
              className="gallery-item-anim relative group aspect-4/3 overflow-hidden border border-white/10 bg-[#111]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 400px) 100vw, 400px"
              />
              <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 text-[#D4AF37] text-xs font-bold uppercase border border-[#D4AF37]/30">
                {item.cat}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-oswald text-lg uppercase leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL INTELLIGENCE STRIP (Marquee) */}
      <div className="relative border-y border-[#333] bg-[#0a0a0a] py-8 mt-16 overflow-hidden">
        {/* Label */}
        <div className="absolute left-0 top-0 bottom-0 bg-[#0a0a0a] z-20 px-4 md:px-12 flex items-center border-r border-[#333] shadow-[10px_0_20px_black]">
          <div className="flex flex-col items-center gap-1">
            <Radio className="text-red-500 animate-pulse" size={20} />
            <span className="text-[10px] text-gray-400 font-bold uppercase writing-mode-vertical">
              LIVE FEED
            </span>
          </div>
        </div>

        {/* Scrolling Content */}
        <div className="flex gap-6 pl-32 md:pl-48" ref={scrollRef}>
          {[...socialFeed, ...socialFeed].map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 w-64 aspect-9/16 bg-[#111] border border-white/10 rounded relative group overflow-hidden cursor-pointer hover:border-[#D4AF37] transition-colors"
            >
              {/* Fake Video BG */}
              <div className="absolute inset-0 bg-linear-to-b from-gray-800 to-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play
                  className="text-white opacity-50 group-hover:scale-125 transition-transform"
                  fill="white"
                  size={32}
                />
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black to-transparent">
                <div className="flex items-center justify-between mb-2">
                  {item.platform === 'tiktok' ? (
                    <span className="text-xs font-bold text-pink-500">
                      TikTok
                    </span>
                  ) : item.platform === 'instagram' ? (
                    <span className="text-xs font-bold text-purple-500">
                      IG Reels
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-red-500">
                      Youtube
                    </span>
                  )}
                  <span className="text-[10px] text-gray-300 flex items-center gap-1">
                    <Play size={10} /> {item.views}
                  </span>
                </div>
                <p className="text-white text-xs font-bold line-clamp-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
