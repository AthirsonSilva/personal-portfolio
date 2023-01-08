import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { ProjectCard } from './ProjectCard'
import {
	backendProjects,
	dataScienceProjects,
	frontendProjects
} from './ProjectList'

export const Projects = () => {
	return (
		<section className='project' id='project'>
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? 'animated_animated animate__fadeIn'
											: ''
									}
								>
									<h2>Projects</h2>
									<p>
										This is a list of projects I have worked
										on. I have worked on many projects, but
										these are the ones I am most proud of.
									</p>
								</div>
							)}
						</TrackVisibility>
						<Tab.Container
							id='projects-tabs'
							defaultActiveKey='first'
						>
							<Nav
								variant='pills'
								className='nav-pills mb-5 justify-content-center align-items-center'
								id='pills-tab'
							>
								<Nav.Item>
									<Nav.Link eventKey='first'>
										Backend
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second'>
										Frontend/ Mobile
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third'>
										Data science
									</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<Row>
										{backendProjects.map((project) => {
											return <ProjectCard {...project} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<Row>
										{frontendProjects.map((project) => {
											return <ProjectCard {...project} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<Row>
										{dataScienceProjects.map((project) => {
											return <ProjectCard {...project} />
										})}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img
				className='background-image-right'
				src={colorSharp2}
				alt=''
			></img>
		</section>
	)
}
