"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorldPortalProps {
  world: {
    id: string;
    name: string;
    description: string;
    image: string;
    tokenCost: number;
    isLocked: boolean;
    isSpecial?: boolean;
  };
  availableTokens: number;
  onUnlock: (world: any) => void;
}

export function WorldPortal({ world, availableTokens, onUnlock }: WorldPortalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="world-portal group"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={world.image}
          alt={world.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={world.isSpecial}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
          <h3 className="text-2xl font-bold font-playfair mb-2">{world.name}</h3>
          <p className="text-sm text-white/80 mb-4 font-inter line-clamp-2">{world.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
              {world.tokenCost} Tokens
            </span>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/20"
              onClick={() => onUnlock(world)}
              disabled={availableTokens < world.tokenCost || !world.isLocked}
            >
              {world.isLocked ? (
                <Lock className="w-4 h-4 mr-2" />
              ) : (
                <Unlock className="w-4 h-4 mr-2" />
              )}
              {world.isLocked ? "Unlock" : "Unlocked"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}