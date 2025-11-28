'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  CreditCard,
  ArrowRight,
  Fingerprint,
  CheckCircle2,
  ShieldCheck,
  QrCode,
  Scan,
  Binary,
} from 'lucide-react';
import Image from 'next/image';

// DATA DUMMY ANGGOTA (Simulation Database)
const members = [
  {
    id: 'GRIB-001-JKT',
    name: 'H. HERCULES R.M.',
    rank: 'KETUA UMUM',
    status: 'COMMANDER',
    img: '/card1.webp', // Ganti dengan foto asli jika ada
  },
  {
    id: 'GRIB-024-JKT',
    name: 'H. Zulfikar',
    rank: 'SEKRETARIS JENDERAL',
    status: 'ACTIVE',
    img: '/card2.webp', // Ganti dengan foto asli jika ada
  },
  {
    id: 'GRIB-108-JKT',
    name: 'Dennis',
    rank: 'ANGGOTA PRATAMA',
    status: 'ACTIVE',
    img: '/card3.webp', // Ganti dengan foto asli jika ada
  },
  {
    id: 'GRIB-099-JKT',
    name: 'Herdinand Rosario',
    rank: 'ANGGOTA PRATAMA',
    status: 'ACTIVE',
    img: '/card4.webp', // Ganti dengan foto asli jika ada
  },
  {
    id: 'GRIB-132-JKT',
    name: 'Zack Lee',
    rank: 'ANGGOTA PRATAMA',
    status: 'ACTIVE',
    img: '/card5.webp', // Ganti dengan foto asli jika ada
  },
  {
    id: 'GRIB-155-JKT',
    name: 'Jordan Kilikily',
    rank: 'ANGGOTA PRATAMA',
    status: 'ACTIVE',
    img: '/card6.webp', // Ganti dengan foto asli jika ada
  },
];

export default function JoinCTA() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);

  // Auto-switch Member Data every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % members.length);
        setGlitch(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      // ... (Animasi GSAP sama seperti sebelumnya)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      tl.from('.cta-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.fromTo(
        '.id-card-mockup',
        { rotationY: -45, rotationX: 10, z: -200, opacity: 0 },
        {
          rotationY: -15,
          rotationX: 5,
          z: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
        }
      );

      gsap.to('.id-card-mockup', {
        y: -20,
        rotationY: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.scan-line', {
        top: '100%',
        duration: 2,
        repeat: -1,
        ease: 'linear',
      });
    },
    { scope: containerRef }
  );

  const currentMember = members[currentIndex];

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#D4AF37] overflow-hidden"
    >
      {/* ... (Background elements sama) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-[60%] h-full bg-linear-to-l from-black via-black/90 to-transparent skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: CONTENT & FORM (Sama seperti sebelumnya) */}
          <div className="order-2 lg:order-1">
            <div className="cta-content inline-flex items-center gap-2 mb-4 px-3 py-1 bg-black/10 border border-black/20 rounded-full">
              <ShieldCheck size={16} className="text-black" />
              <span className="text-xs font-bold uppercase tracking-widest text-black">
                Sistem Pendaftaran Online v2.0
              </span>
            </div>
            <h2 className="cta-content font-oswald text-5xl md:text-7xl font-bold text-black uppercase leading-[0.9] mb-6">
              Gabung <br />{' '}
              <span className="text-white drop-shadow-xl">Satu Komando</span>
            </h2>
            <p className="cta-content font-medium text-black/80 text-lg mb-8 max-w-md">
              Dapatkan KTA Digital eksklusif, akses prioritas pelatihan bisnis,
              dan perlindungan hukum. Data Anda terintegrasi langsung ke pusat
              komando.
            </p>
            <div className="cta-content grid grid-cols-2 gap-4 mb-8">
              {[
                'ID Card Digital (QR)',
                'Akses Modal Usaha',
                'Bantuan Hukum Gratis',
                'Seragam PDH Resmi',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-black" />
                  <span className="text-sm font-bold uppercase text-black/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="cta-content bg-black/90 p-6 rounded-xl border border-white/10 shadow-2xl relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-white/20 to-transparent rounded-xl blur opacity-20 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 block">
                    Quick Registration
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan No. WhatsApp / NIK"
                    className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3 rounded outline-none focus:border-[#D4AF37] transition-colors font-mono"
                  />
                </div>
                <button className="bg-[#D4AF37] text-black font-bold uppercase tracking-widest px-8 py-3 rounded hover:bg-white transition-colors flex items-center justify-center gap-2 mt-auto h-[50px]">
                  <Fingerprint size={20} /> Daftar <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-3 flex items-center gap-1">
                <ShieldCheck size={10} /> Data Anda terenkripsi (End-to-End
                Encryption).
              </p>
            </div>
          </div>

          {/* RIGHT: ID CARD VISUALIZATION */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
            <div
              ref={cardRef}
              className="id-card-mockup w-[320px] h-[500px] md:w-[380px] md:h-[580px] bg-[#0a0a0a] rounded-2xl border-2 border-[#D4AF37] relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Card Background Elements (Sama) */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/5 to-transparent -rotate-45 animate-shine pointer-events-none"></div>
              <div className="scan-line absolute left-0 right-0 h-0.5 bg-[#D4AF37] shadow-[0_0_15px_#D4AF37] z-50 opacity-80 pointer-events-none"></div>

              {/* Card Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* --- HEADER DENGAN LOGO HOLOGRAM --- */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    {/* Container untuk Logo Hologram */}
                    <div className="relative w-12 h-12 shrink-0">
                      {/* Layer Depan: Logo Utama Metallic */}
                      <Image
                        src="/logo.webp"
                        alt="GRIB Logo"
                        fill
                        className="relative z-10 object-contain brightness-150 contrast-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        sizes="48px"
                      />
                    </div>

                    {/* Teks Judul */}
                    <div>
                      <h3 className="font-oswald text-3xl font-bold text-white tracking-tighter leading-none">
                        GRIB<span className="text-[#D4AF37]">.</span>JAYA
                      </h3>
                      <p className="text-white/50 text-[8px] uppercase tracking-[0.3em] mt-1">
                        Republic of Indonesia
                      </p>
                    </div>
                  </div>

                  {/* QR Code (Tetap di kanan) */}
                  <div className="bg-white p-1 rounded">
                    <QrCode size={32} className="text-black" />
                  </div>
                </div>
                {/* ------------------------------------ */}

                {/* Photo Area, Member Details, Footer (Sama seperti sebelumnya) */}
                <div className="w-full aspect-4/5 bg-[#1a1a1a] rounded border border-[#333] mb-6 relative overflow-hidden group">
                  <Image
                    src={currentMember.img}
                    alt="Member"
                    fill
                    className={`w-full h-full object-cover transition-all duration-100 ${
                      glitch
                        ? 'opacity-50 blur-sm scale-105 grayscale'
                        : 'opacity-100 blur-0 scale-100 grayscale-0'
                    }`}
                  />
                  {glitch && (
                    <div className="absolute inset-0 bg-[#D4AF37]/20 flex items-center justify-center">
                      <Scan className="text-[#D4AF37] animate-spin" size={48} />
                    </div>
                  )}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-2 flex justify-center gap-2 border-t border-[#D4AF37]/50">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        glitch ? 'bg-red-500' : 'bg-green-500'
                      } animate-pulse mt-1`}
                    ></div>
                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest font-mono">
                      {glitch ? 'SEARCHING DB...' : currentMember.status}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase flex items-center gap-1">
                      <Binary size={10} /> Nama Lengkap
                    </p>
                    <p
                      className={`text-white font-bold text-xl uppercase truncate transition-all duration-100 ${
                        glitch ? 'text-[#D4AF37] opacity-50 blur-[1px]' : ''
                      }`}
                    >
                      {glitch ? '/// DECODING ///' : currentMember.name}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase">
                        ID Number
                      </p>
                      <p
                        className={`text-[#D4AF37] tracking-widest transition-all ${
                          glitch ? 'blur-[2px]' : ''
                        }`}
                      >
                        {currentMember.id}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase">
                        Rank / Jabatan
                      </p>
                      <p
                        className={`text-white text-xs font-bold transition-all ${
                          glitch ? 'blur-[2px]' : ''
                        }`}
                      >
                        {currentMember.rank}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-black text-xs shrink-0">
                    HJ
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-500 uppercase">
                      Disahkan Oleh
                    </p>
                    <Image
                      src="/logo.webp"
                      alt="Signature"
                      width={32}
                      height={16}
                      className="h-4 opacity-50 filter invert"
                      style={{ width: 'auto' }}
                    />
                    <p className="text-white font-bold text-[10px] uppercase font-oswald tracking-wider">
                      H. Hercules R.M.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/3 -left-1 w-2 h-12 bg-[#D4AF37] rounded-r shadow-[0_0_10px_#D4AF37]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
