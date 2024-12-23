import { FC } from 'react'
import MainSection from './MainSection/MainSection'
import Header from '@/components/layout/Header'
import AboutSection from './AboutSection/AboutSection'
import ProgramSection from './ProgramSection/ProgramSection'
import Projects from '../main/projects/Projects'

const We: FC = () => {
	return (
		<main className={' '}>
			<MainSection />
			<AboutSection />
			<ProgramSection />
			<Projects bgColor='text-[#0f0f0f]' />
		</main>
	)
}
export default We
