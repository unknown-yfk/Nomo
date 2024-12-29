'use client'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface SettingsModalProps {
	isOpen: boolean
	onClose: () => void
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='bg-[#1E2128] text-white border-gray-800'>
				<DialogHeader>
					<DialogTitle>Налаштування адміністратора</DialogTitle>
				</DialogHeader>
				<div className='space-y-4'>
					{/* Add your admin settings here */}
					<div className='space-y-2'>
						<h3 className='text-sm font-medium'>Керування користувачами</h3>
						<Button variant='outline' className='w-full justify-start'>
							Список користувачів
						</Button>
					</div>
					<div className='space-y-2'>
						<h3 className='text-sm font-medium'>Налаштування системи</h3>
						<Button variant='outline' className='w-full justify-start'>
							Конфігурація
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
