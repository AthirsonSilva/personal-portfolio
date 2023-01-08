import { Col } from 'react-bootstrap'

export const ProjectCard = ({ name, logo, description, github }) => {
	return (
		<Col sm={6} md={4}>
			<div
				className='proj-imgbx'
				onClick={() => window.open(github, '_blank')}
			>
				<img
					src={`https://img.icons8.com/color/48/000000/${logo}.svg`}
					alt='project'
				/>
				<div className='proj-txtx'>
					<h4>{name}</h4>
					<span>{description}</span>
				</div>
			</div>
		</Col>
	)
}
