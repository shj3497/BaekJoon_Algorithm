// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 
// 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = [];

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {

  const ascii_text = input[0].charCodeAt(0);
  console.log(ascii_text);
})