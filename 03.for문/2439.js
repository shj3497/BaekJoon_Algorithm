// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []
let output = '';
rl.on('line', function(line){
	input = line.split(' ')
}).on('close', function(){

	const A = parseInt(input[0]);
	const filler = ' ';

	for(let i=1; i<=A; i++){
		for(let j=A-i; j>0; j--){
			output = output + filler;
		}

		for(let k=1; k<=i; k++){
			output = output + '*';
		}
		output = output + '\n';
	}
	console.log(output);
})