'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const historyData = [
  {
    year: '2011',
    title: 'The Inception',
    desc: 'Didirikan oleh H. Hercules R.M. sebagai wadah aspirasi masyarakat akar rumput yang menginginkan keadilan.',
  },
  {
    year: '2014',
    title: 'Loyalty Test',
    desc: 'Menjadi garda terdepan pendukung Prabowo Subianto. Membuktikan loyalitas organisasi tanpa batas.',
  },
  {
    year: '2019',
    title: 'Reformation',
    desc: 'Transformasi menjadi GRIB JAYA. Penambahan "Jaya" mempertegas asas Pancasila dan arah perjuangan yang lebih intelektual.',
  },
  {
    year: '2024',
    title: 'Modern Era',
    desc: 'Revolusi total. Fokus pada Ekonomi Kerakyatan, Supremasi Hukum, dan Profesionalisme anggota (Diklat & Sertifikasi).',
  },
];

export default function HistoryTimeline() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Line Drawing Effect
      gsap.fromTo(
        '.timeline-line-fill',
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );

      // Items Reveal
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0.2,
          x: i % 2 === 0 ? 50 : -50,
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 0.5,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 timeline-container">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs block mb-2">
            Milestones
          </span>
          <h2 className="font-oswald text-4xl text-white uppercase font-bold">
            Jejak <span className="text-[#D4AF37]">Perjuangan</span>
          </h2>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-[#333] -translate-x-1/2">
            <div className="timeline-line-fill w-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"></div>
          </div>

          <div className="space-y-12">
            {historyData.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-item flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8 md:gap-0`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div
                    className={`p-6 border border-white/10 bg-[#111] hover:border-[#D4AF37] transition-colors relative group ${
                      idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <h3 className="font-oswald text-5xl text-white/10 font-bold absolute top-2 right-4 group-hover:text-[#D4AF37]/10 transition-colors">
                      {item.year}
                    </h3>
                    <h4 className="font-oswald text-xl text-[#D4AF37] font-bold uppercase mb-2 relative z-10">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center Dot (Absolute) */}
                <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-2 border-[#D4AF37] rounded-full z-20 mt-6">
                  <div className="w-full h-full bg-[#D4AF37] rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Empty Side for Flex Balance */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
