// č	c=
// ć	c-
// dž	dz=
// đ	d-
// lj	lj
// nj	nj
// š	s=
// ž	z=
// 입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input = line.split(' ')
}).on('close', () => {
  // console.log(input);
  let croaWord = input[0];
  let count = 0;
  let croaChar = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

  // replace 함수에서와 같이 사용하되, 따옴표를 / 슬래시로 대체하고, 
  // 뒤에 gi 를 붙이면 replaceAll() 과 같은 기능을 한다.


  croaChar.map(char => {
    if(croaWord.includes(char)){
      count++;
      // croaWord = croaWord.replaceAll(char, count);
      croaWord = croaWord.split(char).join(count);
    }
  })
  
  console.log(croaWord.split('').length);
})
// JavaScript에서는 replaceAll이라는 함수가 없으므로 String클래스에 메소드를 추가하여 바꿔주었다.
String.prototype.replaceAll = function(org, dest){
  return this.split(org).join(dest);
}