
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input;
rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  
  const num = parseInt(input[0]);
  let x = 1;
  let y = 1;
  let count = 1;
  
  for(let i=1; i<10000000; i++){
    if(x === 1){
      if(count === num){ // 입력받은 숫자가 1일때는 반복문 바로 탈출
        break;
      }
      y++;
      count++;
      for(let j=y; j>1; j--){
        if(count === num){
          break;
        }
        x = x + 1;
        y = y - 1;
        count++;
      }
    }else if(y === 1){
      x++;
      count++;
      for(let j=x; j>1; j--){
        if(count === num){
          break;
        }
        x = x - 1;
        y = y + 1;
        count++;
      }
    }if(count === num){
      break;
    }
  }

  console.log(`${x}/${y}`)
})
