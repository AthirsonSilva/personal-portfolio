export async function getRecentProjects(): Promise<any[]> {
	let repositories = []

	fetch(
		'https://api.github.com/users/athirsonsilva/repos?sort=updated&per_page=4'
	)
		.then(async (response) => await response.json())
		.then((data) => {
			data.forEach((repository) => {
				repositories.push(repository)
			})
		})
		.catch((e) => console.error(e))

	await new Promise((resolve) => setTimeout(resolve, 1000))

	repositories.filter(
		(repository) => repository.private === false && repository.fork === false
	)

	repositories.map((repository) => {
		return {
			name: repository.name,
			description: repository.description,
			language: repository.language,
			html_url: repository.html_url
		}
	})

	return repositories
}
