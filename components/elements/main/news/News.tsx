import { FC } from 'react'
import NewsCard from './NewsCard'
import Image from 'next/image'

const news = [
	{
		image: '/main/news-1.svg',
		title: 'Development of Site Version 1.6.3 Completed',
		description:
			"The term 'site' encompasses a wide range of projects, from simple landing pages to complex online services with hundreds of screens and thousands of functions.",
		date: 'Yesterday, 10:46',
	},
	{
		image: '/main/news-3.svg',
		title: 'Register Now!',
		description:
			'All registered users will receive 10 Ncoin in their Portfolio.',
		date: 'July 1, 2024',
	},
	{
		image: '/main/news-2.svg',
		title: 'About the Future',
		description: 'Development of the Ncoin Cashback/Exchange app begins.',
		date: 'June 15, 2024',
	},
]

const News: FC = () => {
	return (
		<section className='bg-[#0f0f0f]'>
			<div className='containers'>
				<h2 className='pt-[240px] pb-[81px] text-[54px] leading-[64px] text-[#fff] font-extrabold text-center'>
					Stay Updated with Nomo
				</h2>
				<div className='flex flex-col space-y-6 w-full mx-auto pb-[149px]'>
					{news.map((item, index) => (
						<NewsCard key={index} {...item} />
					))}
				</div>
				<div className='grid grid-cols-2 gap-[256px]'>
					<div className='flex justify-between items-center flex-col'>
						<h3 className='text-[25px] text-center leading-[126%] tracking-[-4%] uppercase font-bold w-[453px]'>
							With us, you’re not just a client; you’re part of our family, our
							invaluable!
						</h3>
						<Image
							src={'/main/number1.png'}
							alt={'№1'}
							className='mx-auto'
							width={500}
							height={500}
						/>
					</div>
					<div className=' flex justify-between items-end mb-[120px] '>
						<div className=' bottom-[120px] mx-auto'>
							<p className='relative text-[14px] top-[0] '>
								With every purchase in
							</p>
							<Image
								src={'/main/nomo.svg'}
								alt={'№1'}
								className=''
								width={228}
								height={90}
							/>
							<p className='text-[13px] w-[167px] text-center mx-auto '>
								your cashback grows with every purchase
							</p>
							<div className='relative  '>
								<Image
									src={'/main/cat.png'}
									alt={'Cat'}
									className='absolute bottom-[30px] -right-[110px]'
									width={111}
									height={228}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default News
