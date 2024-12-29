'use client'

import { ChevronLeft, ChevronDown } from 'lucide-react'
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
	const menuItems = [
		{ title: 'Дашборд', href: '/admin/dashboard' },
		{ title: 'Користувачі', href: '/admin/users' },
		{ title: 'Контент', href: '/admin/content' },
		{ title: 'Продукти/Послуги', href: '/admin/products' },
		{ title: 'Фінанси', href: '/admin/finances' },
		{ title: 'Звіти', href: '/admin/reports' },
		{ title: 'Інтеграції', href: '/admin/integrations' },
		{ title: 'Налаштування', href: '/admin/settings' },
	]

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='max-w-3xl p-0 gap-0 bg-[#1E2128] border-none rounded-3xl'>
				<DialogHeader className='p-6 flex-row items-center gap-4'>
					<button
						onClick={onClose}
						className='hover:opacity-70 transition-opacity'
					>
						<ChevronLeft className='h-6 w-6 text-white' />
					</button>

					<DialogTitle className='text-2xl font-semibold text-white m-0'>
						Адмін Панель
					</DialogTitle>
				</DialogHeader>

				<div className='p-6 pt-0 grid grid-cols-2 gap-4'>
					{menuItems.map((item, index) => (
						<Button
							key={index}
							variant='ghost'
							className='w-full h-auto p-6 bg-accent hover:bg-accent rounded-2xl flex items-center justify-between text-white text-xl font-medium'
						>
							{item.title}
							<ChevronDown className='h-6 w-6 opacity-70' />
						</Button>
					))}
				</div>
			</DialogContent>
		</Dialog>
	)
}
