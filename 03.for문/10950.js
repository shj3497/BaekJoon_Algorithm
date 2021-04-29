// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []

rl.on('line', function(line){
	input.push(line);
	// console.log(input)
}).on('close', function(){

	let numbers = [];
	

	for(let i = 0; i < input.length; i++){
		numbers.push(input[i].split(' '));
		
	}

	// console.log(numbers);
	for(let i=0; i< numbers.length; i++){
		if(numbers[i].length === 2){
			let num1 = parseInt(numbers[i][0]);
			let num2 = parseInt(numbers[i][1]);

			console.log(num1 + num2);
		}
	}

	process.exit();
})