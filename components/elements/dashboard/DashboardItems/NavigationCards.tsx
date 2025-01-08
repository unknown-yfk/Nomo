


'use client'

import { Card } from '@/components/ui/card'
import { QrCode, UserPlus, Database, Wallet, Settings } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserProfile } from '@/types/database'
import { useState } from 'react'
import SettingsModal from '@/components/ui/settings-modal'
import { useRouter } from 'next/navigation'

interface NavigationCardsProps {
	userProfile?: UserProfile | null
}




export default function NavigationCards({ userProfile }: NavigationCardsProps) {
	const router = useRouter()

	
const handleNavigateToNInwest = () => {
    router.push('/n-inwest') // Replace '/n-inwest' with your desired route
  }
	
  const handleNavigateToNRefer = () => {
    router.push('/refer') // Replace '/n-inwest' with your desired route
  }
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
					style={{ width: '100%', height: '210px', minHeight: '120px', maxWidth: '100%' }}
					onClick={handleNavigateToNInwest}

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
						onClick={handleNavigateToNRefer}

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

