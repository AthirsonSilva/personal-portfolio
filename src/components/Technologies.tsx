import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { TechCard } from './TechCard'
import {
	BackendTechList,
	DevOpsTechList,
	FrontendTechList
} from './TechList'

export const Technologies = () => {
	const [isMobile, setIsMobile] = React.useState<boolean>()
	const handleResize = () => {
		if (window.innerWidth <= 768) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	React.useEffect(() => {
		window.addEventListener('resize', handleResize)
	})

	return (
		<section className='project technologies' id='technologies'>
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animated_animated animate__fadeIn' : ''
									}
								>
									<h2>Technologies</h2>
									<p>Here are some of the technologies I have worked with:</p>
									<p>
										I am always learning new things and I am excited to see
										what the future of technology holds.
									</p>
								</div>
							)}
						</TrackVisibility>
						<Tab.Container id='projects-tabs' defaultActiveKey='first'>
							<Nav
								variant='pills'
								className={
									isMobile
										? 'nav-pills mb-5 justify-content-center align-items-center nav-stacked'
										: 'nav-pills mb-5 justify-content-center align-items-center'
								}
								id='pills-tab'
							>
								<Nav.Item>
									<Nav.Link className='w-33 tab-linker' eventKey='first'>
										{isMobile ? 'Back' : 'Backend'}
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link className='w-33 tab-linker' eventKey='second'>
										{isMobile ? 'Front' : 'Frontend'}
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link className='w-33 tab-linker' eventKey='third'>
										{isMobile ? 'DevOps' : 'DevOps'}
									</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content className='tech-content'>
								<Tab.Pane eventKey='first'>
									<Row>
										{BackendTechList.map((tech: TechCard) => {
											return <TechCard {...tech} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<Row>
										{FrontendTechList.map((tech: TechCard) => {
											return <TechCard {...tech} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<Row>
										{DevOpsTechList.map((tech: TechCard) => {
											return <TechCard {...tech} />
										})}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2} alt=''></img>
		</section>
	)
}
