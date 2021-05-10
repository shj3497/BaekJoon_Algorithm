// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 
// 당신은 그들에게 슬픈 진실을 알려줘야 한다.

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on('line', function(line){
	input.push(line.split(' '));
}).on('close', function(){
	// console.log(input);
	// 턱걸이 제외
	const case_num = parseInt(input[0]);

	for(let i=1; i< input.length; i++){

		let score_sum = 0;
		let score_average = 0;
		let student_count = 0;
		let average_percent = 0;

		let student_num = parseInt(input[i][0]);

		for(let j=1; j< input[i].length; j++){
			score_sum = score_sum + parseInt(input[i][j]);
		}
		score_average = score_sum/student_num;
		// console.log(score_average);

		for(let j=1; j< input[i].length; j++){
			if(input[i][j] > score_average){
				student_count++;
			}
		}
		average_percent = ((student_count/student_num)*100).toFixed(3);
		console.log(`${average_percent}%`);
	}
})