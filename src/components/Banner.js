import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import TrackVisibility from 'react-on-screen'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
	const [loopNum, setLoopNum] = React.useState(0)
	const [isDeleting, setIsDeleting] = React.useState(false)
	const [headerText, setHeaderText] = React.useState('')
	const period = 2000
	const [delta, setDelta] = React.useState(300 - Math.random() * 400)
	const toRotate = [
		'Fullstack Developer',
		'Mobile Developer',
		'Data Scientist'
	]

	React.useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	}, [headerText])

	const tick = () => {
		let index = loopNum % toRotate.length
		let fullText = toRotate[index]
		let updatedText = isDeleting
			? fullText.substring(0, headerText.length - 1)
			: fullText.substring(0, headerText.length + 1)

		setHeaderText(updatedText)

		if (isDeleting) {
			setDelta((previousDelta) => previousDelta / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(500)
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
										isVisible
											? 'animated_animated animate__fadeIn'
											: ''
									}
								>
									<span className='tagline'>
										Welcome to my Portfolio
									</span>
									<h1>
										{`Hi i'm Athirson`}
										<br />
										<span
											style={{
												fontSize: '2.5rem',
												fontStyle: 'italic',
												fontWeight: 'normal'
											}}
											className='wrap'
										>
											{headerText}
										</span>
									</h1>
									<p>
										I'm a Fullstack Developer, Mobile
										Developer and Data Scientist. I love to
										build things that live on the internet,
										from websites to apps, or anything in
										between. My goal is to always build
										products that provide pixel-perfect,
										performant experiences.
									</p>
									<a href='#connect'>
										<button>
											Let's connect{' '}
											<ArrowRightCircle size={25} />
										</button>
									</a>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt='Header'></img>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
