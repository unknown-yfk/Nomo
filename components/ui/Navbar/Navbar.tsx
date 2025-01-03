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
			<ul className="flex flex-col md:flex-row md:space-y-0  gap-[38px]">
				{allNavItems.map(item => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`hover:text-accent transition-colors ${pathname === item.href ? 'text-accent' : ''
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


// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const Navbar = () => {
//   const pathname = usePathname()


//   const navItems = [
// 	{ label: 'Кешбек', href: '/cashback' },
// 	{ label: 'Карта', href: '/map' },
// 	{ label: 'Криптовалюта', href: '/' },
// 	{ label: 'Партнерство', href: '/partnership' },
// 	{ label: 'Хто Ми', href: '/we' },
// ]

//   return (
//     <nav>
//       <ul className="flex flex-col md:flex-row md:space-y-0  gap-[38px]">
//         {navItems.map((item) => (
//           <li key={item.href}>
//             <Link
//               href={item.href}
//               className={`text-base md:text-lg font-medium ${
//                 pathname === item.href ? 'text-accent' : 'text-white hover:text-accent'
//               } transition-colors`}
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

// export default Navbar

