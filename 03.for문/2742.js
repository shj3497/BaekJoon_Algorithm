// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []
let answer ='';

rl.on('line', line => {
	input = line.split(' ')
	
	for(let i=parseInt(input[0]); i > 0; i--){
		answer = answer + i + '\n';
	}
}).on('close', () => {
	console.log(answer);
})