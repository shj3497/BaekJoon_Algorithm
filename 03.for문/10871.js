// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다.
// 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []
let output = ''

rl.on('line', function(line){
	input.push(line.split(' '))

}).on('close', function(){

	// console.log(input)
	const A = parseInt(input[0][0]);
	const B = parseInt(input[0][1]);

	for(let i=0; i<A; i++){
		let numbers = parseInt(input[1][i])

		if(B > numbers){
			output = output + numbers + ' ';
		}
	}
	console.log(output)

})