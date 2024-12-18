const MapPage = () => {
	return (
		<main className={''}>
			<section className='bg-[#0f0f0f] py-[160px]'>
				<div className='containers '>
					<div style={{ filter: 'invert(1) hue-rotate(180deg)' }}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.9631935332186!2d24.738350576869387!3d48.916093496643455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c3d7ff25bc91%3A0xd4b6a5ad6531c10e!2z0YPQuy4g0JjQstCw0YHRjtC60LAsIDg0LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNzYwMDA!5e0!3m2!1sru!2ssk!4v1734522030520!5m2!1sru!2ssk'
							width='100%'
							height='600'
							style={{ border: '0' }}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</section>
		</main>
	)
}
export default MapPage
