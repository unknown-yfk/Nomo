// 'use client'

// import DevelopModal from '@/components/ui/DevelopModal/DevelopModal'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react'

// const Hero = () => {
// 	const [showDev, setShowDev] = useState(false)
// 	const openDevelopModal = () => {
// 		setShowDev(true)
// 	}
// 	return (
// 		<>
// 			<section className={'main-hero bg-black'}>
// 				<div className=' mx-auto flex flex-col items-center'>
// 					{/* <div> */}
// 					<Image
// 						src={'/main/main.png'}
// 						alt=''
// 						width={423}
// 						height={352}
// 						className='mt-20'
// 					/>
// 					<h1 className='relative bottom-16 text-[86px] font-extrabold leading-[104.08px]  text-center w-[591px]'>
// 						ГЛОБАЛЬНА <span className='text-accent'>DIGITAL 2025</span> ПОДІЯ
// 					</h1>
// 					<p className='relative bottom-4 px-[21px] py-[7px] bg-accent text-[36px] leading-[43.57px] text-background font-bold rounded-2xl '>
// 						Розділіть призовий фонд 1,000.000Ncoin
// 					</p>

// 					<div className='mt-[49px] mb-[94px] w-full max-w-[972px] flex items-center justify-between'>
// 						<Link href={'/we'} className={`font-light text-center`}>
// 							<span className='text-[18px] text-[#fff] text-opacity-[66%]'>
// 								Nomo
// 							</span>
// 							{/* <div className='relative w-[291px] h-[1px] bg-[#fff] bg-opacity-[66%] top-[12px]'>
// 							<div className='absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] border-l border-b border-white rotate-45 border-opacity-[66%]' />
// 						</div> */}
// 							<Image
// 								src='main/line1.svg'
// 								alt=''
// 								width={'291'}
// 								height={'1'}
// 								className='relative top-[12px]'
// 								draggable={false}
// 							/>
// 						</Link>
// 						<button>
// 							<Link
// 								href={'/auth/login'}
// 								className='px-[44px] py-[14px] border-r-[1px] border-b-[1.5px] border-accent rounded-2xl text-[18px] leading-[21.78px] font-normal'
// 							>
// 								Приєднуйся зараз
// 							</Link>
// 						</button>
// 						<Link
// 							href={''}
// 							className={`font-light text-center`}
// 							onClick={openDevelopModal}
// 						>
// 							<span className='text-[18px] text-[#fff] text-opacity-[66%]'>
// 								Portfolio
// 							</span>
// 							{/* <div className='relative w-[291px] h-[1px] bg-[#fff] opacity-[66%] top-[12px] rounded-full'>
// 							<div className='absolute rounded-full right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] border-l border-b border-white  rotate-[225deg] opacity-[66%]' />
// 						</div> */}
// 							<Image
// 								src='main/line2.svg'
// 								alt=''
// 								width={291}
// 								height={1}
// 								className='relative top-[12px]'
// 								draggable={false}
// 							/>
// 						</Link>
// 					</div>
// 					{/* </div> */}
// 				</div>
// 			</section>
// 			<DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
// 		</>
// 	)
// }
// export default Hero


'use client'

import DevelopModal from '@/components/ui/DevelopModal/DevelopModal'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Hero = () => {
  const [showDev, setShowDev] = useState(false)
  const openDevelopModal = () => {
    setShowDev(true)
  }
  return (
    <>
      <section className='main-hero bg-black'>
        <div className='mx-auto flex flex-col items-center px-2 sm:px-4 lg:px-6 pt-4 sm:pt-8'>
          <Image
            src='/main/main.png'
            alt=''
            width={423}
            height={352}
            className='mt-10 sm:mt-20 mb-2 sm:mb-4 w-full max-w-[300px] sm:max-w-[423px] h-auto'
          />
          <h1 className='mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-extrabold leading-tight sm:leading-[1.1] text-center w-full max-w-[320px] sm:max-w-[591px]'>
            ГЛОБАЛЬНА <span className='text-accent'>DIGITAL 2025</span> ПОДІЯ
          </h1>
          <p className='relative mt-4 sm:bottom-4 px-3 sm:px-[21px] py-1 sm:py-[5px] bg-accent text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight sm:leading-[43.57px] text-background font-bold rounded-xl sm:rounded-2xl text-center'>
            Розділіть призовий фонд 1,000.000Ncoin
          </p>

          <div className='mt-6 sm:mt-[40px] mb-8 sm:mb-[80px] w-full max-w-[320px] sm:max-w-[972px] flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0'>
            <Link href='/we' className='font-light text-center order-1 sm:order-none'>
              <span className='text-base sm:text-[18px] text-[#fff] text-opacity-[66%]'>
                Nomo
              </span>
              <Image
                src='main/line1.svg'
                alt=''
                width={291}
                height={1}
                className='hidden sm:block relative top-[12px]'
                draggable={false}
              />
            </Link>
            <button className='order-3 sm:order-none w-full sm:w-auto'>
              <Link
                href='/auth/login'
                className='block w-full sm:w-auto px-6 sm:px-[44px] py-3 sm:py-[14px] border-r-[1px] border-b-[1.5px] border-accent rounded-xl sm:rounded-2xl text-base sm:text-[18px] leading-tight sm:leading-[21.78px] font-normal text-center'
              >
                Приєднуйся зараз
              </Link>
            </button>
            <Link
              href=''
              className='font-light text-center order-2 sm:order-none'
              onClick={openDevelopModal}
            >
              <span className='text-base sm:text-[18px] text-[#fff] text-opacity-[66%]'>
                Portfolio
              </span>
              <Image
                src='main/line2.svg'
                alt=''
                width={291}
                height={1}
                className='hidden sm:block relative top-[12px]'
                draggable={false}
              />
            </Link>
          </div>
        </div>
      </section>
      <DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
    </>
  )
}

export default Hero

