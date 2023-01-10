import React from 'react'
import { Col } from 'react-bootstrap'

type Props = {
	name: string
	logo: string
}

export const TechCard = ({ name, logo }: Props) => {
	return (
		<Col className='tech-col' sm={6} md={3}>
			<div className='proj-imgbx tech-imgbx'>
				<img
					/* style={{
						width: name === 'Scikit-Learn' ? '70%' : '40%',
						height: name === 'Scikit-Learn' ? '70%' : '40%',
						paddingRight: name === 'Scikit-Learn' ? '15%' : '0'
					}} */
					className='tech-card-img'
					src={logo}
					alt='project'
				/>
				<div className='proj-txtx tech-txtx'>
					<h5>{name}</h5>
				</div>
			</div>
		</Col>
	)
}
