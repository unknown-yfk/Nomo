'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/layout/Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()

  // Only render Header if not on the portfolio page
  if (pathname === '/portfolio' || pathname === '/business' || pathname === '/business/products' ||  pathname.startsWith("/business/products/")) return null

  return <Footer />
}
