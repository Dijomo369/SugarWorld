"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Menu, X, Cake, Gift, LogIn } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/shop', label: 'Shop', icon: Cake },
    { href: '/worlds', label: 'Worlds', icon: Gift },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Sugar Worlds
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`hover:text-pink-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span className="flex items-center space-x-1">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </span>
              </Link>
            ))}
            <Link href="/signup">
              <Button
                variant="ghost"
                className={`${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-pink-500`}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className={`${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-pink-500`}
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? 'text-gray-700' : 'text-white'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden bg-white/90 backdrop-blur-md"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="flex items-center space-x-2">
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </span>
            </Link>
          ))}
          <Link
            href="/signup"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="flex items-center space-x-2">
              <LogIn className="w-4 h-4" />
              <span>Sign Up</span>
            </span>
          </Link>
          <div className="px-3 py-2">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}