'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function ProgramHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animasi persis sama dengan AboutHero untuk konsistensi 'Feel'
      tl.from('.hero-title-text', {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
      })
        .from(
          '.hero-desc',
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.hero-badge',
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '-=0.8'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[80vh] min-h-[600px] flex items-center bg-[#050505] overflow-hidden pt-20"
    >
      {/* 1. Background Visual (Architecture/Structure Theme) 
          Supaya match sama 'Arsenal', gue pake gambar struktur besi/bangunan yang solid.
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-transparent z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Business Structure"
          fill
          className="w-full h-full object-cover grayscale opacity-50"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          {/* 2. Tactical Badge (Konsisten dengan AboutHero) */}
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37] bg-[#D4AF37]/10 mb-6">
            <div className="w-2 h-2 bg-[#D4AF37] animate-pulse"></div>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
              Divisi Ekonomi
            </span>
          </div>

          {/* 3. Headline (Solid Gold, No Gradients) */}
          <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white uppercase leading-[0.9] mb-8">
            <div className="overflow-hidden">
              <span className="hero-title-text inline-block">Arsenal</span>
            </div>
            <div className="overflow-hidden text-[#D4AF37]">
              {/* Pake solid gold biar tegas kayak 'TOTAL' di AboutHero */}
              <span className="hero-title-text inline-block">Ekonomi</span>
            </div>
          </h1>

          {/* 4. Description (Border Left Style) */}
          <div className="hero-desc border-l-4 border-[#D4AF37] pl-6 max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              4 Pilar Bisnis Raksasa yang siap mengubah anggota GRIB Jaya
              menjadi pengusaha mandiri dan profesional.
            </p>
          </div>

          {/* 5. Footer Meta Data (Tambahan biar layout bawahnya ga kosong dibanding About) */}
          <div className="hero-desc mt-8 font-mono text-xs text-gray-500">
            SATU KOMANDO // SATU EKOSISTEM // JUTAAN PELUANG
          </div>
        </div>
      </div>

      {/* 6. Decorative Grid (Elemen wajib biar 'Satu Universe') */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full border-l border-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-size-[20px_20px] pointer-events-none"></div>
    </section>
  );
}
