import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import TrackVisibility from 'react-on-screen'
import headerImg from '../assets/img/astronaut-computer.svg'

export const Banner = () => {
	const [loopNum, setLoopNum] = React.useState(0)
	const [isDeleting, setIsDeleting] = React.useState(false)
	const [headerText, setHeaderText] = React.useState('')
	const period = 1500
	const [delta, setDelta] = React.useState(100 - Math.random() * 44)
	const toRotate = ['Backend Developer', 'Linux Enthusiast', 'Open Source advocate']

	React.useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	})

	const tick = () => {
		let index = loopNum % toRotate.length
		let fullText = toRotate[index]
		let updatedText = isDeleting
			? fullText.substring(0, headerText.length - 1)
			: fullText.substring(0, headerText.length + 1)

		setHeaderText(updatedText)

		if (isDeleting) {
			setDelta((previousDelta) => previousDelta / 4)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(100 - Math.random() * 44)
		}
	}

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animated_animated animate__fadeIn' : ''
									}
								>
									<h1>
										{`Hi i'm Athirson`}
										<br />
										<span
											style={{
												fontSize: '20pt',
												fontWeight: 'normal'
											}}
											className='wrap'
										>
											and i am a <span style={{
												fontStyle: 'italic',
												fontSize: '24pt'
											}}>
												<b>
													{headerText}
												</b>
											</span>
										</span>
									</h1>
									<h6 className='banner-presentation' color='#fff'>
										"I love to build things that live on the internet, mainly on
										the server-side, from RESTful APIs, GraphQL applications,
										Websocket and Microservices, or anything in between. My goal
										is to always build products that provide value to other
										people."
									</h6>
									<a href='#connect'>
										<button className='connect-btn'>
											Let's connect <ArrowRightCircle size={28} />
										</button>
									</a>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img className='banner-img' src={headerImg} alt='Header'></img>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
