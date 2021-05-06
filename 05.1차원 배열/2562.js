// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 
// 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

let input=[]

rl.on('line', function(line){
	input.push(line)
}).on('close', function(){
	
	const len = input.length;
	let max = parseInt(input[0]);
	let max_len = 0;

	for(let i=0; i<len; i++){
		if(max < parseInt(input[i])){
			max = parseInt(input[i]);
			// max_len = i + 1; 로 하고, 하단에 console.log(max_len)을 하면 틀렸습니다라고 뜬다. 주의!
			max_len = i;
		}
	}
	console.log(max);
	console.log(max_len + 1);
})