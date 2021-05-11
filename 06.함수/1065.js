// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 
// 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
// N이 주어졌을 때, 1보다 크거나 같고, 
// N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
/**
 * ex) 110 >> 99
 * 1~9 9
 * 10~19 not 11
 * ..
 * 90~99 90
 * 99
 * 
 * ex) 210 >> 105
 * 111, 123, 135, 147, 159,
 * 
 * 210
 * 
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = [];

rl.on('line', function(line){
  input = line.split(' ');
}).on('close', function(){

  let num = parseInt(input[0]);

  // 문제가 1000이하이다.
  let num_split1 = input[0].charAt(0);
  
  let count = 0;

  if(num <= 100){
    count = count + num;
  }else if(num<1000){
    count = 99;
    for(let i=1; i <= num_split1; i++){
      for(let j=0; j <= 9; j++){
        let num_split2 = i + j;
        let num_split3 = num_split2 + j;
        // 각 자리수가 하나라도 10보다 커지면 안되므로 or연산자
        if(num_split2 >= 10 || num_split3 >= 10){
          
        }else{
          let check_num = String(i).concat(num_split2).concat(num_split3);
          if(check_num <= num){
            // console.log(check_num);
            count++;
          }
        }
      }
    } 
    // console.log('---------');
    for(let i=num_split1; i>0; i--){
      // j=0부터라면 111,222,333이 중복된다.
      for(let j=1; j<=9; j++){
        let num_split2 = i - j;
        let num_split3 = num_split2 - j;
        // 각 자리수가 하나라도 0보다 작아지면 안되므로 or연산자
        if(num_split2 < 0 || num_split3 < 0){
          
        }else{
          let check_num = String(i).concat(num_split2).concat(num_split3);
          
          if(check_num <= num){
            // console.log(check_num);
            count++;
          }
        }
      }
    }
  }else if(num === 1000){
    count = count + 144;
  }
  console.log(count);
})

function test(num, num_split1){
  let count = 99;
    for(let i=1; i <= num_split1; i++){
      for(let j=0; j <= 9; j++){
        let num_split2 = i + j;
        let num_split3 = num_split2 + j;
        // 각 자리수가 하나라도 10보다 커지면 안되므로 or연산자
        if(num_split2 >= 10 || num_split3 >= 10){
          
        }else{
          let check_num = String(i).concat(num_split2).concat(num_split3);
          if(check_num <= num){
            // console.log(check_num);
            count++;
          }
        }
      }
    } 
    // console.log('---------');
    for(let i=num_split1; i>0; i--){
      // j=0부터라면 111,222,333이 중복된다.
      for(let j=1; j<=9; j++){
        let num_split2 = i - j;
        let num_split3 = num_split2 - j;
        // 각 자리수가 하나라도 0보다 작아지면 안되므로 or연산자
        if(num_split2 < 0 || num_split3 < 0){
          
        }else{
          let check_num = String(i).concat(num_split2).concat(num_split3);
          
          if(check_num <= num){
            // console.log(check_num);
            count++;
          }
        }
      }
    }
    return count;
}
/**
 * n이 1~99까지라면 count는 n이다.
 * 
 * n이 100이상의 수라면, 
 * 첫째자리수를 1부터 시작해서, 첫째자리수까지 반복하여
 * 첫째자리수에서 n만큼 더한수를 둘째자리,
 * 둘째자리수에서 n만큼 더한 수를 셋째자리
 * 셋째자리수에서 n만큼 더한 수를 넷째자리수로 해서
 * 만들어진 수가 num보다 작거나 같으면 count++
 * 하지만 각 자리수에서 10이 넘어가는경우가 생긴다면 종료;
 * 
 * 첫째자리수에서 n만큼을 뺀 수를 둘째자리,
 * 둘째자리수에서 n만큼을 뺀 수를 셋째자리,
 * 셋째자리수에서 n만큼을 뺀 수를 넷째자리로 해서
 * 만들어진 수가 
 * 하지만 각 자리수에서 0보다 작아지는 경우가 생긴다면 종료;
 */