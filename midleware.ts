import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
	const response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	})

	// Handle CORS preflight requests
	if (request.method === 'OPTIONS') {
		return new NextResponse(null, {
			status: 200,
			headers: {
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
				'Access-Control-Allow-Origin': '*',
			},
		})
	}

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return request.cookies.get(name)?.value
				},
				set(name: string, value: string, options: CookieOptions) {
					response.cookies.set({
						name,
						value,
						...options,
					})
				},
				remove(name: string, options: CookieOptions) {
					response.cookies.delete({
						name,
						...options,
					})
				},
			},
		}
	)

	const {
		data: { session },
	} = await supabase.auth.getSession()

	// Protected routes
	const verifyToken = request.nextUrl.searchParams.get('token')
	const isVerifyPage = request.nextUrl.pathname === '/verify'

	// Protected routes
	if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	// Verify page protection
	if (isVerifyPage) {
		const email = request.nextUrl.searchParams.get('email')
		// Allow access only if there's an email parameter (from registration)
		// or a verification token (from password reset)
		if (!email && !verifyToken) {
			return NextResponse.redirect(new URL('/', request.url))
		}
	}
	// Add CORS headers to all responses
	response.headers.set('Access-Control-Allow-Origin', '*')
	response.headers.set(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS'
	)
	response.headers.set(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization'
	)

	return response
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
