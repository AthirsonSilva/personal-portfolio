import { Col } from 'react-bootstrap'

export type TechCard = {
	name: string
	logo: string
}

export const TechCard = ({ name, logo }: TechCard) => {
	return (
		<Col className='tech-col' sm={4} md={2}>
			<div className='proj-imgbx tech-imgbx'>
				<img className='tech-card-img' src={logo} alt='project' />
				<h5>{name}</h5>
			</div>
		</Col>
	)
}
