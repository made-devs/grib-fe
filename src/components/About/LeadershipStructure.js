'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { User, Shield, Users } from 'lucide-react';
import Image from 'next/image';

export default function LeadershipStructure() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.leader-card', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.stat-box', {
        scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    },
    { scope: containerRef }
  );

  const leaders = [
    {
      role: 'Ketua Dewan Pembina',
      name: 'H. Prabowo Subianto',
      img: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80',
      special: true,
    },
    {
      role: 'Ketua Umum',
      name: 'H. Hercules R.M.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      special: true,
    },
    {
      role: 'Sekretaris Jenderal',
      name: 'H. Zulfikar',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      special: false,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#050505] border-t border-[#333]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl text-white uppercase font-bold">
            Struktur <span className="text-[#D4AF37]">Komando</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Hierarki Kepemimpinan Pusat GRIB Jaya
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className={`leader-card relative group ${
                leader.special ? 'md:-mt-8' : ''
              }`}
            >
              <div
                className={`aspect-3/4 overflow-hidden border ${
                  leader.special ? 'border-[#D4AF37]' : 'border-white/10'
                } bg-[#111] relative`}
              >
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={leader.special}
                />

                {/* Name Plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-6 pt-20">
                  <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">
                    {leader.role}
                  </p>
                  <h3 className="text-white font-oswald text-2xl font-bold uppercase">
                    {leader.name}
                  </h3>
                </div>

                {/* Corner Accent */}
                {leader.special && (
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border border-white/10 bg-[#111]">
          {[
            { label: 'DPD Provinsi', val: '34', icon: <Shield size={20} /> },
            { label: 'DPC Kota/Kab', val: '514', icon: <Users size={20} /> },
            { label: 'Anggota Aktif', val: '50K+', icon: <User size={20} /> },
            { label: 'Tahun Berdiri', val: '13+', icon: <Shield size={20} /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-box text-center p-4 border-r last:border-r-0 border-white/5"
            >
              <div className="flex justify-center text-[#D4AF37] mb-2">
                {stat.icon}
              </div>
              <div className="font-oswald text-3xl text-white font-bold">
                {stat.val}
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
