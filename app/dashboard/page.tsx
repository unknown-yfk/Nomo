import BrandLogo from '@/components/elements/auth/brandlogo'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
	const supabase = await createClient()

	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (!session) {
		redirect('/login')
	}

	return (
		<div className='min-h-screen bg-[#1C1C1C] text-white'>
			<div className='max-w-4xl mx-auto p-8'>
				<div className='flex justify-between items-center mb-8'>
					<BrandLogo />
				</div>

				<div className='bg-gray-800 rounded-lg p-6'>
					<h1 className='text-2xl font-bold mb-4'>Особистий кабінет</h1>
					<div className='space-y-4'>
						<div>
							<label className='text-gray-400'>Email:</label>
							<p>{session.user.email}</p>
						</div>
						<div>
							<label className='text-gray-400'>ID користувача:</label>
							<p>{session.user.id}</p>
						</div>
						<div>
							<label className='text-gray-400'>Останній вхід:</label>
							<p>
								{new Date(session.user.last_sign_in_at || '').toLocaleString(
									'uk-UA'
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
