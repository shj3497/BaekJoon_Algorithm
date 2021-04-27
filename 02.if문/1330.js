/* 
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.
*/

const readline = require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

let input = [];

rl.on('line', function(line){
	input = line.split(' ');
	rl.close();
})

rl.on('close', function(){
	let A = parseInt(input[0]);
	let B = parseInt(input[1]);

	test(A, B);
})

function test(A, B){
	if(A > B){
		console.log('>');
	}else if(A < B){
		console.log('<');
	}else{
		console.log('==');
	}
}