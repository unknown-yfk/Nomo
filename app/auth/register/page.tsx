


import RegisterForm from '@/components/elements/auth/register-form'
import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function RegisterPage() {
	const supabase = await createClient()

	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (session) {
		redirect('/dashboard')
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] px-4 py-8 sm:px-6 sm:py-12'>
			<div className='flex justify-center mb-6 sm:mb-8 md:mb-[41px] w-full max-w-[275px] sm:max-w-[300px] md:max-w-[350px]'>
				<Image
					src='/auth/logo.svg'
					alt='Nomo'
					width={275}
					height={35}
					className='w-full h-auto'
					priority
				/>
			</div>
			<RegisterForm />
		</div>
	)
}

