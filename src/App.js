import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner.js'
import { NavBar } from './components/NavBar.js'
import { Skills } from './components/Skills.js'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Banner />
			<Skills />
		</div>
	)
}

export default App
