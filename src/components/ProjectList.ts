export type Repository = {
	name: string
	description: string
	language: string
	html_url: string
	private?: boolean
	fork?: boolean
}

export async function getRecentProjects(): Promise<any[]> {
	let repositories: Repository[] = []

	await fetch(
		'https://api.github.com/users/athirsonsilva/repos?sort=updated&per_page=4'
	)
		.then(async (response) => await response.json())
		.then((data) => {
			data.forEach((repository: Repository) => {
				repositories.push(repository)
			})
		})
		.catch((e) => console.error(e))

	await new Promise((resolve) => setTimeout(resolve, 1000))

	repositories.filter(
		(repository) => repository.private === false && repository.fork === false
	)

	repositories = repositories.map((repository) => {
		return {
			name: repository.name === null ? 'No name' : repository.name,
			description:
				repository.description === null
					? 'No description'
					: repository.description,
			language: repository.language === null ? 'no-lang' : repository.language,
			html_url:
				repository.html_url === null
					? 'https://github.com/AthirsonSilva/'
					: repository.html_url
		}
	})

	return repositories
}
