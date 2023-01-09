import { Col } from 'react-bootstrap'

export const TechCard = ({ name, logo }) => {
	return (
		<Col sm={6} md={4}>
			<div className='proj-imgbx'>
				<img className='tech-card-img' src={logo} alt='project' />
				<div className='proj-txtx'>
					<h4>{name}</h4>
				</div>
			</div>
		</Col>
	)
}
