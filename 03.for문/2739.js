// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 
// 출력 형식에 맞춰서 출력하면 된다.
// N * x = Nx, 1 <= x <= 9, N 입력

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

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
	for (let i=1; i<10; i++){
		console.log(`${A} * ${i} = ${A*i}`);
	}
}