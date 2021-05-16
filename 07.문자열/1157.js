// 알파벳 대소문자로 된 단어가 주어지면,
// 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
// 단, 대문자와 소문자를 구분하지 않는다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input;

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  const word = input[0].toUpperCase().split('');
  let count = 0; // 객체에서 value값을 비교해주기 위한 변수
  let max_char;
  
  // 오브젝트로 하면? 키값에대한 벨류가 0으로 초기화 해놓고, 
  // word에 해당하는 키값에 value를 +1 해준다.

  const alphabet = new Object();


  for(let i='A'.charCodeAt(); i<='Z'.charCodeAt(); i++){
    alphabet[String.fromCharCode(i)] = 0;
  }

  for(let i=0; i<word.length; i++){
    alphabet[word[i]]++;
  }

  for(const [key, value] of Object.entries(alphabet)){
    // for문을 이용해서 key와 value를 가지고 
    // value가 count보다 크면 key값 출력
    if(count < value){
      max_char = key;
      count = value;
    }else if(count === value){
      // count가 value가 같다면 ?를 출력
      max_char = '?';
      count = value;
    }
  }
  // console.log(word);
  // console.log(alphabet);
  console.log(max_char);
})