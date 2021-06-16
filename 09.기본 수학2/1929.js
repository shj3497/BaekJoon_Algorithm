// 에라토스테네스의 체로 풀어 봅시다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input = line.split(' ');
}).on("close", () => {
  const M = parseInt(input[0]);
  const N = parseInt(input[1]);
  let temp_arr = new Array(N).fill(true);
  let prime_arr = []

  for(let i=2; i<=Math.floor(Math.sqrt(N)); i++){
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
  // console.log(prime_arr);
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
    if(index+1 >= M){
      if(bool){
        console.log(index+1);
      }
    }
  })
});
