// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', line => {
  input = line.split(' ').map(item => parseInt(item));
}).on('close', () => {
  const num = input[0];
  const result = factorial(num);
  console.log(result);
})

function factorial(number){
  if(number === 0){
    return 1;
  }

  if(number < 2){
    return number;
  }

  return factorial(number - 1) * number;
}