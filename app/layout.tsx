import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
	subsets: ['cyrillic'],
})

export const metadata: Metadata = {
	title: 'NomoCashback',
	description:
		'Кешбек за твоїми правилами. З nomo ти контролюєш свої вигоди. Обирай кешбек, який пасує твоїм потребам та отримуєш поверненя грошей за кожну покупку.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ua'>
			<body className={`${inter.className} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
