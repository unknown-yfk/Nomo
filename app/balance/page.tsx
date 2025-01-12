import BrandLogo from '@/components/elements/auth/brandlogo'
import UserBalance from '@/components/elements/balance/UserBalance'
import Dashboard from '@/components/elements/dashboard/Dashboard'
import Balance from '@/components/elements/dashboard/DashboardItems/Balance'
import { getUserProfile } from '@/lib/database'
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

    // Fetch user profile data
    try {
        // Fetch user profile data with error handling
        const profile = await getUserProfile(session.user.id)

        if (!profile) {
            console.error('No profile found for user:', session.user.id)
            // You might want to redirect to a profile creation page
            // or create a default profile
            return (
                <div className='min-h-screen bg-[#0f0f0f] text-white p-8'>
                    <p>
                        Профіль не знайдено. Будь ласка, зверніться до служби підтримки.
                    </p>
                </div>
            )
        }

        return (
            <div className='min-h-screen bg-[#0f0f0f] text-white'>
                <UserBalance session={session} profile={profile} />
            </div>
        )
    } catch (error) {
        console.error('Error in dashboard:', error)
        return (
            <div className='min-h-screen bg-[#0f0f0f] text-white p-8'>
                <p>Помилка завантаження профілю. Спробуйте оновити сторінку.</p>
            </div>
        )
    }
}
