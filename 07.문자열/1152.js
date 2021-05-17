// 영어 대소문자와 띄어쓰기만으로 이루어진 문자열이 주어진다. 
// 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 
// 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

// 첫 줄에 영어 대소문자와 띄어쓰기로 이루어진 문자열이 주어진다. 
// 이 문자열의 길이는 1,000,000을 넘지 않는다. 
// 단어는 띄어쓰기 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 
// 또한 문자열의 앞과 뒤에는 공백이 있을 수도 있다.


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  // console.log(input);
  const sentence = new Object();

  for(let i=0; i<input.length; i++){
    if(input[i].length > 0){ // 공백은 제거
      if(sentence[input[i]] === undefined){
        sentence[input[i]] = 1;
      }else{
        sentence[input[i]]++;
      }
    }
  }
  
  const sentence_value = Object.values(sentence);
  let result = 0;
  sentence_value.map(value => {
    result = result + value;
  });
  console.log(result);
})