export type UserProfile = {
	id: number
	user_id: string
	username?: string
	full_name: string
	phone_number: string
	wallet_address?: string
	cashback_balance: number
	total_cashback: number
	referral_code?: string
	referred_by?: string
	contest_bonus: number
	savings_balance: number
	role: 'user' | 'admin'
	created_at: string
	updated_at: string
}
