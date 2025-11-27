import Navbar from '@/components/Layout/Navbar';
import MediaHero from '@/components/Media_page/MediaHero';
import SocialFeed from '@/components/Media_page/SocialFeed';
import MainGallery from '@/components/Media_page/MainGallery';
import JoinCTA from '@/components/Home/JoinCTA'; // Reuse
import Footer from '@/components/Layout/Footer';

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar />

      {/* 1. Intro Digital Intelligence */}
      <MediaHero />

      {/* 2. Live Social Feed (TikTok Style) */}
      <SocialFeed />

      {/* 3. Arsip Galeri Lengkap (Filterable) */}
      <MainGallery />

      {/* 4. CTA */}
      <JoinCTA />

      <Footer />
    </main>
  );
}
