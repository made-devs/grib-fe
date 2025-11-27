'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  CreditCard,
  ArrowRight,
  Fingerprint,
  CheckCircle2,
  ShieldCheck,
  QrCode,
} from 'lucide-react';

export default function JoinCTA() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      // 1. Text Reveal
      tl.from('.cta-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // 2. Card Floating Animation
      gsap.fromTo(
        '.id-card-mockup',
        { rotationY: -30, rotationX: 20, z: -100, opacity: 0 },
        {
          rotationY: -10,
          rotationX: 5,
          z: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
        }
      );

      // Continuous Float
      gsap.to('.id-card-mockup', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#D4AF37] overflow-hidden"
    >
      {/* Background Texture (Dark Pattern on Gold) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-l from-black via-black/80 to-transparent skew-x-12 translate-x-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: CONTENT & FORM */}
          <div className="order-2 lg:order-1">
            <div className="cta-content inline-flex items-center gap-2 mb-4 px-3 py-1 bg-black/10 border border-black/20 rounded-full">
              <ShieldCheck size={16} className="text-black" />
              <span className="text-xs font-bold uppercase tracking-widest text-black">
                Pendaftaran Resmi Dibuka
              </span>
            </div>

            <h2 className="cta-content font-oswald text-5xl md:text-7xl font-bold text-black uppercase leading-[0.9] mb-6">
              Gabung <br />{' '}
              <span className="text-white drop-shadow-xl">Satu Komando</span>
            </h2>

            <p className="cta-content font-medium text-black/80 text-lg mb-8 max-w-md">
              Dapatkan KTA Digital, akses pelatihan bisnis, dan perlindungan
              hukum. Jadilah bagian dari keluarga besar GRIB Jaya.
            </p>

            {/* Benefit Checkpoints */}
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

            {/* Action Box */}
            <div className="cta-content bg-black/90 p-6 rounded-xl border border-white/10 shadow-2xl relative group">
              {/* Glow Border Effect */}
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
                  <Fingerprint size={20} />
                  Daftar <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-3 flex items-center gap-1">
                <ShieldCheck size={10} /> Data Anda terenkripsi dan aman.
              </p>
            </div>
          </div>

          {/* RIGHT: ID CARD VISUALIZATION */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
            {/* THE ID CARD MOCKUP */}
            <div className="id-card-mockup w-[320px] h-[500px] md:w-[400px] md:h-[600px] bg-[#0a0a0a] rounded-2xl border-2 border-[#D4AF37] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Card Background & Texture */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none"></div>

              {/* Holographic Shine */}
              <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent -rotate-45 animate-shine pointer-events-none"></div>

              {/* Card Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-oswald text-2xl font-bold text-white tracking-tighter">
                      GRIB JAYA
                    </h3>
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">
                      Kartu Tanda Anggota
                    </p>
                  </div>
                  <QrCode
                    size={40}
                    className="text-white bg-white/10 p-1 rounded"
                  />
                </div>

                {/* Photo Area */}
                <div className="w-full aspect-square bg-[#1a1a1a] rounded border border-[#333] mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                    <Fingerprint size={64} opacity={0.2} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-2 text-center">
                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase">
                      Anggota Resmi
                    </p>
                  </div>
                </div>

                {/* Member Details */}
                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase">
                      Nama Lengkap
                    </p>
                    <p className="text-white font-bold text-lg uppercase truncate">
                      CALON ANGGOTA
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase">
                        NRA (Nomor Registrasi)
                      </p>
                      <p className="text-[#D4AF37] tracking-widest">
                        XXXX-XXXX
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase">
                        Masa Berlaku
                      </p>
                      <p className="text-white">SEUMUR HIDUP</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-black text-xs">
                    HJ
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-500 uppercase">
                      Disahkan Oleh
                    </p>
                    <p className="text-white font-bold text-xs uppercase font-oswald">
                      H. Hercules R.M.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Chip */}
              <div className="absolute top-1/2 -right-4 w-3 h-16 bg-[#D4AF37] rounded-l"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
