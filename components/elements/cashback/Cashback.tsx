'use client'

import Pagination from '@/components/ui/Pagination/Pagination'
import CashbackItem from './CashbackItem'
import { useState } from 'react'

const mockData = [
	{
		id: 1,
		name: 'Hyatt Regency',
		logoUrl: '/cashback/item.svg',
		discount: 15,
		category: 'Hotels',
		description: 'Luxury hotel chain with premium amenities',
		isActive: true,
	},
	{
		id: 2,
		name: 'Hyatt Place',
		logoUrl: '/cashback/item.svg',
		discount: 10,
		category: 'Hotels',
		description: 'Business-friendly hotel chain',
		isActive: true,
	},
	// Adding more mock items to demonstrate pagination
	...Array(16)
		.fill(null)
		.map((_, index) => ({
			id: index + 3,
			name: `Hotel ${index + 3}`,
			logoUrl: '/cashback/item.svg',
			discount: 15,
			category: 'Hotels',
			description: 'Sample hotel description',
			isActive: true,
		})),
]

const ITEMS_PER_PAGE = 8

const Cashback = () => {
	const [currentPage, setCurrentPage] = useState(1)
	// Calculate pagination
	const totalItems = mockData.length
	const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const endIndex = startIndex + ITEMS_PER_PAGE
	const currentItems = mockData.slice(startIndex, endIndex)
	return (
		<main className={''}>
			<section>
				<div className='  p-8'>
					<div className='max-w-[1280px] mx-auto'>
						<div className='flex justify-between items-center mb-[20px]'>
							<h1 className='text-[25px] font-bold text-[#000]'>
								ОНЛАЙН КЕШБЕК
							</h1>
							<button className='text-accent hover:text-accenthover'>
								Фільтр ▼
							</button>
						</div>
						<div className='flex justify-center items-center mb-[50px]'>
							<div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[10px] sm:gap-[16px] lg:gap-[44px]'>
								{currentItems.map(item => (
									<CashbackItem key={item.id} {...item} />
								))}
							</div>
						</div>

						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={setCurrentPage}
						/>
					</div>
				</div>
			</section>
		</main>
	)
}
export default Cashback
