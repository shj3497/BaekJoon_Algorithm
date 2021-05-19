/*
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
	472		(1)
  385		(2)
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
	input.push(line);
}).on("close", function(){
	
	let num1 = parseInt(input[0]);
	let num2 = parseInt(input[1]);
	let num3 = 1;
	let result=0;
	const num_array = [];

	for(let i=input[1].length-1; i>=0; i--){
		num_array.push(num1 * parseInt(input[1].charAt(i)));
	}
	
	num_array.map(item => console.log(item));

	for(let i=0; i<num_array.length; i++){
		result = result + (num3*num_array[i]);
		num3 = num3*10;
	}
	console.log(result);
})