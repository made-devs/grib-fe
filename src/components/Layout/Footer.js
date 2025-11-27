'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  ShieldCheck,
  Globe,
} from 'lucide-react';

export default function Footer() {
  const footerRef = useRef(null);
  const [time, setTime] = useState('');

  // Update Tactical Clock
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('id-ID', { hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      // Reveal Animation
      gsap.from('.footer-col', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    },
    { scope: footerRef }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#020202] border-t border-[#333] pt-20 pb-8 overflow-hidden text-sm"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* COL 1: BRAND IDENTITY */}
          <div className="footer-col space-y-6">
            <div>
              <h2 className="font-oswald text-4xl font-bold text-white tracking-tighter mb-2">
                GRIB<span className="text-[#D4AF37]">.</span>JAYA
              </h2>
              <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold">
                Gerakan Rakyat Indonesia Bersatu
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Membangun kekuatan ekonomi kerakyatan, menegakkan supremasi hukum,
              dan menjaga kedaulatan NKRI dalam Satu Komando.
            </p>
            <div className="flex gap-4">
              {[
                <Instagram size={20} />,
                <Youtube size={20} />,
                <Facebook size={20} />,
                <Twitter size={20} />,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2: NAVIGATION */}
          <div className="footer-col space-y-6">
            <h3 className="font-oswald text-xl text-white uppercase font-bold border-l-4 border-[#D4AF37] pl-4">
              Navigasi
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                'Beranda',
                'Tentang Organisasi',
                'Struktur DPP',
                'Berita & Kegiatan',
                'Hubungi Kami',
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: EKOSISTEM */}
          <div className="footer-col space-y-6">
            <h3 className="font-oswald text-xl text-white uppercase font-bold border-l-4 border-[#D4AF37] pl-4">
              Ekosistem
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { label: 'TJM Group', desc: 'Otomotif' },
                { label: 'Sentinel Forces', desc: 'Security' },
                { label: 'Pasticuan', desc: 'Import' },
                { label: 'Naga Autopart', desc: 'Sparepart' },
                { label: 'LBH GRIB', desc: 'Hukum' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex justify-between items-center border-b border-white/5 pb-2 hover:border-[#D4AF37]/30"
                  >
                    <span className="group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[10px] uppercase text-[#D4AF37] opacity-50">
                      {item.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT COMMAND CENTER */}
          <div className="footer-col">
            <div className="bg-[#111] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent h-full w-full translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none"></div>

              <h3 className="font-oswald text-xl text-white uppercase font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-[#D4AF37]" size={20} />
                Markas Besar
              </h3>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex gap-3 items-start text-gray-300">
                  <MapPin size={16} className="text-[#D4AF37] mt-1 shrink-0" />
                  <p>
                    Jl. Hercules Raya No. 1<br />
                    Jakarta Barat, DKI Jakarta
                    <br />
                    Indonesia 11000
                  </p>
                </div>
                <div className="flex gap-3 items-center text-gray-300">
                  <Phone size={16} className="text-[#D4AF37] shrink-0" />
                  <p>021-555-0199 (Hunting)</p>
                </div>
                <div className="flex gap-3 items-center text-gray-300">
                  <Mail size={16} className="text-[#D4AF37] shrink-0" />
                  <p>sekretariat@gribjaya.org</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] text-green-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  OPEN 24H
                </span>
                <button className="text-[10px] text-[#D4AF37] underline">
                  GET DIRECTION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; 2024 GRIB JAYA. All Rights Reserved.</p>
            <div className="hidden md:block w-px h-3 bg-gray-700"></div>
            <p className="flex items-center gap-2">
              <Globe size={12} /> SERVER_TIME:{' '}
              <span className="text-[#D4AF37]">{time} WIB</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-white transition-colors">
              TERMS OF SERVICE
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-[#D4AF37] text-black flex items-center justify-center rounded hover:bg-white transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
