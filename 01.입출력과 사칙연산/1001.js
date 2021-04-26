// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.


const readline = require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

let input = []

rl.on("line", function(line){
	input = line.split(' ').map((el) => parseInt(el));
	rl.close();
})

rl.on("close", function(){
	let A = input[0];
	let B = input[1];
	console.log(A-B)
})