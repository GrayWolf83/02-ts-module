import { totalPrice } from './task-2.js'
import { normalizeData, posts } from './task-3.js'

console.log(
	'task-2',
	totalPrice({
		price: 100000,
		discount: 25,
		isInstallment: true,
		months: 12,
	}),
)

console.log('task-3', normalizeData(posts))
