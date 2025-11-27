'use client';

import { FileText, Send, Lock } from 'lucide-react';

export default function ComplaintForm() {
  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative">
          {/* Header Form */}
          <div className="text-center mb-10">
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
              Secure Channel
            </span>
            <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase font-bold">
              Formulir <span className="text-[#D4AF37]">Pengaduan</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Ceritakan kronologi kasus Anda. Data dijamin kerahasiaannya.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase font-bold">
                  Nama Pelapor
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0a0a0a] border border-[#333] text-white p-4 rounded focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase font-bold">
                  Kontak (WA)
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0a0a0a] border border-[#333] text-white p-4 rounded focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="08xxx"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase font-bold">
                Jenis Kasus
              </label>
              <select className="w-full bg-[#0a0a0a] border border-[#333] text-white p-4 rounded focus:border-[#D4AF37] outline-none transition-colors appearance-none cursor-pointer">
                <option>Pilih Kategori...</option>
                <option>Sengketa Tanah / Lahan</option>
                <option>Kriminalisasi / Pidana</option>
                <option>Perdata / Hutang Piutang</option>
                <option>KDRT / Perlindungan Anak</option>
                <option>Lainnya</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase font-bold">
                Kronologi Singkat
              </label>
              <textarea
                rows="5"
                className="w-full bg-[#0a0a0a] border border-[#333] text-white p-4 rounded focus:border-[#D4AF37] outline-none transition-colors"
                placeholder="Jelaskan kejadian secara runut..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Send size={18} /> Submit Case File
              </button>
              <p className="text-center text-[10px] text-gray-600 mt-4 flex items-center justify-center gap-1">
                <Lock size={10} /> ENCRYPTED CONNECTION. YOUR IDENTITY IS
                PROTECTED.
              </p>
            </div>
          </form>

          {/* Top Border Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-red-500 shadow-[0_0_10px_red]"></div>
        </div>
      </div>
    </section>
  );
}
