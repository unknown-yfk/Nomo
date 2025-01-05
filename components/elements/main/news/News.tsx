


import { FC } from 'react'
import NewsCard from './NewsCard'
import Image from 'next/image'

const news = [
  {
    image: '/main/news-1.svg',
    title: 'Закінчилася розробка сайту Version 1.6.3',
    description:
      'Поняття "сайт" охоплює безліч різних проєктів: від простеньких посадкових сторінок до складних онлайн-сервісів, що складаються із сотень екранів і тисяч функцій.',
    date: 'Вчора, 10:46',
  },
  {
    image: '/main/news-3.svg',
    title: 'Зареєструйся зараз!',
    description:
      'Всім зареєстрованим користувачам нарахується 10Ncoin в Потрфоліо.',
    date: '01.01.2025',
  },
  {
    image: '/main/news-2.svg',
    title: 'Про майбутнє',
    description: 'Починається розробка додатка Ncoin Кешбек/Біржа.',
    date: '18.01.2025',
  },
]

const News: FC = () => {
  return (
    <section className="bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="pt-16 sm:pt-24 md:pt-32 lg:pt-[240px] pb-8 sm:pb-12 md:pb-16 lg:pb-[81px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight sm:leading-tight md:leading-tight lg:leading-[64px] font-extrabold text-center">
          Слідкуйте за новинами разом з Номо
        </h2>
        <div className="flex flex-col space-y-6 w-full mx-auto pb-12 sm:pb-16 md:pb-20 lg:pb-[149px]">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-[256px]">
          <div className="flex justify-between items-center flex-col">
            <h3 className="text-xl sm:text-2xl md:text-[25px] text-center leading-[126%] tracking-[-0.04em] uppercase font-bold max-w-[453px] mb-8">
              З нами ти не просто клієнт, ти - частина нашої сім'ї, наш
              безцінний
            </h3>
            <Image
              src="/main/number1.png"
              alt="№1"
              className="mx-auto"
              width={300}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex justify-center items-end mb-12 sm:mb-16 md:mb-20 lg:mb-[120px]">
            <div className="relative text-center">
              <p className="text-sm sm:text-base mb-2">З кожною покупкою в</p>
              <Image
                src="/main/nomo.svg"
                alt="Nomo"
                className="mx-auto mb-2"
                width={228}
                height={90}
              />
              <p className="text-xs sm:text-sm w-full sm:w-[167px] mx-auto mb-8">
                ваш кешбек зростає.
              </p>
              <div className="relative">
                <Image
                  src="/main/cat.png"
                  alt="Cat"
                  className="absolute bottom-0 right-0 sm:-right-[110px]"
                  width={111}
                  height={228}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News

