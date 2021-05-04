const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = []

rl.on('line', function(line){
	input = line.split(' ');
}).on('close', () => {
	let num = parseInt(input[0]);
	
	let bool = true;
	let cycle = 0;
	let step = 0;
	let temp = num;

	while(bool){
		cycle++;

		if(temp < 10){
			step = temp%10;
		}else{
			step = Math.floor(temp/10) + (temp % 10);
		}

		temp = String(temp%10) + String(step%10);
		temp = parseInt(temp);
		if(temp === num){
			bool = false;
		}
	}	
	console.log(cycle);
})