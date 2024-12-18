'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
	{ label: 'Кешбек', href: '/cashback' },
	{ label: 'Карта', href: '/map' },
	{ label: 'Криптовалюта', href: '/' },
	{ label: 'Партнерство', href: '/partnership' },
	{ label: 'Хто Ми', href: '/we' },
]

const Navbar = () => {
	const pathname = usePathname()
	return (
		<nav>
			<ul className='hidden lg:flex items-center font-bold gap-[38px]'>
				{navItems.map(item => (
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
