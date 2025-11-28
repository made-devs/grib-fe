/* eslint-disable @next/next/no-img-element */
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Users,
  Building2,
} from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // 1. Initial State Set
      gsap.set('.hero-mask-text', { y: '100%' });
      gsap.set('.hero-fade', { opacity: 0, y: 20 });
      gsap.set('.hero-image-clip', {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      });
      gsap.set('.stat-item', { opacity: 0, x: -20 });

      // 2. Animation Sequence
      tl.to('.hero-image-clip', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'expo.inOut',
      })
        .to(
          '.hero-mask-text',
          {
            y: '0%',
            duration: 1.2,
            stagger: 0.15,
          },
          '-=1'
        )
        .to(
          '.hero-fade',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          '-=0.8'
        )
        .to(
          '.stat-item',
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.5'
        );

      // Parallax Effect for Background Logo
      gsap.to('.bg-hero-logo', {
        y: 150,
        rotation: 15, // Sedikit rotasi biar dinamis
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center pt-20 lg:pt-0"
    >
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a] opacity-90"></div>

      {/* 3. Giant Parallax Logo (Ganti Text dengan Logo) */}
      <div className="absolute top-1/4 -left-20 pointer-events-none select-none z-0">
        <img
          src="/logo.webp"
          alt="GRIB Logo Siluet"
          className="bg-hero-logo w-[80vw] md:w-[50vw] opacity-5 filter grayscale invert brightness-50"
        />
      </div>

      {/* 4. Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-[10%] w-px h-full bg-linear-to-b from-transparent via-[#D4AF37] to-transparent"></div>
        <div className="absolute top-0 right-[10%] w-px h-full bg-linear-to-b from-transparent via-[#D4AF37] to-transparent"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: TEXT CONTENT (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Badge */}
            <div className="hero-fade inline-flex items-center gap-3 mb-8 pl-1">
              <div className="h-0.5 w-8 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-sans text-sm font-bold tracking-[0.3em] uppercase">
                Official Website
              </span>
            </div>

            {/* Main Headline (Masking) */}
            <div className="mb-8 relative">
              <div className="overflow-hidden">
                <h1 className="hero-mask-text font-oswald text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight uppercase">
                  Gabung
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-mask-text font-oswald text-6xl md:text-8xl font-bold text-[#D4AF37] leading-[0.9] tracking-tight uppercase drop-shadow-2xl">
                  GRIB JAYA
                </h1>
              </div>
              <div className="overflow-hidden mt-4">
                <p className="hero-mask-text font-oswald text-2xl md:text-3xl text-gray-400 uppercase tracking-widest font-light">
                  Jaminan Jadi{' '}
                  <span className="text-white font-bold">Pengusaha</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="hero-fade text-gray-400 text-lg leading-relaxed max-w-xl mb-10 border-l-2 border-[#333] pl-6">
              Membangun ekonomi rakyat, membuka lapangan kerja, dan menyediakan
              bantuan hukum satu komando untuk kedaulatan NKRI.
            </p>

            {/* CTA Buttons */}
            <div className="hero-fade flex flex-wrap gap-4 mb-16">
              <button className="group relative px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest overflow-hidden hover:text-white transition-colors">
                <span className="relative z-10 flex items-center gap-2">
                  Daftar Sekarang <ArrowRight size={20} />
                </span>
                <div className="absolute inset-0 bg-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
              </button>

              <button className="group px-8 py-4 border border-[#333] text-gray-300 font-bold uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-black/50 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <MapPin size={18} /> Cari LBH
                </span>
              </button>
            </div>

            {/* Stats Bar (Tactical Style) */}
            <div className="grid grid-cols-3 border-t border-white/10 pt-8 gap-8">
              {[
                { val: '34', label: 'Provinsi', icon: <Building2 size={16} /> },
                { val: '50K+', label: 'Anggota', icon: <Users size={16} /> },
                {
                  val: '100+',
                  label: 'Posko LBH',
                  icon: <ShieldCheck size={16} />,
                },
              ].map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                    {stat.icon}
                    <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                      {stat.label}
                    </span>
                  </div>
                  <div className="font-oswald text-3xl font-bold text-white">
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: VISUAL (Col 5) */}
          <div className="lg:col-span-5 relative h-full min-h-[500px] flex items-center justify-center lg:justify-end">
            {/* Main Image Frame */}
            <div className="hero-image-clip relative w-full aspect-3/4 max-w-md">
              {/* Image Itself */}
              <div className="absolute inset-0 bg-neutral-800">
                <img
                  src="/team1.webp"
                  alt="GRIB Jaya Hero"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                {/* Gold Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* TACTICAL HUD ELEMENTS (CSS Shapes) */}
              {/* Corner Top Left */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-[#D4AF37]"></div>
              {/* Corner Bottom Right */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-[#D4AF37]"></div>

              {/* Decorative Lines */}
              <div className="absolute top-10 -right-6 w-1 h-24 bg-[#333]"></div>
              <div className="absolute bottom-10 -left-6 w-1 h-24 bg-[#333]"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-md border border-white/10 border-l-4 border-l-[#D4AF37]">
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">
                  Status
                </p>
                <p className="text-white font-oswald text-xl uppercase">
                  Pendaftaran Dibuka
                </p>
                <div className="w-full bg-gray-800 h-0.5 mt-3 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-2/3 bg-[#D4AF37]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white">
          Scroll Down
        </span>
        <div className="w-px h-12 bg-linear-to-b from-[#D4AF37] to-transparent"></div>
      </div>
    </section>
  );
}
