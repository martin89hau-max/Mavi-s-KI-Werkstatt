'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const SPRING_OPTIONS = { bounce: 0, duration: 200 };

export function CursorSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, SPRING_OPTIONS);
  const mouseY = useSpring(0, SPRING_OPTIONS);

  const left = useTransform(mouseX, (x) => `${x}px`);
  const top = useTransform(mouseY, (y) => `${y}px`);

  const updatePosition = useCallback(
    (x: number, y: number) => {
      mouseX.set(x);
      mouseY.set(y);
      setIsVisible(true);
    },
    [mouseX, mouseY]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => updatePosition(e.clientX, e.clientY),
    [updatePosition]
  );

  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        style={{ left, top, opacity: isVisible ? 1 : 0 }}
        className="absolute"
      >
        {/* Black hand cursor SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'translate(-4px, -2px)' }}
        >
          <path
            d="M8 2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2V14H11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V14H14V7C14 6.44772 14.4477 6 15 6C15.5523 6 16 6.44772 16 7V14H17V9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9V19C19 19 19 21 17 23L17 28C17 28.5523 16.5523 29 16 29H9C8.44772 29 8 28.5523 8 28L8 23C6 21 6 19 6 19V4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4V2Z"
            fill="black"
            stroke="white"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
