"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProductGrid } from "@/components/products/product-grid";
import { ParallaxClouds } from "@/components/parallax-clouds";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const productsY = useTransform(scrollYProgress, [0.4, 0.8], ["100%", "0%"]);
  const productsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Fixed Hero Section */}
      <div className="fixed inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.creativefabrica.com/wp-content/uploads/2024/01/29/Cotton-Candy-Cloud-Background-Graphics-89704115-1.jpg"
            alt="Cotton candy clouds"
            fill
            priority
            className="object-cover"
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
        </div>

        {/* Hero Content - Fixed */}
        <div className="absolute z-10 top-32 left-0 right-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl text-white mb-2 font-inter tracking-wide">
            Welcome to
          </h2>
          <h1 className="font-playfair text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
            Sugar Worlds
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2 font-playfair italic">
            by
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl text-white mb-8 font-playfair">
            Lupita
          </p>
          <p className="text-lg sm:text-xl text-white mb-12 max-w-2xl mx-auto font-inter tracking-wide">
            The Sweet Art of Creation
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ opacity: buttonOpacity }}
          >
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white font-inter relative z-0"
              asChild
            >
              <Link href="/shop">
                Explore Our Creations <ChevronRight className="ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-[#F05593] hover:bg-[#F05593]/90 text-white border-none font-inter relative z-0"
              asChild
            >
              <Link href="/worlds">
                Unlock New Worlds <Sparkles className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Parallax Clouds */}
        <ParallaxClouds />
      </div>

      {/* Products Section - Slides up after clouds are gone */}
      <motion.section 
        style={{ 
          y: productsY,
          opacity: productsOpacity
        }}
        className="fixed inset-0 min-h-screen bg-white/95 backdrop-blur-md overflow-y-auto"
      >
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ProductGrid />
          </div>
        </div>
      </motion.section>
    </div>
  );
}