// import Image from 'next/image'
// import { FC } from 'react'

// const AboutSection: FC = () => {
// 	return (
// 		<section className={'mt-[150px] mb-[78px]'}>
// 			<div className='containers'>
// 				<div className='lg:w-1/2 mt-[150px] ml-[158px] mb-[75px]'>
// 					<div className=' '>
// 						<div className='flex items-center gap-4'>
// 							<span className='text-[#FF8D2A] text-[58px] tracking-tight font-bold'>
// 								5 000 000 +
// 							</span>
// 							<span className='text-[#0f0f0f] font-bold text-[19px]'>
// 								випущено Ncoin
// 							</span>
// 						</div>
// 						<div className='flex items-center gap-4'>
// 							<span className='text-[#FF8D2A] text-[58px] tracking-tight font-bold'>
// 								60 000 +
// 							</span>
// 							<span className='text-[#0f0f0f] font-bold text-[19px]'>
// 								людей використовують наш сервіс
// 							</span>
// 						</div>
// 						<div className='flex items-center gap-4'>
// 							<span className='text-[#FF8D2A] text-[58px] tracking-tight font-bold'>
// 								830 +
// 							</span>
// 							<span className='text-[#0f0f0f] font-bold text-[19px]'>
// 								партнерів у різних країнах
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='grid-about w-full'>
// 					<div className='bg-[#212121] rounded-[33px] px-5 py-[33px] max-w-[389px] '>
// 						<div className='flex items-center gap-[10px]'>
// 							<Image src={'/we/about-icon.svg'} alt='' width={28} height={22} />
// 							<p className='text-[21px] text-[#FFFFFF] font-normal tracking-normal'>
// 								Кешбек за{' '}
// 								<span className='relative'>
// 									твоїми{' '}
// 									<span className='absolute w-[42px] bottom-[3px] right-[7px] h-[4px] bg-accent' />
// 								</span>{' '}
// 								правилами
// 							</p>
// 						</div>
// 						<p className='text-[14px] leading-[160%] -tracking-wider mt-[23px]'>
// 							З nomo ти контролюєш свої вигоди. Обирай кешбек, який пасує твоїм
// 							потребам та отримуєш повернення грошей за кожну покупку.
// 						</p>
// 					</div>
// 					<div className='bg-[#212121] rounded-[33px] px-5 py-[33px] max-w-[389px] '>
// 						<div className='flex items-center gap-[10px]'>
// 							<Image src={'/we/about-icon.svg'} alt='' width={28} height={22} />
// 							<p className='text-[21px] text-[#FFFFFF] font-normal tracking-normal'>
// 								Миттєвий{' '}
// 								<span className='relative'>
// 									доступ{' '}
// 									<span className='absolute w-[42px] bottom-[3px] right-[7px] h-[4px] bg-accent' />
// 								</span>{' '}
// 								до кешбеку
// 							</p>
// 						</div>
// 						<p className='text-[14px] leading-[160%] -tracking-wider mt-[23px]'>
// 							З nomo отримати свій кешбек стало ще простіше. Ви можете виводити
// 							кошти у будь-який час, зручним для вас способом.
// 						</p>
// 					</div>
// 					<div className='bg-[#212121] rounded-[33px] px-5 py-[33px] max-w-[389px] '>
// 						<div className='flex items-center gap-[10px]'>
// 							<Image src={'/we/about-icon.svg'} alt='' width={28} height={22} />
// 							<p className='text-[21px] text-[#FFFFFF] font-normal tracking-normal'>
// 								Широка{' '}
// 								<span className='relative'>
// 									мережа{' '}
// 									<span className='absolute w-[42px] bottom-[3px] right-[7px] h-[4px] bg-accent' />
// 								</span>
// 								партнерів
// 							</p>
// 						</div>
// 						<p className='text-[14px] leading-[160%] -tracking-widest mt-[23px]'>
// 							Наша програма працює з широким спектром партнерів, що означає, що
// 							ви можете отримати вигоди за покупки в будь-якому місці, де ви
// 							зазвичай робите свої покупки.
// 						</p>
// 					</div>
// 				</div>

// 				<div className='flex flex-col lg:flex-row items-center justify-between gap-8 text-[#0F0F0F] mt-[78px] '>
// 					{/* Left content */}
// 					<div className='lg:w-1/2'>
// 						<div className='mb-8'>
// 							<h1 className='text-[54px] font-extrabold mb-[21px] leading-[135%] flex flex-col items-start gap-2'>
// 								<div className='flex items-center gap-2'>
// 									<span>Загадка</span>
// 									<span className='text-accent'>nomo:</span>
// 								</div>
// 								<span>розкриваємо нашу сутність!</span>
// 							</h1>
// 							<p className='text-[24px] text-[#4F4F4F] text-left leading-[140%] -tracking-[0.04em] font-semibold w-[720px] max-w-[720px]'>
// 								В нашому світі nomo ми втілюємо унікальність і індивідуальність.
// 								Кожен елемент нашої ідентичності розкривається через кожну
// 								послугу та кожну вигоду, яку ми пропонуємо. Приєднуйтеся до
// 								нашої спільноти, щоб розгадати цю таємницю разом з нами і
// 								насолоджуватися світом{' '}
// 								<span className='relative inline-block z-[2]'>
// 									nomo!
// 									<span className='absolute w-[100%] bottom-[1px] left-0 h-[15px] bg-accent -z-[1] rounded-full ' />
// 								</span>
// 							</p>
// 						</div>
// 					</div>

// 					{/* Right content - Phone image */}
// 					<div className='lg:w-1/2 relative'>
// 						<Image
// 							src='/we/phones.png'
// 							alt='Nomo App Interface'
// 							className='w-full max-w-[600px] mx-auto relative z-10'
// 							width={584}
// 							height={577}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
// export default AboutSection


'use client'

import Image from 'next/image'
import { FC } from 'react'
import { motion } from 'framer-motion'

const AboutSection: FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="stats-container grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: '5 000 000 +', text: 'випущено Ncoin' },
            { number: '60 000 +', text: 'людей використовують наш сервіс' },
            { number: '830 +', text: 'партнерів у різних країнах' }
          ].map((item, index) => (
            <motion.div key={index} className="flex items-center gap-4" variants={fadeInUp}>
              <span className="text-[#FF8D2A] text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight whitespace-nowrap">
                {item.number}
              </span>
              <span className="text-[#0f0f0f] font-bold text-base md:text-lg lg:text-[19px]">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              title: 'Кешбек за твоїми правилами',
              description: 'З nomo ти контролюєш свої вигоди. Обирай кешбек, який пасує твоїм потребам та отримуєш повернення грошей за кожну покупку.'
            },
            {
              title: 'Миттєвий доступ до кешбеку',
              description: 'З nomo отримати свій кешбек стало ще простіше. Ви можете виводити кошти у будь-який час, зручним для вас способом.'
            },
            {
              title: 'Широка мережа партнерів',
              description: 'Наша програма працює з широким спектром партнерів, що означає, що ви можете отримати вигоди за покупки в будь-якому місці, де ви зазвичай робите свої покупки.'
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-[#212121] rounded-[33px] p-6 lg:p-8"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/we/about-icon.svg" alt="" width={28} height={22} />
                <p className="text-lg md:text-xl text-white font-normal tracking-normal">
                  {item.title.split(' ').map((word, i, arr) => 
                    i === arr.length - 2 ? (
                      <span key={i} className="relative inline-block">
                        {word}{' '}
                        <span className="absolute w-full h-1 bg-accent bottom-0 left-0" />
                      </span>
                    ) : `${word} `
                  )}
                </p>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-[#0F0F0F]">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[54px] font-extrabold mb-6 leading-tight">
              <div className="flex items-center gap-2">
                <span>Загадка</span>
                <span className="text-accent">nomo:</span>
              </div>
              <span>розкриваємо нашу сутність!</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#4F4F4F] leading-relaxed font-semibold max-w-2xl">
              В нашому світі nomo ми втілюємо унікальність і індивідуальність.
              Кожен елемент нашої ідентичності розкривається через кожну
              послугу та кожну вигоду, яку ми пропонуємо. Приєднуйтеся до
              нашої спільноти, щоб розгадати цю таємницю разом з нами і
              насолоджуватися світом{' '}
              <span className="relative inline-block z-[2]">
                nomo!
                <span className="absolute w-full h-3 bg-accent -z-[1] bottom-0 left-0 rounded-full" />
              </span>
            </p>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/we/phones.png"
              alt="Nomo App Interface"
              className="w-full max-w-[600px] mx-auto relative z-10"
              width={584}
              height={577}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

