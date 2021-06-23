// 골드바흐의 추측
// 2보다 큰 모든 짝수는 두 소스의 합으로 나타낼 수 있다.
// 2보다 큰 짝수 n이 주어졌을때, n의 골드바흐 파티션을 출력하는 프로그램을 작성하시오.
// 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고 짝수 n이 주어진다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' ').map(item => parseInt(item)));
}).on('close', () => {

  const prime_arr = prime(10000);
  input.map(num => {
    const number = num[0];
    if(number % 2 === 0){
      const result_arr = main(number, prime_arr);
      
      let result = '';
      result_arr.map(item => {
        result = result + item + ' ';
      })
      console.log(result);
    }
  })
  
})

function main(num, prime_arr){
  
  let result = [];
  let min_distance = num;
  prime_arr.map(item => {
    let distance1 = num - item;
    let distance2 = num - distance1;

    if(item < num){
      if(prime_arr.includes(distance1)){
        if(distance1-distance2 >= 0 && distance1-distance2 < min_distance){
          min_distance = distance1-distance2;
          result[0] = distance2;
          result[1] = distance1;
        }
      }
    }else{
      return;
    }
  })
  return result;
}

function prime(N){
  let temp_arr = new Array(N).fill(true);
  let sqrt_prime_arr = []
  let prime_arr = [];

  for(let i=2; i<=Math.floor(Math.sqrt(N)); i++){
    let bool = true;
    for(let j=2; j<=i; j++){
      if(bool){
        if(i % j === 0){
          if(i === j){
            sqrt_prime_arr.push(i);
          }else{
            bool = false;
          }
        }
      }
    }
  }
  
  sqrt_prime_arr.map(num => {
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
  
  temp_arr.map((bool, index) => {
    if(index+1 >= 2){
      if(bool){
        prime_arr.push(index+1);
      }
    }
  })
  return prime_arr;
}