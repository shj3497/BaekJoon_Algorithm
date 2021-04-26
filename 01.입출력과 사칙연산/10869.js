// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 


const readline = require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

let input = [];

rl.on("line", function(line){
	input = line.split(' ').map((el) => parseInt(el));
	rl.close();
})

rl.on("close", function(){
	let A = input[0];
	let B = input[1];

	console.log(A+B);
	console.log(A-B);
	console.log(A*B);
	console.log(Math.floor(A/B));
	console.log(A%B);
})