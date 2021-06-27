// 피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다.
// 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
// 이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
// n=17일때 까지 피보나치 수를 써보면 다음과 같다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
// n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', line => {
  input = line.split(' ').map(item => parseInt(item));
}).on('close', () => {
  const num = input[0];
  const result = fibonacci(num);
  console.log(result);
})

const fibonacci = (number) => {

  if(number === 0){
    return 0;
  }

  if(number === 1){
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}