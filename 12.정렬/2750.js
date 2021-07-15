
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' ').map(item => parseInt(item)));
}).on('close', () => {
  
  let result_array = []
  
  for(let i=1; i<input.length; i++){
    const num = input[i][0];
    result_array.push(num)
  }
  result_array.sort((a,b) => a-b).map(item => console.log(item));
})