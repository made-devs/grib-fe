'use client';

import React, { useState, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Wrench,
  Shield,
  Video,
  Brain,
  ShoppingBag,
  Users,
  Globe,
  ArrowUpRight,
  Lock,
  DollarSign,
  Settings,
} from 'lucide-react';

const courses = [
  // --- TACTICAL (Sentinel) ---
  {
    id: 1,
    title: 'Garda Pratama Security',
    provider: 'Sentinel Forces',
    category: 'TACTICAL',
    level: 'Intermediate',
    duration: '21 Hari',
    icon: <Shield size={20} />,
    image:
      'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?auto=format&fit=crop&q=80',
    tags: ['Range 19 USA Partner', 'Sertifikat Polri'],
  },
  {
    id: 2,
    title: 'VIP Bodyguard',
    provider: 'Sentinel Forces',
    category: 'TACTICAL',
    level: 'Advanced',
    duration: '14 Hari',
    icon: <Lock size={20} />,
    image:
      'https://images.unsplash.com/photo-1626245366964-672520613867?auto=format&fit=crop&q=80',
    tags: ['Close Combat', 'Escort SOP'],
  },
  {
    id: 3,
    title: 'Debt Recovery Pro',
    provider: 'Sentinel Legal',
    category: 'TACTICAL',
    level: 'Expert',
    duration: '7 Hari',
    icon: <DollarSign size={20} />,
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80',
    tags: ['Negosiasi', 'Aspek Hukum'],
  },

  // --- TECHNICAL (TJM & Naga) ---
  {
    id: 4,
    title: 'Mekanik Mobil Master',
    provider: 'TJM Group',
    category: 'TECHNICAL',
    level: 'Intermediate',
    duration: '3 Bulan',
    icon: <Wrench size={20} />,
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80',
    tags: ['Mesin', 'Electrical', 'AC'],
  },
  {
    id: 5,
    title: 'Sparepart Specialist',
    provider: 'Naga Autopart',
    category: 'TECHNICAL',
    level: 'Beginner',
    duration: '3 Hari',
    icon: <Settings size={20} />,
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
    tags: ['Supply Chain', 'Katalog Part'],
  },

  // --- DIGITAL (Pasticuan) ---
  {
    id: 6,
    title: 'Live Stream Host',
    provider: 'Pasticuan',
    category: 'DIGITAL',
    level: 'Beginner',
    duration: '2 Hari',
    icon: <Video size={20} />,
    image:
      'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80',
    tags: ['Public Speaking', 'Sales'],
  },
  {
    id: 7,
    title: 'Marketplace Domination',
    provider: 'Pasticuan',
    category: 'DIGITAL',
    level: 'Intermediate',
    duration: '5 Hari',
    icon: <ShoppingBag size={20} />,
    image:
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80',
    tags: ['Ads Optimization', 'Import'],
  },
  {
    id: 8,
    title: 'AI for Business',
    provider: 'GRIB Academy',
    category: 'DIGITAL',
    level: 'Intermediate',
    duration: '1 Hari',
    icon: <Brain size={20} />,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    tags: ['ChatGPT', 'Automation'],
  },

  // --- GENERAL ---
  {
    id: 9,
    title: 'English for Business',
    provider: 'GRIB Academy',
    category: 'GENERAL',
    level: 'Beginner',
    duration: '1 Bulan',
    icon: <Globe size={20} />,
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80',
    tags: ['Conversation', 'Basic'],
  },
  {
    id: 10,
    title: 'Manajemen UMKM',
    provider: 'GRIB Academy',
    category: 'GENERAL',
    level: 'Beginner',
    duration: '3 Hari',
    icon: <Users size={20} />,
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
    tags: ['Pembukuan', 'Legalitas'],
  },
];

const categories = ['ALL', 'TACTICAL', 'TECHNICAL', 'DIGITAL', 'GENERAL'];

export default function TrainingModules() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const containerRef = useRef(null);

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'ALL') return courses;
    return courses.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  useGSAP(
    () => {
      gsap.fromTo(
        '.course-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    },
    { scope: containerRef, dependencies: [activeFilter] }
  );

  return (
    <section ref={containerRef} className="py-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-[#333] pb-6">
          <div>
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
              Curriculum
            </span>
            <h2 className="font-oswald text-4xl text-white uppercase font-bold">
              Pilih <span className="text-white">Modul</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                  activeFilter === cat
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'bg-[#111] text-gray-500 border-[#333] hover:border-[#D4AF37] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="course-card group bg-[#111] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full relative"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur px-2 py-1 border border-white/10 rounded">
                  <p className="text-[10px] font-bold text-[#D4AF37] uppercase">
                    {course.category}
                  </p>
                </div>
                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_#D4AF37]">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-mono text-gray-500 mb-1 flex items-center gap-1">
                    {course.icon} {course.provider}
                  </div>
                </div>

                <h3 className="font-oswald text-xl text-white uppercase font-bold leading-tight mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {course.title}
                </h3>

                {/* Meta Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] px-2 py-0.5 border border-white/10 rounded text-gray-400 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono">
                  <div>
                    <p className="text-gray-500">LEVEL</p>
                    <p className="text-white font-bold">{course.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">DURASI</p>
                    <p className="text-[#D4AF37] font-bold">
                      {course.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sentinel/Tactical Special Effect */}
              {course.category === 'TACTICAL' && (
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
