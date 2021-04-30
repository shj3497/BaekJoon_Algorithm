// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []
let answer = ''

rl.on('line', line => {
	input = line.split(' ')
}).on('close', () => {
	const A = parseInt(input[0])
	// console.log(A)

	for(let i=1; i<=A; i++){
		for(let j=0; j<i; j++){
			answer = answer + '*';
		}
		answer = answer + '\n';
	}
	console.log(answer)
})