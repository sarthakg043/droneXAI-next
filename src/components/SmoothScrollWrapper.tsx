"use client"
// components/SmoothScrollWrapper.tsx
import React, { useEffect, useRef, isValidElement, cloneElement } from 'react';
import Lenis from 'lenis';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

interface SmoothScrollWrapperChildProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLHeadingElement | HTMLButtonElement, MouseEvent>, targetId: string) => void;
}

function cubicBezier(t: number, p0: number, p1: number, p2: number, p3: number) {
  return (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t ** 2 * p2 + t ** 3 * p3;
}

function solveCubicBezier(x: number, p1x: number, p1y: number, p2x: number, p2y: number, epsilon: number = 0.0001) {
  let t0 = 0;
  let t1 = 1;
  let t = x;

  while (t0 < t1) {
      const xEst = cubicBezier(t, 0, p1x, p2x, 1);

      if (Math.abs(xEst - x) < epsilon) {
          return cubicBezier(t, 0, p1y, p2y, 1);
      }

      if (xEst < x) {
          t0 = t;
      } else {
          t1 = t;
      }

      t = (t0 + t1) / 2;
  }

  return cubicBezier(t, 0, p1y, p2y, 1); // Return the final value
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      // easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, // easeInOutCubic
      easing: (t) => solveCubicBezier(t, 0.16, 1, 0.3, 1), // easeOutExpo
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on component unmount
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLHeadingElement | HTMLButtonElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement);
    }
  };

  return (
    <div>
      {React.Children.map(children, child => 
        isValidElement(child) && typeof child.type === 'function' 
          ? cloneElement(child as React.ReactElement<SmoothScrollWrapperChildProps>, { handleSmoothScroll })
          : child
      )}
    </div>
  );
};

export default SmoothScrollWrapper;
