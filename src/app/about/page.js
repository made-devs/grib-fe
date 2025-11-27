import Navbar from '@/components/Layout/Navbar';
import AboutHero from '@/components/About/AboutHero';
import HistoryTimeline from '@/components/About/HistoryTimeline';
import LeadershipStructure from '@/components/About/LeadershipStructure';
import VisiMisi from '@/components/Home/VisiMisi'; // Reuse existing
import MediaGallery from '@/components/Home/MediaGallery'; // Reuse existing
import JoinCTA from '@/components/Home/JoinCTA'; // Reuse existing
import Footer from '@/components/Layout/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar />

      {/* 1. Hero Spesifik Profil */}
      <AboutHero />

      {/* 2. Sejarah Organisasi */}
      <HistoryTimeline />

      {/* 3. Struktur Pimpinan */}
      <LeadershipStructure />

      {/* 4. Visi Misi (Reuse) */}
      <VisiMisi />

      {/* 5. Bukti Kegiatan (Reuse) */}
      <MediaGallery />

      {/* 6. Gabung Sekarang */}
      <JoinCTA />

      <Footer />
    </main>
  );
}
