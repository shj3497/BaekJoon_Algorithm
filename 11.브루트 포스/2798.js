
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' ').map(item => parseInt(item)));
}).on('close', () => {
  
  const caseNum = input[0][1];
  const caseArray = input[1];
  let maxSum = 0;

  for(let i=0; i < caseArray.length; i++){
    for(let j=i+1; j < caseArray.length; j++){
      for(let k=j+1; k < caseArray.length; k++){
        if(i!==j && i!==k && j!==k){
          let sum = caseArray[i] + caseArray[j] + caseArray[k];
          if(sum <= caseNum){
            if(sum > maxSum){
              maxSum = sum;
            }
          }
        }
      }
    }
  }
  console.log(maxSum);
})