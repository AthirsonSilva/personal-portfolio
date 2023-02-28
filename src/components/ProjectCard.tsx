import React from 'react'
import { Col } from 'react-bootstrap'

type Props = {
	name: string
	language: string
	description: string
	github: string
}

export const ProjectCard = ({ name, language, description, github }: Props) => {
	return (
		<Col sm={3} md={3}>
			<div className='proj-imgbx' onClick={() => window.open(github, '_blank')}>
				<img
					className='proj-imgbx-mobile'
					src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg`}
					alt='project'
				/>
				<div className='proj-txtx'>
					<h5>{name}</h5>
					<small>{description}</small>
				</div>
			</div>
		</Col>
	)
}
