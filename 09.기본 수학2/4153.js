
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' ').map((item) => parseInt(item)).sort((a,b) => {
    return a - b;
  }));
}).on('close', () => {
  
  for(let i=0; i<input.length; i++){
    
    let A =input[i][0];
    let B = input[i][1];
    let C = input[i][2];
  
    if(A !== 0 || B !== 0 || C !== 0){
      let result = A*A + B*B;
      if(result === C*C){
        console.log('right');
      }else{
        console.log('wrong');
      }
    }
  }
})