'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Target, Shield, Briefcase, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const missions = [
  {
    title: 'Kemandirian Ekonomi',
    desc: 'Mencetak anggota menjadi pengusaha lewat ekosistem bisnis (TJM, Pasticuan, Naga Autopart).',
    icon: <Briefcase size={20} />,
  },
  {
    title: 'Supremasi Hukum',
    desc: 'LBH GRIB sebagai perisai hukum bagi masyarakat tertindas di 34 Provinsi.',
    icon: <Shield size={20} />,
  },
  {
    title: 'Solidaritas Nasional',
    desc: 'Satu komando menjaga kedaulatan NKRI dan nilai kebangsaan.',
    icon: <Target size={20} />,
  },
];

export default function AboutBrief() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // 1. Reveal Background Text (Parallax)
      gsap.to('.bg-text-grib', {
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // 2. Main Content Reveal
      tl.from('.reveal-text', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      }).from(
        '.mission-card',
        {
          x: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.4'
      );

      // 3. Image Clip Path Animation
      gsap.fromTo(
        '.about-image',
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.about-image-container',
            start: 'top 80%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* --- Background Assets --- */}
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay"></div>

      {/* Giant Background Typography */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 select-none pointer-events-none">
        <h1 className="bg-text-grib font-oswald text-[15rem] leading-none font-bold text-[#111] opacity-50 whitespace-nowrap">
          GRIB JAYA
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* --- Left Column: Narrative (5 Cols) --- */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-10">
            {/* Header Badge */}
            <div className="reveal-text inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs">
                Tentang Organisasi
              </span>
            </div>

            {/* Main Headline */}
            <h2
              ref={titleRef}
              className="reveal-text font-oswald text-5xl md:text-6xl font-bold text-white uppercase leading-[0.9] mb-8"
            >
              Transformasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D06B] to-[#D4AF37]">
                Total
              </span>
            </h2>

            {/* Content Paragraph */}
            <div className="reveal-text relative pl-6 border-l-2 border-[#333]">
              <p className="font-sans text-gray-400 text-lg leading-relaxed mb-6">
                Kami bukan sekadar massa. GRIB Jaya telah berevolusi menjadi{' '}
                <strong className="text-white">
                  kekuatan ekonomi dan sosial
                </strong>{' '}
                yang terstruktur.
              </p>
              <p className="font-sans text-gray-400 text-lg leading-relaxed">
                Dari perlindungan hukum hingga penciptaan lapangan kerja, kami
                hadir untuk memastikan setiap anggota memiliki masa depan yang
                bermartabat.
              </p>
            </div>

            {/* Signature / Authority Mark */}
            <div className="reveal-text mt-10 p-4 bg-[#111] border border-[#D4AF37]/20 w-fit">
              <p className="font-oswald text-[#D4AF37] text-sm uppercase tracking-widest">
                Satu Komando
              </p>
              <p className="text-white font-bold text-xl uppercase font-oswald">
                Hercules R.M.
              </p>
              <p className="text-xs text-gray-500 uppercase">Ketua Umum DPP</p>
            </div>
          </div>

          {/* --- Right Column: Visuals & Tactics (7 Cols) --- */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* 1. Hero Image with Clip Path */}
            <div className="about-image-container relative w-full aspect-[16/9] lg:aspect-[21/9] mb-4 group">
              {/* Image */}
              <div className="about-image w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                <img
                  src="/grib2.webp"
                  alt="Kegiatan GRIB"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37] z-20"></div>
            </div>

            {/* 2. Tactical Mission List */}
            <div className="grid gap-4">
              {missions.map((item, idx) => (
                <div
                  key={idx}
                  className="mission-card group relative bg-[#111] border border-white/5 p-6 hover:border-[#D4AF37]/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-5">
                    {/* Numbering styled as tactical index */}
                    <div className="font-oswald text-4xl font-bold text-[#222] group-hover:text-[#D4AF37]/20 transition-colors">
                      0{idx + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#D4AF37] opacity-80">
                          {item.icon}
                        </span>
                        <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors border-t border-white/10 pt-2 mt-2">
                        {item.desc}
                      </p>
                    </div>

                    <ChevronRight className="text-[#333] group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  {/* Hover Progress Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
