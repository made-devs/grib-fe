import Navbar from '@/components/Layout/Navbar';
import RegistrationForm from '@/components/Register/RegistrationForm';
import Footer from '@/components/Layout/Footer';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#050505] font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-[#111] to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-linear-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] animate-pulse">
              System Online
            </span>
          </span>
          <h1 className="font-oswald text-4xl md:text-6xl text-white uppercase font-bold mb-4">
            Gabung{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-amber-700">
              Korps
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Lengkapi data diri untuk mendapatkan akses penuh ke ekosistem
            ekonomi dan perlindungan hukum GRIB Jaya.
          </p>
        </div>

        {/* The Interactive Form */}
        <RegistrationForm />

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Enkripsi Data', val: '256-BIT' },
            { label: 'Verifikasi', val: 'E-KTP' },
            { label: 'Server', val: 'SECURE' },
            { label: 'Support', val: '24/7' },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/5 bg-black/50 p-4 rounded"
            >
              <p className="text-gray-500 text-[10px] uppercase font-bold">
                {item.label}
              </p>
              <p className="text-[#D4AF37] font-mono text-lg">{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
