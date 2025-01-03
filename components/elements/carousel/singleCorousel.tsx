// // // import * as React from "react";
// // // import Image from "next/image";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   Carousel,
// // //   CarouselContent,
// // //   CarouselItem,
// // //   CarouselNext,
// // //   CarouselPrevious,
// // //   type CarouselApi,
// // // } from "@/components/ui/carousel";
// // // import { AspectRatio } from "@/components/ui/aspect-ratio"
// // // import { Button } from "@/components/ui/button";

// // // // Sample carousel items with images and content
// // // const carouselItems = [
// // //   {
// // //     id: 1,
// // //     title: "Bitcoin: The Future of Finance",
// // //     description: "Discover how Bitcoin is revolutionizing the financial world.",
// // //     imageUrl: '/carousel/inv1.jpg',
// // //     ctaText: "Learn More",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Ethereum: Smart Contracts Revolution",
// // //     description: "Explore the power of decentralized applications with Ethereum.",
// // //     imageUrl: "/carousel/inv2.jpg",
// // //     ctaText: "Explore DApps",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Cardano: Sustainable Blockchain",
// // //     description: "Learn about Cardano's eco-friendly approach to cryptocurrency.",
// // //     imageUrl: "/carousel/inv3.jpg",
// // //     ctaText: "Go Green",
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Polkadot: Interoperable Blockchain",
// // //     description: "Understand how Polkadot is connecting different blockchain networks.",
// // //     imageUrl: "/carousel/inv4.jpg",
// // //     ctaText: "Connect Now",
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "Solana: High-Speed Transactions",
// // //     description: "Experience lightning-fast transactions with Solana.",
// // //     imageUrl: "/carousel/inv5.jpg",
// // //     ctaText: "Speed Up",
// // //   },
// // //   {
// // //     id: 6,
// // //     title: "Ripple: Global Payment Solutions",
// // //     description: "See how Ripple is transforming cross-border payments.",
// // //     imageUrl: "/carousel/inv6.jpg",
// // //     ctaText: "Go Global",
// // //   },
// // // ];

// // // export function CarouselSingle() {
// // //   const [api, setApi] = React.useState<CarouselApi>();
// // //   const [current, setCurrent] = React.useState(0);

// // //   React.useEffect(() => {
// // //     if (!api) return;

// // //     const handleSelect = () => {
// // //       setCurrent(api.selectedScrollSnap() + 1);
// // //     };

// // //     api.on("select", handleSelect);

// // //     return () => {
// // //       api.off("select", handleSelect);
// // //     };
// // //   }, [api]);

// // //   React.useEffect(() => {
// // //     if (!api) return;

// // //     const interval = setInterval(() => {
// // //       api.scrollNext();
// // //     }, 5000);

// // //     return () => clearInterval(interval);
// // //   }, [api]);

// // //   const handleNext = () => {
// // //     api?.scrollNext();
// // //   };

// // //   const handlePrev = () => {
// // //     api?.scrollPrev();
// // //   };

// // //   return (
// // //     <div className="w-full h-full relative">
// // //       <Carousel
// // //         setApi={setApi}
// // //         opts={{
// // //           align: "start",
// // //           loop: true,
// // //         }}
// // //         className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-lg overflow-hidden"
// // //       >
// // //         <CarouselContent className="w-full h-full">
// // //           {carouselItems.map((item, index) => (
// // //             <CarouselItem key={item.id} className="w-full h-full">
// // //               <Card className="w-full h-full overflow-hidden">
// // //                 <CardContent className="p-0 relative w-full h-full">
// // //                   <Image
// // //                     src={item.imageUrl}
// // //                     alt={item.title}
// // //                     layout="fill"
// // //                     objectFit="cover"
// // //                   />
// // //                   <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
// // //                     <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
// // //                     <p className="mb-4">{item.description}</p>
// // //                     <Button variant="outline" className="self-start">
// // //                       {item.ctaText}
// // //                     </Button>
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </CarouselItem>
// // //           ))}
// // //         </CarouselContent>
// // //       </Carousel>

// // //       {/* Arrows outside of the carousel */}
// // //       <button
// // //         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-800 hover:bg-opacity-75 transition-all z-10"
// // //         onClick={handlePrev}
// // //       >
// // //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // //         </svg>
// // //       </button>
// // //       <button
// // //         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-800 hover:bg-opacity-75 transition-all z-10"
// // //         onClick={handleNext}
// // //       >
// // //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //         </svg>
// // //       </button>

// // //       {/* Slide indicator */}
// // //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
// // //         {current} / {carouselItems.length}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export function CarouselContainer() {
// // //   return (
// // //     <div className="max-w-6xl w-full mx-auto mb-10 pt-5 px-4">
// // //       <div className="carousel-container shadow-lg rounded-lg overflow-hidden">
// // //         <CarouselSingle />
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import * as React from "react";
// // import Image from "next/image";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// //   type CarouselApi,
// // } from "@/components/ui/carousel";
// // import { Button } from "@/components/ui/button";

// // // Sample carousel items with images and content
// // const carouselItems = [
// //   {
// //     id: 1,
// //     title: "Bitcoin: The Future of Finance",
// //     description: "Discover how Bitcoin is revolutionizing the financial world.",
// //     imageUrl: '/carousel/inv1.jpg',
// //     ctaText: "Learn More",
// //   },
// //   {
// //     id: 2,
// //     title: "Ethereum: Smart Contracts Revolution",
// //     description: "Explore the power of decentralized applications with Ethereum.",
// //     imageUrl: "/carousel/inv2.jpg",
// //     ctaText: "Explore DApps",
// //   },
// //   {
// //     id: 3,
// //     title: "Cardano: Sustainable Blockchain",
// //     description: "Learn about Cardano's eco-friendly approach to cryptocurrency.",
// //     imageUrl: "/carousel/inv3.jpg",
// //     ctaText: "Go Green",
// //   },
// //   {
// //     id: 4,
// //     title: "Polkadot: Interoperable Blockchain",
// //     description: "Understand how Polkadot is connecting different blockchain networks.",
// //     imageUrl: "/carousel/inv4.jpg",
// //     ctaText: "Connect Now",
// //   },
// //   {
// //     id: 5,
// //     title: "Solana: High-Speed Transactions",
// //     description: "Experience lightning-fast transactions with Solana.",
// //     imageUrl: "/carousel/inv5.jpg",
// //     ctaText: "Speed Up",
// //   },
// //   {
// //     id: 6,
// //     title: "Ripple: Global Payment Solutions",
// //     description: "See how Ripple is transforming cross-border payments.",
// //     imageUrl: "/carousel/inv6.jpg",
// //     ctaText: "Go Global",
// //   },
// // ];

// // export function CarouselSingle() {
// //   const [api, setApi] = React.useState<CarouselApi>();
// //   const [current, setCurrent] = React.useState(0);

// //   React.useEffect(() => {
// //     if (!api) return;

// //     const handleSelect = () => {
// //       setCurrent(api.selectedScrollSnap() + 1);
// //     };

// //     api.on("select", handleSelect);

// //     return () => {
// //       api.off("select", handleSelect);
// //     };
// //   }, [api]);

// //   React.useEffect(() => {
// //     if (!api) return;

// //     const interval = setInterval(() => {
// //       api.scrollNext();
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [api]);

// //   const handleNext = () => {
// //     api?.scrollNext();
// //   };

// //   const handlePrev = () => {
// //     api?.scrollPrev();
// //   };

// //   return (
// //     <div className="w-full h-full relative">
// //       <Carousel
// //         setApi={setApi}
// //         opts={{
// //           align: "start",
// //           loop: true,
// //         }}
// //         className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-lg overflow-hidden"
// //       >
// //         <CarouselContent className="w-full h-full">
// //           {carouselItems.map((item, index) => (
// //             <CarouselItem key={item.id} className="w-full h-full">
// //               <Card className="w-full h-full overflow-hidden">
// //                 <CardContent className="p-0 relative w-full h-full">
// //                   <div className="relative w-full h-full">
// //                     <Image
// //                       src={item.imageUrl}
// //                       alt={item.title}
// //                       fill
// //                       style={{ objectFit: "cover" }}
// //                     />
// //                   </div>
// //                   <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
// //                     <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
// //                     <p className="mb-4">{item.description}</p>
// //                     <Button variant="outline" className="self-start">
// //                       {item.ctaText}
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </CarouselItem>
// //           ))}
// //         </CarouselContent>
// //       </Carousel>

// //       {/* Arrows outside of the carousel */}
// //       <button
// //         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-800 hover:bg-opacity-75 transition-all z-10"
// //         onClick={handlePrev}
// //       >
// //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //         </svg>
// //       </button>
// //       <button
// //         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-800 hover:bg-opacity-75 transition-all z-10"
// //         onClick={handleNext}
// //       >
// //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //         </svg>
// //       </button>

// //       {/* Slide indicator */}
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
// //         {current} / {carouselItems.length}
// //       </div>
// //     </div>
// //   );
// // }

// // export function CarouselContainer() {
// //   return (
// //     <div className="max-w-6xl w-full mx-auto mb-10 pt-5 px-4">
// //       <div className="carousel-container shadow-lg rounded-lg overflow-hidden">
// //         <CarouselSingle />
// //       </div>
// //     </div>
// //   );
// // }

// // "use client"

// // import * as React from "react"
// // import Image from "next/image"
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel"

// // const carouselItems = [
// //   {
// //     id: 1,
// //     title: "Bitcoin",
// //     imageUrl: "/carousel/inv1.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Ethereum",
// //     imageUrl: "/carousel/inv3.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Cardano",
// //     imageUrl: "/carousel/inv4.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Polkadot",
// //     imageUrl: "/carousel/inv5.jpg",
// //   },
// //   {
// //     id: 5,
// //     title: "Solana",
// //     imageUrl: "/carousel/inv6.jpg",
// //   },
// // ]

// // export function CarouselSingle() {
// //   return (
// //     <Carousel className="w-full max-w-xs mx-auto">
// //       <CarouselContent>
// //         {carouselItems.map((item) => (
// //           <CarouselItem key={item.id}>
// //             <div className="p-1">
// //               <div className="flex aspect-square items-center justify-center p-6 relative">
// //                 <Image
// //                   src={item.imageUrl}
// //                   alt={item.title}
// //                   fill
// //                   className="object-cover rounded-md"
// //                 />
// //                 <span className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-sm font-semibold">
// //                   {item.title}
// //                 </span>
// //               </div>
// //             </div>
// //           </CarouselItem>
// //         ))}
// //       </CarouselContent>
// //       <CarouselPrevious />
// //       <CarouselNext />
// //     </Carousel>
// //   )
// // }



// // export function CarouselContainer() {
// //   return (
// //     <div className="max-w-6xl w-full mx-auto mb-10 pt-5 px-4">
// //       <div className="carousel-container shadow-lg rounded-lg overflow-hidden">
// //         <CarouselSingle />
// //       </div>
// //     </div>
// //   );
// // }

// "use client"

// import * as React from "react"
// import Image from "next/image"
// import { cn } from "@/lib/utils"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   type CarouselApi,
// } from "@/components/ui/carousel"
// import { motion } from 'framer-motion'
// import { ChevronRight } from 'lucide-react'

// import { Button } from '@/components/ui/button'

// const carouselItems = [
//   {
//     id: 1,
//     title: "Bitcoin",
//     imageUrl: "/carousel/inv1.jpg",
//     description: "Discover how Bitcoin is revolutionizing the financial world.",
//     ctaText: "Learn More",

//   },
//   {
//     id: 2,
//     title: "Ethereum",
//     imageUrl: "/carousel/inv3.jpg",
//     description: "Explore the power of decentralized applications with Ethereum.",
//     ctaText: "Learn More",


//   },
//   {
//     id: 3,
//     title: "Cardano",
//     imageUrl: "/carousel/inv4.jpg",
//     description: "Learn about Cardano's eco-friendly approach to cryptocurrency.",
//     ctaText: "Learn More",

//   },
//   {
//     id: 4,
//     title: "Polkadot",
//     imageUrl: "/carousel/inv5.jpg",
//     description: "Understand how Polkadot is connecting different blockchain networks.",
//     ctaText: "Learn More",

//   },
//   {
//     id: 5,
//     title: "Solana",
//     imageUrl: "/carousel/inv6.jpg",
//     description: "Experience lightning-fast blockchain transactions with Solana, the high-performance cryptocurrency network.",
//     ctaText: "Learn More",

//   },
// ]

// export function CarouselSingle() {
//   const [api, setApi] = React.useState<CarouselApi>()
//   const [current, setCurrent] = React.useState(0)

//   React.useEffect(() => {
//     if (!api) {
//       return
//     }

//     setCurrent(api.selectedScrollSnap())
//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap())
//     })
//   }, [api])

//   return (
//     <Carousel setApi={setApi} className="w-full h-full">
//       <CarouselContent className="h-full">
//         {carouselItems.map((item) => (
//           <CarouselItem key={item.id} className="h-full">
//             <div className="relative w-full h-full min-h-[300px] sm:aspect-[21/9]">
//               <Image
//                 src={item.imageUrl}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex flex-col items-center justify-center text-center px-4"
//               >
//                 <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg shadow-black mb-4 max-w-4xl">
//                   {item.title}
//                 </h1>
//                 <p className="text-white text-sm sm:text-lg md:text-xl font-medium max-w-3xl drop-shadow-md shadow-black mb-8">
//                   {item.description}
//                 </p>

//                 <Button
//                  variant="outline"    className="p-3 bg-accent text-white border-white hover:text-accent"

//                 >
//                   Learn More
//                   <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </motion.div>


//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10">
//         {carouselItems.map((_, index) => (
//           <button
//             key={index}
//             className={cn(
//               "w-3 h-3 rounded-full transition-colors duration-300",
//               current === index ? "bg-white" : "bg-white/50"
//             )}
//             onClick={() => api?.scrollTo(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </Carousel>
//   )
// }

// export function CarouselContainer() {
//   return (
//     <div className="w-full h-screen sm:h-auto mx-auto mb-10">
//       <div className="carousel-container h-full overflow-hidden">
//         <CarouselSingle />
//       </div>
//     </div>
//   )
// }


"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Autoplay from "embla-carousel-autoplay"

const carouselItems = [
  {
    id: 1,
    title: "Bitcoin",
    imageUrl: "/carousel/inv1.jpg",
    description: "Discover how Bitcoin is revolutionizing the financial world.",
    ctaText: "Learn More",
  },
  {
    id: 2,
    title: "Ethereum",
    imageUrl: "/carousel/inv3.jpg",
    description: "Explore the power of decentralized applications with Ethereum.",
    ctaText: "Learn More",
  },
  {
    id: 3,
    title: "Cardano",
    imageUrl: "/carousel/inv4.jpg",
    description: "Learn about Cardano's eco-friendly approach to cryptocurrency.",
    ctaText: "Learn More",
  },
  {
    id: 4,
    title: "Polkadot",
    imageUrl: "/carousel/inv5.jpg",
    description: "Understand how Polkadot is connecting different blockchain networks.",
    ctaText: "Learn More",
  },
  {
    id: 5,
    title: "Solana",
    imageUrl: "/carousel/inv6.jpg",
    description: "Experience lightning-fast blockchain transactions with Solana, the high-performance cryptocurrency network.",
    ctaText: "Learn More",
  },
]

export function CarouselSingle() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [autoplayRef] = React.useState(() => Autoplay({ delay: 5000, stopOnInteraction: false }))

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleMouseEnter = () => {
    autoplayRef.stop()
  }

  const handleMouseLeave = () => {
    autoplayRef.reset()
  }

  return (
    <Carousel 
      setApi={setApi} 
      className="w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      plugins={[autoplayRef]}
    >
      <CarouselContent className="h-full">
        {carouselItems.map((item) => (
          <CarouselItem key={item.id} className="h-full">
            <div className="relative w-full h-full min-h-[300px] sm:aspect-[21/9]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex flex-col items-center justify-center text-center px-4"
              >
                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg shadow-black mb-4 max-w-4xl">
                  {item.title}
                </h1>
                <p className="text-white text-sm sm:text-lg md:text-xl font-medium max-w-3xl drop-shadow-md shadow-black mb-8">
                  {item.description}
                </p>
                <Button
                  variant="outline"
                  className="py-1 px-2 sm:p-3 bg-accent text-white border-white hover:text-accent text-xs sm:text-sm md:text-base"
                >
                  {item.ctaText}
                  <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10 sm:flex hidden">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-300",
              current === index ? "bg-white" : "bg-white/50"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}

export function CarouselContainer() {
  return (
    <div className="w-full h-screen sm:h-auto mx-auto mb-10">
      <div className="carousel-container h-full overflow-hidden">
        <CarouselSingle />
      </div>
    </div>
  )
}

