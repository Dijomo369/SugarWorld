"use client";

import { motion } from "framer-motion";
import { ProductGrid } from "@/components/products/product-grid";

export default function ShopPage() {
  return (
    <div className="min-h-screen relative">
      <div className="magical-background">
        <div className="geometric-shapes" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
            Our Magical Creations
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-inter">
            Discover our collection of handcrafted worlds with sweet precision, where each creation tells a story of artistry and enchantment.
          </p>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center font-playfair">
              Available Desserts
            </h2>
            <p className="text-center text-gray-600 mt-2 font-inter">
              Each creation is crafted with passion and the finest ingredients, bringing dreams to life
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}