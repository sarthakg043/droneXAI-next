"use client"
import { useEffect, useRef } from 'react';
import { Banner } from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar/Navbar";
import Processes from "@/components/Processes/Processes";
import Services from "@/components/Services/Services";
import { ReactLenis } from 'lenis/react';
import Lenis from 'lenis';

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)), // easeInOutSine
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
      <Navbar handleSmoothScroll={handleSmoothScroll} />
      <ReactLenis root>
        <Banner />
        <Hero id='home' handleSmoothScroll={handleSmoothScroll} />
        <LogoTicker id='partners' />
        <Services id='services' />
        <Processes id='process' />
      </ReactLenis>
    </div>
  );
}
