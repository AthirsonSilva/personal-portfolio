import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const onUpdateActiveLink = (value: string) => {
		setActiveLink(value)
	}

	return (
		<Router>
			<Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
				<Container>
					<Navbar.Brand href='/'>
						<h1 className='brand-name'>Athirson Silva</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='navbar-toggler-icon'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#home'
								className={
									activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('home')}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href='#skills'
								className={
									activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('skills')}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href='#projects'
								className={
									activeLink === 'projects'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('projects')}
							>
								Projects
							</Nav.Link>
							<Nav.Link
								href='#technologies'
								className={
									activeLink === 'technologies'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('technologies')}
							>
								Technologies
							</Nav.Link>
						</Nav>
						<span className='navbar-text'>
							<HashLink to='#connect'>
								<button className='vvd connect-btn'>
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	)
}
