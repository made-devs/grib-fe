'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Globe,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const contacts = [
  {
    icon: <Phone size={24} />,
    title: 'Hotline Nasional',
    value: '021-555-0199',
    sub: 'Hunting 24 Jam',
    status: 'ACTIVE',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'WhatsApp Center',
    value: '0812-9999-8888',
    sub: 'Chat Only',
    status: 'ONLINE',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Resmi',
    value: 'sekretariat@gribjaya.org',
    sub: 'Respon < 24 Jam',
    status: 'READY',
  },
  {
    icon: <Globe size={24} />,
    title: 'Website',
    value: 'www.gribjaya.org',
    sub: 'Official Portal',
    status: 'LIVE',
  },
];

export default function ContactGrid() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.contact-card', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.contact-form', {
        scrollTrigger: { trigger: '.form-section', start: 'top 70%' },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* TOP GRID: DIRECT CONTACTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className="contact-card group bg-[#111] border border-white/10 p-6 rounded-lg hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-50">
                <span className="text-[9px] font-bold px-1.5 py-0.5 border border-green-500 text-green-500 rounded">
                  {item.status}
                </span>
              </div>

              <div className="w-12 h-12 bg-[#0a0a0a] border border-white/20 rounded-full flex items-center justify-center text-gray-400 mb-4 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                {item.icon}
              </div>

              <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">
                {item.title}
              </p>
              <h3 className="text-white font-oswald text-xl font-bold mb-1">
                {item.value}
              </h3>
              <p className="text-gray-600 text-xs font-mono">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: HQ & FORM */}
        <div className="form-section grid lg:grid-cols-12 gap-12 items-start border-t border-[#333] pt-16">
          {/* LEFT: HQ INFO (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="font-oswald text-4xl text-white uppercase font-bold mb-4">
                Markas <span className="text-[#D4AF37]">Besar</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                DPP Gerakan Rakyat Indonesia Bersatu Jaya.
                <br />
                Pusat komando strategis nasional.
              </p>
            </div>

            <div className="bg-[#111] p-6 border-l-4 border-[#D4AF37]">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold uppercase text-sm mb-1">
                    Alamat Kantor Pusat
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Jl. Hercules Raya No. 1, Komplek GRIB Tower,
                    <br />
                    Jakarta Barat, DKI Jakarta, 11000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold uppercase text-sm mb-1">
                    Jam Operasional
                  </p>
                  <p className="text-gray-400 text-xs">
                    Senin - Jumat: 08:00 - 17:00 WIB
                  </p>
                  <p className="text-gray-400 text-xs">
                    Sabtu: 08:00 - 14:00 WIB
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-white/10 rounded flex items-center gap-3 bg-[#0f0f0f]">
              <ShieldCheck size={32} className="text-green-500" />
              <div>
                <p className="text-white font-bold text-xs uppercase">
                  Security Clearance
                </p>
                <p className="text-gray-500 text-[10px]">
                  Area kantor diawasi CCTV & Sentinel Forces 24 Jam.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: TRANSMISSION FORM (8 Cols) */}
          <div className="contact-form lg:col-span-8 bg-[#111] border border-white/10 p-8 md:p-10 rounded-xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#D4AF37] to-transparent"></div>

            <h3 className="font-oswald text-2xl text-white uppercase font-bold mb-8">
              Kirim <span className="text-white/50">Pesan</span>
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-bold uppercase">
                    Identitas (Nama)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 rounded focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-bold uppercase">
                    Email / Kontak
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 rounded focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="Email atau WhatsApp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold uppercase">
                  Subjek Pesan
                </label>
                <select className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 rounded focus:border-[#D4AF37] outline-none transition-colors cursor-pointer appearance-none">
                  <option>Pilih Keperluan...</option>
                  <option>Kerjasama Bisnis / Kemitraan</option>
                  <option>Undangan Kegiatan</option>
                  <option>Media & Pers</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-bold uppercase">
                  Isi Pesan
                </label>
                <textarea
                  rows="5"
                  className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 rounded focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="Tuliskan pesan Anda dengan jelas..."
                ></textarea>
              </div>

              <button className="bg-[#D4AF37] text-black font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-colors flex items-center gap-3">
                <Send size={18} /> Kirim Transmisi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
