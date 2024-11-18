"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { WorldPortal } from "@/components/worlds/world-portal";

const initialWorlds = [
  {
    id: "christmas-buches",
    name: "Christmas Bûches",
    description: "Unlock exclusive access to our 2024 Christmas collection. Be the first to order our signature Bûches de Noël and festive treats.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=80",
    tokenCost: 150,
    isLocked: true,
    isSpecial: true,
  },
  {
    id: "celestial-sweets",
    name: "Celestial Sweets",
    description: "Journey through a constellation of star-dusted truffles and nebula-inspired macarons in this cosmic collection.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    tokenCost: 50,
    isLocked: true,
  },
  {
    id: "enchanted-forest",
    name: "Enchanted Forest",
    description: "Discover moss-covered chocolate logs and crystal sugar mushrooms in our woodland-inspired dessert collection.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    tokenCost: 75,
    isLocked: true,
  },
  {
    id: "candy-dreams",
    name: "Candy Dreams",
    description: "Enter a world of whimsical confections with rainbow bonbons and cotton candy clouds.",
    image: "https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?auto=format&fit=crop&w=800&q=80",
    tokenCost: 100,
    isLocked: true,
  },
  {
    id: "royal-treasures",
    name: "Royal Treasures",
    description: "Indulge in gold-leafed pralines and jewel-toned petit fours fit for royalty.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tokenCost: 125,
    isLocked: true,
  },
  {
    id: "aurora-delights",
    name: "Aurora Delights",
    description: "Experience the magic of the northern lights through iridescent glazed desserts and shimmer-dusted confections.",
    image: "https://images.unsplash.com/photo-1546856549-0a2e4c3ad5fb?auto=format&fit=crop&w=800&q=80",
    tokenCost: 100,
    isLocked: true,
  },
];

export default function WorldsPage() {
  const [worlds, setWorlds] = useState(initialWorlds);
  const [availableTokens, setAvailableTokens] = useState(100);

  const handleUnlock = (world) => {
    if (availableTokens >= world.tokenCost && world.isLocked) {
      setWorlds(worlds.map(w => 
        w.id === world.id ? { ...w, isLocked: false } : w
      ));
      setAvailableTokens(prev => prev - world.tokenCost);
      toast.success(`Unlocked ${world.name}! 🎉`);
    } else if (!world.isLocked) {
      toast.error("This world is already unlocked!");
    } else {
      toast.error("Not enough tokens!");
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="magical-background">
        <div className="geometric-shapes" />
      </div>

      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
            Magical Worlds
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-inter">
            Unlock enchanting realms filled with exclusive desserts and magical experiences
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
            {availableTokens} Tokens Available
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worlds.map((world) => (
            <WorldPortal
              key={world.id}
              world={world}
              availableTokens={availableTokens}
              onUnlock={handleUnlock}
            />
          ))}
        </div>
      </div>
    </div>
  );
}