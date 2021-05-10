// "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 
// 예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on('line', function(line){
	input.push(line.split(''));
}).on('close', function(){
	
	const case_num = parseInt(input[0]);

	for(let i=1; i< input.length; i++){
		
		let case_score = 0;
		let case_sum = 0;

		for(let j=0; j< input[i].length; j++){
			// console.log(input[i][j]);
			if(input[i][j] === 'O'){
				case_score ++;
				case_sum = case_sum + case_score;
			}else{
				case_score = 0;
			}
		}
		console.log(case_sum);
		case_sum = 0;
		case_score = 0;
	}
})