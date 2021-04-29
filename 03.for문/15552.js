
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = '';

rl.on('line', function(line){
  
  const input = line.split(' ');
  
  if(input.length === 2) {

    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A+B + '\n';

  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})

// Node.js의 경우 매번 console.log로 출력하면 시간초과를 받아서, 
// 하나의 문자열에 결과값을 저장해서 마지막에 출력
// marco2520332님 풀이