// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 
// 각 문자가 연속해서 나타나는 경우만을 말한다. 
// 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고,
// kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, 
// aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  let count = 0;

  for(let i=1; i< input.length; i++){
    let word = input[i];
    const word_char = word.split('');
    let bool = false;

    // map은 break가 되지 않으므로 my_flag라는 boolean값과 
    // 조건문을 추가하여 break가 되는 지점을 만들어 주었다.
    // 'dldyddlwl'님의 조언
    let my_flag = false;

    // 각 단어의 문자의 처음나오는 f_index번호와, 마지막 l_index번호를 구해서
    // f_index와 l_index번호가 다르다면 f_index부터 l_index까지
    // 반복문을 통해 그 사이에 있는 문자가 현재 char인지 확인하여 판단한다.

    word_char.map(char => {
      
      const f_index = word.indexOf(char);
      const l_index = word.lastIndexOf(char);
      
      if(my_flag !== true){
        if(f_index !== l_index){
          for(let j=f_index; j<=l_index; j++){
            if(word.charAt(j) === char){
              bool = true;
            }else{
              bool = false;
              my_flag = true;
              break;
            }
          }
        }else{
          bool = true;
        }
      }
    })

    if(bool){
      count++;
    }
  }
  console.log(count);
})