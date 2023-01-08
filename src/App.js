import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner.js'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar.js'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills.js'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Banner />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
