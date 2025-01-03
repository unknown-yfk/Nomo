// import { Button } from '@/components/ui/button'
// import { FC } from 'react'
// interface NavigationCardsProps {
// 	balance: number
// }

// const Balance = ({ balance }: NavigationCardsProps) => {
// 	return (
// 		<div className='flex justify-between items-center gap-[14px]'>
// 			<p className='text-[15px] text-[#919191] max-w-[700px] w-full'>
// 				Інвестор - особа або організація (зокрема комерційне підприємство,
// 				держава тощо), які розміщують капітал з метою подальшого отримання
// 				прибутку.
// 			</p>

// 			<div className='flex items-center gap-7 max-w-[573px] w-full bg-[#121212] px-[11px] py-[12px] rounded-[19px] h-[87px]'>
// 				<Button className='bg-[#D9D9D9] text-[#000] text-[19px] font-light  hover:bg-gray-200 rounded-none px-[52px] py-[20px]'>
// 					Швидка оплата
// 				</Button>
// 				<div className='w-[1.5px] h-[52px] bg-[#2F2F2F]'></div>
// 				<div className='text-right flex justify-center items-center gap-7 '>
// 					<div className='text-[15px] font-normal text-[#fff]'>Баланс:</div>
// 					<div className='text-[16px] font-normal text-[#80F8BF]'>
// 						${balance}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
// export default Balance



import { Button } from '@/components/ui/button'
import { FC } from 'react'

interface NavigationCardsProps {
	balance: number
}

const Balance: FC<NavigationCardsProps> = ({ balance }) => {
	return (
		<div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-[14px]'>
			<p className='text-sm lg:text-[15px] text-[#919191] w-full lg:max-w-[700px] order-2 lg:order-1'>
				Інвестор - особа або організація (зокрема комерційне підприємство,
				держава тощо), які розміщують капітал з метою подальшого отримання
				прибутку.
			</p>

			<div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-7 w-full lg:max-w-[573px] bg-[#121212] p-4 sm:px-[11px] sm:py-[12px] rounded-[19px] order-1 lg:order-2'>
				<Button className='bg-[#D9D9D9] text-[#000] text-base sm:text-[19px] font-light hover:bg-gray-200 rounded-none px-4 sm:px-[52px] py-3 sm:py-[20px] w-full sm:w-auto'>
					Швидка оплата
				</Button>
				<div className='hidden sm:block w-[1.5px] h-[52px] bg-[#2F2F2F]'></div>
				<div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-7 w-full sm:w-auto'>
					<div className='text-sm sm:text-[15px] font-normal text-[#fff]'>Баланс:</div>
					<div className='text-base sm:text-[16px] font-normal text-[#80F8BF]'>
						${balance.toLocaleString()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Balance

