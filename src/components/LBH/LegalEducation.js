import { Play, FileText, ArrowUpRight } from 'lucide-react';

export default function LegalEducation() {
  return (
    <section className="py-20 bg-[#050505] border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
              Knowledge Base
            </span>
            <h2 className="font-oswald text-4xl text-white uppercase font-bold">
              Edukasi <span className="text-[#D4AF37]">Hukum</span>
            </h2>
          </div>
          <button className="text-gray-400 text-sm hover:text-white flex items-center gap-2">
            Lihat Semua <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Content 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-[#111] border border-white/10 rounded-lg overflow-hidden relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#D4AF37]/90 rounded-full flex items-center justify-center text-black">
                  <Play size={20} fill="black" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-2">
              <span className="text-[10px] bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-900">
                EDUKASI PUBLIK
              </span>
            </div>
            <h3 className="font-oswald text-xl text-white uppercase font-bold group-hover:text-[#D4AF37] transition-colors">
              Cara Menghadapi Mafia Tanah
            </h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              Panduan hukum agraria untuk masyarakat awam agar sertifikat tanah
              aman.
            </p>
          </div>

          {/* Content 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-[#111] border border-white/10 rounded-lg overflow-hidden relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex gap-3 mb-2">
              <span className="text-[10px] bg-purple-900/30 text-purple-400 px-2 py-0.5 rounded border border-purple-900">
                INTERNAL DPD
              </span>
            </div>
            <h3 className="font-oswald text-xl text-white uppercase font-bold group-hover:text-[#D4AF37] transition-colors">
              Teknik Pembuatan Konten Hukum
            </h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              Pelatihan untuk pengurus DPD dalam membuat konten edukasi di
              sosmed.
            </p>
          </div>

          {/* Content 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-[#111] border border-white/10 rounded-lg overflow-hidden relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex gap-3 mb-2">
              <span className="text-[10px] bg-green-900/30 text-green-400 px-2 py-0.5 rounded border border-green-900">
                STUDI KASUS
              </span>
            </div>
            <h3 className="font-oswald text-xl text-white uppercase font-bold group-hover:text-[#D4AF37] transition-colors">
              Menang Lawan Rentenir Ilegal
            </h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              Bedah kasus keberhasilan LBH GRIB membebaskan warga dari jeratan
              hutang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
