// // 'use client'

// // import { useState } from 'react'
// // import { LuLoader } from 'react-icons/lu'
// // import { useRouter } from 'next/navigation'
// // import { createClient } from '@/lib/supabase/client'
// // import BrandLogo from './brandlogo'
// // import Link from 'next/link'
// // import { Button } from '@/components/ui/button'
// // import { Input } from '@/components/ui/input'
// // import Image from 'next/image'
// // import DevelopModal from '@/components/ui/DevelopModal/DevelopModal'

// // export default function LoginForm() {
// // 	const [email, setEmail] = useState('')
// // 	const [password, setPassword] = useState('')
// // 	const [loading, setLoading] = useState(false)
// // 	const [error, setError] = useState<string | null>(null)
// // 	const router = useRouter()
// // 	const [showDev, setShowDev] = useState(false)

// // 	const supabase = createClient()

// // 	const handleEmailLogin = async (e: React.FormEvent) => {
// // 		e.preventDefault()
// // 		setLoading(true)
// // 		setError(null)

// // 		try {
// // 			const { error } = await supabase.auth.signInWithPassword({
// // 				email,
// // 				password,
// // 			})

// // 			if (error) throw error

// // 			router.push('/dashboard')
// // 		} catch (error) {
// // 			setError(error instanceof Error ? error.message : 'An error occurred')
// // 		} finally {
// // 			setLoading(false)
// // 		}
// // 	}

// // 	const handleTelegramLogin = async () => {
// // 		try {
// // 			const { error } = await supabase.auth.signInWithOAuth({
// // 				provider: 'google',
// // 				options: {
// // 					redirectTo: `${window.location.origin}/auth/callback`,
// // 				},
// // 			})
// // 			if (error) throw error
// // 		} catch (error) {
// // 			setError(error instanceof Error ? error.message : 'An error occurred')
// // 		}
// // 	}

// // 	const openDevelopModal = () => {
// // 		setShowDev(true)
// // 	}

// // 	return (
// // 		<>
// // 			<div className='w-full max-w-[386px] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#1C1C1C] text-white mx-auto'>
// // 			<h1 className='text-[31px] font-bold text-center mb-[18px]'>Вхід</h1>

// // 				<button
// // 					onClick={openDevelopModal}
// // 					className='relative flex items-center w-full mb-[18px] px-[60px] rounded-[41px] py-[19.5px] bg-transparent border border-[#fff] hover:bg-gray-800 text-[18px] font-bold'
// // 				>
// // 					{/* <BrandTelegram className='mr-2' /> */}
// // 					Продовжити через
// // 					<Image
// // 						src={'/auth/tg.svg'}
// // 						alt='Telegram Auth'
// // 						className='absolute right-[65px]'
// // 						width={51}
// // 						height={51}
// // 					/>
// // 				</button>

// // 				<div className='relative mb-[18px]'>
// // 					{/* <div className='absolute inset-0 flex items-center'>
// // 					<div className='w-full border-t border-gray-600'></div>
// // 				</div> */}
// // 					<div className='relative flex justify-center text-[19px] font-bold'>
// // 						<span className='px-2 bg-[#1C1C1C] text-gray-400'>Або</span>
// // 					</div>
// // 				</div>

// // 				<form onSubmit={handleEmailLogin} className='space-y-4'>
// // 					<Input
// // 						type='email'
// // 						placeholder='Електронна пошта'
// // 						value={email}
// // 						onChange={e => setEmail(e.target.value)}
// // 						className='bg-transparent '
// // 					/>
// // 					<Input
// // 						type='password'
// // 						placeholder='Пароль'
// // 						value={password}
// // 						onChange={e => setPassword(e.target.value)}
// // 						className='bg-transparent '
// // 					/>

// // 					<Button
// // 						type='submit'
// // 						className='w-full bg-[#FF8A00] hover:bg-accenthover rounded-[40px] px-[30px] py-[10px]'
// // 						disabled={loading}
// // 					>
// // 						{loading ? (
// // 							<LuLoader className='size-[17px] animate-spin' />
// // 						) : (
// // 							'Увійти'
// // 						)}
// // 					</Button>
// // 				</form>

// // 				{error && (
// // 					<p className='mt-4 text-sm text-red-500 text-center'>{error}</p>
// // 				)}

// // 				<div className='mt-6 text-left space-y-2'>
// // 					<a
// // 						href='#'
// // 						className='text-sm text-gray-400 hover:text-white'
// // 						onClick={openDevelopModal}
// // 					>
// // 						Забули пароль?
// // 					</a>
// // 					<div className='text-sm text-gray-400'>
// // 						Ще не з нами?{' '}
// // 						<Link
// // 							href='/auth/register'
// // 							className='text-[#FF8A00] hover:text-accenthover'
// // 						>
// // 							Зареєструватися
// // 						</Link>
// // 					</div>
// // 				</div>
// // 			</div>

// // 			<DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
// // 		</>
// // 	)
// // }


// 'use client'

// import { useState } from 'react'
// import { LuLoader } from 'react-icons/lu'
// import { useRouter } from 'next/navigation'
// import { createClient } from '@/lib/supabase/client'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import Image from 'next/image'
// import DevelopModal from '@/components/ui/DevelopModal/DevelopModal'
// import { FaTelegramPlane } from 'react-icons/fa';

// export default function LoginForm() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const router = useRouter()
//   const [showDev, setShowDev] = useState(false)

//   const supabase = createClient()

//   const handleEmailLogin = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     try {
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       })

//       if (error) throw error

//       router.push('/dashboard')
//     } catch (error) {
//       setError(error instanceof Error ? error.message : 'An error occurred')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleTelegramLogin = async () => {
//     try {
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//         options: {
//           redirectTo: `${window.location.origin}/auth/callback`,
//         },
//       })
//       if (error) throw error
//     } catch (error) {
//       setError(error instanceof Error ? error.message : 'An error occurred')
//     }
//   }

//   const openDevelopModal = () => {
//     setShowDev(true)
//   }

//   return (
//     <>
//       <div className="w-full max-w-[320px] sm:max-w-[350px] md:max-w-[386px] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#1C1C1C] text-white mx-auto">
//         <h1 className="text-2xl sm:text-[28px] md:text-[31px] font-bold text-center mb-4 sm:mb-5 md:mb-[18px]">Вхід</h1>

//         {/* <button
//           onClick={openDevelopModal}
//           className="relative flex items-center justify-center w-full mb-4 sm:mb-5 md:mb-[18px] px-4 sm:px-[50px] md:px-[60px] rounded-[41px] py-3 sm:py-4 md:py-[19.5px] bg-transparent border border-[#fff] hover:bg-gray-800 text-base sm:text-[16px] md:text-[18px] font-bold"
//         >
//           Продовжити через
//           <Image
//             src="/auth/tg.svg"
//             alt="Telegram Auth"
//             className="absolute right-4 sm:right-[55px] md:right-[65px] w-8 sm:w-10 md:w-[51px] h-8 sm:h-10 md:h-[51px]"
//             width={51}
//             height={51}
//           />
//         </button> */}
// <button
//   onClick={openDevelopModal}
//   className="relative flex items-center justify-center w-full mb-4 sm:mb-5 md:mb-[18px] px-4 sm:px-[50px] md:px-[60px] rounded-[41px] py-3 sm:py-4 md:py-[19.5px] bg-transparent border border-[#fff] hover:bg-gray-800 text-base sm:text-[16px] md:text-[18px] font-bold"
// >
//   Продовжити через
//   <FaTelegramPlane className="text-blue-500 w-6 h-6 mr-2" />
// </button>

//         <div className="relative mb-4 sm:mb-5 md:mb-[18px]">
//           <div className="relative flex justify-center text-base sm:text-[17px] md:text-[19px] font-bold">
//             <span className="px-2 bg-[#1C1C1C] text-gray-400">Або</span>
//           </div>
//         </div>

//         <form onSubmit={handleEmailLogin} className="space-y-4">
//           <Input
//             type="email"
//             placeholder="Електронна пошта"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-transparent w-full"
//           />
//           <Input
//             type="password"
//             placeholder="Пароль"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-transparent w-full"
//           />

//           <Button
//             type="submit"
//             className="w-full bg-[#FF8A00] hover:bg-accenthover rounded-[40px] px-4 sm:px-[25px] md:px-[30px] py-2 sm:py-[8px] md:py-[10px] text-sm sm:text-base md:text-lg"
//             disabled={loading}
//           >
//             {loading ? (
//               <LuLoader className="size-[17px] animate-spin" />
//             ) : (
//               'Увійти'
//             )}
//           </Button>
//         </form>

//         {error && (
//           <p className="mt-4 text-xs sm:text-sm text-red-500 text-center">{error}</p>
//         )}

//         <div className="mt-4 sm:mt-5 md:mt-6 text-left space-y-2">
//           <a
//             href="#"
//             className="text-xs sm:text-sm text-gray-400 hover:text-white"
//             onClick={openDevelopModal}
//           >
//             Забули пароль?
//           </a>
//           <div className="text-xs sm:text-sm text-gray-400">
//             Ще не з нами?{' '}
//             <Link
//               href="/auth/register"
//               className="text-[#FF8A00] hover:text-accenthover"
//             >
//               Зареєструватися
//             </Link>
//           </div>
//         </div>
//       </div>

//       <DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
//     </>
//   )
// }



'use client'

import { useState } from 'react'
import { LuLoader } from 'react-icons/lu'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import DevelopModal from '@/components/ui/DevelopModal/DevelopModal'
import { FaTelegramPlane } from 'react-icons/fa'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [showDev, setShowDev] = useState(false)

  const supabase = createClient()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/dashboard')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleTelegramLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const openDevelopModal = () => {
    setShowDev(true)
  }

  return (
    <>
      <div className="w-full max-w-[320px] sm:max-w-[350px] md:max-w-[386px] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#1C1C1C] text-white mx-auto">
        <h1 className="text-2xl sm:text-[28px] md:text-[31px] font-bold text-center mb-4 sm:mb-5 md:mb-[18px]">Вхід</h1>

		<button
          onClick={openDevelopModal}
          className="flex items-center justify-center w-full mb-4 sm:mb-5 md:mb-[18px] px-2 sm:px-6 md:px-8 rounded-[41px] py-2 sm:py-4 md:py-[19.5px] bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300 text-base sm:text-[16px] md:text-[18px] font-bold"
        >
          <FaTelegramPlane className="w-6 h-6 mr-2" />
          <span>Продовжити через Telegram</span>
        </button>

        <div className="relative mb-4 sm:mb-5 md:mb-[18px]">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-base sm:text-[17px] md:text-[19px] font-bold">
            <span className="px-2 bg-[#1C1C1C] text-gray-400">Або</span>
          </div>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-full"
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent w-full"
          />

          <Button
            type="submit"
            className="w-full bg-[#FF8A00] hover:bg-accenthover rounded-[40px] px-4 sm:px-[25px] md:px-[30px] py-2 sm:py-[8px] md:py-[10px] text-sm sm:text-base md:text-lg"
            disabled={loading}
          >
            {loading ? (
              <LuLoader className="size-[17px] animate-spin" />
            ) : (
              'Увійти'
            )}
          </Button>
        </form>

        {error && (
          <p className="mt-4 text-xs sm:text-sm text-red-500 text-center">{error}</p>
        )}

        <div className="mt-4 sm:mt-5 md:mt-6 text-left space-y-2">
          <a
            href="#"
            className="text-xs sm:text-sm text-gray-400 hover:text-white"
            onClick={openDevelopModal}
          >
            Забули пароль?
          </a>
          <div className="text-xs sm:text-sm text-gray-400">
            Ще не з нами?{' '}
            <Link
              href="/auth/register"
              className="text-[#FF8A00] hover:text-accenthover"
            >
              Зареєструватися
            </Link>
          </div>
        </div>
      </div>

      <DevelopModal isOpen={showDev} onClose={() => setShowDev(false)} />
    </>
  )
}

