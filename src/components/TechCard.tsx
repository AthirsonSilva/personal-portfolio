import React from 'react'
import { Col } from 'react-bootstrap'

export type CardProps = {
	name: string
	logo: string
}

export const TechCard = ({ name, logo }: CardProps) => {
	return (
		<Col className='tech-col' sm={6} md={3}>
			<div className='proj-imgbx tech-imgbx'>
				<img className='tech-card-img' src={logo} alt='project' />
				<div className='proj-txtx tech-txtx'>
					<h5>{name}</h5>
				</div>
			</div>
		</Col>
	)
}
