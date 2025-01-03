'use client'

import { User } from '@supabase/supabase-js'
import { UserProfile } from '@/types/database'

import { useState } from 'react'
import UserHeader from './DashboardItems/UserHeader'
import NavigationCards from './DashboardItems/NavigationCards'
import TransactionsTable from './DashboardItems/TransactionTable'
import { Button } from '@/components/ui/button'
import Balance from './DashboardItems/Balance'

interface DashboardContentProps {
	session: {
		user: User
	}
	profile: UserProfile
}

export default function Dashboard({ session, profile }: DashboardContentProps) {
	const [currentMonth, setCurrentMonth] = useState('Чер, 2024')
	const [currency, setCurrency] = useState('UAH')

	return (
		// <div className=' mx-[80px] px-4 pt-[110px] pb-[100px]'>
    <div className='px-2 pt-6 pb-6 mx-4 sm:px-4 sm:pt-8 sm:pb-8 md:mx-[80px] md:px-6 md:pt-[110px] md:pb-[100px]'>

			<div className='grid grid-cols-1 gap-8'>
				<UserHeader user={session.user} profile={profile} />
				{/* <NavigationCards balance={profile?.cashback_balance || 0} /> */}

				<Balance balance={profile?.cashback_balance || 0} />
				<TransactionsTable
					currentMonth={currentMonth}
					currency={currency}
					onMonthChange={setCurrentMonth}
					onCurrencyChange={setCurrency}
				/>
			</div>
		</div>
	)
}
