'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, ChevronDown, Crosshair, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// Menu Configuration (tetap sama)
const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/about' },
  {
    label: 'Program & Ekosistem',
    href: '/programs',
  },
  { label: 'Diklat', href: '/training' },
  { label: 'LBH', href: '/lbh' },
  { label: 'Media', href: '/media' },
  { label: 'Store', href: '/store' },
  { label: 'Kontak', href: '/contact' },
];

// Helper component untuk Mobile Menu Link
const MobileMenuItem = ({ link, idx, handleLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="mobile-link overflow-hidden border-l border-gray-800 hover:border-[#D4AF37] transition-all">
      <div className="flex items-center justify-between">
        <Link
          href={link.href}
          className="block w-full font-oswald text-2xl sm:text-3xl text-gray-300 hover:text-white pl-4 py-2 uppercase font-bold transition-colors"
          onClick={(e) => {
            if (link.dropdown) {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            } else {
              handleLinkClick(e, link.href);
            }
          }}
        >
          <span className="text-[#D4AF37] text-md align-top mr-2 font-mono">
            {idx.toString().padStart(2, '0')}.
          </span>
          {link.label}
        </Link>
        {link.dropdown && (
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 mr-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle submenu"
          >
            <ChevronDown
              size={20}
              className={`transform transition-transform ${
                isDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
        )}
      </div>

      {/* Mobile Dropdown - Lebih ringkas */}
      {link.dropdown && isDropdownOpen && (
        <div className="pl-12 py-1 space-y-1 bg-[#0a0a0a] border-t border-gray-900">
          {link.dropdown.map((sub, i) => (
            <Link
              key={i}
              href={sub.href}
              className="block text-gray-500 hover:text-[#D4AF37] text-sm transition-colors py-1"
              onClick={(e) => handleLinkClick(e, sub.href)}
            >
              <span className="font-mono mr-2 text-[10px]">--</span> {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const tl = useRef(null);
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  // Fungsi untuk menangani klik tautan (mobile)
  const handleLinkClick = (e, href) => {
    // Mencegah navigasi penuh jika href adalah placeholder
    if (href === '#' || href === '') {
      e.preventDefault();
    }
    setIsOpen(false);
  };

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

      // 2. Mobile Menu Animation Setup (Diubah untuk lebih stabil)
      // Atur posisi awal menu container ke off-screen dan visibility: hidden
      gsap.set(mobileMenuRef.current, { x: '100%', visibility: 'hidden' });
      // Atur posisi awal links ke tersembunyi (y: 20 dan opacity 0)
      gsap.set('.mobile-link', { opacity: 0, y: 20 });

      tl.current = gsap
        .timeline({ paused: true, defaults: { ease: 'power2.out' } })
        // Langkah 1: Slide-in container menu, jadikan visible
        .to(mobileMenuRef.current, {
          x: '0%',
          visibility: 'visible',
          duration: 0.5,
          ease: 'expo.inOut',
        })
        // Langkah 2: Animasi links satu per satu (slide up and fade in)
        .to(
          '.mobile-link',
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.3,
          },
          // Mulai animasi links 0.3 detik setelah container mulai bergerak
          '-=0.4'
        );

      setIsAnimationReady(true);
    },
    { scope: navRef }
  );

  // Toggle Mobile Menu
  useEffect(() => {
    if (!isAnimationReady || !tl.current) return;

    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      // Ketika reverse, tambahkan callback untuk mengatur visibility ke hidden setelah selesai
      const animationDuration = 0.5 * 1000; // 0.5s dari durasi .to(mobileMenuRef.current)
      tl.current.reverse().then(() => {
        if (!isOpen) {
          gsap.set(mobileMenuRef.current, { visibility: 'hidden' });
          document.body.style.overflow = 'auto';
        }
      });
    }
  }, [isOpen, isAnimationReady]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-[#D4AF37]/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-50 group flex items-center gap-2"
          >
            {/* Logo Image */}
            <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-105 relative shrink-0">
              <Image
                src="/logo.webp"
                alt="GRIB Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            {/* Text Title */}
            <div className="flex flex-col">
              <span className="font-oswald text-xl font-bold text-white leading-none tracking-tighter">
                GRIB<span className="text-[#D4AF37]">.</span>JAYA
              </span>
              <span className="text-[7px] font-mono text-gray-400 tracking-[0.15em] uppercase">
                Satu Komando
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU (Hidden on XL or smaller) */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={12}
                      className="text-[#D4AF37] group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </Link>

                {/* Active Indicator */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                    <div className="bg-[#111] border border-[#D4AF37]/30 p-4 w-64 rounded-sm shadow-2xl relative">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111] border-t border-l border-[#D4AF37]/30 rotate-45"></div>

                      <div className="space-y-1">
                        {link.dropdown.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
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

          {/* CTA BUTTONS */}
          <div className="hidden xl:flex items-center gap-3">
            <button className="text-gray-400 hover:text-[#D4AF37] transition-colors">
              <Crosshair size={18} />
            </button>

            <Link
              href="/register"
              className="relative group overflow-hidden bg-[#D4AF37] px-5 py-2 rounded-sm font-bold uppercase text-[14px] tracking-widest text-black hover:text-white transition-colors"
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
            className="xl:hidden relative z-50 text-[#D4AF37] hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#0a0a0a] z-40 xl:hidden flex flex-col pt-24 px-4 sm:px-8 overflow-y-auto"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent"></div>

        <div className="relative z-10 space-y-3 pb-20">
          {/* List Menu Utama */}
          {navLinks.map((link, idx) => (
            <MobileMenuItem
              key={idx}
              link={link}
              idx={idx}
              handleLinkClick={handleLinkClick}
            />
          ))}

          <div className="mobile-link h-px w-full bg-white/10 mt-8 mb-4"></div>

          {/* Tombol CTA */}
          <div className="mobile-link overflow-hidden pt-4">
            <Link
              href="/register"
              className="flex items-center justify-center gap-3 w-full bg-[#D4AF37] py-4 text-black font-bold uppercase tracking-widest hover:bg-black hover:text-[#D4AF37] transition-colors"
              onClick={(e) => handleLinkClick(e, '/register')}
            >
              Daftar Anggota Online <ExternalLink size={18} />
            </Link>
          </div>
        </div>

        {/* Footer Info Mobile */}
        <div className="sticky bottom-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-gray-900 py-4 flex justify-between text-xs text-gray-600 font-mono z-20">
          <span>GRIB.SYS.V2</span>
          <span>SECURE CONN</span>
        </div>
      </div>
    </>
  );
}
