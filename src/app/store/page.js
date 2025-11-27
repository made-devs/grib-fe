import Navbar from '@/components/Layout/Navbar';
import StoreHero from '@/components/Store/StoreHero';
import ProductGrid from '@/components/Store/ProductGrid';
import JoinCTA from '@/components/Home/JoinCTA'; // Reuse CTA
import Footer from '@/components/Layout/Footer';

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar />

      {/* 1. Intro Logistik */}
      <StoreHero />

      {/* 2. Grid Produk dengan Filter Taktis */}
      <ProductGrid />

      {/* 3. CTA (Cross-sell membership) */}
      <JoinCTA />

      <Footer />
    </main>
  );
}
