// 5Kg, 3Kg으로 배달봉지를 최소로 하여 배달
// 만약 정확하게 N킬로그램을 만들 수 없다면 -1을 반환한다.
// 첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', (line) => {
  input = line.split(' ');
}).on('close', () => {
  let numFix = parseInt(input[0]);
  const quotient = Math.floor(numFix/5);
  let result_arr = [];
  let min_num = 5000;
  
  for(let i=0; i<=quotient; i++){
    let num = numFix;
    let count = 0;

    num = num - 5*i;
    if(num % 3 === 0){
      count = count + i + (num/3);
    }
    result_arr.push(count);
  }
  // console.log(result_arr);
  
  result_arr.map(item => {
    if(item === 0){
      return;
    }
    if(item < min_num){
      min_num = item;
    }
  })
  if(min_num === 5000){
    console.log('-1');
  }else{
    console.log(min_num);
  }
})
