// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
// N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. 
// N이 1인 경우 아무것도 출력하지 않는다.

// 소수를 정해진 범위까지 미리 구하고 계산해보자.
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
  let result_arr = [];
  let result = "";

  // 2부터 N까지의 소수를 배열에 push한다.
  for(let i=2; i<=N; i++){
    // 2를 제외한 2의배수는 소수일리가 없으므로 반복문 탈출
    if(i % 2 === 0){
      if(i !== 2){
        continue;
      }
    }
    let bool = true;
    for(let j=2; j<=i; j++){
      if(bool){
        if(i % j === 0){
          if(i === j){
            result_arr.push(i);
          }else{
            bool = false;
          }
        }
      }
    }
  }
  
  // N까지 소수로만 이루어진 배열에서 소인수분해
  result_arr.map(num => {
    let bool = true;
    do{
      if(N % num === 0){
        N = N / num;
        result = result + `${num}` + '\n';
      }else{
        bool = false;
      }
    }while(bool)
  })
  console.log(result);
})