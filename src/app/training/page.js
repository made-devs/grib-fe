import Navbar from '@/components/Layout/Navbar';
import TrainingHero from '@/components/Training/TrainingHero';
import TrainingModules from '@/components/Training/TrainingModules';
import JoinCTA from '@/components/Home/JoinCTA'; // Reuse
import Footer from '@/components/Layout/Footer';

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar />

      {/* 1. Intro Academy */}
      <TrainingHero />

      {/* 2. Grid Pelatihan dengan Filter */}
      <TrainingModules />

      {/* 3. CTA Daftar */}
      <JoinCTA />

      <Footer />
    </main>
  );
}
