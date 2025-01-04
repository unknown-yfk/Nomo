// import { FC } from 'react'
// import PartnerCard from './PartnerCard'

// const PartnerPrograms: FC = () => {
// 	const programs = [
// 		{
// 			title: 'ПАРТНЕРСЬКА ПРОГРАМА З КЕШБЕКОМ',
// 			status: 'У розробці...',
// 			bgColor: 'bg-[#E8F5E9]',
// 			image: '/partnership/img1.svg',
// 		},
// 		{
// 			title: 'ПАРТНЕРСЬКА ПРОГРАМА З ВИКОРИСТАННЯМ КРИПТОВАЛЮТИ',
// 			status: 'У розробці...',
// 			bgColor: 'bg-[#FFF8E1]',
// 			image: '/partnership/img2.svg',
// 		},
// 		{
// 			title: 'БІЗНЕС-РЕФЕРАЛ',
// 			status: 'У розробці...',
// 			bgColor: 'bg-[#E3F2FD]',
// 			image: '/partnership/img3.svg',
// 		},
// 		{
// 			title: 'КОРИСТУВАЧ-РЕФЕРАЛ',
// 			status: 'У розробці...',
// 			bgColor: 'bg-[#FCE4EC]',
// 			image: '/partnership/img4.svg',
// 		},
// 	]

// 	return (
// 		<section className='max-w-7xl mx-auto px-4 py-16'>
// 			<div className=' mb-[130px]'>
// 				<h2 className='text-[64px] text-[#0f0f0f] font-bold tracking-tight'>
// 					Партнерські{' '}
// 					<span className='relative'>
// 						Програми
// 						<span className='absolute bg-text-2   '></span>
// 					</span>
// 				</h2>
// 			</div>

// 			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
// 				{programs.map((program, index) => (
// 					<PartnerCard key={index} {...program} />
// 				))}
// 			</div>
// 		</section>
// 	)
// }

// export default PartnerPrograms


import { FC } from 'react'
import PartnerCard from './PartnerCard'

const PartnerPrograms: FC = () => {
  const programs = [
    {
      title: 'ПАРТНЕРСЬКА ПРОГРАМА З КЕШБЕКОМ',
      status: 'У розробці...',
      bgColor: 'bg-[#E8F5E9]',
      image: '/partnership/img1.svg',
    },
    {
      title: 'ПАРТНЕРСЬКА ПРОГРАМА З ВИКОРИСТАННЯМ КРИПТОВАЛЮТИ',
      status: 'У розробці...',
      bgColor: 'bg-[#FFF8E1]',
      image: '/partnership/img2.svg',
    },
    {
      title: 'БІЗНЕС-РЕФЕРАЛ',
      status: 'У розробці...',
      bgColor: 'bg-[#E3F2FD]',
      image: '/partnership/img3.svg',
    },
    {
      title: 'КОРИСТУВАЧ-РЕФЕРАЛ',
      status: 'У розробці...',
      bgColor: 'bg-[#FCE4EC]',
      image: '/partnership/img4.svg',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-[130px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#0f0f0f] font-bold tracking-tight">
          Партнерські{' '}
          <span className="relative inline-block">
            Програми
            <span className="absolute bg-text-2 w-full h-2 bottom-1 left-0 -z-10"></span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {programs.map((program, index) => (
          <PartnerCard key={index} {...program} />
        ))}
      </div>
    </section>
  )
}

export default PartnerPrograms

