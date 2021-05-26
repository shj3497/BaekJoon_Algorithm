// A : 고정비용(임대료, 재산세, 보험료, 급여) 
// B : 가변비용(재료비, 인건비)
// C : 노트북가격
// 일반적으로 생산 대수를 늘려 가다 보면 어느 순간 총 수입(판매비용)이 총 비용(=고정비용+가변비용)보다 
// 많아지게 된다. 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 지점을 
// 손익분기점(BREAK-EVEN POINT)이라고 한다.

// A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  
  const fix = parseInt(input[0]); // 고정비용
  const unfix = parseInt(input[1]); // 가변비용
  const price = parseInt(input[2]); // 노트북가격

  if(unfix >= price){
    console.log('-1');
  }else{
    // Math.floor() : 내림
    console.log(Math.floor(fix / (price-unfix) + 1));
  }
})