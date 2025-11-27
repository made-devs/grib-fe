'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function AboutHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Parallax & Reveal
      const tl = gsap.timeline();

      tl.from('.hero-title-char', {
        y: 100,
        opacity: 0,
        stagger: 0.05,
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
      {/* Background Visual (Hercules High Contrast) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10"></div>
        {/* Placeholder image sosok Hercules/Massa */}
        <Image
          src="https://images.unsplash.com/photo-1552089123-2d26226fc2b7?auto=format&fit=crop&q=80"
          alt="GRIB Legacy"
          fill
          className="w-full h-full object-cover grayscale opacity-60"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Tactical Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37] bg-[#D4AF37]/10 mb-6">
            <div className="w-2 h-2 bg-[#D4AF37] animate-pulse"></div>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
              Profil Organisasi
            </span>
          </div>

          {/* Headline Split */}
          <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white uppercase leading-[0.9] mb-8">
            <div className="overflow-hidden">
              <span className="hero-title-char inline-block">Transformasi</span>
            </div>
            <div className="overflow-hidden text-[#D4AF37]">
              <span className="hero-title-char inline-block">Total</span>
            </div>
          </h1>

          <p className="hero-desc text-xl md:text-2xl text-gray-300 font-light border-l-4 border-[#D4AF37] pl-6 max-w-xl">
            &quot;Dari kekuatan jalanan menjadi garda terdepan kedaulatan
            ekonomi dan hukum bangsa.&quot;
          </p>

          <div className="hero-desc mt-8 font-mono text-xs text-gray-500">
            EST. 2011 // REFORMED 2019 // MODERNIZED 2024
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full border-l border-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-size-[20px_20px] pointer-events-none"></div>
    </section>
  );
}
