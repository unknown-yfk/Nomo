import { createClient } from './supabase/server'

export async function createUserProfile(data: {
	user_id: string
	full_name: string
	phone_number: string
	referral_code?: string
	referred_by?: string
}) {
	const supabase = await createClient()

	const { error } = await supabase.from('user_profiles').insert([
		{
			user_id: data.user_id,
			full_name: data.full_name,
			phone_number: data.phone_number,
			referral_code: data.referral_code,
			referred_by: data.referred_by,
		},
	])

	if (error) throw error
}
