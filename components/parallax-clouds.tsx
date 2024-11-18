"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Cloud = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 200 100"
    fill="currentColor"
    className={`w-full h-full ${className}`}
    {...props}
  >
    <path d="M40,40 Q50,10 80,20 Q95,5 110,20 Q140,5 160,30 Q190,25 180,50 Q195,65 170,70 Q155,95 130,80 Q110,95 90,80 Q60,95 40,75 Q10,80 20,50 Q5,35 40,40" />
  </svg>
);

export function ParallaxClouds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const leftCloudX = useTransform(scrollYProgress, [0, 0.4], [0, -300]);
  const rightCloudX = useTransform(scrollYProgress, [0, 0.4], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Left Cloud */}
      <motion.div
        className="absolute left-0 top-1/4 w-[86vw] h-[72vh] text-white/80"
        style={{ x: leftCloudX, opacity }}
        initial={{ x: 0, opacity: 1 }}
      >
        <Cloud className="filter blur-lg transform scale-x-[-1.2] scale-y-[1.2]" />
      </motion.div>

      {/* Right Cloud */}
      <motion.div
        className="absolute right-0 top-1/4 w-[86vw] h-[72vh] text-white/80"
        style={{ x: rightCloudX, opacity }}
        initial={{ x: 0, opacity: 1 }}
      >
        <Cloud className="filter blur-lg scale-[1.2]" />
      </motion.div>
    </div>
  );
}