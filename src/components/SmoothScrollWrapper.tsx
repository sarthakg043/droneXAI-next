// components/SmoothScrollWrapper.tsx
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
  handleSmoothScroll: (e: React.MouseEvent<HTMLHeadingElement | HTMLButtonElement, MouseEvent>, targetId: string) => void;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children, handleSmoothScroll }) => {
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

  return (
    <div>
      {React.cloneElement(children as React.ReactElement<any>, { handleSmoothScroll })}
    </div>
  );
};

export default SmoothScrollWrapper;
