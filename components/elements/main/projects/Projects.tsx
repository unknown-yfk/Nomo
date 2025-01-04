// import Image from 'next/image'
// import { FC } from 'react'

// const projectItem = [
// 	{
// 		id: 1,
// 		title: 'Власна Криптовалюта',
// 		main: 'Ncoin',
// 		text: '— постійно працюємо над вдосконаленням криптовалюти та додаванням нових інноваційних функцій, які полегшують ваші фінансові операції та забезпечують додаткові переваги для користувачів. Реліз запланований на ',
// 		date: '01.02.2025р',
// 		img: '/main/project-img1.png',
// 		objectFit: 'cover',
// 	},
// 	{
// 		id: 2,
// 		title: 'Інвестиційний Портфель',
// 		main: 'N-Inwest',
// 		text: '— це інноваційна платформа, що дозволяє користувачам інвестувати кешбеки у різноманітні фінансові активи. Вкладення допомагають збільшити пасивний дохід користувачів. Проект націлений на оптимізацію використання кешбеків для досягнення фінансової стабільності. Реліз запланований на ',
// 		date: '01.03.2025р',
// 		img: '/main/project-img2.png',
// 		objectFit: 'contain',
// 	},

// 	{
// 		id: 3,
// 		title: 'Гаманець',
// 		main: 'Гаманець ',
// 		text: 'буде підтримувати інтеграцію з різноманітними сервісами та додатками, щоб забезпечити розширені можливості для користувачів. Реліз запланований на ',
// 		date: '01.06.2025р',
// 		img: '/main/project-img3.png',
// 		objectFit: 'cover',
// 	},
// 	{
// 		id: 4,
// 		title: 'Кешбек NOMO',
// 		main: 'Інноваційна ',
// 		text: 'програма кешбеку пропонує унікальну можливість отримувати кешбек за покупки через криптовалюту, що відкриває нові можливості для користувачів заробляти та використовувати криптовалюту. Реліз запланований на ',
// 		date: '01.01.2025р',
// 		img: '/main/project-img4.png',
// 		objectFit: 'cover',
// 	},
// ]

// interface PartnersProps {
// 	bgColor: string
// }

// const Projects: FC<PartnersProps> = ({ bgColor }) => {
// 	return (
// 		<section className={`${bgColor}`}>
// 			<div className={'containers'}>
// 				<h2 className='py-[60px] text-center text-[54px] leading-[72.9px] font-extrabold'>
// 					Дізнайся більше про наші проекти
// 				</h2>
// 				<div className='grid grid-cols-1 md:grid-cols-2 gap-10  pb-[30px]'>
// 					{projectItem.map(item => (
// 						<div
// 							key={item.id}
// 							className='bg-[#fff] text-[#1D2733] shadow-project shadow-accent'
// 						>
// 							<div className='relative h-[208px]'>
// 								<Image
// 									src={item.img}
// 									alt={item.title}
// 									layout='fill'
// 									objectFit={item.objectFit}
// 									className='bg'
// 								/>
// 							</div>
// 							<div className='mt-[23px] ml-[24px] mr-[31px]'>
// 								<h3 className='text-[24px] font-bold leading-[29.05px] mb-[10px]'>
// 									{item.title}
// 								</h3>
// 								<p className='mb-[46px] text-[16px]'>
// 									<span className='text-accent font-bold'>{item.main}</span>
// 									{item.text}
// 									<span className='relative inline-block z-[2]'>
// 										{item.date}
// 										<span className='absolute w-[90%] bottom-0 left-2 h-3 bg-accent -z-[1] rounded-full ' />
// 									</span>
// 									.
// 								</p>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
// export default Projects


import Image from 'next/image'
import { FC } from 'react'

const projectItem = [
  {
    id: 1,
    title: 'Власна Криптовалюта',
    main: 'Ncoin',
    text: '— постійно працюємо над вдосконаленням криптовалюти та додаванням нових інноваційних функцій, які полегшують ваші фінансові операції та забезпечують додаткові переваги для користувачів. Реліз запланований на ',
    date: '01.02.2025р',
    img: '/main/project-img1.png',
    objectFit: 'cover' as const,
  },
  {
    id: 2,
    title: 'Інвестиційний Портфель',
    main: 'N-Inwest',
    text: '— це інноваційна платформа, що дозволяє користувачам інвестувати кешбеки у різноманітні фінансові активи. Вкладення допомагають збільшити пасивний дохід користувачів. Проект націлений на оптимізацію використання кешбеків для досягнення фінансової стабільності. Реліз запланований на ',
    date: '01.03.2025р',
    img: '/main/project-img2.png',
    objectFit: 'contain' as const,
  },
  {
    id: 3,
    title: 'Гаманець',
    main: 'Гаманець ',
    text: 'буде підтримувати інтеграцію з різноманітними сервісами та додатками, щоб забезпечити розширені можливості для користувачів. Реліз запланований на ',
    date: '01.06.2025р',
    img: '/main/project-img3.png',
    objectFit: 'cover' as const,
  },
  {
    id: 4,
    title: 'Кешбек NOMO',
    main: 'Інноваційна ',
    text: 'програма кешбеку пропонує унікальну можливість отримувати кешбек за покупки через криптовалюту, що відкриває нові можливості для користувачів заробляти та використовувати криптовалюту. Реліз запланований на ',
    date: '01.01.2025р',
    img: '/main/project-img4.png',
    objectFit: 'cover' as const,
  },
]

interface PartnersProps {
  bgColor: string
}

const Projects: FC<PartnersProps> = ({ bgColor }) => {
  return (
    <section className={`${bgColor} px-4 sm:px-6 lg:px-8`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className='py-8 sm:py-12 lg:py-[60px] text-center text-3xl sm:text-4xl lg:text-[54px] leading-tight sm:leading-[1.2] lg:leading-[72.9px] font-extrabold'>
          Дізнайся більше про наші проекти
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-12 lg:pb-[30px]'>
          {projectItem.map(item => (
            <div
              key={item.id}
              className='bg-[#fff] text-[#1D2733] shadow-project shadow-accent rounded-lg overflow-hidden'
            >
              <div className='relative h-[160px] sm:h-[180px] lg:h-[208px]'>
                <Image
                  src={item.img}
                  alt={item.title}
                  layout='fill'
                  objectFit={item.objectFit}
                  className='bg'
                />
              </div>
              <div className='p-4 sm:p-6 lg:mt-[23px] lg:ml-[24px] lg:mr-[31px]'>
                <h3 className='text-xl sm:text-2xl lg:text-[24px] font-bold leading-tight lg:leading-[29.05px] mb-2 sm:mb-3 lg:mb-[10px]'>
                  {item.title}
                </h3>
                <p className='mb-4 sm:mb-6 lg:mb-[46px] text-sm sm:text-base lg:text-[16px]'>
                  <span className='text-accent font-bold'>{item.main}</span>
                  {item.text}
                  <span className='relative inline-block z-[2]'>
                    {item.date}
                    <span className='absolute w-[90%] bottom-0 left-2 h-2 sm:h-3 bg-accent -z-[1] rounded-full ' />
                  </span>
                  .
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

