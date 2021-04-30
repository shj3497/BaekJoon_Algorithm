// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다.
// 테스트 케이스 번호는 1부터 시작한다.

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []

rl.on('line', line => {
	input.push(line.split(' '))
	
}).on('close', () => {
	const input_len = input.length;
	for(let i=0; i<input_len; i++){
		if(input[i].length === 2){
			const A = parseInt(input[i][0]);
			const B = parseInt(input[i][1]);
			console.log(`Case #${i}: ${A+B}`);
		}
	}
})
