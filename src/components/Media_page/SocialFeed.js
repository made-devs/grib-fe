'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Play, Heart, MessageCircle, Share2, Radio } from 'lucide-react';

const feeds = [
  {
    id: 1,
    platform: 'TikTok',
    user: '@grib.jaya_pusat',
    desc: 'Instruksi Satu Komando! 🔥 #GRIBJaya #Hercules',
    views: '2.4M',
    likes: '150K',
    bg: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    platform: 'Reels',
    user: '@sentinel_forces',
    desc: 'Latihan Taktis Garda Pratama bareng Range 19 USA 🇺🇸🇮🇩',
    views: '800K',
    likes: '45K',
    bg: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    platform: 'TikTok',
    user: '@lbh_grib',
    desc: 'Tips Hukum: Jangan takut sama Debt Collector Ilegal! 🚫',
    views: '1.1M',
    likes: '90K',
    bg: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    platform: 'Shorts',
    user: '@tjm_bengkel',
    desc: 'Restorasi mesin V8 selesai. Siap gass! 🏎️',
    views: '500K',
    likes: '20K',
    bg: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80',
  },
];

export default function SocialFeed() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.feed-card', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-20 bg-[#0a0a0a] border-b border-[#333] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center border border-[#D4AF37] animate-pulse">
            <Radio size={20} className="text-[#D4AF37]" />
          </div>
          <div>
            <h2 className="font-oswald text-3xl text-white uppercase font-bold">
              Social <span className="text-[#D4AF37]">Intel</span>
            </h2>
            <p className="text-gray-500 text-xs font-mono">
              LIVE FEED FROM NETWORK
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className="feed-card relative aspect-[9/16] bg-[#111] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#D4AF37] transition-all duration-300 hover:scale-[1.02] shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={feed.bg}
                alt="Social Content"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>

              {/* UI Elements */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <div className="text-[10px] font-bold px-2 py-1 bg-white/10 backdrop-blur rounded-full text-white border border-white/20">
                  {feed.platform}
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>

              {/* Play Button Center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Play fill="white" className="text-white ml-1" size={20} />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm mb-1 drop-shadow-md">
                  {feed.user}
                </p>
                <p className="text-gray-300 text-xs line-clamp-2 mb-3 leading-relaxed">
                  {feed.desc}
                </p>

                <div className="flex items-center justify-between text-white/80 text-xs font-medium">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <Play size={12} /> {feed.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={12} /> {feed.likes}
                    </span>
                  </div>
                  <Share2 size={14} className="hover:text-[#D4AF37]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
