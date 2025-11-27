'use client';

import React, { useState, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShoppingCart, Star, Box, Tag, Truck } from 'lucide-react';

const products = [
  // MERCHANDISE
  {
    id: 1,
    name: 'Kemeja PDH Tactical',
    cat: 'MERCH',
    price: 250000,
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80',
    badge: 'OFFICIAL',
    stock: 'READY',
  },
  {
    id: 2,
    name: 'Topi Komando GRIB',
    cat: 'MERCH',
    price: 85000,
    img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80',
    badge: 'BEST SELLER',
    stock: 'LOW',
  },
  {
    id: 3,
    name: 'Jaket Bomber Loreng',
    cat: 'MERCH',
    price: 450000,
    img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80',
    badge: 'PREMIUM',
    stock: 'READY',
  },

  // IMPORT (Pasticuan)
  {
    id: 4,
    name: 'Drone Camera 4K',
    cat: 'IMPORT',
    price: 1200000,
    img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80',
    badge: 'PASTICUAN',
    stock: 'READY',
  },
  {
    id: 5,
    name: 'Smartwatch Rugged',
    cat: 'IMPORT',
    price: 350000,
    img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80',
    badge: 'IMPORT',
    stock: 'READY',
  },

  // SPAREPART (Naga)
  {
    id: 6,
    name: 'Oli Mesin Super 4L',
    cat: 'PARTS',
    price: 450000,
    img: 'https://images.unsplash.com/photo-1563720360172-67b8f3dcebb9?auto=format&fit=crop&q=80',
    badge: 'NAGA PARTS',
    stock: 'READY',
  },
  {
    id: 7,
    name: 'Kampas Rem Ceramic',
    cat: 'PARTS',
    price: 175000,
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
    badge: 'ORIGINAL',
    stock: 'READY',
  },

  // UMKM
  {
    id: 8,
    name: 'Kopi Robusta Lampung',
    cat: 'UMKM',
    price: 65000,
    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80',
    badge: 'MEMBER',
    stock: 'READY',
  },
];

const categories = [
  { label: 'Semua Item', val: 'ALL' },
  { label: 'Atribut Resmi', val: 'MERCH' },
  { label: 'Produk Impor', val: 'IMPORT' },
  { label: 'Sparepart', val: 'PARTS' },
  { label: 'UMKM Anggota', val: 'UMKM' },
];

export default function ProductGrid() {
  const [filter, setFilter] = useState('ALL');
  const containerRef = useRef(null);

  const filteredProducts = useMemo(() => {
    if (filter === 'ALL') return products;
    return products.filter((p) => p.cat === filter);
  }, [filter]);

  useGSAP(
    () => {
      gsap.fromTo(
        '.product-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    },
    { scope: containerRef, dependencies: [filter] }
  );

  return (
    <section ref={containerRef} className="py-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-[#333] pb-8">
          <div>
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
              Inventory
            </span>
            <h2 className="font-oswald text-4xl text-white uppercase font-bold">
              Katalog <span className="text-[#D4AF37]">Produk</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.val}
                onClick={() => setFilter(cat.val)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                  filter === cat.val
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'bg-[#111] text-gray-500 border-[#333] hover:border-[#D4AF37] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="product-card group bg-[#111] border border-white/10 rounded-lg overflow-hidden flex flex-col hover:border-[#D4AF37] transition-all duration-300 relative"
            >
              {/* Image Area */}
              <div className="aspect-square relative overflow-hidden bg-[#050505]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />

                {/* Badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded text-black uppercase ${
                      item.badge === 'OFFICIAL'
                        ? 'bg-[#D4AF37]'
                        : item.badge === 'PASTICUAN'
                        ? 'bg-cyan-500'
                        : item.badge === 'NAGA PARTS'
                        ? 'bg-orange-500'
                        : 'bg-white'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                  <button className="bg-[#D4AF37] text-black font-bold uppercase text-xs px-6 py-3 rounded flex items-center gap-2 hover:bg-white transition-colors">
                    <ShoppingCart size={16} /> Order Unit
                  </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-4 flex flex-col flex-1 border-t border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-bold uppercase leading-tight line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-auto pt-4 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                      PRICE / UNIT
                    </p>
                    <p className="text-[#D4AF37] font-mono text-lg font-bold">
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                      STOCK
                    </p>
                    <p
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        item.stock === 'READY'
                          ? 'text-green-500 border-green-900 bg-green-900/10'
                          : 'text-red-500 border-red-900'
                      }`}
                    >
                      {item.stock}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Footer Info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#333] pt-8">
          {[
            {
              label: 'Secure Payment',
              icon: <Tag size={16} />,
              desc: 'Enkripsi 256-bit',
            },
            {
              label: 'Fast Shipping',
              icon: <Truck size={16} />,
              desc: 'JNE / J&T / Sicepat',
            },
            {
              label: 'Garansi Resmi',
              icon: <Star size={16} />,
              desc: '7 Hari Tukar Baru',
            },
            {
              label: 'Packaging',
              icon: <Box size={16} />,
              desc: 'Standar Ekspor',
            },
          ].map((feat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-[#111] rounded border border-white/5"
            >
              <div className="text-[#D4AF37]">{feat.icon}</div>
              <div>
                <p className="text-white text-xs font-bold uppercase">
                  {feat.label}
                </p>
                <p className="text-gray-500 text-[10px]">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
