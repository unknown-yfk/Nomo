// import Image from 'next/image'

// const About = () => {
// 	return (
// 		<>
// 			<section className={'mt-40 mb-16  flex items-center justify-center '}>
// 				<div className='containers text-[#1D2733]'>
// 					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
// 						<div className='max-w-4xl'>
// 							<h2 className='text-[52px]  font-bold mb-[30px] leading-[62.93px]'>
// 								Інноваційна програма кешбеку
// 							</h2>
// 							<p className='text-base'>
// 								Наш проект пропонує інноваційну можливість отримувати кешбек за
// 								покупки через криптовалюту, що революціонує спосіб отримання
// 								винагороди за покупки.
// 							</p>
// 						</div>
// 						<div className='relative h-[400px] lg:h-[500px] flex justify-center items-center'>
// 							<Image
// 								src='/main/bg-about.png'
// 								alt='Кешбек програма ілюстрація'
// 								width={598}
// 								height={417}
// 								priority
// 								className='absolute'
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 			<section
// 				className={'pt-40 pb-16  flex items-center justify-center bg-[#799FFF]'}
// 			>
// 				<div className='containers text-[#1D2733]'>
// 					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
// 						<div className='relative h-[400px] lg:h-[500px] flex justify-center items-center'>
// 							<Image
// 								src='/main/bg-about2.png'
// 								alt='Кешбек програма ілюстрація'
// 								width={645}
// 								height={387}
// 								priority
// 								className='absolute'
// 							/>
// 						</div>
// 						<div className='max-w-4xl'>
// 							<h2 className='text-[52px] font-bold mb-[30px] leading-[62.93px]'>
// 								Фінансова свобода
// 							</h2>
// 							<p className='text-base'>
// 								Наша програма кешбеку в криптовалюті дозволяє користувачам
// 								отримувати винагороду у вигляді криптовалюти, що забезпечує
// 								більшу фінансову свободу та контроль над їхніми активами.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 			<section className={'mt-40 mb-16  flex items-center justify-center '}>
// 				<div className='containers text-[#1D2733]'>
// 					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
// 						<div className='max-w-4xl'>
// 							<h2 className='text-[52px] w-[800px] font-bold mb-[30px] leading-[62.93px]'>
// 								Заохочення використання криптовалюти
// 							</h2>
// 							<p className='text-base'>
// 								Шляхом надання кешбеку через криптовалюту ми стимулюємо більше
// 								користувачів приймати участь у криптовалютних транзакціях та
// 								розвивати глобальну екосистему криптовалют.
// 							</p>
// 						</div>
// 						<div className='relative h-[400px] lg:h-[500px] flex justify-center items-center'>
// 							<Image
// 								src='/main/bg-about3.png'
// 								alt='Кешбек програма ілюстрація'
// 								width={662}
// 								height={377}
// 								priority
// 								className='absolute'
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<section
// 				className={'pt-40 pb-16  flex items-center justify-center bg-[#AB93CB]'}
// 			>
// 				<div className='containers text-[#1D2733]'>
// 					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
// 						<div className='relative h-[400px] lg:h-[500px] flex justify-center items-center'>
// 							<Image
// 								src='/main/bg-about4.png'
// 								alt='Кешбек програма ілюстрація'
// 								width={379}
// 								height={404}
// 								priority
// 								className='absolute'
// 							/>
// 						</div>
// 						<div className='max-w-4xl'>
// 							<h2 className='text-[52px] font-bold mb-[30px] leading-[62.93px]'>
// 								Прозорість та безпека
// 							</h2>
// 							<p className='text-base'>
// 								Наша програма кешбеку працює на базі блокчейн-технології, що
// 								забезпечує високий рівень прозорості та безпеки транзакцій для
// 								всіх учасників.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	)
// }
// export default About


import Image from 'next/image'

const About = () => {
  return (
    <>
      <section className='mt-20 sm:mt-28 lg:mt-40 mb-8 sm:mb-12 lg:mb-16 flex items-center justify-center'>
        <div className='containers text-[#1D2733] px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='max-w-4xl'>
              <h2 className='text-3xl sm:text-4xl lg:text-[52px] font-bold mb-4 sm:mb-6 lg:mb-[30px] leading-tight sm:leading-[1.2] lg:leading-[62.93px]'>
                Інноваційна програма кешбеку
              </h2>
              <p className='text-base sm:text-lg'>
                Наш проект пропонує інноваційну можливість отримувати кешбек за
                покупки через криптовалюту, що революціонує спосіб отримання
                винагороди за покупки.
              </p>
            </div>
            <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center'>
              <Image
                src='/main/bg-about.png'
                alt='Кешбек програма ілюстрація'
                width={598}
                height={417}
                priority
                className='absolute max-w-full h-auto'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-28 lg:py-40 flex items-center justify-center bg-[#799FFF]'>
        <div className='containers text-[#1D2733] px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center order-2 lg:order-1'>
              <Image
                src='/main/bg-about2.png'
                alt='Кешбек програма ілюстрація'
                width={645}
                height={387}
                priority
                className='absolute max-w-full h-auto'
              />
            </div>
            <div className='max-w-4xl order-1 lg:order-2'>
              <h2 className='text-3xl sm:text-4xl lg:text-[52px] font-bold mb-4 sm:mb-6 lg:mb-[30px] leading-tight sm:leading-[1.2] lg:leading-[62.93px]'>
                Фінансова свобода
              </h2>
              <p className='text-base sm:text-lg'>
                Наша програма кешбеку в криптовалюті дозволяє користувачам
                отримувати винагороду у вигляді криптовалюти, що забезпечує
                більшу фінансову свободу та контроль над їхніми активами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-20 sm:mt-28 lg:mt-40 mb-8 sm:mb-12 lg:mb-16 flex items-center justify-center'>
        <div className='containers text-[#1D2733] px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='max-w-4xl'>
              <h2 className='text-3xl sm:text-4xl lg:text-[52px] font-bold mb-4 sm:mb-6 lg:mb-[30px] leading-tight sm:leading-[1.2] lg:leading-[62.93px]'>
                Заохочення використання криптовалюти
              </h2>
              <p className='text-base sm:text-lg'>
                Шляхом надання кешбеку через криптовалюту ми стимулюємо більше
                користувачів приймати участь у криптовалютних транзакціях та
                розвивати глобальну екосистему криптовалют.
              </p>
            </div>
            <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center'>
              <Image
                src='/main/bg-about3.png'
                alt='Кешбек програма ілюстрація'
                width={662}
                height={377}
                priority
                className='absolute max-w-full h-auto'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-28 lg:py-40 flex items-center justify-center bg-[#AB93CB]'>
        <div className='containers text-[#1D2733] px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center order-2 lg:order-1'>
              <Image
                src='/main/bg-about4.png'
                alt='Кешбек програма ілюстрація'
                width={379}
                height={404}
                priority
                className='absolute max-w-full h-auto'
              />
            </div>
            <div className='max-w-4xl order-1 lg:order-2'>
              <h2 className='text-3xl sm:text-4xl lg:text-[52px] font-bold mb-4 sm:mb-6 lg:mb-[30px] leading-tight sm:leading-[1.2] lg:leading-[62.93px]'>
                Прозорість та безпека
              </h2>
              <p className='text-base sm:text-lg'>
                Наша програма кешбеку працює на базі блокчейн-технології, що
                забезпечує високий рівень прозорості та безпеки транзакцій для
                всіх учасників.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

