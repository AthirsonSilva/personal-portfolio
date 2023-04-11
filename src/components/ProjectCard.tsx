import { Col } from 'react-bootstrap'

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
				return language
		}
	}

	language = checkLanguage()

	const getLanguageLogo = () => {
		const devIcons = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg`

		const checkDevIcons = new Image()
		checkDevIcons.src = devIcons

		if (checkDevIcons.height === 0) {
			const img8 = `https://img.icons8.com/color/48/000000/${language}.png`

			return img8
		}

		return devIcons
	}


	return (
		<Col sm={3} md={3}>
			<div className='proj-imgbx' onClick={() => window.open(github, '_blank')}>
				<img
					className='proj-imgbx-mobile'
					src={getLanguageLogo()}
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
