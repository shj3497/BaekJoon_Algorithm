// 입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.
// M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.
// M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을,
// 둘째 줄에 그 중 최솟값을 출력한다. 

// 단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' '));
}).on('close', () => {
  const M = parseInt(input[0]);
  const N = parseInt(input[1]);
  
  let result_arr = [];

  for(let i=M; i<=N; i++){
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
  if(result_arr.length === 0){
    console.log('-1');
  }else{
    let result = 0;
    result_arr.map(item => {
      result = result + item;
    })
    console.log(result);
    console.log(result_arr[0]);
  }
  
})