import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner.js'
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
		</div>
	)
}

export default App
