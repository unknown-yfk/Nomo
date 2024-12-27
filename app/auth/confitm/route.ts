import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const requestUrl = new URL(request.url)
	const token_hash = requestUrl.searchParams.get('token_hash')
	const type = requestUrl.searchParams.get('type')

	if (token_hash && type) {
		const supabase = await createClient()

		// Exchange the token hash for a session
		const { error } = await supabase.auth.verifyOtp({
			token_hash,
			type: type as any,
		})

		if (!error) {
			// Redirect to the dashboard on successful confirmation
			return NextResponse.redirect(new URL('/dashboard', request.url))
		}
	}

	// If there's an error, redirect to login page
	return NextResponse.redirect(new URL('/login', request.url))
}
