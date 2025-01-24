

import {
	MapPin,
	Phone,
	Mail,
	Facebook,
	Instagram,
	Twitter,
	Send,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='bg-[#0F0F0F] text-white pt-5 pb-10 md:pb-[98px]'>
			<div className='containers mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[216px]'>
					{/* Contact Information */}
					<div className='text-center md:text-left'>
						<h3 className='text-[20px] md:text-[25px] font-bold leading-[126%] tracking-[-4%] mb-[13px]'>
							Зв’язок з нами
						</h3>
						<div className='space-y-6 md:space-y-[27px]'>
							<div className='flex flex-col md:flex-row items-center gap-4 md:gap-[30px]'>
								<Image
									src={'/footer/map.svg'}
									alt={'map'}
									className=''
									width={38}
									height={55}
								/>
								<p className='text-white text-[18px] md:text-[21px] font-medium'>
									вул. Івасюка, 84, Івано-Франківськ,
									<br />
									Івано-Франківська область, 76000
								</p>
							</div>
							<div className='flex flex-col md:flex-row items-center gap-4 md:gap-[30px]'>
								<Image
									src={'/footer/phone.svg'}
									alt={'Phone'}
									className=''
									width={48}
									height={48}
								/>
								<p className='text-white text-[18px] md:text-[21px] font-medium'>
									(480) 555-0103
								</p>
							</div>
							<div className='flex flex-col md:flex-row items-center gap-4 md:gap-[30px]'>
								<Image
									src={'/footer/email.svg'}
									alt={'Email'}
									className=''
									width={55}
									height={44}
								/>
								<p className='text-white text-[18px] md:text-[21px] font-medium'>
									curtis.weaver@example.com
								</p>
							</div>
						</div>
					</div>

					{/* Social Media Links */}
					<div className='text-center md:text-left'>
						<h3 className='text-[20px] md:text-[25px] font-bold leading-[126%] tracking-[-4%] mb-6 uppercase'>
							Слідкуй за нами у соцмережах!
						</h3>
						<div className='flex justify-center md:justify-start gap-4 md:gap-[12px] items-center'>
							<Link
								href='#'
								className='bg-white p-2 rounded-full hover:bg-gray-200 transition-colors'
							>
								<Image
									src={'/footer/facebook.svg'}
									alt={'Facebook'}
									className=''
									width={50}
									height={50}
								/>
							</Link>
							<Link
								href='#'
								className='bg-white p-2 rounded-full hover:bg-gray-200 transition-colors'
							>
								<Image
									src={'/footer/instagram.svg'}
									alt={'Instagram'}
									className=''
									width={50}
									height={50}
								/>
							</Link>
							<Link
								href='#'
								className='bg-white p-2 rounded-full hover:bg-gray-200 transition-colors'
							>
								<Image
									src={'/footer/telegram.svg'}
									alt={'Telegram'}
									className=''
									width={50}
									height={50}
								/>
							</Link>
							<Link
								href='#'
								className='bg-white p-2 rounded-full hover:bg-gray-200 transition-colors'
							>
								<Image
									src={'/footer/x.svg'}
									alt={'X (Twitter)'}
									className=''
									width={50}
									height={50}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
