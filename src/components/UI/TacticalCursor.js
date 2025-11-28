'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function TacticalCursorContent() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useGSAP(() => {
    if (!cursorRef.current || !followerRef.current) return;

    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-9999 hidden lg:block mix-blend-difference">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 border border-[#D4AF37] rounded-full flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-[#D4AF37] rounded-full"></div>
        <div className="absolute top-1/2 -left-1 w-2 h-px bg-[#D4AF37]"></div>
        <div className="absolute top-1/2 -right-1 w-2 h-px bg-[#D4AF37]"></div>
        <div className="absolute left-1/2 -top-1 w-px h-2 bg-[#D4AF37]"></div>
        <div className="absolute left-1/2 -bottom-1 w-px h-2 bg-[#D4AF37]"></div>
      </div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 border border-[#D4AF37]/30 rounded-full"
      ></div>
    </div>
  );
}

export default TacticalCursorContent;
