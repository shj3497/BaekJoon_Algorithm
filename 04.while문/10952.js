// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 입력의 마지막에는 0 두 개가 들어온다.

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []

rl.on('line', (line) => {
	input.push(line.split(' '));	
}).on('close', function(){

	let i=0;
	let bool = true;
	let sum;
	let result = '';

	while(bool){
		let A = parseInt(input[i][0]);
		let B = parseInt(input[i][1]);
		
		if(A===0 && B===0){
			bool=false;
		}else{
			sum = A+B;
			result = result + sum + '\n'
			i++;
		}
	}
	console.log(result);
});