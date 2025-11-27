import Navbar from '@/components/Layout/Navbar';
import ContactHero from '@/components/Contact/ContactHero';
import ContactGrid from '@/components/Contact/ContactGrid';
import LBHLocator from '@/components/LBH/LBHLocator'; // REUSE Component LBH
import JoinCTA from '@/components/Home/JoinCTA'; // Reuse CTA
import Footer from '@/components/Layout/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Navbar />

      {/* 1. Intro Secure Line */}
      <ContactHero />

      {/* 2. Grid Kontak & Form Markas Besar */}
      <ContactGrid />

      {/* 3. Peta Jaringan Nasional (Reuse dari LBH Page) 
          Ini memenuhi request "Maps LBH GRIB seluruh Indonesia" 
          tanpa perlu coding ulang peta. Efisien.
      */}
      <div className="border-t border-[#333]">
        <LBHLocator />
      </div>

      {/* 4. CTA */}
      <JoinCTA />

      <Footer />
    </main>
  );
}
