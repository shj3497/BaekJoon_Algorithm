// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
// N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. 
// N이 1인 경우 아무것도 출력하지 않는다.

// 소수를 판별하는 방법을 바꿔보자..
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input = line.split(' ');
}).on("close", () => {
  const N = parseInt(input[0]);

  const main_arr = main(N);
  let temp_N = N;
  main_arr.map(num => {
    let bool = true;
    do{
      if(temp_N % num === 0){
        temp_N = temp_N / num;
        console.log(num);
      }else{
        bool = false;
      }
    }while(bool)
  })
});

// 에라토스테네스의 체를 사용하여 N까지의 소수 배열 리턴
function main(N){
  let temp_arr = new Array(N).fill(true);
  let prime_arr = [];
  let result_arr = [];

  // 에라토스테네스의 체를 사용
  for(let i=2; i<=Math.ceil(Math.sqrt(N)); i++){
    let bool = true;
    for(let j=2; j<=i; j++){
      if(bool){
        if(i % j === 0){
          if(i === j){
            prime_arr.push(i);
          }else{
            bool = false;
          }
        }
      }
    }
  }
  prime_arr.map(num => {
    for(let i=num; i<=N; i++){
      if(i!==num){
        if(i%num === 0){
          if(temp_arr[i-1]){
            temp_arr[i-1] = false;
          }
        }
      }
    }
  })
  temp_arr[0] = false;
  // console.log(temp_arr);
  temp_arr.map((bool, index) => {
    if(bool){
      result_arr.push(index+1);
    }
  })

  return result_arr;
}