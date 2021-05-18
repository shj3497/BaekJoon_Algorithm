
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input = line.split('');
}).on('close', () => {

  let totalTime = 0;
  let enString = [
    ['A','B','C'],
    ['D','E','F'],
    ['G','H','I'],
    ['J','K','L'],
    ['M','N','O'],
    ['P','Q','R','S'],
    ['T','U','V'],
    ['W','X','Y','Z']
  ]

  input.map(char => {
    for(let i=0; i<enString.length; i++){
      for(let j=0; j<enString[i].length; j++){
        if(char === enString[i][j]){
          totalTime = totalTime + (i+3)
        }
      }
    }
  })

  console.log(totalTime);

})