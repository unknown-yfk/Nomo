// import { User } from '@supabase/supabase-js'
// import { UserProfile } from '@/types/database'
// import { Settings, Briefcase } from 'lucide-react'
// import Image from 'next/image'
// import NavigationCards from './NavigationCards'
// import CardPreview from './CardPreview'

// interface UserHeaderProps {
// 	user: User
// 	profile: UserProfile
// }

// export default function UserHeader({ user, profile }: UserHeaderProps) {
// 	return (
// 		<div className='flex items-center justify-between mb-[35px] gap-4 '>
// 			<div className='flex items-center gap-6 flex-col mr-[21px]'>
// 				<div className='relative h-[150px] w-[150px]'>
// 					<Image
// 						src={user.user_metadata.avatar_url || '/dashboard/user.svg'}
// 						alt='Profile'
// 						className='rounded-full'
// 						fill
// 						sizes='64px'
// 					/>
// 				</div>

// 				<h2 className='text-[19px] font-medium text-accent'>
// 					<span className='text-[#fff]'>N</span>
// 					User_{profile?.id || user.id.slice(0, 6)}

// 				</h2>
// 				<div className='flex items-center gap-2'>
// 					<Briefcase className='text-accent w-6 h-6 cursor-pointer hover:text-white' />
// 				</div>
// 			</div>

// 			<NavigationCards userProfile={profile} />
// 			<div className='flex justify-end'>
// 				<CardPreview cardHolder={profile?.full_name} />

// 			</div>
// 		</div>
// 	)
// }


'use client'

import { User } from '@supabase/supabase-js'
import { UserProfile } from '@/types/database'
import { Settings, Briefcase } from 'lucide-react'
import Image from 'next/image'
import NavigationCards from './NavigationCards'
import CardPreview from './CardPreview'
import Link from 'next/link'

interface UserHeaderProps {
	user: User
	profile: UserProfile
}

export default function UserHeader({ user, profile }: UserHeaderProps) {
	return (
		<div className='flex flex-col lg:flex-row items-center lg:items-start justify-between mb-6 lg:mb-[35px] gap-6 lg:gap-4'>
			<div className='flex flex-col items-center lg:items-start gap-4 lg:gap-6 lg:mr-[21px]'>
				<div className='flex items-center gap-2 lg:gap-4'>
					{/* <Briefcase className='text-accent w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-white transition-colors' /> */}

					<Link href="/portfolio" passHref>
						<Briefcase className="text-accent w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-white transition-colors" />
					</Link>
					<div className='relative h-24 w-24 lg:h-[150px] lg:w-[150px]'>
						<Image
							src={user.user_metadata.avatar_url || '/dashboard/user.svg'}
							alt='Profile'
							className='rounded-full'
							fill
							sizes='(max-width: 1024px) 96px, 150px'
						/>
					</div>
				</div>

				<h2 className='text-base lg:text-[19px] font-medium text-accent text-center lg:text-left'>
					<span className='text-[#fff]'>N</span>
					User_{profile?.id || user.id.slice(0, 6)}
				</h2>
			</div>

			<div className='w-full lg:w-auto mb-6 lg:mb-0'>
				<NavigationCards userProfile={profile} />
			</div>

			<div className='w-full lg:w-auto flex justify-center lg:justify-end'>
				<CardPreview cardHolder={profile?.full_name} />
			</div>
		</div>
	)
}

