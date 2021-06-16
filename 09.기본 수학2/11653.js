// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
// N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. 
// N이 1인 경우 아무것도 출력하지 않는다.

// 소수를 판별하면서 나눠보았다.
// 시간초과... 시간초과 예제 : 9,999,991(소수)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  let N = parseInt(input[0]);
  let result = "";

  // i는 소수여야한다.
  for(let i=2; i<=N; i++){
    let bool = true;
    for(let j=2; j<=i; j++){
      if(i%j === 0){
        if(i === j){
          // 현재 i는 소수이므로 N을 나눠주면 된다.
          do{
            if(N % i === 0){
              N = N / i;
              result = result + `${i}` + '\n';
            }else{
              bool = false;
            }
          }while(bool)
        }
      }
    }
  }
  console.log(result);
})