// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X, ScanLine, SendHorizontal, ShoppingCartIcon } from 'lucide-react';
// import Link from 'next/link';
// import { menuItems } from './menuItems';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <header className="bg-primary text-white py-4 relative">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Mobile Menu Button */}
//         <div className="flex-none">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="text-white hover:bg-primary/90 -ml-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Open menu"
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>

//         {/* Mobile Menu Overlay */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 z-9999 bg-black/50" onClick={() => setIsMenuOpen(false)}>
//             <div className="absolute left-0 top-0 h-full max-w-2xl bg-primary p-6 space-y-4"
//               onClick={(e) => e.stopPropagation()}>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute right-4 top-4 text-white"
//                 onClick={() => setIsMenuOpen(false)}
//                 aria-label="Close menu"
//               >
//                 <X className="h-6 w-6" />
//               </Button>

//               <nav className="mt-12 space-y-4">
//                 {menuItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/80 transition-colors"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.icon}
//                     <span className="text-lg">{item.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         )}

//         {/* Center: Tracking Input */}
//         <div className="flex-1 max-w-2xl mx-4">
//           <div className="flex items-center w-full">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-primary/90"
//               aria-label="Scan tracking number"
//             >
//               <ScanLine className="h-6 w-6" />
//             </Button>
//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 placeholder="Enter tracking number"
//                 className="w-full px-2 py-2 rounded-lg text-gray-900 focus:px-4 focus:py-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-gray-500 bg-white text-sm md:text-base pr-12 "
//               />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute right-0 top-1/2 -translate-y-1/2  bg-primary/90 hover:bg-primary/70 text-white rounded-lg transition-colors duration-300 "
//                 aria-label="Submit tracking number"
//               >
//                 <SendHorizontal className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Right: Cart */}
//         <div className="flex-none">
//           <Link href="/cart">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-primary/90 -mr-2"
//               aria-label="View cart"
//             >
//               <ShoppingCartIcon className="h-6 w-6" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }



'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { menuItems } from './menuItems';
import { TrackingInput } from './track'; // Import the tracking component

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white py-4 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="flex-none">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-primary/90 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay (keep this the same) */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-9999 bg-black/50" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute left-0 top-0 h-full max-w-2xl bg-primary p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 text-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>

              <nav className="mt-12 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="text-lg">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Center: Use TrackingInput component */}
        <TrackingInput />

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