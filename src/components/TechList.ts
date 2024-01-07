const icons8Template = 'https://img.icons8.com/color/color/480w/'
const devIconTemplate = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'

type Tech = {
	name: string
	logo: string
}

type Style = 'original' | 'plain' | 'wordmark'

const sanitizeLanguageName = (language: string) => {
	const sanitizedLanguage = language.replace(/\+/g, '')

	console.log({
		language,
		sanitizedLanguage,
	})

	return sanitizedLanguage
}

const toIcons8Template = (tech: string, doSanitize: boolean = false) => {
	let techName = ''

	if (doSanitize) {
		techName = sanitizeLanguageName(tech)
	}

	return `${icons8Template}${doSanitize ? techName : tech}.png`
}

const toDevIconTemplate = (tech: string, style: Style = 'original', doSanitize: boolean = false) => {
	let techName = ''

	if (doSanitize) {
		techName = sanitizeLanguageName(tech)
	}

	if (style === 'plain')
		return `${devIconTemplate}${doSanitize ? techName : tech
			}/${tech}-plain.svg`

	else if (style === 'wordmark')
		return `${devIconTemplate}${doSanitize ? techName : tech
			}/${tech}-plain-wordmark.svg`

	return `${devIconTemplate}${doSanitize ? techName : tech
		}/${tech}-original.svg`
}

export const BackendTechList: Array<Tech> = [
	{
		name: 'Node.js',
		logo: toDevIconTemplate('nodejs')
	},
	{
		name: 'NestJS',
		logo: toDevIconTemplate('nestjs', 'plain')
	},
	{
		name: 'PHP',
		logo: toDevIconTemplate('php', 'plain')
	},
	{
		name: 'Laravel',
		logo: toDevIconTemplate('laravel', 'plain')
	},
	{
		name: 'Java',
		logo: toDevIconTemplate('java')
	},
	{
		name: 'Spring',
		logo: toDevIconTemplate('spring')
	},
	{
		name: 'Python',
		logo: toDevIconTemplate('python')
	},
	{
		name: 'FastAPI',
		logo: toDevIconTemplate('fastapi')
	}
]

export const FrontendTechList: Array<Tech> = [
	{
		name: 'HTML',
		logo: toDevIconTemplate('html5')
	},
	{
		name: 'CSS',
		logo: toDevIconTemplate('css3')
	},
	{
		name: 'JavaScript',
		logo: toDevIconTemplate('javascript')
	},
	{
		name: 'TypeScript',
		logo: toDevIconTemplate('typescript')
	},
	{
		name: 'React',
		logo: toDevIconTemplate('react')
	},
	{
		name: 'Bootstrap',
		logo: toDevIconTemplate('bootstrap')
	},
	{
		name: 'Tailwind CSS',
		logo: toDevIconTemplate('tailwindcss', 'plain')
	}
]

export const DevOpsTechList = [
	{
		name: 'Git',
		logo: toDevIconTemplate('git')
	},
	{
		name: 'GitHub',
		logo: toDevIconTemplate('github')
	},
	{
		name: 'Docker',
		logo: toDevIconTemplate('docker', 'plain')
	},
	{
		name: 'AWS',
		logo: toDevIconTemplate('amazonwebservices', 'wordmark')
	},
	{
		name: 'Linux',
		logo: toDevIconTemplate('linux')
	},
	{
		name: 'Bash',
		logo: toDevIconTemplate('bash')
	},
	{
		name: 'MySQL',
		logo: toDevIconTemplate('mysql', 'wordmark')
	},
	{
		name: 'postgres',
		logo: toDevIconTemplate('postgresql')
	},
	{
		name: 'SQLite',
		logo: toDevIconTemplate('sqlite')
	},
	{
		name: 'SQL Server',
		logo: 'https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png'
	},
	{
		name: 'MongoDB',
		logo: toDevIconTemplate('mongodb')
	}
]
