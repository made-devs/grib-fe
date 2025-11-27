'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Users,
  Scale,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Quote,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const missionPoints = [
  {
    id: 1,
    title: 'Kesejahteraan Rakyat',
    desc: 'Memperjuangkan hak rakyat kecil melalui bantuan sosial, pemberdayaan ekonomi riil, dan pendampingan hukum gratis bagi yang membutuhkan.',
    icon: <TrendingUp size={24} />,
  },
  {
    id: 2,
    title: 'Struktur Organisasi Solid',
    desc: 'Memperkuat komando dari pusat hingga daerah. Membangun sinergi internal yang kokoh dan satu komando yang tidak tergoyahkan.',
    icon: <Users size={24} />,
  },
  {
    id: 3,
    title: 'Keadilan Sosial',
    desc: 'Berdiri di garis depan untuk menegakkan keadilan bagi kaum terpinggirkan yang luput dari perhatian pemerintah.',
    icon: <Scale size={24} />,
  },
  {
    id: 4,
    title: 'Kemitraan Strategis',
    desc: 'Berkolaborasi dengan pemerintah, swasta, dan ormas lain untuk menciptakan program yang berdampak luas dan bermanfaat.',
    icon: <Handshake size={24} />,
  },
  {
    id: 5,
    title: 'Pengembangan SDM',
    desc: 'Mencetak pemimpin berintegritas melalui pendidikan, pelatihan, dan pembinaan karakter yang berlandaskan nilai kebangsaan.',
    icon: <Target size={24} />,
  },
  {
    id: 6,
    title: 'Garda Masyarakat',
    desc: 'Hadir aktif menjaga ketertiban, keamanan, dan menjalin hubungan harmonis melalui kegiatan sosial budaya.',
    icon: <ShieldCheck size={24} />,
  },
];

export default function VisiMisi() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      // 1. Vision Parallax & Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.vision-container',
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: 1,
        },
      });

      tl.from('.vision-word', {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: 'power4.out',
      });

      // 2. Mission Timeline Line Drawing
      gsap.fromTo(
        lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.mission-list',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );

      // 3. Mission Cards Activation
      const cards = gsap.utils.toArray('.mission-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.2, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 0.5,
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    // FIX: Menghapus 'overflow-hidden' agar sticky berfungsi
    <section
      ref={containerRef}
      className="relative bg-[#0a0a0a] py-24 border-t border-[#333]"
    >
      {/* Background Grid - Diberi absolute wrapper dengan overflow-hidden agar dekorasi tidak bocor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* --- PART 1: THE VISION (MANIFESTO) --- */}
        <div className="vision-container mb-32 flex flex-col md:flex-row gap-12 items-start">
          {/* Visual Icon */}
          <div className="hidden md:flex flex-col items-center gap-4 mt-4 text-[#D4AF37]">
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#D4AF37]"></div>
            <Quote size={40} className="text-[#D4AF37] fill-[#D4AF37]/20" />
            <div className="w-px h-20 bg-gradient-to-t from-transparent to-[#D4AF37]"></div>
          </div>

          {/* The Text */}
          <div className="flex-1">
            <div className="inline-block px-3 py-1 mb-6 border border-[#D4AF37]/30 rounded bg-[#D4AF37]/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Visi Organisasi
              </span>
            </div>

            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white mb-8">
              <span className="vision-word inline-block mr-3">Menjadi</span>
              <span className="vision-word inline-block mr-3">Organisasi</span>
              <span className="vision-word inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-600">
                Kuat,
              </span>
              <span className="vision-word inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-600">
                Mandiri,
              </span>
              <span className="vision-word inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-600">
                Berwibawa.
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl border-l-4 border-[#333] pl-6 italic">
              "Berperan aktif menjaga persatuan bangsa, memperjuangkan
              kesejahteraan rakyat, serta menjadi pelopor pemberdayaan
              masyarakat di berbagai bidang."
            </p>
          </div>
        </div>

        {/* --- PART 2: THE MISSION (SCROLL STORY) --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
          {/* Left Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            <div>
              <h3 className="font-oswald text-5xl font-bold text-white uppercase mb-4">
                6 Misi <br /> <span className="text-[#D4AF37]">Utama</span>
              </h3>
              <p className="text-gray-500 mb-8">
                Langkah strategis di bawah kepemimpinan H. Hercules RM untuk
                mewujudkan cita-cita besar organisasi.
              </p>

              {/* Decorative HUD */}
              <div className="p-4 bg-[#111] border border-white/10 rounded hidden lg:block">
                <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-2">
                  <span>STATUS</span>
                  <span className="text-green-500">ACTIVE</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#D4AF37] animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Scrolling List */}
          <div className="lg:w-2/3 mission-list relative pl-8 md:pl-12">
            {/* Connecting Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#333]">
              <div
                ref={lineRef}
                className="w-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"
              ></div>
            </div>

            <div className="space-y-12">
              {missionPoints.map((item, idx) => (
                <div key={item.id} className="mission-card relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 md:w-6 md:h-6 bg-[#0a0a0a] border-2 border-[#D4AF37] rounded-full flex items-center justify-center z-10">
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-[#D4AF37] rounded-full"></div>
                  </div>

                  {/* Card Content */}
                  <div className="group bg-[#111] border border-white/10 p-6 md:p-8 rounded-xl hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden">
                    {/* Number Watermark */}
                    <div className="absolute -right-4 -top-6 font-oswald text-9xl font-bold text-white/5 pointer-events-none group-hover:text-[#D4AF37]/10 transition-colors">
                      0{item.id}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-black border border-white/10 rounded text-[#D4AF37] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <h4 className="font-oswald text-2xl font-bold text-white uppercase group-hover:text-[#D4AF37] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-transparent border-r-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
