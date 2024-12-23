'use client'

import Image from 'next/image'
import Navbar from '../ui/Navbar/Navbar'
import { usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'

const Header = () => {
	const navigation = usePathname()
	const mainPage = navigation === '/' ? 'absolute' : ''
	const wePage = navigation === '/we' ? 'absolute' : ''
	const mainPageHeader = navigation === '/' ? 'bg-header' : 'bg-[#0f0f0f]'
	const wePageHeader = navigation === '/we' ? 'bg-header' : 'bg-[#0f0f0f]'

	return (
		<header className={`${mainPage} ${wePage} w-full z-[3]`}>
			<div
				className={`  flex justify-between items-center px-20 py-[21px] ${mainPageHeader} ${wePageHeader}`}
			>
				<div>
					<Image
						src={'/header/logo.svg'}
						alt='Логотип Nomo'
						width={82.5}
						height={83.5}
					/>
				</div>
				<Navbar />
				<div className='flex items-center gap-[10px]'>
					<button className='bg-accent px-[30px] py-[10px] font-bold rounded-[40px] hover:bg-[#FFBF88] transition-colors'>
						Вхід
					</button>
					<button className='flex items-center gap-[11px] text-[24px] font-normal'>
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
	)
}
export default Header
