'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
	const cookieStore = cookies()

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					// @ts-ignore
					return cookieStore.get(name)?.value
				},
				set(name: string, value: string, options: any) {
					// Cookie setting is handled by Supabase internally
				},
				remove(name: string, options: any) {
					// Cookie removal is handled by Supabase internally
				},
			},
		}
	)
}
