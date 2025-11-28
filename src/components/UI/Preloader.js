'use client';

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShieldCheck } from 'lucide-react';

export default function Preloader() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Counter Animation
      const counterObj = { val: 0 };
      tl.to(counterObj, {
        val: 100,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
          setProgress(Math.floor(counterObj.val));
        },
      })
        // 2. Reveal Content
        .to('.loader-text', {
          opacity: 0,
          y: -20,
          duration: 0.5,
          stagger: 0.1,
        })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'expo.inOut',
        });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 bg-[#050505] flex flex-col items-center justify-center text-white"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="loader-text mb-6">
          <ShieldCheck size={64} className="text-[#D4AF37] animate-pulse" />
        </div>

        <h1 className="loader-text font-oswald text-4xl md:text-6xl font-bold uppercase tracking-widest mb-2">
          GRIB JAYA
        </h1>

        <div className="loader-text flex items-center gap-2 font-mono text-[#D4AF37] text-sm">
          <span>SYSTEM_BOOT</span>
          <span className="animate-blink">_</span>
        </div>

        {/* Progress Bar & Number */}
        <div className="loader-text mt-12 w-64 md:w-80">
          <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
            <span>LOADING MODULES...</span>
            <span className="text-[#D4AF37] font-bold">{progress}%</span>
          </div>
          <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-[#D4AF37]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Decorative footer */}
        <div className="loader-text absolute bottom-[-20vh] text-[10px] text-gray-600 font-mono">
          SECURE CONNECTION ESTABLISHED // ENCRYPTION: AES-256
        </div>
      </div>
    </div>
  );
}
