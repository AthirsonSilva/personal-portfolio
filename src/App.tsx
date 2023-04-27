import 'bootstrap/dist/css/bootstrap.min.css'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Technologies } from './components/Technologies'
import './styles/about.css'
import './styles/banner.css'
import './styles/contact.css'
import './styles/default.css'
import './styles/footer.css'
import './styles/navbar.css'
import './styles/projects.css'
import './styles/skills.css'
import './styles/technologies.css'


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
