// import Image from 'next/image'

// interface PaginationProps {
// 	currentPage: number
// 	totalPages: number
// 	onPageChange: (page: number) => void
// }

// const Pagination = ({
// 	currentPage,
// 	totalPages,
// 	onPageChange,
// }: PaginationProps) => {
// 	const handlePageChange = (page: number) => {
// 		window.scrollTo({ top: 0, behavior: 'smooth' })
// 		onPageChange(page)
// 	}

// 	return (
// 		<div className='flex items-center justify-center space-x-2 mt-8 gap-[18px] mb-[50px]'>
// 			<button
// 				onClick={() => handlePageChange(currentPage - 1)}
// 				disabled={currentPage === 1}
// 				className='flex items-center text-[20px]  gap-[14px] py-[5px] text-[#0f0f0f] hover:text-accenthover disabled:text-[#ABABAB] leading-[126%] tracking-[-4%]'
// 			>
// 				<Image
// 					src={'/cashback/chevron-left.svg'}
// 					alt=''
// 					width={24}
// 					height={24}
// 				/>
// 				ПОПЕРЕДНЯ
// 			</button>

// 			{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// 				<button
// 					key={page}
// 					onClick={() => handlePageChange(page)}
// 					className={`w-[40px] h-[35px] rounded-[7px] text-[25px] leading-[126%] tracking-[-4%]  font-light ${
// 						currentPage === page
// 							? ' text-[#0f0f0f] bg-[#EBEBEB] '
// 							: 'text-[#0f0f0f] hover:text-accenthover '
// 					}`}
// 				>
// 					{page}
// 				</button>
// 			))}

// 			<button
// 				onClick={() => handlePageChange(currentPage + 1)}
// 				disabled={currentPage === totalPages}
// 				className='flex items-center text-[20px] gap-[14px] py-[5px] text-[#0f0f0f] hover:text-accenthover disabled:text-[#ABABAB] leading-[126%] tracking-[-4%]'
// 			>
// 				НАСТУПНА
// 				<Image
// 					src={'/cashback/chevron-right.svg'}
// 					alt=''
// 					width={24}
// 					height={24}
// 					className='disabled:stroke-[#ABABAB]'
// 				/>
// 			</button>
// 		</div>
// 	)
// }

// export default Pagination


import Image from 'next/image'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	const handlePageChange = (page: number) => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		onPageChange(page)
	}

	return (
		<div className='flex items-center justify-center space-x-2 mt-8 gap-[18px] mb-[50px] flex-wrap'>
			{/* Previous Button */}
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className='flex items-center text-[20px] gap-[14px] py-[5px] text-[#0f0f0f] hover:text-accenthover disabled:text-[#ABABAB] leading-[126%] tracking-[-4%] sm:text-[18px] md:text-[20px]'
			>
				<Image
					src={'/cashback/chevron-left.svg'}
					alt=''
					width={24}
					height={24}
				/>
				ПОПЕРЕДНЯ
			</button>

			{/* Page Buttons */}
			{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
				<button
					key={page}
					onClick={() => handlePageChange(page)}
					className={`w-[40px] h-[35px] rounded-[7px] text-[25px] leading-[126%] tracking-[-4%] font-light ${
						currentPage === page
							? ' text-[#0f0f0f] bg-[#EBEBEB] '
							: 'text-[#0f0f0f] hover:text-accenthover '
					} sm:w-[35px] sm:h-[30px] sm:text-[20px] md:w-[40px] md:h-[35px] md:text-[25px]`}
				>
					{page}
				</button>
			))}

			{/* Next Button */}
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className='flex items-center text-[20px] gap-[14px] py-[5px] text-[#0f0f0f] hover:text-accenthover disabled:text-[#ABABAB] leading-[126%] tracking-[-4%] sm:text-[18px] md:text-[20px]'
			>
				НАСТУПНА
				<Image
					src={'/cashback/chevron-right.svg'}
					alt=''
					width={24}
					height={24}
					className='disabled:stroke-[#ABABAB]'
				/>
			</button>
		</div>
	)
}

export default Pagination
