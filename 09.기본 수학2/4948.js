// 베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.
// 이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.
// 예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)
// 자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오. 

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' ').map(item => parseInt(item)));
}).on('close', () => {
  const prime_arr = prime(123456);
  
  let result;
  input.map(num => {
    if(num != 0){
      result = main(num, prime_arr);
      console.log(result);
    }
  })
})

function main(number, prime_array){
  let count = 0;
  prime_array.map(num => {
    if(number < num && num <= number*2){
      count++;
    }else{
      return;
    }
  })
  return count;
}

function prime(N){
  let temp_arr = new Array(2*N).fill(true);
  let sqrt_prime_arr = []
  let prime_arr = [];

  for(let i=2; i<=Math.floor(Math.sqrt(2*N)); i++){
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
    for(let i=num; i<=2*N; i++){
      if(i!==num){
        if(i%num === 0){
          if(temp_arr[i-1]){
            temp_arr[i-1] = false;
          }
        }
      }
    }
  })
  // temp_arr[0] = false;
  
  temp_arr.map((bool, index) => {
    if(index+1 >= 2){
      if(bool){
        prime_arr.push(index+1);
      }
    }
  })

  return prime_arr;
}