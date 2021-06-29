// 하노이탑
// 너무어렵다.. 재귀함수를 조건에 따라 두번 호출하는게 너무 복잡하다.
// 손으로 예상 출력 써나가면서 풀어보았는데도 복잡하다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];
let result = [];
let count = 0;

rl.on('line', line => {
  input = line.split(' ').map(item => parseInt(item));
}).on('close', () => {
  const num = input[0];
  
  hanoi(num, '1', '2', '3');
  console.log(count);
  console.log(result.map((arr) => arr.join(' ')).join('\n'));
})

function hanoi(num, from, other, to){
  if(num === 0){
    return;
  }

  hanoi(num-1, from, to, other);

  result.push([from, to]);
  count++;

  hanoi(num-1, other, from, to); 
}