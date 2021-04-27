// 시험 점수를 입력받아 90 ~ 100점은 A, 
// 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 
// 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

const readline = require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

let input = [];

rl.on('line', function(line){
	input = line.split(' ');
	rl.close();
})

rl.on('close', function(){
	let A = parseInt(input[0]);

	test(A);
})

function test(A){
	if(A < 60){
		console.log('F');
	}else if(A < 70){
		console.log('D');
	}else if(A < 80){
		console.log('C');
	}else if(A < 90){
		console.log('B');
	}else if(A <= 100){
		console.log('A');
	}
}