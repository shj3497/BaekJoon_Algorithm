// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.


const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []

rl.on('line', (line) => {
	input.push(line.split(' '));

}).on('close', function(){

	for(let i=0; i<input.length; i++){
		let A = parseInt(input[i][0]);
		let B = parseInt(input[i][1]);
		console.log(`${A+B}`);
	}
});