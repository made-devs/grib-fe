import Navbar from '@/components/Layout/Navbar';
import LBHHero from '@/components/LBH/LBHHero';
import LBHLocator from '@/components/LBH/LBHLocator';
import ServiceFlow from '@/components/LBH/ServiceFlow';
import ComplaintForm from '@/components/LBH/ComplaintForm';
import LegalEducation from '@/components/LBH/LegalEducation';
import Footer from '@/components/Layout/Footer';

export default function LBHPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar />

      {/* 1. Intro Perisai Keadilan */}
      <LBHHero />

      {/* 2. Map & Contact Center */}
      <LBHLocator />

      {/* 3. SOP Alur Penanganan */}
      <ServiceFlow />

      {/* 4. Form Pengaduan */}
      <ComplaintForm />

      {/* 5. Edukasi Hukum */}
      <LegalEducation />

      <Footer />
    </main>
  );
}
