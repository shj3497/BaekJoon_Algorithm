// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.
// 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
// S에는 QR Code "alphanumeric" 문자만 들어있다.

// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
let input = []
rl.on('line', line=>{
  input.push(line.split(' '))
}).on('close', () => {

  for(let i=0; i<input.length; i++){
    const result = [];
    const num = parseInt(input[i][0]);

    if(input[i][1] === undefined || input[i][1] === null ){
      continue;
    }
    const text = input[i][1].split('');

    text.map(char => {
      result.push(char.repeat(num));
    })
    console.log(result.join(''));
  }
})