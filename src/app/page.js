import Navbar from '@/components/Layout/Navbar';

import Footer from '@/components/Layout/Footer';
import HeroSection from '../components/Home/HeroSection';
import ProgramSlider from '../components/Home/ProgramSlider';
import AboutSection from '../components/Home/AboutSection';
import EconomicPillars from '../components/Home/EconomicPillars';
import LBHSection from '../components/Home/LBHSsection';
import TrainingSection from '../components/Home/TrainingSection';
import MediaGallery from '../components/Home/MediaGallery';
import JoinCTA from '../components/Home/JoinCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <HeroSection />
      <ProgramSlider />
      <AboutSection />
      <EconomicPillars />
      <LBHSection />
      <TrainingSection />
      <MediaGallery />
      <JoinCTA />
      <Footer />
    </main>
  );
}
