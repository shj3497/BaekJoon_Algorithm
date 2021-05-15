// N개의 숫자가 공백 없이 쓰여있다. 
// 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(''));
}).on('close', () => {
  
  let result = 0;
  input[1].map(number => {
    result = result + parseInt(number);
  })
  console.log(result);
})