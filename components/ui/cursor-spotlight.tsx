'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const SIZE = 200;
const SPRING_OPTIONS = { bounce: 0, duration: 300 };

export function CursorSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, SPRING_OPTIONS);
  const mouseY = useSpring(0, SPRING_OPTIONS);

  const left = useTransform(mouseX, (x) => `${x - SIZE / 2}px`);
  const top = useTransform(mouseY, (y) => `${y - SIZE / 2}px`);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: SIZE,
          height: SIZE,
          left,
          top,
          background: 'radial-gradient(circle at center, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.35) 45%, transparent 70%)',
          filter: 'blur(18px)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />
    </div>
  );
}
