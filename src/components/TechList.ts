const icons8Template = 'https://img.icons8.com/color/48/000000/'
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

	return `${icons8Template}${doSanitize ? techName : tech}.svg`
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
		name: 'Express.js',
		logo: toIcons8Template('express')
	},
	{
		name: 'NestJS',
		logo: toIcons8Template('nestjs')
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
		logo: toIcons8Template('docker')
	},
	{
		name: 'AWS',
		logo: toDevIconTemplate('amazonwebservices', 'wordmark')
	},
	{
		name: 'Linux',
		logo: toIcons8Template('linux')
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
		logo: toIcons8Template('microsoft-sql-server')
	},
	{
		name: 'MongoDB',
		logo: toDevIconTemplate('mongodb')
	}
]
