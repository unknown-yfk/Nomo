// // 'use client'

// // import { Card } from '@/components/ui/card'
// // import { QrCode, UserPlus, Database, Wallet, Settings } from 'lucide-react'
// // import Image from 'next/image'
// // import { Button } from '@/components/ui/button'
// // import { UserProfile } from '@/types/database'
// // import { useState } from 'react'
// // import SettingsModal from '@/components/ui/settings-modal'

// // interface NavigationCardsProps {
// // 	userProfile?: UserProfile | null
// // }

// // export default function NavigationCards({ userProfile }: NavigationCardsProps) {
// // 	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
// // 	const isAdmin = userProfile?.role === 'admin'

// // 	interface NavigationCardsProps {
// // 		userProfile?: UserProfile | null
// // 	}
// // 	return (
// // 		<div className='flex justify-between gap-[10px]'>
// // 			<div className=''>
// // 				{isAdmin && (
// // 					<button
// // 						className='text-accent hover:text-accenthover transition-colors'
// // 						onClick={() => setIsSettingsOpen(true)}
// // 					>
// // 						<Settings className='h-[32px] w-[32px]' />
// // 					</button>
// // 				)}
// // 			</div>
// // 			<div className='grid grid-cols-3 gap-0' style={{ height: '214px' }}>
// // 				{/* Первая карточка N-Inwest */}
// // 				<Card
// // 					className='flex items-center justify-center p-4 bg-[#1E2128] border-none  hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// // 					style={{ width: '170px', height: '214px' }}
// // 				>
// // 					<h3 className='font-light text-[#FFFFFF] text-[19px]'>N-Inwest</h3>
// // 				</Card>

// // 				{/* Остальные карточки */}
// // 				<div className='grid grid-cols-2 gap-[10px] col-span-2'>
// // 					<Card
// // 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none  hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// // 						style={{ width: '185px', height: '103px' }}
// // 					>
// // 						<h3 className='font-medium text-gray-200'>QR-код</h3>
// // 					</Card>

// // 					<Card
// // 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none  hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// // 						style={{ width: '185px', height: '103px' }}
// // 					>
// // 						<h3 className='font-medium text-gray-200'>Запросити друга</h3>
// // 					</Card>

// // 					<Card
// // 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none  hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// // 						style={{ width: '185px', height: '103px' }}
// // 					>
// // 						<h3 className='font-medium text-gray-200'>Дані</h3>
// // 					</Card>

// // 					<Card
// // 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none  hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// // 						style={{ width: '185px', height: '103px' }}
// // 					>
// // 						<h3 className='font-medium text-gray-200'>Баланс</h3>
// // 					</Card>
// // 				</div>
// // 			</div>

// // 			<SettingsModal
// // 				isOpen={isSettingsOpen}
// // 				onClose={() => setIsSettingsOpen(false)}
// // 			/>
// // 		</div>
// // 	)
// // }



// 'use client'

// import { Card } from '@/components/ui/card'
// import { QrCode, UserPlus, Database, Wallet, Settings } from 'lucide-react'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { UserProfile } from '@/types/database'
// import { useState } from 'react'
// import SettingsModal from '@/components/ui/settings-modal'

// interface NavigationCardsProps {
// 	userProfile?: UserProfile | null
// }

// export default function NavigationCards({ userProfile }: NavigationCardsProps) {
// 	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
// 	const isAdmin = userProfile?.role === 'admin'

// 	return (
// 		<div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10px]'>
// 			<div className='order-last sm:order-first'>
// 				{isAdmin && (
// 					<button
// 						className='text-accent hover:text-accenthover transition-colors'
// 						onClick={() => setIsSettingsOpen(true)}
// 					>
// 						<Settings className='h-6 w-6 sm:h-[32px] sm:w-[32px]' />
// 					</button>
// 				)}
// 			</div>
// 			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0' style={{ maxWidth: '100%', width: '100%', height: 'auto' }}>
// 				{/* First card N-Inwest */}
				
// 				<Card
// 					className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// 					style={{ width: '100%', height: '120px', minHeight: '120px', maxWidth: '100%' }}
// 				>
// 					<h3 className='font-light text-[#FFFFFF] text-base sm:text-lg lg:text-[19px]'>N-Inwest</h3>
// 				</Card>

// 				{/* Other cards */}
// 				<div className='grid grid-cols-2 gap-4 sm:gap-[10px] col-span-1 sm:col-span-2'>
// 					<Card
// 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// 						style={{ width: '100%', height: '100px', minHeight: '100px' }}
// 					>
// 						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>QR-код</h3>
// 					</Card>

// 					<Card
// 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// 						style={{ width: '100%', height: '100px', minHeight: '100px' }}
// 					>
// 						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>Запросити друга</h3>
// 					</Card>

// 					<Card
// 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// 						style={{ width: '100%', height: '100px', minHeight: '100px' }}
// 					>
// 						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>Дані</h3>
// 					</Card>

// 					<Card
// 						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
// 						style={{ width: '100%', height: '100px', minHeight: '100px' }}
// 					>
// 						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>Баланс</h3>
// 					</Card>
// 				</div>
// 			</div>

// 			<SettingsModal
// 				isOpen={isSettingsOpen}
// 				onClose={() => setIsSettingsOpen(false)}
// 			/>
// 		</div>
// 	)
// }



'use client'

import { Card } from '@/components/ui/card'
import { QrCode, UserPlus, Database, Wallet, Settings } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserProfile } from '@/types/database'
import { useState } from 'react'
import SettingsModal from '@/components/ui/settings-modal'

interface NavigationCardsProps {
	userProfile?: UserProfile | null
}

export default function NavigationCards({ userProfile }: NavigationCardsProps) {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const isAdmin = userProfile?.role === 'admin'

	return (
		<div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10px]'>
			<div className='order-last sm:order-first'>
				{isAdmin && (
					<button
						className='text-accent hover:text-accenthover transition-colors'
						onClick={() => setIsSettingsOpen(true)}
					>
						<Settings className='h-6 w-6 sm:h-[32px] sm:w-[32px]' />
					</button>
				)}
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[10px]' style={{ maxWidth: '100%', width: '100%', height: 'auto' }}>
				{/* First card N-Inwest */}
				<Card
					className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px] sm:mr-[10px]'
					style={{ width: '100%', height: '120px', minHeight: '120px', maxWidth: '100%' }}
				>
					<h3 className='font-light text-[#FFFFFF] text-base sm:text-lg lg:text-[19px]'>N-Inwest</h3>
				</Card>

				{/* Other cards */}
				<div className='grid grid-cols-2 gap-4 sm:gap-[10px] col-span-1 sm:col-span-2'>
					<Card
						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
						style={{ width: '100%', height: '100px', minHeight: '100px' }}
					>
						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>QR-код</h3>
					</Card>

					<Card
						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
						style={{ width: '100%', height: '100px', minHeight: '100px' }}
					>
						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>Запросити друга</h3>
					</Card>

					<Card
						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
						style={{ width: '100%', height: '100px', minHeight: '100px' }}
					>
						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>Дані</h3>
					</Card>

					<Card
						className='flex items-center justify-center p-4 bg-[#1E2128] border-none hover:bg-gray-800/50 transition-colors cursor-pointer rounded-[16px]'
						style={{ width: '100%', height: '100px', minHeight: '100px' }}
					>
						<h3 className='font-medium text-gray-200 text-sm sm:text-base'>Баланс</h3>
					</Card>
				</div>
			</div>

			<SettingsModal
				isOpen={isSettingsOpen}
				onClose={() => setIsSettingsOpen(false)}
			/>
		</div>
	)
}

