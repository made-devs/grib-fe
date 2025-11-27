'use client';

import React, { useState, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Play,
  Image as ImageIcon,
  FileText,
  MapPin,
  Search,
} from 'lucide-react';

const mediaData = [
  // PUSAT
  {
    id: 1,
    type: 'VIDEO',
    cat: 'PUSAT',
    title: 'Apel Akbar Nasional 2024',
    location: 'Jakarta',
    img: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    type: 'FOTO',
    cat: 'PUSAT',
    title: 'Rapat Pleno DPP',
    location: 'Jakarta',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
  },

  // EDUKASI LBH
  {
    id: 3,
    type: 'VIDEO',
    cat: 'LBH',
    title: 'Edukasi: Mafia Tanah',
    location: 'Studio LBH',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    type: 'VIDEO',
    cat: 'LBH',
    title: 'SOP Pelaporan Polisi',
    location: 'Studio LBH',
    img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80',
  },

  // KEGIATAN DPD (Simulasi Sebaran)
  {
    id: 5,
    type: 'FOTO',
    cat: 'DPD',
    title: 'Bakti Sosial Banjir Demak',
    location: 'Jawa Tengah',
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    type: 'VIDEO',
    cat: 'DPD',
    title: 'Pelantikan Pengurus DPD',
    location: 'Jawa Barat',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    type: 'FOTO',
    cat: 'DPD',
    title: 'Pengamanan Pilkada Damai',
    location: 'Sumut',
    img: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    type: 'FOTO',
    cat: 'DPD',
    title: 'Jumat Berkah Pembagian Sembako',
    location: 'Sulsel',
    img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80',
  },
];

const filters = [
  { label: 'Semua', val: 'ALL' },
  { label: 'Video', val: 'VIDEO' },
  { label: 'Foto', val: 'FOTO' },
  { label: 'Edukasi Hukum', val: 'LBH' },
  { label: 'Kegiatan DPD', val: 'DPD' },
];

export default function MainGallery() {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const filteredItems = useMemo(() => {
    return mediaData.filter((item) => {
      const matchType =
        filter === 'ALL' ? true : item.type === filter || item.cat === filter;
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());
      return matchType && matchSearch;
    });
  }, [filter, search]);

  useGSAP(
    () => {
      gsap.fromTo(
        '.gallery-card',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
        }
      );
    },
    { scope: containerRef, dependencies: [filter, search] }
  );

  return (
    <section ref={containerRef} className="py-24 bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-[#333] pb-8">
          <div>
            <h2 className="font-oswald text-4xl text-white uppercase font-bold mb-4">
              Arsip <span className="text-[#D4AF37]">Dokumentasi</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.val}
                  onClick={() => setFilter(f.val)}
                  className={`px-4 py-2 text-xs font-bold uppercase rounded border transition-all ${
                    filter === f.val
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                      : 'bg-transparent border-[#333] text-gray-400 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Cari Kegiatan / Daerah..."
              className="w-full bg-[#111] border border-[#333] text-white pl-10 pr-4 py-3 rounded outline-none focus:border-[#D4AF37] transition-colors font-sans text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-500" size={16} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card group relative bg-[#111] border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-[#D4AF37] transition-colors"
            >
              {/* Aspect Ratio Wrapper */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  {item.type === 'VIDEO' ? (
                    <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                      <Play fill="black" size={16} />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ImageIcon fill="black" size={16} />
                    </div>
                  )}
                </div>

                {/* Top Badge */}
                <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-bold text-white uppercase border border-white/10">
                  {item.cat}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-1 text-[10px] text-[#D4AF37] mb-1 font-mono uppercase">
                  <MapPin size={10} /> {item.location}
                </div>
                <h3 className="font-oswald text-lg text-white font-bold uppercase leading-tight group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-mono">
            <p>DATA_NOT_FOUND // COBA KATA KUNCI LAIN</p>
          </div>
        )}
      </div>
    </section>
  );
}
