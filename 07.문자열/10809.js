// 알파벳 소문자로만 이루어진 단어 S가 주어진다. 
// 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 
// 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = [];

rl.on('line', line => {
  input = line.split('');
}).on('close', () => {
  const result = [];

  // 소문자만 포함되어 있다고 하여 ascii코드넘버로 for문 적용
  for(let i='a'.charCodeAt(); i<= 'z'.charCodeAt(); i++){
    // indexOf가 해당 문자열의 위치를 반환해주니까..
    // indexOf는 string뿐만 아니라 array에서도 사용
    result.push(input.indexOf(String.fromCharCode(i)));
  }
  
  console.log(result.join(' '));
})