import { Col, Container, Row } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import me from '../assets/img/close-me-rounded.png'
import colorSharp from '../assets/img/color-sharp.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const About = () => {
	return (
		<section className='about' id='about'>
			<Container>
				<Row>
					<Col>
						<div className='skill-bx'>
							<Row>
								<Col md={6} xl={7}>
									<h2 className='mb-5 about-header'>About me</h2>
									<p style={{ textAlign: 'justify' }}>
										Hi there! I am a software developer with a passion for
										backend development, linux and data science. I am always
										looking for new opportunities and challenges to learn and
										grow.
										<br></br>
										<br></br>
										Currently i am studying system analysis and development at
										University Nove de Julho (UNINOVE), and i also have a
										technical certificate as a Systems Developer from Etec de
										Guaianazes (Centro Paula Souza).
										<br></br>
										<br></br>I am also worked as a IT Support Intern and,
										currently, i am working as a Software Engineer Intern, where
										i work with tools like Java and Spring Framework/ Spring
										Boot.
									</p>
									<div className='about-me-socials'>
										<span className='navbar-text'>
											<div className='social-icon'>
												<a
													about='_blank'
													href='https://www.linkedin.com/in/athirson-s-a7723a191/'
												>
						 							<img src={navIcon1} alt='' />
												</a>
												<a
													about='_blank'
													href='https://github.com/AthirsonSilva'
												>
													<img src={navIcon2} alt='' />
												</a>
												<a
													about='_blank'
													href='https://www.instagram.com/athirson.silv4/'
												>
													<img src={navIcon3} alt='' />
												</a>
											</div>
										</span>
									</div>
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
