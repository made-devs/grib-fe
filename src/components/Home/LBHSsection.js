'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic'; // Penting untuk Leaflet di Next.js
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  MapPin,
  Search,
  Phone,
  Scale,
  AlertCircle,
  Crosshair,
} from 'lucide-react';

// Import Map secara dinamis (SSR False) agar tidak error saat build
const TacticalMap = dynamic(() => import('./TacticalMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] text-gray-500 font-mono text-sm animate-pulse">
      INITIALIZING TACTICAL MAP...
    </div>
  ),
});

// Data Dummy dengan Koordinat Asli
const locations = [
  {
    id: 1,
    city: 'Jakarta Pusat',
    address: 'Jl. Merdeka Barat No. 12',
    coords: [-6.1754, 106.8272],
    status: 'Online',
  },
  {
    id: 2,
    city: 'Bandung',
    address: 'Jl. Asia Afrika No. 88',
    coords: [-6.9215, 107.6101],
    status: 'Online',
  },
  {
    id: 3,
    city: 'Surabaya',
    address: 'Jl. Tunjungan Plaza Lt. 5',
    coords: [-7.2654, 112.7416],
    status: 'Busy',
  },
  {
    id: 4,
    city: 'Medan',
    address: 'Jl. Gatot Subroto No. 45',
    coords: [3.5852, 98.6738],
    status: 'Online',
  },
  {
    id: 5,
    city: 'Makassar',
    address: 'Jl. Pantai Losari No. 10',
    coords: [-5.1477, 119.4328],
    status: 'Online',
  },
  {
    id: 6,
    city: 'Denpasar',
    address: 'Jl. Raya Kuta No. 99',
    coords: [-8.7238, 115.1767],
    status: 'Online',
  },
];

export default function LBHSection() {
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLoc, setSelectedLoc] = useState(null); // State untuk lokasi terpilih

  useGSAP(
    () => {
      // Radar Scan Animation (Overlay Visual)
      gsap.to('.radar-line', {
        top: '100%',
        duration: 4,
        repeat: -1,
        ease: 'linear',
      });

      // UI Panel Reveal
      gsap.from('.lbh-panel', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  // Handle klik di list
  const handleLocationSelect = (loc) => {
    setSelectedLoc(loc);
  };

  // Filter list based on search
  const filteredLocations = locations.filter((loc) =>
    loc.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#050505] overflow-hidden border-t border-[#333]"
    >
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT PANEL: CONTROL (Col 4) */}
          <div className="lg:col-span-4 lbh-panel flex flex-col gap-6 h-full">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-900/20 border border-red-900/50 rounded text-red-500">
                <AlertCircle size={14} className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  LBH Command Center
                </span>
              </div>
              <h2 className="font-oswald text-4xl font-bold text-white uppercase leading-none mb-4">
                Pusat Bantuan <br />{' '}
                <span className="text-[#D4AF37]">Hukum</span>
              </h2>
            </div>

            {/* Search Box */}
            <div className="bg-[#111] p-4 border border-white/10 rounded-xl flex-1 flex flex-col">
              <div className="flex items-center gap-3 border-b border-[#333] pb-3 mb-4">
                <Search className="text-[#D4AF37]" size={20} />
                <input
                  type="text"
                  placeholder="Cari Kota / Provinsi..."
                  className="bg-transparent w-full text-white outline-none placeholder:text-gray-600 font-sans text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-2 max-h-[300px] lg:max-h-[400px] custom-scrollbar">
                {filteredLocations.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => handleLocationSelect(loc)}
                    className={`flex items-center justify-between p-3 rounded cursor-pointer transition-all border ${
                      selectedLoc?.id === loc.id
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]'
                        : 'bg-[#1a1a1a] border-transparent hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        size={16}
                        className={
                          selectedLoc?.id === loc.id
                            ? 'text-[#D4AF37]'
                            : 'text-gray-500'
                        }
                      />
                      <div>
                        <p
                          className={`font-bold text-sm ${
                            selectedLoc?.id === loc.id
                              ? 'text-white'
                              : 'text-gray-300'
                          }`}
                        >
                          {loc.city}
                        </p>
                        <p className="text-[10px] text-gray-500 truncate max-w-[120px]">
                          {loc.address}
                        </p>
                      </div>
                    </div>
                    {selectedLoc?.id === loc.id && (
                      <Crosshair
                        size={14}
                        className="text-[#D4AF37] animate-spin-slow"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hotline */}
            <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 p-4 rounded-xl shadow-lg flex items-center justify-between">
              <div>
                <p className="text-black font-bold text-[10px] uppercase tracking-widest">
                  Darurat Hukum?
                </p>
                <p className="text-black font-oswald text-2xl font-bold">
                  0800-GRIB-HELP
                </p>
              </div>
              <Phone className="text-black" size={20} />
            </div>
          </div>

          {/* RIGHT PANEL: LEAFLET MAP (Col 8) */}
          <div className="lg:col-span-8 relative min-h-[500px] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Tactical Overlays (Ditaruh di atas peta) */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_98%,#D4AF37_98%)] bg-[size:100%_100px] opacity-[0.03]"></div>

              {/* Radar Line */}
              <div className="radar-line absolute left-0 right-0 h-[1px] bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] opacity-30"></div>

              {/* Corner HUDs */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-white/10 p-3 rounded z-30">
                <div className="flex items-center gap-2 mb-1">
                  <Scale className="text-[#D4AF37]" size={14} />
                  <span className="text-[10px] uppercase text-gray-400 tracking-widest">
                    Active Cases
                  </span>
                </div>
                <p className="text-xl font-oswald font-bold text-white">
                  1,248
                </p>
              </div>

              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#D4AF37] bg-black/70 px-2 py-1 rounded border border-[#D4AF37]/20">
                <p>MAP_SOURCE: SATELIT_V2</p>
                <p>CONN: SECURE_ENCRYPTED</p>
              </div>
            </div>

            {/* THE MAP COMPONENT */}
            <div className="absolute inset-0 z-10">
              <TacticalMap
                locations={locations}
                selectedLocation={selectedLoc}
                onMarkerClick={handleLocationSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
