import { FC } from 'react'

interface PartnerCardProps {
	title: string
	status: string
	bgColor: string
	image: string
}

const PartnerCard: FC<PartnerCardProps> = ({
	title,
	status,
	bgColor,
	image,
}) => {
	return (
		<div
			className={`rounded-[30px] bg-[#FF8D2A] overflow-hidden  w-[594px] h-[556px] flex flex-col`}
		>
			<div
				className={`${bgColor} flex-1 flex items-center  justify-center px-[90px] py-[44px] rounded-[30px] max-h-[388.35px] h-[388.35px]`}
			>
				<img
					src={image}
					alt={title}
					className='object-cover max-w-[530px] max-h-[329px] '
				/>
			</div>
			<div className='text-[#000] pt-6 px-[45px] pb-[73px]  text-center'>
				<h3 className='font-bold text-[25px] mb-[22px] tracking-tight leading-[126%]'>
					{title}
				</h3>
				<p className='text-[21px] font-medium'>{status}</p>
			</div>
		</div>
	)
}

export default PartnerCard
