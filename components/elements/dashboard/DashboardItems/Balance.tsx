import { Button } from '@/components/ui/button'
import { FC } from 'react'
interface NavigationCardsProps {
	balance: number
}

const Balance = ({ balance }: NavigationCardsProps) => {
	return (
		<div className='flex justify-between items-center gap-[14px]'>
			<p className='text-[15px] text-[#919191] max-w-[700px] w-full'>
				Інвестор - особа або організація (зокрема комерційне підприємство,
				держава тощо), які розміщують капітал з метою подальшого отримання
				прибутку.
			</p>

			<div className='flex items-center gap-7 max-w-[573px] w-full bg-[#121212] px-[11px] py-[12px] rounded-[19px] h-[87px]'>
				<Button className='bg-[#D9D9D9] text-[#000] text-[19px] font-light  hover:bg-gray-200 rounded-none px-[52px] py-[20px]'>
					Швидка оплата
				</Button>
				<div className='w-[1.5px] h-[52px] bg-[#2F2F2F]'></div>
				<div className='text-right flex justify-center items-center gap-7 '>
					<div className='text-[15px] font-normal text-[#fff]'>Баланс:</div>
					<div className='text-[16px] font-normal text-[#80F8BF]'>
						${balance}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Balance
