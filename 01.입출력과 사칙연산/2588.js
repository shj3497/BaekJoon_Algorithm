/*
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
	472		(1)
  * 385		(2)
----------
 	2360	(3)
   3776		(4)
  1416		(5)
---------- 
  181720	(6)

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 
(3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
*/
const readline = require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

let input = []

rl.on("line", function(line){
	input = line.split(' ');
	rl.close();
})

rl.on("close", function(){
	let A = parseInt(input[0]);
	let B = input[1];

	test(A, B);
})

function test(A, B){
	
	let len_B = B.length;
	let C = []; // 마지막 곱셈의 합을 더하기 위해 배열을 만들어주었다.
	for(let i=len_B; i>0; i--){
		
		let char_B = parseInt(B.charAt(i-1));
		let zero_repeat = '0'.repeat(len_B - i)
		
		// console.log(zero_repeat);

		let math_test = A * char_B;

		C.push(math_test + zero_repeat);

		console.log(math_test);
	}

	let C_sum = 0;
	for(let j=0; j<C.length; j++){
		C_sum = C_sum + parseInt(C[j]);
	}
	console.log(C_sum);
}