// 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에
//  0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

// 예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 
// 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on('line', function(line){
	input.push(line);
}).on('close', function(){

	let result = '';
	let num = 1;
	let number = ['0','1','2','3','4','5','6','7','8','9']
	let num_array=[];
	let count=0;

	for(let i=0; i< input.length; i++){
		num = num * parseInt(input[i]);
	}

	num_array = String(num).split('');

	for(let i=0; i<number.length; i++){
		count = 0;

		for(let j=0; j<num_array.length; j++){
			if(number[i] === num_array[j]){
				count ++;
			}
		}
		result = result + count + '\n';
	}

	console.log(result);
})
