// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' '));
}).on('close', () => {
  const num_arr = input[1];
  let count = 0;
  num_arr.forEach(num => {
    let bool = true;
    for(let i=2; i<=parseInt(num); i++){
      if(bool){
        if(parseInt(num) % i === 0){
          if(i !== parseInt(num)){
            bool = false;
          }else{
            count++;
          }
        }
      }
    }
  })
  console.log(count);
})