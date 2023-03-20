import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Technologies } from './components/Technologies'

const App = () => {
	return (
		<div className='App'>
			<NavBar />
			<Banner />
			<About />
			<Technologies />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
