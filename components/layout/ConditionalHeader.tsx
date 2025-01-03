'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'

export default function ConditionalHeader() {
  const pathname = usePathname()

  // Only render Header if not on the portfolio page
  if (pathname === '/portfolio') return null

  return <Header />
}
