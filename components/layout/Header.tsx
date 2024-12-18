'use client'

import Image from 'next/image'
import Navbar from '../ui/Navbar/Navbar'

const Header = () => {
	return (
		<header className={' z-[3]'}>
			<div className='flex justify-between items-center px-20 py-[21px] bg-[#0f0f0f]'>
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
					<button>
						<Image
							src={'/header/language.svg'}
							alt='Логотип Nomo'
							width={44}
							height={44}
						/>
					</button>
				</div>
			</div>
		</header>
	)
}
export default Header
