import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	}

	return (
		<section className='skill' id='skills'>
			<Container>
				<Row>
					<Col>
						<div className='skill-bx'>
							<h2>Skills</h2>
							<p>
								I have a strong passion for backend development,
								linux and data science. I am always looking for
								new opportunities and challenges to learn and
								grow.
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className='skill-slider'
							>
								<div className='item'>
									<img src={meter1} alt='react' />
									<h5>Backend development</h5>
								</div>
								<div className='item'>
									<img src={meter2} alt='react' />
									<h5>Frontend development</h5>
								</div>
								<div className='item'>
									<img src={meter3} alt='react' />
									<h5>Data science</h5>
								</div>
								<div className='item'>
									<img src={meter3} alt='react' />
									<h5>DevOps</h5>
								</div>
								<div className='item'>
									<img src={meter2} alt='react' />
									<h5>Mobile development</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			<img className='background-image-left' src={colorSharp} alt='' />
		</section>
	)
}
