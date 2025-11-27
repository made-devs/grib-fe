'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Crosshair,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

// Menu Configuration
const navLinks = [
  { label: 'Beranda', href: '#' },
  { label: 'Tentang', href: '#' },
  {
    label: 'Ekosistem',
    href: '#',
    dropdown: [
      { name: 'TJM Group', desc: 'Otomotif & Bengkel' },
      { name: 'Sentinel Forces', desc: 'Security Services' },
      { name: 'Pasticuan', desc: 'Import Business' },
      { name: 'Naga Autopart', desc: 'Spareparts' },
    ],
  },
  { label: 'Diklat', href: '#' },
  { label: 'LBH', href: '#' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const tl = useRef(null);

  // Scroll Detection for Style Change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(
    () => {
      // 1. Navbar Show/Hide on Scroll
      const showAnim = gsap
        .from(navRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.3,
          ease: 'power2.inOut',
        })
        .progress(1);

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });

      // 2. Mobile Menu Animation Setup
      tl.current = gsap
        .timeline({ paused: true })
        .to(mobileMenuRef.current, {
          x: '0%',
          duration: 0.5,
          ease: 'expo.inOut',
        })
        .from('.mobile-link', {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power2.out',
        });
    },
    { scope: navRef }
  );

  // Toggle Mobile Menu
  useEffect(() => {
    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      tl.current.reverse();
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-[#D4AF37]/30 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-50 group flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-black border border-[#D4AF37] flex items-center justify-center rounded transition-transform group-hover:rotate-45">
              <ShieldCheck
                size={20}
                className="text-[#D4AF37] group-hover:-rotate-45 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-oswald text-2xl font-bold text-white leading-none tracking-tighter">
                GRIB<span className="text-[#D4AF37]">.</span>JAYA
              </span>
              <span className="text-[8px] font-mono text-gray-400 tracking-[0.2em] uppercase">
                Satu Komando
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown size={14} className="text-[#D4AF37]" />
                  )}
                </Link>

                {/* Active Indicator */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>

                {/* Dropdown Menu (Tactical Style) */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                    <div className="bg-[#111] border border-[#D4AF37]/30 p-4 w-64 rounded-sm shadow-2xl relative">
                      {/* Triangle Indicator */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111] border-t border-l border-[#D4AF37]/30 rotate-45"></div>

                      <div className="space-y-1">
                        {link.dropdown.map((sub, i) => (
                          <Link
                            key={i}
                            href="#"
                            className="block p-3 hover:bg-[#D4AF37]/10 border-l-2 border-transparent hover:border-[#D4AF37] group/sub transition-all"
                          >
                            <p className="text-white text-sm font-bold font-oswald uppercase group-hover/sub:text-[#D4AF37]">
                              {sub.name}
                            </p>
                            <p className="text-[10px] text-gray-500 font-mono">
                              {sub.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Trigger (Cosmetic) */}
            <button className="text-gray-400 hover:text-[#D4AF37] transition-colors">
              <Crosshair size={20} />
            </button>

            {/* Join Button */}
            <Link
              href="#"
              className="relative group overflow-hidden bg-[#D4AF37] px-6 py-2.5 rounded-sm font-bold uppercase text-xs tracking-widest text-black hover:text-white transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2">
                Gabung <ExternalLink size={14} />
              </span>
              <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-[#D4AF37] hover:text-white transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#0a0a0a] z-40 transform translate-x-full md:hidden flex flex-col justify-center px-8"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent"></div>

        <div className="relative z-10 space-y-6">
          {navLinks.map((link, idx) => (
            <div key={idx} className="mobile-link overflow-hidden">
              <Link
                href={link.href}
                className="block font-oswald text-4xl sm:text-5xl text-gray-400 hover:text-white hover:pl-4 transition-all duration-300 uppercase font-bold"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#D4AF37] text-xl align-top mr-2">
                  0{idx + 1}
                </span>
                {link.label}
              </Link>
            </div>
          ))}

          <div className="mobile-link h-px w-full bg-white/10 my-8"></div>

          <div className="mobile-link">
            <Link
              href="#"
              className="flex items-center justify-center gap-3 w-full bg-[#D4AF37] py-4 text-black font-bold uppercase tracking-widest"
            >
              Daftar Anggota Online <ExternalLink size={18} />
            </Link>
          </div>
        </div>

        {/* Footer Info Mobile */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between text-xs text-gray-600 font-mono">
          <span>GRIB.SYS.V2</span>
          <span>SECURE CONN</span>
        </div>
      </div>
    </>
  );
}
