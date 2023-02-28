import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-item-center'>
					<Col sm={6} className='text-center mb-2'>
						<h1 className='brand-name'>Athirson Silva</h1>
						<small>Software Engineer</small>
					</Col>
					<Col sm={6} className='text-center text-sm-end'>
						<div className='social-icon'>
							<a href='https://www.linkedin.com/in/athirson-s-a7723a191/'>
								<img src={navIcon1} alt='' />
							</a>
							<a href='https://github.com/AthirsonSilva'>
								<img src={navIcon2} alt='' />
							</a>
							<a href='https://www.instagram.com/athirson.silv4/'>
								<img src={navIcon3} alt='' />
							</a>
						</div>
						<p>Copyright 2022. All Right Reserved by Athirson Silva</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
