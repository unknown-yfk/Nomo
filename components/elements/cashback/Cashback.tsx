'use client'

import { useState } from 'react'
import Pagination from '@/components/ui/Pagination/Pagination'
import CashbackItem from './CashbackItem'
import { CarouselScroll } from '../carousel/scrollingCarousel'
import { CarouselSingle } from '../carousel/singleCorousel'
import { Card, CardContent } from "@/components/ui/card"
import CashbackModal from '../modal/CashBackModal/cashBackModal'
import FilterModal from '../modal/filterModal'

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
		category: 'Restaurants',
		description: 'Business-friendly hotel chain',
		isActive: true,
	},
	...Array(45)
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

const ITEMS_PER_PAGE = 15

const Cashback = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

	const totalItems = mockData.length
	const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const endIndex = startIndex + ITEMS_PER_PAGE

	const currentItems = mockData.slice(startIndex, endIndex)

	const handleAddDeal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	const handleOpenFilterModal = () => {
		setIsFilterModalOpen(true)
	}

	const handleCloseFilterModal = () => {
		setIsFilterModalOpen(false)
	}

	return (
		<main>
			<section>
				<div className='p-10'>
					<div className="max-w-[920px] mx-auto mb-10 pt-5">
						<div className="carousel-container shadow-lg p-0 overflow-hidden">
							<div className="w-full h-[400px] overflow-hidden relative">
								<CarouselSingle />
							</div>
						</div>
					</div>

					<div className='max-w-[1280px] mx-auto mb-20'>
						<div className='text-start mb-6'>
							<h2 className='text-[24px] font-bold text-[#000]'>
								Найкращі пропозиції
							</h2>
						</div>
						<div className='carousel-container bg-white rounded-lg  p-4'>
							<h2 className='text-[20px] font-semibold text-center mb-4'>
								Scrolling Carousel
							</h2>
							<div className='carousel-items flex gap-4'>
								<CarouselScroll />
							</div>
						</div>
					</div>

					<div className='max-w-[1024px] mx-auto'>
						<div className='flex justify-between items-center mb-[20px]'>
							<h1 className='text-[25px] font-bold text-[#000]'>
								ОНЛАЙН КЕШБЕК
							</h1>
							<h2
								className="text-accent px-4 py-2 rounded cursor-pointer"
								onClick={handleOpenFilterModal}
							>
								Фільтри
							</h2>

						</div>

						<div className='flex justify-center items-center mb-[50px]'>
							<div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] sm:gap-[16px] lg:gap-[44px]'>
								{currentItems.map((item) => (
									<CashbackItem key={item.id} {...item} />
								))}

								<Card className="min-h-[250px] flex justify-center items-center border-dashed border-2 border-gray-300">
									<CardContent className="flex flex-col items-center justify-center p-4 space-y-4">
										<button
											className="w-full h-full flex justify-center items-center text-7xl text-gray-500"
											onClick={handleAddDeal}
										>
											+
										</button>
									</CardContent>
								</Card>
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

			<CashbackModal isOpen={isModalOpen} onClose={handleCloseModal} />



			<FilterModal
				isFilterModalOpen={isFilterModalOpen}
				handleCloseFilterModal={handleCloseFilterModal}
			/>;
		</main>
	)
}

export default Cashback
