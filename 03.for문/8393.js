// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = []

rl.on('line', function(line){
	input = line.split(' ');
	rl.close();
})

rl.on('close', function(){
	let A = parseInt(input[0]);

	test(A);
})

function test(A){
	let sum = 0;
	
	for(let i=0; i<=A; i++){
		sum = sum + i;
	}
	console.log(sum);
}