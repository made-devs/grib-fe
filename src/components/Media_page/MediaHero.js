'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function MediaHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Sequence animasi disamakan dengan About, Program, Training & LBH Hero
      tl.from('.hero-title-char', {
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
      {/* 1. Background Visual (Media/Broadcast Theme) 
          Menggunakan image lensa kamera/production gear yang dramatic
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-transparent z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80"
          alt="Media Center"
          fill
          className="w-full h-full object-cover grayscale opacity-50"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          {/* 2. Tactical Badge (Konsisten: Kotak + Pulse) */}
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37] bg-[#D4AF37]/10 mb-6">
            <div className="w-2 h-2 bg-[#D4AF37] animate-pulse"></div>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
              Media & Informasi
            </span>
          </div>

          {/* 3. Headline (Solid Gold, No Gradients) */}
          <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white uppercase leading-[0.9] mb-8">
            <div className="overflow-hidden">
              <span className="hero-title-char inline-block">Pusat</span>
            </div>
            <div className="overflow-hidden text-[#D4AF37]">
              <span className="hero-title-char inline-block">Media</span>
            </div>
          </h1>

          {/* 4. Description (Border Left Style) */}
          <div className="hero-desc border-l-4 border-[#D4AF37] pl-6 max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Arsip digital pergerakan GRIB Jaya. Dari dokumentasi lapangan,
              edukasi hukum, hingga tren media sosial nasional.
            </p>
          </div>

          {/* 5. Footer Meta Data (Broadcast Style) */}
          <div className="hero-desc mt-8 font-mono text-xs text-gray-500">
            LIVE REPORT // DIGITAL ARCHIVE // PRESS RELEASE
          </div>
        </div>
      </div>

      {/* 6. Decorative Grid (Signature Element) */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full border-l border-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-size-[20px_20px] pointer-events-none"></div>
    </section>
  );
}
