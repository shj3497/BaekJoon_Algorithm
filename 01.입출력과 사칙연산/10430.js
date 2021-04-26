// 첫째 줄에 (A+B)%C, 
// 둘째 줄에 ((A%C) + (B%C))%C, 
// 셋째 줄에 (A×B)%C, 
// 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
const readline = require("readline");

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

let input = []

rl.on("line", function(line){
	input = line.split(' ').map((el) => parseInt(el));
	rl.close();
})

rl.on("close", function(){
	let A = input[0];
	let B = input[1];
	let C = input[2];

	test1(A, B, C);
})

function test1(A, B, C){
	const t1 = (A+B)%C;
	const t2 = ((A%C)+(B%C))%C;
	const t3 = (A*B)%C;
	const t4 = ((A%C)*(B%C))%C;
	console.log(t1);
	console.log(t2);
	console.log(t3);
	console.log(t4);
}