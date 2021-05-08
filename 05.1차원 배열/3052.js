// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 
// 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 

// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 
// 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input =[];

rl.on('line', function(line){
	input.push(line);
}).on('close', function(){

	let num_array = [];
	
	let count = 0;

	for(let i=0; i< input.length; i++){
		let result = parseInt(input[i]) % 42
		num_array.push(result);
	}

// JavaScript에서 Set 객체를 이용하면 중복 없는 데이터를 표현할 수 있다.
// 1. Set();
	const set = new Set(num_array);
	const uniqueArr = [...set];

	console.log(uniqueArr.length);

// 2. filter(), indexOf();
	// const uniqueArr = num_array.filter((element, index) => {
	// 	return num_array.indexOf(element) === index;
	// });
	// console.log(uniqueArr.length)
})