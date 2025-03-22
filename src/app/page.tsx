// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { BaggageClaim, PlaneIcon, ShipIcon, Warehouse } from "lucide-react";

// const services = [
// {
//   title: "Express Air Shipping",
//   price: "$49.99",
//   // imageSrc: "/a2z-express/public/products/a.jpg",
//   imageSrc: "/products/a.jpg",
//   features: ["3-5 day delivery", "Real-time tracking", "Priority handling"]
// },
// {
//   title: "Economy Sea Freight",
//   price: "$19.99",
//   imageSrc: "/products/b.avif",
//   features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
// },
// {
//   title: "Express Air Shipping",
//   price: "$49.99",
//   imageSrc: "/products/c.jpg",
//   features: ["3-5 day delivery", "Real-time tracking", "Priority handling"]
// },
// {
//   title: "Economy Sea Freight",
//   price: "$19.99",
//   imageSrc: "/products/1.webp",
//   features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
// },
// {
//   title: "Economy Sea Freight",
//   price: "$19.99",
//   imageSrc: "/products/2.webp",
//   features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
// },
// {
//   title: "Economy Sea Freight",
//   price: "$19.99",
//   imageSrc: "/products/3.webp",
//   features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
// },
// ];

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center">
// {/* Hero Section */}
// <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 text-white">
//   <div className="container mx-auto text-center">
//     <h1 className="mb-6 text-4xl font-bold md:text-6xl">
//       Global Shipping Solutions
//     </h1>
//     <p className="mb-8 text-xl md:text-2xl">
//       Fast Air Freight & Cost-Effective Sea Shipping
//     </p>
//     <Button asChild className="bg-accent text-black hover:bg-accent/90">
//       <Link href="/booking">Book a Pickup Now</Link>
//     </Button>
//   </div>
// </section>

//       {/* Services Section */}
//       <section className="container mx-auto py-16 px-4">
//         <h2 className="mb-8 text-center text-3xl font-bold">Store</h2>

//         {/* Mobile View */}
//         <div className="md:hidden space-y-4">
//           <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide snap-x snap-mandatory">
//             {services.map((service, index) => (
//               <div key={index} className="min-w-[280px] snap-start flex-shrink-0">
//                 <Card className="h-[400px] overflow-hidden">
//                   <div className="relative h-[75%]">
//                     <Image
//                       src={service.imageSrc}
//                       alt={service.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 640px) 100vw, 50vw"
//                     />
//                   </div>
//                   <div className="p-4 h-[25%] flex flex-col justify-center">
//                     <h3 className="text-lg font-semibold">{service.title}</h3>
//                     <p className="text-primary font-bold mt-2">
//                       {service.price}
//                       <span className="text-gray-600 text-sm font-normal">/shipment</span>
//                     </p>
//                   </div>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop View */}
//         <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
//           {services.map((service, index) => (
//             <Card key={index} className="h-[400px] overflow-hidden group hover:shadow-lg">
//               <div className="relative h-[75%] transition-transform duration-300 group-hover:scale-105">
//                 <Image
//                   src={service.imageSrc}
//                   alt={service.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//               <div className="p-4 h-[25%] flex flex-col justify-center">
//                 <h3 className="text-lg font-semibold">{service.title}</h3>
//                 <p className="text-primary font-bold mt-2">
//                   {service.price}
//                   <span className="text-gray-600 text-sm font-normal">/shipment</span>
//                 </p>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Shipping Section */}
//       <section className="container mx-auto py-4">
//         <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <Card className="p-6">
//             <div className="flex flex-col items-center">
//               <PlaneIcon className="mb-4 h-12 w-12 text-primary" />
//               <h3 className="mb-4 text-xl font-semibold">Express Air Shipping</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Worldwide delivery in 3-5 days</li>
//                 <li>• Real-time tracking</li>
//                 <li>• Premium security handling</li>
//               </ul>
//             </div>
//           </Card>

//           <Card className="p-6">
//             <div className="flex flex-col items-center">
//               <BaggageClaim className="mb-4 h-12 w-12 text-primary" />
//               <h3 className="mb-4 text-xl font-semibold">ِAir Freight</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Worldwide delivery in 3-5 days</li>
//                 <li>• Real-time tracking</li>
//                 <li>• Premium security handling</li>
//               </ul>
//             </div>
//           </Card>

//           <Card className="p-6">
//             <div className="flex flex-col items-center">
//               <ShipIcon className="mb-4 h-12 w-12 text-secondary" />
//               <h3 className="mb-4 text-xl font-semibold">Economy Sea Shipping</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Cost-effective bulk shipping</li>
//                 <li>• Customs clearance included</li>
//                 <li>• Environmental friendly</li>
//               </ul>
//             </div>
//           </Card>

//           <Card className="p-6">
//             <div className="flex flex-col items-center">
//               <Warehouse className="mb-4 h-12 w-12 text-secondary" />
//               <h3 className="mb-4 text-xl font-semibold">Logistic</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Cost-effective bulk shipping</li>
//                 <li>• Customs clearance included</li>
//                 <li>• Environmental friendly</li>
//               </ul>
//             </div>
//           </Card>
//         </div>
//       </section>

// {/* CTA Section */}
// <section className="w-full bg-accent py-16">
//   <div className="container mx-auto text-center">
//     <h2 className="mb-8 text-3xl font-bold">Ready to Ship?</h2>
//     <div className="flex justify-center gap-4">
//       <Button asChild className="bg-primary text-white hover:bg-primary/90">
//         <Link href="/booking">Schedule Pickup</Link>
//       </Button>
//       <Button asChild variant="outline" className="border-primary text-primary">
//         <Link href="/calculator">Estimate Cost</Link>
//       </Button>
//     </div>
//   </div>
// </section>
//     </main>
//   );
// }

'use client';

import { useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SquareChevronLeft, SquareChevronRight, BaggageClaim, PlaneIcon, ShipIcon, Warehouse } from "lucide-react";

const services = [
  {
    title: "Express Air Shipping",
    price: "$49.99",
    // imageSrc: "/a2z-express/public/products/a.jpg",
    imageSrc: "/products/a.jpg",
    features: ["3-5 day delivery", "Real-time tracking", "Priority handling"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/b.avif",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
  {
    title: "Express Air Shipping",
    price: "$49.99",
    imageSrc: "/products/c.jpg",
    features: ["3-5 day delivery", "Real-time tracking", "Priority handling"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/1.webp",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/2.webp",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/3.webp",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
  {
    title: "Express Air Shipping",
    price: "$49.99",
    // imageSrc: "/a2z-express/public/products/a.jpg",
    imageSrc: "/products/a.jpg",
    features: ["3-5 day delivery", "Real-time tracking", "Priority handling"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/b.avif",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
  {
    title: "Express Air Shipping",
    price: "$49.99",
    imageSrc: "/products/c.jpg",
    features: ["3-5 day delivery", "Real-time tracking", "Priority handling"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/1.webp",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/2.webp",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
  {
    title: "Economy Sea Freight",
    price: "$19.99",
    imageSrc: "/products/3.webp",
    features: ["Cost-effective", "Bulk shipping", "Eco-friendly"]
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (

    <Card className="h-[400px] overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-[75%] transition-transform duration-300 group-hover:scale-105">
        <Image
          src={service.imageSrc}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
        />
      </div>
      <div className="p-4 h-[25%] flex flex-col justify-center">
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="text-primary font-bold mt-2">
          {service.price}
          <span className="text-gray-600 text-sm font-normal">/shipment</span>
        </p>
      </div>
    </Card>
  );
}

function ScrollableServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="container mx-auto py-16 px-4 relative">
      <h2 className="mb-8 text-center text-3xl font-bold">Store</h2>

      {/* Navigation Arrows - Desktop Only */}
      <div className="hidden md:block">
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full z-50 transition-all shadow-lg hover:scale-110"
          aria-label="Scroll left"
        >
          <SquareChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full z-50 transition-all shadow-lg hover:scale-110"
          aria-label="Scroll right"
        >
          <SquareChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-auto pb-6 scrollbar-hide md:pb-8"
      >
        <div className="flex space-x-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[280px] snap-start flex-shrink-0 
                         md:min-w-[320px] lg:min-w-[360px] xl:min-w-[400px]"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ShippingServiceCard component for your bottom section
function ShippingServiceCard({
  icon: Icon,
  title,
  features,
  color = "primary"
}: {
  icon: any,
  title: string,
  features: string[],
  color?: "primary" | "secondary"
}) {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center">
        <Icon className={`mb-4 h-12 w-12 text-${color}`} />
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <ul className="space-y-2 text-gray-600">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Global Shipping Solutions
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Fast Air Freight & Cost-Effective Sea Shipping
          </p>
          <Button asChild className="bg-accent text-black hover:bg-accent/90">
            <Link href="/booking">Book a Pickup Now</Link>
          </Button>
        </div>
      </section>

      {/* Replace Services Section with */}
      <ScrollableServices />

      {/* Shipping Section */}
      <section className="container mx-auto py-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Solutions</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ShippingServiceCard
            icon={PlaneIcon}
            title="Express Air Shipping"
            features={["Worldwide delivery in 3-5 days", "Real-time tracking", "Premium security handling"]}
          />
          <ShippingServiceCard
            icon={BaggageClaim}
            title="Air Freight"
            features={["Worldwide delivery in 3-5 days", "Real-time tracking", "Premium security handling"]}
          />
          <ShippingServiceCard
            icon={ShipIcon}
            title="Economy Sea Shipping"
            features={["Cost-effective bulk shipping", "Customs clearance included", "Environmental friendly"]}
            color="secondary"
          />
          <ShippingServiceCard
            icon={Warehouse}
            title="Logistic"
            features={["Cost-effective bulk shipping", "Customs clearance included", "Environmental friendly"]}
            color="secondary"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-accent py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Ready to Ship?</h2>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <Link href="/booking">Schedule Pickup</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary">
              <Link href="/calculator">Estimate Cost</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}