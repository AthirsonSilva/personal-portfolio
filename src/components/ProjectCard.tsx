import { Col } from 'react-bootstrap'
import noLang from '../assets/img/no-lang.png'

type Props = {
	name: string
	language: string
	description: string
	github: string
}

export const ProjectCard = ({ name, language, description, github }: Props) => {
	const checkLanguage = () => {
		switch (language) {
			case 'c#':
				return 'csharp'

			case 'c++':
				return 'cplusplus'

			case 'shell':
				return 'bash'

			case 'jupyter notebook':
				return 'jupyter'

			case 'html':
				return 'html5'

			case 'css':
				return 'css3'

			default:
				return language ? language : noLang
		}
	}

	return (
		<Col sm={3} md={3}>
			<div className='proj-imgbx' onClick={() => window.open(github, '_blank')}>
				<img
					className='proj-imgbx-mobile'
					src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${checkLanguage()}/${checkLanguage()}-original.svg`}
					alt='project'
				/>
				<div className='proj-txtx'>
					<h5>{name}</h5>
					<small>{description}</small>
				</div>
			</div>
		</Col>
	)
}
