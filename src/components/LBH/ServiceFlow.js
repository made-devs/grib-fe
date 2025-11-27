import { FileText, Search, Scale, Gavel } from 'lucide-react';

const steps = [
  {
    icon: <FileText size={24} />,
    title: 'Pelaporan',
    desc: 'Isi formulir atau datang ke kantor DPD dengan bukti awal.',
  },
  {
    icon: <Search size={24} />,
    title: 'Analisa',
    desc: 'Tim hukum LBH membedah kasus dan menentukan langkah hukum.',
  },
  {
    icon: <Scale size={24} />,
    title: 'Mediasi',
    desc: 'Upaya penyelesaian kekeluargaan (Non-Litigasi) sebagai prioritas.',
  },
  {
    icon: <Gavel size={24} />,
    title: 'Litigasi',
    desc: 'Pendampingan penuh di pengadilan jika jalur damai buntu.',
  },
];

export default function ServiceFlow() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl text-white uppercase font-bold">
            SOP <span className="text-[#D4AF37]">Penanganan</span>
          </h2>
          <p className="text-gray-500">
            Prosedur standar operasional bantuan hukum GRIB Jaya.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-[#333] z-0"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-[#111] border border-white/20 rounded-full flex items-center justify-center text-gray-400 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300 mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0a0a0a] border border-[#333] rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-oswald text-xl text-white uppercase font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
