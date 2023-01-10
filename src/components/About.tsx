import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import me from '../assets/img/close-me-rounded.png'
import colorSharp from '../assets/img/color-sharp.png'

export const About = () => {
	return (
		<section className='skill' id='skills'>
			<Container>
				<Row>
					<Col>
						<div className='skill-bx'>
							<Row>
								<Col md={6} xl={7}>
									<h2 className='mb-4'>About me</h2>
									<p
										style={{
											textAlign: 'justify'
										}}
									>
										Hi there! I am a software developer with
										a passion for backend development, linux
										and data science. I am always looking
										for new opportunities and challenges to
										learn and grow.
										<br></br>
										<br></br>
										Currently i am studying system analysis
										and development at University Nove de
										Julho (UNINOVE). I am also working as a
										IT support internet at Colégio Rio
										Branco.
									</p>
								</Col>
								<Col className='ml-5 mt-6' md={6} xl={4}>
									<img src={me} alt=''></img>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
			<img className='background-image-left' src={colorSharp} alt='' />
		</section>
	)
}
