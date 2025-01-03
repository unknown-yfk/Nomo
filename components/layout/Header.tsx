// 'use client'

// import Image from 'next/image'
// import Navbar from '../ui/Navbar/Navbar'
// import { usePathname, useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// import { createClient } from '@/lib/supabase/client'
// import DevelopModal from '../ui/DevelopModal/DevelopModal'
// // import { useRouter } from 'next/router'

// const Header = () => {
// 	const navigation = usePathname()
// 	const router = useRouter()
// 	const [isAuthenticated, setIsAuthenticated] = useState(false)
// 	const supabase = createClient()

// 	const mainPage = navigation === '/' ? 'absolute' : ''
// 	const wePage = navigation === '/we' ? 'absolute' : ''
// 	const mainPageHeader = navigation === '/' ? 'bg-header' : 'bg-[#0f0f0f]'
// 	const wePageHeader = navigation === '/we' ? 'bg-header' : 'bg-[#0f0f0f]'

// 	const [showDev, setShowDev] = useState(false)

// 	useEffect(() => {
// 		const checkAuth = async () => {
// 			const {
// 				data: { session },
// 			} = await supabase.auth.getSession()
// 			setIsAuthenticated(!!session)
// 		}

// 		checkAuth()

// 		const {
// 			data: { subscription },
// 		} = supabase.auth.onAuthStateChange((_event, session) => {
// 			setIsAuthenticated(!!session)
// 		})

// 		return () => subscription.unsubscribe()
// 	}, [])

// 	const handleLogout = async () => {
// 		try {
// 			const { error } = await supabase.auth.signOut()
// 			if (error) throw error

// 			// Force a router refresh to update the auth state
// 			router.refresh()
// 			// Redirect to home page
// 			router.push('/')
// 		} catch (error) {
// 			console.error('Error signing out:', error)
// 		}
// 	}

// 	const openDevelopModal = () => {
// 		setShowDev(true)
// 	}

// 	return (
// 		<>
// 			<header className={`${mainPage} ${wePage} w-full z-[3]`}>
// 				<div
// 					className={`flex justify-between items-center px-20 py-[21px] ${mainPageHeader} ${wePageHeader}`}
// 				>
// 					<div>
// 						<Link href={'/'}>
// 							<Image
// 								src={'/header/logo.svg'}
// 								alt='Логотип Nomo'
// 								width={82.5}
// 								height={83.5}
// 							/>
// 						</Link>
// 					</div>
// 					<Navbar />
// 					<div className='flex items-center gap-[10px]'>
// 						{isAuthenticated ? (
// 							<button
// 								onClick={handleLogout}
// 								className='bg-accent px-[30px] py-[10px] font-bold rounded-[40px] hover:bg-[#FFBF88] transition-colors'
// 							>
// 								Вихід
// 							</button>
// 						) : (
// 							<Link
// 								href={'/auth/login'}
// 								className='bg-accent px-[30px] py-[10px] font-bold rounded-[40px] hover:bg-[#FFBF88] transition-colors'
// 							>
// 								Вхід
// 							</Link>
// 						)}
// 						<button
// 							className='flex items-center gap-[11px] text-[24px] font-normal'
// 							onClick={openDevelopModal}
// 						>
// 							<Image
// 								src={'/header/language.svg'}
// 								alt='Логотип Nomo'
// 								width={42}
// 								height={42}
// 							/>
// 							Українська
							
// 						</button>
// 					</div>
// 				</div>
// 			</header>

// 			<DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
// 		</>
// 	)
// }
// export default Header


'use client'

import Image from 'next/image'
import Navbar from '../ui/Navbar/Navbar'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import DevelopModal from '../ui/DevelopModal/DevelopModal'
import { Menu } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  const navigation = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const supabase = createClient()

  const mainPage = navigation === '/' ? 'absolute' : ''
  const wePage = navigation === '/we' ? 'absolute' : ''
  const mainPageHeader = navigation === '/' ? 'bg-header' : 'bg-[#0f0f0f]'
  const wePageHeader = navigation === '/we' ? 'bg-header' : 'bg-[#0f0f0f]'

  const [showDev, setShowDev] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }

    checkAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      router.refresh()
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const openDevelopModal = () => {
    setShowDev(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className={`${mainPage} ${wePage} w-full z-[3]`}>
        <div
          className={`flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-[21px] ${mainPageHeader} ${wePageHeader}`}
        >
          <div>
            <Link href={'/'}>
              <Image
                src={'/header/logo.svg'}
                alt='Логотип Nomo'
                width={60}
                height={60}
                className="w-12 h-12 md:w-[82.5px] md:h-[83.5px]"
              />
            </Link>
          </div>
          {!isMobile && <Navbar />}
          <div className='flex items-center gap-2 sm:gap-[10px]'>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className='bg-accent px-3 sm:px-[30px] py-2 sm:py-[10px] text-sm sm:text-base font-bold rounded-[40px] hover:bg-[#FFBF88] transition-colors'
              >
                Вихід
              </button>
            ) : (
              <Link
                href={'/auth/login'}
                className='bg-accent px-3 sm:px-[30px] py-2 sm:py-[10px] text-sm sm:text-base font-bold rounded-[40px] hover:bg-[#FFBF88] transition-colors'
              >
                Вхід
              </Link>
            )}
            {!isMobile && (
              <button
                className='flex items-center gap-2 sm:gap-[11px] text-base sm:text-[24px] font-normal'
                onClick={openDevelopModal}
              >
                <Image
                  src={'/header/language.svg'}
                  alt='Логотип Nomo'
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-[42px] sm:h-[42px]"
                />
                <span className="hidden sm:inline">Українська</span>
              </button>
            )}
            {isMobile && (
              <button onClick={toggleMenu} className="text-white">
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </header>

      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-[#0f0f0f] z-50 p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
                <Image
                  src={'/header/logo.svg'}
                  alt='Логотип Nomo'
                  width={60}
                  height={60}
                />
              </Link>
              <button onClick={toggleMenu} className="text-white">
                <Menu size={24} />
              </button>
            </div>
            <Navbar />
            <div className="mt-auto">
              <button
                className='flex items-center gap-2 text-base font-normal mb-4'
                onClick={() => {
                  openDevelopModal();
                  setIsMenuOpen(false);
                }}
              >
                <Image
                  src={'/header/language.svg'}
                  alt='Логотип Nomo'
                  width={32}
                  height={32}
                />
                Українська
              </button>
            </div>
          </div>
        </div>
      )}

      <DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
    </>
  )
}

export default Header

