// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []

rl.on('line', function(line){
	input.push(line.split(' '));
}).on('close', function(){
	const N = parseInt(input[0]);
	
	let max = parseInt(input[1][0]);
	let min = parseInt(input[1][0]);

	for (let i=0; i<N; i++){
		if(max < parseInt(input[1][i])){
			max = parseInt(input[1][i]);
		}

		if(min > parseInt(input[1][i])){
			min = parseInt(input[1][i])
		}
	}
	console.log(`${min} ${max}`);
})
