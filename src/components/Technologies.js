import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { TechCard } from './TechCard'
import {
	DataScienceTechList,
	DevOpsTechList,
	DevelopmentTechList
} from './TechList'

export const Technologies = () => {
	return (
		<section className='project technologies' id='technologies'>
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
									<h2>Technologies</h2>
									<p>
										Here are some of the technologies I have
										worked with:
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
								className='tech-nav nav-pills mb-5 justify-content-center align-items-center'
								id='pills-tab'
							>
								<Nav.Item>
									<Nav.Link className='w-20' eventKey='first'>
										Development
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										className='w-20'
										eventKey='second'
									>
										Data science
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link className='w-20' eventKey='third'>
										DevOps
									</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content className='tech-content'>
								<Tab.Pane eventKey='first'>
									<Row>
										{DevelopmentTechList.map((tech) => {
											return <TechCard {...tech} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<Row>
										{DataScienceTechList.map((tech) => {
											return <TechCard {...tech} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<Row>
										{DevOpsTechList.map((tech) => {
											return <TechCard {...tech} />
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
