import Navbar from '@/components/Layout/Navbar';
import ProgramHero from '@/components/Programs/ProgramHero';
import EconomicSectors from '@/components/Programs/EconomicSectors';
import JoinCTA from '@/components/Home/JoinCTA'; // Reuse existing
import Footer from '@/components/Layout/Footer';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar />

      {/* 1. Intro Arsenal Ekonomi */}
      <ProgramHero />

      {/* 2. Detail 4 Sektor (Sticky Logic) */}
      <EconomicSectors />

      {/* 3. CTA Daftar (Reuse) */}
      <JoinCTA />

      <Footer />
    </main>
  );
}
