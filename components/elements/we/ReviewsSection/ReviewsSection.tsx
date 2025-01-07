// // // 'use client'

// // // import { useState } from 'react'
// // // import { ChevronLeft, ChevronRight } from 'lucide-react'
// // // import { useIsMobile } from '@/hooks/use-mobile'
// // // import { ReviewsItem } from './ReviewsItem'
// // // import Image from 'next/image'
// // // import { CommentModal } from '../../modal/ReviewModal/CommentModal'
// // // import { createClient } from '@/lib/supabase/server'
// // // import { redirect } from 'next/navigation'
// // // const testimonials = [
// // //   {
// // //     id: 1,
// // //     name: 'Robert Fox',
// // //     surname: '',
// // //     avatar: '/we/user1.svg',
// // //     rating: 5,
// // //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// // //   },
// // //   {
// // //     id: 2,
// // //     name: 'Jenny Wilson',
// // //     surname: '',
// // //     avatar: '/we/user2.svg',
// // //     rating: 5,
// // //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// // //   },
// // //   {
// // //     id: 3,
// // //     name: 'Jacob Jones',
// // //     surname: '',
// // //     avatar: '/we/user3.svg',
// // //     rating: 5,
// // //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// // //   },
// // //   {
// // //     id: 4,
// // //     name: 'Sarah Smith',
// // //     surname: '',
// // //     avatar: '/we/user2.svg',
// // //     rating: 5,
// // //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// // //   },
// // //   {
// // //     id: 5,
// // //     name: 'Sarah Smith',
// // //     surname: '',
// // //     avatar: '/we/user3.svg',
// // //     rating: 5,
// // //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// // //   },
// // // ]

// // // export const ReviewsSection = () => {
  
// // //   const [currentIndex, setCurrentIndex] = useState(0)
// // //   const isMobile = useIsMobile()
// // //   const itemsPerPage = isMobile ? 1 : 3
// // //   const totalPages = Math.ceil(testimonials.length / itemsPerPage)
// // //   const [showCommentModal, setShowCommentModal] = useState(false)

// // //   const nextSlide = () => {
// // //     setCurrentIndex(prev => (prev + 1) % totalPages)
// // //   }

// // //   const prevSlide = () => {
// // //     setCurrentIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1))
// // //   }

// // //   const getCurrentTestimonials = () => {
// // //     const start = currentIndex * itemsPerPage
// // //     const end = start + itemsPerPage
// // //     return testimonials.slice(start, end)
// // //   }

// // //   const visibleTestimonials = getCurrentTestimonials()

// // //   const handleCommentSubmit = (comment: { text: string; rating: number }) => {
// // //     console.log('New Comment:', comment)
// // //     // Optionally, update the testimonials or send the comment to the backend
// // //   }

// // //   return (
// // //     <>
// // //       <section className="py-8 sm:py-16 px-4 max-w-7xl mx-auto text-[#0f0f0f]">
// // //         <h2 className="text-3xl sm:text-4xl md:text-[54px] font-extrabold text-center mb-8 sm:mb-[56px] leading-tight">
// // //           <span className="relative inline-block">
// // //             Що кажуть наші
// // //             <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-full h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
// // //           </span>{' '}
// // //           <span className="relative inline-block">
// // //             клієнти
// // //             <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-[55%] h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
// // //           </span>
// // //         </h2>

// // //         <div className="relative">
// // //           <div className="flex items-center justify-center gap-4 sm:gap-8">
// // //             <button
// // //               onClick={prevSlide}
// // //               className="hidden sm:flex items-center justify-center"
// // //               aria-label="Previous slide"
// // //             >
// // //               <Image src="/we/arrow-left.svg" alt="" width={26} height={31} />
// // //             </button>

// // //             <div className="overflow-hidden w-full sm:w-auto">
// // //               <div className="flex gap-4 sm:gap-[36px] py-6 px-4">
// // //                 {visibleTestimonials.map(testimonial => (
// // //                   <div
// // //                     key={testimonial.id}
// // //                     className="min-w-full sm:min-w-[calc(50%-0.5rem)] md:min-w-[calc(33.333%-1.5rem)] flex justify-center"
// // //                   >
// // //                     <ReviewsItem {...testimonial} />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="text-left mt-4 sm:mt-8">
// // //                 <button
// // //                   className="text-[#919191] font-bold text-base sm:text-[18px] underline transition-colors"
// // //                   onClick={() => setShowCommentModal(true)}
// // //                 >
// // //                   Додати коментар...
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             <button
// // //               onClick={nextSlide}
// // //               className="hidden sm:flex items-center justify-center"
// // //               aria-label="Next slide"
// // //             >
// // //               <Image src="/we/arrow-right.svg" alt="" width={26} height={31} />
// // //             </button>
// // //           </div>

// // //           {/* Mobile Navigation */}
// // //           <div className="flex justify-center gap-4 mt-6 sm:hidden">
// // //             <button
// // //               onClick={prevSlide}
// // //               className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
// // //             >
// // //               <ChevronLeft className="w-5 h-5" />
// // //             </button>
// // //             <button
// // //               onClick={nextSlide}
// // //               className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
// // //             >
// // //               <ChevronRight className="w-5 h-5" />
// // //             </button>
// // //           </div>

// // //           {/* Pagination Dots */}
// // //           <div className="flex justify-center gap-2 mt-4 sm:mt-8">
// // //             {Array.from({ length: totalPages }).map((_, index) => (
// // //               <button
// // //                 key={index}
// // //                 className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
// // //                   }`}
// // //                 onClick={() => setCurrentIndex(index)}
// // //                 aria-label={`Go to slide ${index + 1}`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Comment Modal */}

// // //       <CommentModal
// // //         isOpen={showCommentModal}
// // //         onClose={() => setShowCommentModal(false)}
// // //         onSubmit={handleCommentSubmit}
// // //       />
// // //     </>
// // //   )
// // // }
// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { ChevronLeft, ChevronRight } from 'lucide-react'
// // import { useIsMobile } from '@/hooks/use-mobile'
// // import { ReviewsItem } from './ReviewsItem'
// // import Image from 'next/image'
// // import { CommentModal } from '../../modal/ReviewModal/CommentModal'
// // import { createClient } from '@/lib/supabase/client'
// // import { useRouter } from 'next/navigation'

// // const testimonials = [
// //   {
// //     id: 1,
// //     name: 'Robert Fox',
// //     surname: '',
// //     avatar: '/we/user1.svg',
// //     rating: 5,
// //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// //   },
// //   {
// //     id: 2,
// //     name: 'Jenny Wilson',
// //     surname: '',
// //     avatar: '/we/user2.svg',
// //     rating: 5,
// //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// //   },
// //   {
// //     id: 3,
// //     name: 'Jacob Jones',
// //     surname: '',
// //     avatar: '/we/user3.svg',
// //     rating: 5,
// //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// //   },
// //   {
// //     id: 4,
// //     name: 'Sarah Smith',
// //     surname: '',
// //     avatar: '/we/user2.svg',
// //     rating: 5,
// //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// //   },
// //   {
// //     id: 5,
// //     name: 'Sarah Smith',
// //     surname: '',
// //     avatar: '/we/user3.svg',
// //     rating: 5,
// //     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
// //   },
// // ]

// // export const ReviewsSection = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0)
// //   const isMobile = useIsMobile()
// //   const itemsPerPage = isMobile ? 1 : 3
// //   const totalPages = Math.ceil(testimonials.length / itemsPerPage)
// //   const [showCommentModal, setShowCommentModal] = useState(false)
// //   const [session, setSession] = useState(null)
// //   const router = useRouter()

// //   useEffect(() => {
// //     const checkSession = async () => {
// //       const supabase = createClient()
// //       const { data: { session } } = await supabase.auth.getSession()
// //       setSession(session)
// //     }
// //     checkSession()
// //   }, [])

// //   const nextSlide = () => {
// //     setCurrentIndex(prev => (prev + 1) % totalPages)
// //   }

// //   const prevSlide = () => {
// //     setCurrentIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1))
// //   }

// //   const getCurrentTestimonials = () => {
// //     const start = currentIndex * itemsPerPage
// //     const end = start + itemsPerPage
// //     return testimonials.slice(start, end)
// //   }

// //   const visibleTestimonials = getCurrentTestimonials()

// //   const handleCommentSubmit = (comment: { text: string; rating: number }) => {
// //     console.log('New Comment:', comment)
// //     // Optionally, update the testimonials or send the comment to the backend
// //   }

// //   const handleOpenCommentModal = () => {
// //     if (!session) {
// //       router.push('/login')
// //     } else {
// //       setShowCommentModal(true)
// //     }
// //   }

// //   return (
// //     <>
// //       <section className="py-8 sm:py-16 px-4 max-w-7xl mx-auto text-[#0f0f0f]">
// //         <h2 className="text-3xl sm:text-4xl md:text-[54px] font-extrabold text-center mb-8 sm:mb-[56px] leading-tight">
// //           <span className="relative inline-block">
// //             Що кажуть наші
// //             <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-full h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
// //           </span>{' '}
// //           <span className="relative inline-block">
// //             клієнти
// //             <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-[55%] h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
// //           </span>
// //         </h2>

// //         <div className="relative">
// //           <div className="flex items-center justify-center gap-4 sm:gap-8">
// //             <button
// //               onClick={prevSlide}
// //               className="hidden sm:flex items-center justify-center"
// //               aria-label="Previous slide"
// //             >
// //               <Image src="/we/arrow-left.svg" alt="" width={26} height={31} />
// //             </button>

// //             <div className="overflow-hidden w-full sm:w-auto">
// //               <div className="flex gap-4 sm:gap-[36px] py-6 px-4">
// //                 {visibleTestimonials.map(testimonial => (
// //                   <div
// //                     key={testimonial.id}
// //                     className="min-w-full sm:min-w-[calc(50%-0.5rem)] md:min-w-[calc(33.333%-1.5rem)] flex justify-center"
// //                   >
// //                     <ReviewsItem {...testimonial} />
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="text-left mt-4 sm:mt-8">
// //                 <button
// //                   className="text-[#919191] font-bold text-base sm:text-[18px] underline transition-colors"
// //                   onClick={handleOpenCommentModal}
// //                 >
// //                   Додати коментар...
// //                 </button>
// //               </div>
// //             </div>

// //             <button
// //               onClick={nextSlide}
// //               className="hidden sm:flex items-center justify-center"
// //               aria-label="Next slide"
// //             >
// //               <Image src="/we/arrow-right.svg" alt="" width={26} height={31} />
// //             </button>
// //           </div>

// //           {/* Mobile Navigation */}
// //           <div className="flex justify-center gap-4 mt-6 sm:hidden">
// //             <button
// //               onClick={prevSlide}
// //               className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
// //             >
// //               <ChevronLeft className="w-5 h-5" />
// //             </button>
// //             <button
// //               onClick={nextSlide}
// //               className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
// //             >
// //               <ChevronRight className="w-5 h-5" />
// //             </button>
// //           </div>

// //           {/* Pagination Dots */}
// //           <div className="flex justify-center gap-2 mt-4 sm:mt-8">
// //             {Array.from({ length: totalPages }).map((_, index) => (
// //               <button
// //                 key={index}
// //                 className={`w-2 h-2 rounded-full transition-colors ${
// //                   index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
// //                 }`}
// //                 onClick={() => setCurrentIndex(index)}
// //                 aria-label={`Go to slide ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Comment Modal */}
// //       {session && (
// //         <CommentModal
// //           isOpen={showCommentModal}
// //           onClose={() => setShowCommentModal(false)}
// //           onSubmit={handleCommentSubmit}
// //         />
// //       )}
// //     </>
// //   )
// // }

// 'use client'

// import { useState, useEffect } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { useIsMobile } from '@/hooks/use-mobile'
// import { ReviewsItem } from './ReviewsItem'
// import Image from 'next/image'
// import { CommentModal } from '../../modal/ReviewModal/CommentModal'
// import { createClient } from '@/lib/supabase/client'
// import { useRouter } from 'next/navigation'
// import { Session } from '@supabase/supabase-js'

// const testimonials = [
//   {
//     id: 1,
//     name: 'Robert Fox',
//     surname: '',
//     avatar: '/we/user1.svg',
//     rating: 5,
//     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
//   },
//   {
//     id: 2,
//     name: 'Jenny Wilson',
//     surname: '',
//     avatar: '/we/user2.svg',
//     rating: 5,
//     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
//   },
//   {
//     id: 3,
//     name: 'Jacob Jones',
//     surname: '',
//     avatar: '/we/user3.svg',
//     rating: 5,
//     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
//   },
//   {
//     id: 4,
//     name: 'Sarah Smith',
//     surname: '',
//     avatar: '/we/user2.svg',
//     rating: 5,
//     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
//   },
//   {
//     id: 5,
//     name: 'Sarah Smith',
//     surname: '',
//     avatar: '/we/user3.svg',
//     rating: 5,
//     text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
//   },
// ]

// export const ReviewsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const isMobile = useIsMobile()
//   const itemsPerPage = isMobile ? 1 : 3
//   const totalPages = Math.ceil(testimonials.length / itemsPerPage)
//   const [showCommentModal, setShowCommentModal] = useState(false)
//   const [session, setSession] = useState<Session | null>(null)
//   const router = useRouter()

//   const [showLoginPrompt, setShowLoginPrompt] = useState(false)



//   useEffect(() => {
//     const checkSession = async () => {
//       const supabase = createClient()
//       const { data: { session } } = await supabase.auth.getSession()
//       setSession(session)
//     }
//     checkSession()
//   }, [])

//   const nextSlide = () => {
//     setCurrentIndex(prev => (prev + 1) % totalPages)
//   }

//   const prevSlide = () => {
//     setCurrentIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1))
//   }

//   const getCurrentTestimonials = () => {
//     const start = currentIndex * itemsPerPage
//     const end = start + itemsPerPage
//     return testimonials.slice(start, end)
//   }

//   const visibleTestimonials = getCurrentTestimonials()

//   const handleCommentSubmit = (comment: { text: string; rating: number }) => {
//     console.log('New Comment:', comment)
//     // Optionally, update the testimonials or send the comment to the backend
//   }

//   // const handleOpenCommentModal = () => {
//   //   if (!session) {
//   //     router.push('/login')
//   //   } else {
//   //     setShowCommentModal(true)
//   //   }
//   // }

//   const handleOpenCommentModal = () => {
//     if (!session) {
//       setShowLoginPrompt(true)
//     } else {
//       setShowCommentModal(true)
//     }
//   }

//   return (
//     <>
//       <section className="py-8 sm:py-16 px-4 max-w-7xl mx-auto text-[#0f0f0f]">
//         <h2 className="text-3xl sm:text-4xl md:text-[54px] font-extrabold text-center mb-8 sm:mb-[56px] leading-tight">
//           <span className="relative inline-block">
//             Що кажуть наші
//             <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-full h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
//           </span>{' '}
//           <span className="relative inline-block">
//             клієнти
//             <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-[55%] h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
//           </span>
//         </h2>

//         <div className="relative">
//           <div className="flex items-center justify-center gap-4 sm:gap-8">
//             <button
//               onClick={prevSlide}
//               className="hidden sm:flex items-center justify-center"
//               aria-label="Previous slide"
//             >
//               <Image src="/we/arrow-left.svg" alt="" width={26} height={31} />
//             </button>

//             <div className="overflow-hidden w-full sm:w-auto">
//               <div className="flex gap-4 sm:gap-[36px] py-6 px-4">
//                 {visibleTestimonials.map(testimonial => (
//                   <div
//                     key={testimonial.id}
//                     className="min-w-full sm:min-w-[calc(50%-0.5rem)] md:min-w-[calc(33.333%-1.5rem)] flex justify-center"
//                   >
//                     <ReviewsItem {...testimonial} />
//                   </div>
//                 ))}
//               </div>
//               <div className="text-left mt-4 sm:mt-8">
//                 <button
//                   className="text-[#919191] font-bold text-base sm:text-[18px] underline transition-colors"
//                   onClick={handleOpenCommentModal}
//                 >
//                   Додати коментар...
//                 </button>
//               </div>
//             </div>

//             <button
//               onClick={nextSlide}
//               className="hidden sm:flex items-center justify-center"
//               aria-label="Next slide"
//             >
//               <Image src="/we/arrow-right.svg" alt="" width={26} height={31} />
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           <div className="flex justify-center gap-4 mt-6 sm:hidden">
//             <button
//               onClick={prevSlide}
//               className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center gap-2 mt-4 sm:mt-8">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
//                 }`}
//                 onClick={() => setCurrentIndex(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comment Modal */}
//       {session && (
//         <CommentModal
//           isOpen={showCommentModal}
//           onClose={() => setShowCommentModal(false)}
//           onSubmit={handleCommentSubmit}
//         />
//       )}
//     </>
//   )
// }




'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'
import { ReviewsItem } from './ReviewsItem'
import Image from 'next/image'
import { CommentModal } from '../../modal/ReviewModal/CommentModal'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Session } from '@supabase/supabase-js'
// import { LoginPromptModal } from './components/LoginPromptModal'
import { LoginPromptModal } from '../../modal/ReviewModal/LoginPromptModal'

const testimonials = [
  {
    id: 1,
    name: 'Robert Fox',
    surname: '',
    avatar: '/we/user1.svg',
    rating: 5,
    text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    surname: '',
    avatar: '/we/user2.svg',
    rating: 5,
    text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
  },
  {
    id: 3,
    name: 'Jacob Jones',
    surname: '',
    avatar: '/we/user3.svg',
    rating: 5,
    text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
  },
  {
    id: 4,
    name: 'Sarah Smith',
    surname: '',
    avatar: '/we/user2.svg',
    rating: 5,
    text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
  },
  {
    id: 5,
    name: 'Sarah Smith',
    surname: '',
    avatar: '/we/user3.svg',
    rating: 5,
    text: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
  },
]

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useIsMobile()
  const itemsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
    }
    checkSession()
  }, [])

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage
    const end = start + itemsPerPage
    return testimonials.slice(start, end)
  }

  const visibleTestimonials = getCurrentTestimonials()

  const handleCommentSubmit = (comment: { text: string; rating: number }) => {
    console.log('New Comment:', comment)
    // Optionally, update the testimonials or send the comment to the backend
  }

  const handleOpenCommentModal = () => {
    if (!session) {
      setShowLoginPrompt(true)
    } else {
      setShowCommentModal(true)
    }
  }

  return (
    <>
      <section className="py-8 sm:py-16 px-4 max-w-7xl mx-auto text-[#0f0f0f]">
        <h2 className="text-3xl sm:text-4xl md:text-[54px] font-extrabold text-center mb-8 sm:mb-[56px] leading-tight">
          <span className="relative inline-block">
            Що кажуть наші
            <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-full h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
          </span>{' '}
          <span className="relative inline-block">
            клієнти
            <span className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-[55%] h-[6px] sm:h-[9px] bg-accent rounded-full"></span>
          </span>
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <button
              onClick={prevSlide}
              className="hidden sm:flex items-center justify-center"
              aria-label="Previous slide"
            >
              <Image src="/we/arrow-left.svg" alt="" width={26} height={31} />
            </button>

            <div className="overflow-hidden w-full sm:w-auto">
              <div className="flex gap-4 sm:gap-[36px] py-6 px-4">
                {visibleTestimonials.map(testimonial => (
                  <div
                    key={testimonial.id}
                    className="min-w-full sm:min-w-[calc(50%-0.5rem)] md:min-w-[calc(33.333%-1.5rem)] flex justify-center"
                  >
                    <ReviewsItem {...testimonial} />
                  </div>
                ))}
              </div>
              <div className="text-left mt-4 sm:mt-8">
                <button
                  className="text-[#919191] font-bold text-base sm:text-[18px] underline transition-colors"
                  onClick={handleOpenCommentModal}
                >
                  Додати коментар...
                </button>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="hidden sm:flex items-center justify-center"
              aria-label="Next slide"
            >
              <Image src="/we/arrow-right.svg" alt="" width={26} height={31} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comment Modal */}
      {session && (
        <CommentModal
          isOpen={showCommentModal}
          onClose={() => setShowCommentModal(false)}
          onSubmit={handleCommentSubmit}
        />
      )}

      {/* Login Prompt Modal */}
      <LoginPromptModal
        isOpen={showLoginPrompt}
        onClose={() => setShowLoginPrompt(false)}
      />
    </>
  )
}

