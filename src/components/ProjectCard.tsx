import React from 'react'
import { Col } from 'react-bootstrap'

type Props = {
	name: string
	logo: string
	description: string
	github: string
}

export const ProjectCard = ({ name, logo, description, github }: Props) => {
	return (
		<Col sm={6} md={4}>
			<div
				className='proj-imgbx'
				onClick={() => window.open(github, '_blank')}
			>
				{/* 	<TrackVisibility>
					{({ isVisible }) => (
						<>
							{console.log('isVisible', isVisible)}
							<img
								className={
									isVisible
										? 'proj-imgbx-mobile'
										: 'proj-imgx'
								}
								src={`https://img.icons8.com/color/48/000000/${logo}.svg`}
								alt='project'
							/>
						</>
					)}
				</TrackVisibility> */}
				<img
					className='proj-imgbx-mobile'
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
