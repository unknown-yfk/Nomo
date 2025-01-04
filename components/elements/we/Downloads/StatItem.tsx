// import Image from 'next/image'
// import { FC } from 'react'

// interface StatItemProps {
// 	id: number
// 	image: string
// 	rate: string
// 	rateTitle: string
// 	width: number
// 	height: number
// 	paddingX: string
// 	paddingY: string
// }

// const StatItem = ({
// 	image,
// 	rate,
// 	rateTitle,
// 	width,
// 	height,
// 	paddingX,
// 	paddingY,
// }: StatItemProps) => {
// 	return (
// 		<div
// 			className={`flex justify-center text-center items-center flex-col gap-[28px] bg-accent ${paddingX} ${paddingY}  rounded-[13px] w-[170px] h-[180px]`}
// 		>
// 			<Image src={image} alt={rateTitle} width={width} height={height} />
// 			<p className='text-[26px] font-bold text-[#fff] leading-[15px] tracking-wide'>
// 				{rate}
// 			</p>
// 			<p className='text-[18px] font-normal text-[#fff] leading-[15px] tracking-wide uppercase'>
// 				{rateTitle}
// 			</p>
// 		</div>
// 	)
// }
// export default StatItem


import Image from 'next/image'
import { FC } from 'react'

interface StatItemProps {
  id: number
  image: string
  rate: string
  rateTitle: string
}

const StatItem: FC<StatItemProps> = ({
  image,
  rate,
  rateTitle,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 text-center bg-accent rounded-xl w-full max-w-[140px] aspect-square sm:max-w-[150px] sm:p-4 sm:gap-3 md:max-w-[160px] lg:max-w-[170px] lg:gap-4">
      <div className="relative w-1/5 aspect-square sm:w-1/4 md:w-1/3">
        <Image
          src={image}
          alt={rateTitle}
          layout="fill"
          objectFit="contain"
          sizes="(max-width: 640px) 20vw, (max-width: 768px) 25vw, 33vw"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <p className="text-lg font-bold text-white leading-tight tracking-wide sm:text-xl md:text-2xl lg:text-2xl">
        {rate}
      </p>
      <p className="text-xs font-normal text-white leading-tight tracking-wide uppercase sm:text-sm md:text-base lg:text-lg">
        {rateTitle}
      </p>
    </div>
  )
}

export default StatItem

