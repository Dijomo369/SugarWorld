"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductCard({ name, price, image, description }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      className="group relative aspect-square overflow-hidden rounded-2xl"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.02 }
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative h-full w-full"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-500"
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        variants={{
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        variants={{
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.h3
          className="text-2xl font-playfair mb-2"
          variants={{
            hover: { scale: 1.1 }
          }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.h3>
        <p className="text-sm text-white/80 mb-4 text-center">{description}</p>
        <p className="text-xl font-semibold mb-4">${price.toFixed(2)}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:text-pink-200 hover:bg-white/10"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:text-pink-200 hover:bg-white/10"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-white text-black hover:bg-pink-100 transition-colors"
            onClick={() => console.log(`Added ${quantity} ${name} to cart`)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}