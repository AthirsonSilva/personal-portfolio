import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

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

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<Router>
			<Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
				<Container>
					<Navbar.Brand href='/'>
						<h1 className='brand-name'>Athirson</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='navbar-toggler-icon'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#home'
								className={
									activeLink === 'home'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('home')}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href='#skills'
								className={
									activeLink === 'skills'
										? 'active navbar-link'
										: 'navbar-link'
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
								onClick={() =>
									onUpdateActiveLink('technologies')
								}
							>
								Technologies
							</Nav.Link>
						</Nav>
						<span className='navbar-text'>
							<div className='social-icon'>
								<a href='https://www.linkedin.com/in/athirson-s-a7723a191/'>
									<img src={navIcon1} alt='' />
								</a>
								<a href='https://github.com/AthirsonSilva'>
									<img src={navIcon2} alt='' />
								</a>
								<a href='https://www.instagram.com/athirson.silv4/'>
									<img src={navIcon3} alt='' />
								</a>
							</div>
							<HashLink to='#connect'>
								<button className='vvd'>
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
