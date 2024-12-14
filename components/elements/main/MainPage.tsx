import About from './about/About'
import Hero from './hero/Hero'
import ProductOverview from './productOverview/ProductOverview'
import Projects from './projects/Projects'
import Statistics from './statistics/Statistics'

const MainPage = () => {
	return (
		<main className={''}>
			<Hero />
			<ProductOverview />
			<Projects />
			<About />
			<Statistics />
		</main>
	)
}
export default MainPage
