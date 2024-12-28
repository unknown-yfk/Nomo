'use client'

import Image from 'next/image'
import Navbar from '../ui/Navbar/Navbar'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { createClient } from '@/lib/supabase/client'
import DevelopModal from '../ui/DevelopModal/DevelopModal'
// import { useRouter } from 'next/router'

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

			// Force a router refresh to update the auth state
			router.refresh()
			// Redirect to home page
			router.push('/')
		} catch (error) {
			console.error('Error signing out:', error)
		}
	}

	const openDevelopModal = () => {
		setShowDev(true)
	}

	return (
		<>
			<header className={`${mainPage} ${wePage} w-full z-[3]`}>
				<div
					className={`flex justify-between items-center px-20 py-[21px] ${mainPageHeader} ${wePageHeader}`}
				>
					<div>
						<Link href={'/'}>
							<Image
								src={'/header/logo.svg'}
								alt='Логотип Nomo'
								width={82.5}
								height={83.5}
							/>
						</Link>
					</div>
					<Navbar />
					<div className='flex items-center gap-[10px]'>
						{isAuthenticated ? (
							<button
								onClick={handleLogout}
								className='bg-accent px-[30px] py-[10px] font-bold rounded-[40px] hover:bg-[#FFBF88] transition-colors'
							>
								Вихід
							</button>
						) : (
							<Link
								href={'/auth/login'}
								className='bg-accent px-[30px] py-[10px] font-bold rounded-[40px] hover:bg-[#FFBF88] transition-colors'
							>
								Вхід
							</Link>
						)}
						<button
							className='flex items-center gap-[11px] text-[24px] font-normal'
							onClick={openDevelopModal}
						>
							<Image
								src={'/header/language.svg'}
								alt='Логотип Nomo'
								width={42}
								height={42}
							/>
							Українська
						</button>
					</div>
				</div>
			</header>

			<DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
		</>
	)
}
export default Header
