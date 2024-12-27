'use client'

import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
	{ label: 'Кешбек', href: '/cashback' },
	{ label: 'Карта', href: '/map' },
	{ label: 'Криптовалюта', href: '/' },
	{ label: 'Партнерство', href: '/partnership' },
	{ label: 'Хто Ми', href: '/we' },
]

const Navbar = () => {
	const pathname = usePathname()
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const supabase = createClient()

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

	const allNavItems = isAuthenticated
		? [{ label: 'Мій кабінет', href: '/dashboard' }, ...navItems]
		: navItems

	return (
		<nav>
			<ul className='hidden lg:flex items-center font-bold gap-[38px]'>
				{allNavItems.map(item => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`hover:text-accent transition-colors ${
								pathname === item.href ? 'text-accent' : ''
							}`}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Navbar
