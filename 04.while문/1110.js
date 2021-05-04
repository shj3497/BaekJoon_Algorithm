// 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 
// 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
 // 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 
 // 다음 예를 보자.

// 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 
// 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 
// 새로운 수는 26이다.

// 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input= []
let B=[[]]
rl.on('line', function(line){
	input = line.split(' ');
}).on('close', function(){
	
	let bool = true;
	let result;
	let firstNum = input[0];
	let sum = ''
	let i=0;
	while(bool){
		let A = input[i];
		B[i] = A.split('');
		sum = parseInt(B[i][0]) + parseInt(B[i][B[i].length -1])
		B[i].push(String(sum).split(''));
		result = B[i][1] + B[i][B[i].length -1][B[i][B[i].length-1].length -1];

		if(firstNum === result){
			bool=false;
		}else{ 
			i++;
			input.push(String(result));
		}
	}
	// console.log(B);

	// i가 0번째부터 시작하므로 최종 결과 횟수를 출력하기 위해서는 +1을 해서 출력해햐안다.
	console.log(i+1); 
	

})