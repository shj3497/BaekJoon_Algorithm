// 프로그램은 표준 입력에서 입력 데이터를 받는다. 
// 프로그램의 입력은 T 개의 테스트 데이터로 이루어져 있는데 T 는 입력의 맨 첫 줄에 주어진다. 
// 각 테스트 데이터는 한 행으로서 H, W, N, 세 정수를 포함하고 있으며 각각 호텔의 층 수, 
// 각 층의 방 수, 몇 번째 손님인지를 나타낸다(1 ≤ H, W ≤ 99, 1 ≤ N ≤ H × W). 
// 방 번호는 YXX 나 YYXX 형태

const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' '));
}).on('close', () => {
  for(let i=1; i<input.length; i++){
    const height = parseInt(input[i][0]);
    const width = parseInt(input[i][1]);
    const numFixed = parseInt(input[i][2]);

    let num = numFixed;
    let bool = true;
    let Y = 1; // 방번호에서 층
    let XX = 1; // 방번호에서 호수
    let result = 0;

    do{
      if(num - height > 0){
        XX++;
        num = num - height;
      }else{
        result = num*100 + XX;
        bool = false;
      }
    }while(bool);
    console.log(result);
  }
})