'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Phone, MessageCircle, Search, Crosshair } from 'lucide-react';

// Dynamic Import Map (Reuse TacticalMap)
const TacticalMap = dynamic(() => import('@/components/Home/TacticalMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#111] animate-pulse flex items-center justify-center text-xs font-mono text-gray-500">
      LOADING SATELIT...
    </div>
  ),
});

const dpdList = [
  {
    id: 1,
    city: 'DKI JAKARTA',
    address: 'Jl. Hercules Raya No. 1, Jakbar',
    phone: '0812-xxxx-xxxx',
    status: 'ONLINE',
    coords: [-6.1754, 106.8272],
  },
  {
    id: 2,
    city: 'JAWA BARAT',
    address: 'Jl. Asia Afrika, Bandung',
    phone: '0813-xxxx-xxxx',
    status: 'ONLINE',
    coords: [-6.9215, 107.6101],
  },
  {
    id: 3,
    city: 'JAWA TENGAH',
    address: 'Jl. Pemuda, Semarang',
    phone: '0857-xxxx-xxxx',
    status: 'BUSY',
    coords: [-6.9685, 110.4208],
  },
  {
    id: 4,
    city: 'JAWA TIMUR',
    address: 'Jl. Darmo, Surabaya',
    phone: '0811-xxxx-xxxx',
    status: 'ONLINE',
    coords: [-7.2654, 112.7416],
  },
  {
    id: 5,
    city: 'BALI',
    address: 'Jl. Sunset Road, Kuta',
    phone: '0821-xxxx-xxxx',
    status: 'ONLINE',
    coords: [-8.4095, 115.1889],
  },
  {
    id: 6,
    city: 'SUMATERA UTARA',
    address: 'Jl. Gatot Subroto, Medan',
    phone: '0812-xxxx-xxxx',
    status: 'ONLINE',
    coords: [3.5852, 98.6738],
  },
];

export default function LBHLocator() {
  const [selectedLoc, setSelectedLoc] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = dpdList.filter((d) =>
    d.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 bg-[#0a0a0a] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="font-oswald text-4xl text-white uppercase font-bold">
              Lokasi <span className="text-[#D4AF37]">Posko LBH</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Temukan kantor DPD terdekat untuk konsultasi langsung.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari Provinsi / Kota..."
              className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 pl-10 rounded focus:border-[#D4AF37] outline-none font-sans"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search
              className="absolute left-3 top-3.5 text-gray-500"
              size={18}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-[600px]">
          {/* CONTACT LIST (LEFT) */}
          <div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar h-full">
            {filtered.map((dpd) => (
              <div
                key={dpd.id}
                onClick={() => setSelectedLoc(dpd)}
                className={`p-5 rounded-lg border cursor-pointer transition-all ${
                  selectedLoc?.id === dpd.id
                    ? 'bg-[#D4AF37]/10 border-[#D4AF37]'
                    : 'bg-[#111] border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-oswald text-xl text-white font-bold">
                    {dpd.city}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                      dpd.status === 'ONLINE'
                        ? 'text-green-500 border-green-900 bg-green-900/20'
                        : 'text-yellow-500 border-yellow-900 bg-yellow-900/20'
                    }`}
                  >
                    {dpd.status}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-gray-400 text-xs mb-4">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <p>{dpd.address}</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center gap-2 bg-[#D4AF37] text-black py-2 text-xs font-bold uppercase rounded hover:bg-white transition-colors">
                    <MessageCircle size={14} /> WhatsApp
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-[#333] text-gray-300 py-2 text-xs font-bold uppercase rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                    <Phone size={14} /> Call
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MAP (RIGHT) */}
          <div className="lg:col-span-8 bg-[#111] border border-white/10 rounded-xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-[400] bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10">
              <span className="text-[10px] text-[#D4AF37] font-mono flex items-center gap-2">
                <Crosshair size={12} className="animate-spin-slow" /> LIVE
                TRACKING
              </span>
            </div>
            <TacticalMap
              locations={dpdList}
              selectedLocation={selectedLoc}
              onMarkerClick={setSelectedLoc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
