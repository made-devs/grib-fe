'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Radio, Signal } from 'lucide-react';

export default function MediaHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from('.hero-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      })
        .from('.hero-title span', {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
        })
        .from('.hero-desc', { x: -30, opacity: 0, duration: 0.8 }, '-=0.5');
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[50vh] min-h-[400px] flex items-center bg-[#050505] overflow-hidden pt-20 border-b border-[#333]"
    >
      {/* Background Glitchy Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <div className="hero-badge inline-flex items-center gap-3 mb-6 border border-green-900/50 bg-green-900/10 px-4 py-1 rounded-full">
            <Signal size={16} className="text-green-500 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-green-500">
              Live Signal Detected
            </span>
          </div>

          <h1 className="hero-title font-oswald text-6xl md:text-8xl font-bold text-white uppercase leading-[0.9] mb-8">
            <span className="inline-block">Pusat</span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-700">
              Media
            </span>
          </h1>

          <p className="hero-desc text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l-4 border-[#D4AF37] pl-6">
            Arsip digital pergerakan GRIB Jaya. Dari dokumentasi lapangan,
            edukasi hukum, hingga tren media sosial nasional.
          </p>
        </div>
      </div>
    </section>
  );
}
