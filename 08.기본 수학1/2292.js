// 1,7,19,37... 6,12,18  >> 1+6(n-1);
// x = 

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];
rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  
  const num = parseInt(input[0]);
  let An = 1;
  let min_num = 0;
  let max_num = 0;

  if(num > 1){
    for(let i=2; i<=1000000000; i++){
    
      min_num = An + 1;
      An = An + 6*(i-1);
      max_num = An;
      // console.log(`min_num: ${min_num}, max_num: ${max_num}`);
  
      if(min_num <= num && num <= max_num){
        console.log(i);
        break;
      }
    }  
  }else{
    console.log('1');
  }
})