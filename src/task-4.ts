import { RequestInfo, RequestInit } from 'node-fetch'
const fetch = (url: RequestInfo, init?: RequestInit) =>
	import('node-fetch').then((module) => module.default(url, init))

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface Comment {
	postId: number
	id: number
	email: string
	name: string
	body: string
}

const getData = async (url: string): Promise<Comment[]> => {
	const response = await fetch(url)
	return (await response.json()) as Comment[]
}

getData(COMMENTS_URL).then((data: Comment[]) => {
	data.forEach((item) => {
		console.log(`ID: ${item.id}, Email: ${item.email}`)
	})
})
