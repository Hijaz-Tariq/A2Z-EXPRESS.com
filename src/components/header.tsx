'use client';

import { Button } from '@/components/ui/button';
import { Menu, ScanLine, SendHorizontal, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Menu Button */}
        <div className="flex-none">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-primary/90 -ml-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Center: Tracking Input */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center w-full">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-primary/90"
              aria-label="Scan tracking number"
            >
              <ScanLine className="h-6 w-6" />
            </Button>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="w-full px-2 py-2 rounded-lg text-gray-900 focus:px-4 focus:py-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-gray-500 bg-white text-sm md:text-base pr-12 "
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2  bg-primary/90 hover:bg-primary/70 text-white rounded-lg transition-colors duration-300 "
                aria-label="Submit tracking number"
              >
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        {/* Right: Cart */}
        <div className="flex-none">
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-primary/90 -mr-2"
              aria-label="View cart"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
