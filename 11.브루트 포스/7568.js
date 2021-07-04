
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' ').map(item=> parseInt(item)));
}).on('close', () => {

  let result_Array = []
  for(let i=1; i< input.length; i++){
    let counter = 1;
    for(let j=1; j< input.length; j++){
      if(i !== j){
        if(input[i][0] < input[j][0] && input[i][1] < input[j][1]){
          counter++;
        }
      }
    }
    result_Array.push(counter);
  }
  // console.log(result_Array);
  console.log(result_Array.join(' '))
})