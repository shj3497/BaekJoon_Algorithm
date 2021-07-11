
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', line => {
  input = line.split(' ').map(item => parseInt(item));
}).on('close', () => {
  
  let num = input[0];
  let six = 666;
  let count = 1;
  
  while(count !== num){
    six++;
    if(String(six).includes('666')){
      count++;
    }
  }
  console.log(six);
})