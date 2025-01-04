// import Image from 'next/image'
// import { FC } from 'react'
// import StatItem from './StatItem'

// const statItems = [
// 	{
// 		id: 1,
// 		image: '/we/download.svg',
// 		rate: '59865',
// 		rateTitle: 'Download',
// 		width: 25.5,
// 		height: 24.5,
// 		paddingX: 'px-[28px]',
// 		paddingY: 'py-[34px]',
// 	},

// 	{
// 		id: 2,
// 		image: '/we/like.svg',
// 		rate: '29852',
// 		rateTitle: 'Like',
// 		width: 34,
// 		height: 32,
// 		paddingX: 'px-[28px]',
// 		paddingY: 'py-[34px]',
// 	},
// 	{
// 		id: 3,
// 		image: '/we/rate.svg',
// 		rate: '1500',
// 		rateTitle: '5 Star Rating',
// 		width: 36,
// 		height: 36,
// 		paddingX: 'px-[15px]',
// 		paddingY: 'py-[34px]',
// 	},
// ]

// const Downloads: FC = () => {
// 	return (
// 		<section className={'mt-[120px] mb-[90px]'}>
// 			<div className='containers'>
// 				<div className='flex flex-col lg:flex-row items-center justify-between  text-[#0F0F0F] mt-[78px] '>
// 					{/* Left content */}
// 					<div className='max-w-[600px]'>
// 						<div className='mb-8'>
// 							<h1 className='text-[54px] font-extrabold mb-[17px] leading-[135%] flex flex-col items-start gap-2'>
// 								Завантажуй та отримуй кешбек
// 							</h1>
// 							<p className='text-[14px] text-[#262525] text-left leading-[160%] -tracking-[0.04em] font-normal  '>
// 								Відкрий нові горизонти фінансової свободи! Завантажуй наш
// 								додаток і отримуй кешбек у криптовалюті за кожну покупку.
// 								Розпочни свій шлях до пасивного доходу вже сьогодні — не
// 								пропусти шанс перетворити витрати на прибуток!
// 							</p>
// 							<div className='flex gap-[7px] mt-[52px] mb-[64px]'>
// 								<a href='#' className='hover:opacity-80 transition-opacity'>
// 									<Image
// 										src={'/we/googleplay2.svg'}
// 										width={159}
// 										height={42}
// 										alt='Nomo App Interface'
// 									/>
// 								</a>
// 								<a href='#' className='hover:opacity-80 transition-opacity'>
// 									<Image
// 										src={'/we/apple2.svg'}
// 										width={144}
// 										height={42}
// 										alt='Nomo App Interface'
// 									/>
// 								</a>
// 							</div>

// 							<div className='flex flex-row  items-center gap-[27px]'>
// 								{statItems.map(item => (
// 									<StatItem key={item.id} {...item} />
// 								))}
// 							</div>
// 						</div>
// 					</div>

// 					{/* Right content - Phone image */}
// 					<div className='relative w-[811px]'>
// 						<Image
// 							src='/we/iphone3.png'
// 							alt='Nomo App Interface'
// 							className='relative object-cover'
// 							width={811}
// 							height={538}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
// export default Downloads



// import Image from 'next/image'
// import { FC } from 'react'
// import StatItem from './StatItem'

// const statItems = [
// 	{
// 		id: 1,
// 		image: '/we/download.svg',
// 		rate: '59865',
// 		rateTitle: 'Download',
// 		width: 25.5,
// 		height: 24.5,
// 		paddingX: 'px-[28px]',
// 		paddingY: 'py-[34px]',
// 	},

// 	{
// 		id: 2,
// 		image: '/we/like.svg',
// 		rate: '29852',
// 		rateTitle: 'Like',
// 		width: 34,
// 		height: 32,
// 		paddingX: 'px-[28px]',
// 		paddingY: 'py-[34px]',
// 	},
// 	{
// 		id: 3,
// 		image: '/we/rate.svg',
// 		rate: '1500',
// 		rateTitle: '5 Star Rating',
// 		width: 36,
// 		height: 36,
// 		paddingX: 'px-[15px]',
// 		paddingY: 'py-[34px]',
// 	},
// ]

// const Downloads: FC = () => {
// 	return (
// 		<section className={'mt-[120px] mb-[90px]'}>
// 			<div className='containers'>
// 				<div className='flex flex-col lg:flex-row items-center justify-between  text-[#0F0F0F] mt-[78px] '>
// 					{/* Left content */}
// 					<div className='max-w-[600px]'>
// 						<div className='mb-8'>
// 							<h1 className='text-[54px] font-extrabold mb-[17px] leading-[135%] flex flex-col items-start gap-2'>
// 								Завантажуй та отримуй кешбек
// 							</h1>
// 							<p className='text-[14px] text-[#262525] text-left leading-[160%] -tracking-[0.04em] font-normal  '>
// 								Відкрий нові горизонти фінансової свободи! Завантажуй наш
// 								додаток і отримуй кешбек у криптовалюті за кожну покупку.
// 								Розпочни свій шлях до пасивного доходу вже сьогодні — не
// 								пропусти шанс перетворити витрати на прибуток!
// 							</p>
// 							<div className='flex gap-[7px] mt-[52px] mb-[64px]'>
// 								<a href='#' className='hover:opacity-80 transition-opacity'>
// 									<Image
// 										src={'/we/googleplay2.svg'}
// 										width={159}
// 										height={42}
// 										alt='Nomo App Interface'
// 									/>
// 								</a>
// 								<a href='#' className='hover:opacity-80 transition-opacity'>
// 									<Image
// 										src={'/we/apple2.svg'}
// 										width={144}
// 										height={42}
// 										alt='Nomo App Interface'
// 									/>
// 								</a>
// 							</div>

// 							<div className='flex flex-row  items-center gap-[27px]'>
// 								{statItems.map(item => (
// 									<StatItem key={item.id} {...item} />
// 								))}
// 							</div>
// 						</div>
// 					</div>

// 					{/* Right content - Phone image */}
// 					<div className='relative w-[811px]'>
// 						<Image
// 							src='/we/iphone3.png'
// 							alt='Nomo App Interface'
// 							className='relative object-cover'
// 							width={811}
// 							height={538}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
// export default Downloads



import Image from 'next/image'
import { FC } from 'react'
import StatItem from './StatItem'

const statItems = [
	{
		id: 1,
		image: '/we/download.svg',
		rate: '59865',
		rateTitle: 'Download',
		width: 25.5,
		height: 24.5,
		paddingX: 'px-[28px]',
		paddingY: 'py-[34px]',
	},

	{
		id: 2,
		image: '/we/like.svg',
		rate: '29852',
		rateTitle: 'Like',
		width: 34,
		height: 32,
		paddingX: 'px-[28px]',
		paddingY: 'py-[34px]',
	},
	{
		id: 3,
		image: '/we/rate.svg',
		rate: '1500',
		rateTitle: '5 Star Rating',
		width: 36,
		height: 36,
		paddingX: 'px-[15px]',
		paddingY: 'py-[34px]',
	},
]

const Downloads: FC = () => {
	return (
		<section className={'mt-[120px] mb-[90px]'}>
			<div className='containers'>
				<div className='flex flex-col lg:flex-row items-center justify-between text-[#0F0F0F] mt-[78px]'>
					{/* Left content */}
					<div className='max-w-[600px]'>
						<div className='mb-8'>
							<h1 className='text-[54px] font-extrabold mb-[17px] leading-[135%] flex flex-col items-start gap-2'>
								Завантажуй та отримуй кешбек
							</h1>
							<p className='text-[14px] text-[#262525] text-left leading-[160%] -tracking-[0.04em] font-normal'>
								Відкрий нові горизонти фінансової свободи! Завантажуй наш
								додаток і отримуй кешбек у криптовалюті за кожну покупку.
								Розпочни свій шлях до пасивного доходу вже сьогодні — не
								пропусти шанс перетворити витрати на прибуток!
							</p>
							<div className='flex gap-[7px] mt-[52px] mb-[64px]'>
								<a href='#' className='hover:opacity-80 transition-opacity'>
									<Image
										src={'/we/googleplay2.svg'}
										width={159}
										height={42}
										alt='Nomo App Interface'
									/>
								</a>
								<a href='#' className='hover:opacity-80 transition-opacity'>
									<Image
										src={'/we/apple2.svg'}
										width={144}
										height={42}
										alt='Nomo App Interface'
									/>
								</a>
							</div>

							<div className='flex flex-row items-center gap-[27px]'>
								{statItems.map(item => (
									<StatItem key={item.id} {...item} />
								))}
							</div>
						</div>
					</div>

					{/* Right content - Phone image */}
					<div
						className='relative w-full max-w-[811px] h-[400px] sm:h-[300px] lg:h-[538px]'
					>
						<Image
							src='/we/iphone3.png'
							alt='Nomo App Interface'
							className='object-contain'
							fill
							sizes='(max-width: 768px) 100vw, 50vw'
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Downloads
