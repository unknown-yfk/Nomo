// import Image from 'next/image'
// import { FC } from 'react'

// const MainSection: FC = () => {
// 	return (
// 		<section className={'relative min-h-screen w-full'}>
// 			<div className='bg-we '></div>
// 			<div className='max-w-[1400px] my-0 px-[70px]  mx-auto  flex flex-col lg:flex-row items-center justify-between'>
// 				<div className='lg:w-1/2 mt-[203px] '>
// 					<div className=''>
// 						<h1 className='leading-[126%] lg:text-[56px] font-bold mb-6 tracking-tight items-center gap-2 '>
// 							{/* <Image
// 								src={'/we/logo.svg'}
// 								width={163}
// 								height={38}
// 								alt='Nomo App Interface'
// 								className='float-left  items-center'
// 							/>{' '} */}
// 							<span className='text-[#FF8D2A]'>Nomo</span> твій особистий
// 							бенефіціар - кешбек, що обирає сам!
// 						</h1>
// 						<p className='text-[24px] leading-[140%] tracking-tight text-[#CECECE] mb-8'>
// 							Ми віримо - таємниця успішних покупок полягає в обраному кешбеку.
// 							Отримуйте максимум вигоди разом із nomo.
// 						</p>
// 						<div className='flex gap-4 mb-[242px]'>
// 							<a href='#' className='hover:opacity-80 transition-opacity'>
// 								<Image
// 									src={'/we/apple.svg'}
// 									width={144}
// 									height={42}
// 									alt='Nomo App Interface'
// 								/>
// 							</a>
// 							<a href='#' className='hover:opacity-80 transition-opacity'>
// 								<Image
// 									src={'/we/googleplay.svg'}
// 									width={159}
// 									height={42}
// 									alt='Nomo App Interface'
// 								/>
// 							</a>
// 						</div>
// 					</div>

// 					{/* <div className='space-y-6 '>
// 						<div className='flex items-center gap-4'>
// 							<span className='text-[#FF8D2A] text-5xl font-bold'>
// 								5 000 000 +
// 							</span>
// 							<span className='text-gray-300'>випущено Ncoin</span>
// 						</div>
// 						<div className='flex items-center gap-4'>
// 							<span className='text-[#FF8D2A] text-5xl font-bold'>
// 								60 000 +
// 							</span>
// 							<span className='text-gray-300'>
// 								людей використовують наш сервіс
// 							</span>
// 						</div>
// 						<div className='flex items-center gap-4'>
// 							<span className='text-[#FF8D2A] text-5xl font-bold'>830 +</span>
// 							<span className='text-gray-300'>партнерів у різних країнах</span>
// 						</div>
// 					</div> */}
// 				</div>

// 				<div className='lg:w-1/2 mt-8 lg:mt-[200px] '>
// 					<div className=''>
// 						<Image
// 							src={'/we/iphone.png'}
// 							width={406}
// 							height={818}
// 							alt='Nomo App Interface'
// 							className=' mx-auto'
// 						/>
// 					</div>
// 					<div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#1A1A1A] to-transparent lg:hidden' />
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
// export default MainSection


'use client'

import Image from 'next/image'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'

const MainSection: FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className={'relative min-h-screen w-full'}>
      <div className='bg-we'></div>
      <div className='max-w-[1400px] my-0 px-[70px] mx-auto flex flex-col lg:flex-row items-center justify-between'>
        <motion.div 
          className='lg:w-1/2 mt-[203px]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className=''>
            <motion.h1 
              className='leading-[126%] lg:text-[56px] font-bold mb-6 tracking-tight items-center gap-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span 
                className='text-[#FF8D2A]'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Nomo
              </motion.span> твій особистий
              бенефіціар - кешбек, що обирає сам!
            </motion.h1>
            <motion.p 
              className='text-[24px] leading-[140%] tracking-tight text-[#CECECE] mb-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Ми віримо - таємниця успішних покупок полягає в обраному кешбеку.
              Отримуйте максимум вигоди разом із nomo.
            </motion.p>
            <motion.div 
              className='flex gap-4 mb-[242px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a 
                href='#' 
                className='hover:opacity-80 transition-opacity'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={'/we/apple.svg'}
                  width={144}
                  height={42}
                  alt='Nomo App Interface'
                />
              </motion.a>
              <motion.a 
                href='#' 
                className='hover:opacity-80 transition-opacity'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={'/we/googleplay.svg'}
                  width={159}
                  height={42}
                  alt='Nomo App Interface'
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className='lg:w-1/2 mt-8 lg:mt-[200px]'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='relative'>
            <motion.div
              animate={{ 
                rotateY: isHovered ? 10 : 0,
                rotateX: isHovered ? -10 : 0,
              }}
              transition={{ type: 'spring', stiffness: 100 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Image
                src={'/we/iphone.png'}
                width={406}
                height={818}
                alt='Nomo App Interface'
                className='mx-auto'
              />
            </motion.div>
            <motion.div 
              className='absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-0 lg:hidden'
              animate={{ opacity: isHovered ? 0.5 : 0 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MainSection
