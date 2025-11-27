'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

const GSAPProvider = ({ children }) => {
  const smoother = useRef(null);

  useEffect(() => {
    // Create ScrollSmoother instance
    smoother.current = ScrollSmoother.create({
      smooth: 1.5, // smoothing duration (seconds)
      effects: true, // enable data-speed and data-lag
      smoothTouch: 0.1, // smooth scrolling on touch devices
      normalizeScroll: true, // prevent address bar show/hide on mobile
      ignoreMobileResize: true, // avoid jump on mobile resize
    });

    // Cleanup on unmount
    return () => {
      if (smoother.current) {
        smoother.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default GSAPProvider;
