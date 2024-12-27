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
		<div className='min-h-screen flex items-center justify-center bg-pink-50 flex-col'>
			<div className='flex justify-center mb-[41px]'>
				<Image src={'/auth/logo.svg'} alt='Nomo' width={275} height={35} />
			</div>
			<RegisterForm />
		</div>
	)
}
