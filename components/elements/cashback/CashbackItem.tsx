

import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface CashbackCardProps {
	id: number
	name: string
	logoUrl: string
	discount: number
	category?: string
	description?: string
	isActive: boolean
}

const CashbackItem = ({
	id,
	name,
	logoUrl,
	discount,
	category,
	isActive,
}: CashbackCardProps) => {


	const router = useRouter()

	const handleItemClick = () => {

		router.push(`/company/${id}`)

	}


	return (
		<div className='bg-[#fff] rounded-[12px] shadow-cashback hover:shadow-lg transition-all w-[250px]'
		
		onClick={handleItemClick}

		>
			<div className='flex flex-col justify-center items-center space-y-3'>
				<Image src={logoUrl} alt={name} width={250} height={180} />

				<div className='flex items-center justify-center gap-2 mt-1'>
					<Image
						src={'/cashback/N.svg'}
						alt={name}
						width={25}
						height={25}
					/>

					<span className='text-accent font-bold text-[24px]'>
						-{discount}%
					</span>
				</div>

				<div className='flex justify-between w-full mt-[8px] px-[20px] pb-[8px]'>
					<button
						className={`text-gray-600 hover:text-custom-orange transition-colors ${!isActive && 'opacity-50 cursor-not-allowed'
							}`}
						disabled={!isActive}
					>
						<Image
							src={'/cashback/cart.svg'}
							alt={name}
							width={40}
							height={40}
						/>
					</button>
					<div className='w-[2px] bg-[#CECECE] rounded-full h-7' />
					<button
						className={`text-gray-600 hover:text-custom-orange transition-colors ${!isActive && 'opacity-50 cursor-not-allowed'
							}`}
						disabled={!isActive}
					>
						<Image
							src={'/cashback/favorite.svg'}
							alt={name}
							width={40}
							height={40}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default CashbackItem
