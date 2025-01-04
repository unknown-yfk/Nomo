// import { FC } from 'react'

// interface PartnerCardProps {
// 	title: string
// 	status: string
// 	bgColor: string
// 	image: string
// }

// const PartnerCard: FC<PartnerCardProps> = ({
// 	title,
// 	status,
// 	bgColor,
// 	image,
// }) => {
// 	return (
// 		<div
// 			className={`rounded-[30px] bg-[#FF8D2A] overflow-hidden  w-[594px] h-[556px] flex flex-col`}
// 		>
// 			<div
// 				className={`${bgColor} flex-1 flex items-center  justify-center px-[90px] py-[44px] rounded-[30px] max-h-[388.35px] h-[388.35px]`}
// 			>
// 				<img
// 					src={image}
// 					alt={title}
// 					className='object-cover max-w-[530px] max-h-[329px] '
// 				/>
// 			</div>
// 			<div className='text-[#000] pt-6 px-[45px] pb-[73px]  text-center'>
// 				<h3 className='font-bold text-[25px] mb-[22px] tracking-tight leading-[126%]'>
// 					{title}
// 				</h3>
// 				<p className='text-[21px] font-medium'>{status}</p>
// 			</div>
// 		</div>
// 	)
// }

// export default PartnerCard


import { FC } from 'react'
import Image from 'next/image'

interface PartnerCardProps {
  title: string
  status: string
  bgColor: string
  image: string
}

const PartnerCard: FC<PartnerCardProps> = ({ title, status, bgColor, image }) => {
  return (
    <div className={`rounded-[20px] sm:rounded-[30px] bg-[#FF8D2A] overflow-hidden w-full max-w-[594px] aspect-[594/556] flex flex-col`}>
      <div className={`${bgColor} flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:px-[90px] lg:py-[44px] rounded-[20px] sm:rounded-[30px]`}>
        <div className="relative w-full h-full max-w-[530px] max-h-[329px]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-[#000] pt-4 sm:pt-6 px-4 sm:px-6 md:px-[45px] pb-6 sm:pb-[73px] text-center">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[25px] mb-2 sm:mb-4 md:mb-[22px] tracking-tight leading-[126%]">
          {title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-[21px] font-medium">
          {status}
        </p>
      </div>
    </div>
  )
}

export default PartnerCard

