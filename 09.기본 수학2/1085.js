const readline =require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', line => {
  input = line.split(' ').map(item => parseInt(item))
}).on('close', () => {
  
  const x = input[0];
  const y = input[1];
  const w = input[2];
  const h = input[3];

  const case_1 = w-x;
  const case_2 = x-0;

  const case_3 = h-y;
  const case_4 = y-0;

  let case_x;
  let case_y;
  if(case_1 >= case_2){
    case_x = case_2;
  }else{
    case_x = case_1;
  }

  if(case_3 >= case_4){
    case_y = case_4;
  }else{
    case_y = case_3;
  }

  if(case_x >= case_y){
    console.log(case_y);
  }else{
    console.log(case_x);
  }
  
})