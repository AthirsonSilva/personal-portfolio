import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { ProjectCard } from './ProjectCard'
import { getRecentProjects } from './ProjectList'

export const Projects = () => {
	const [projects, setProjects] = React.useState<any[]>([])

	const [isMobile, setIsMobile] = React.useState<boolean>()
	const handleResize = () => {
		if (window.innerWidth <= 768) {
			console.log('is mobile')
			setIsMobile(true)
		} else {
			console.log('is desktop')
			setIsMobile(false)
		}
	}

	React.useEffect(() => {
		window.addEventListener('resize', handleResize)

		getRecentProjects().then((data) => {
			setProjects(data)
		})

		console.log('projects', projects)
	})

	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? 'animated_animated animate__fadeIn mb-4'
											: 'mb-4'
									}
								>
									<h2>Projects</h2>
									<p>
										This is a list of projects I have worked on. I have worked
										on many projects, but these are the ones I am working on
										recently.
									</p>
								</div>
							)}
						</TrackVisibility>
						<br></br>
						<br></br>
						<Container className='mt-6'>
							<Row>
								{projects.map((project) => (
									<ProjectCard
										name={project.name}
										language={project.language.toLowerCase()}
										description={project.description}
										github={project.html_url}
									/>
								))}
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2} alt=''></img>
		</section>
	)
}
