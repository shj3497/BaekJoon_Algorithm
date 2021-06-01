// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 큰수 A + B

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => { 
  input = line.split(' ');
}).on('close', () => {

  const A = BigInt(input[0]);
  const B = BigInt(input[1]);
  const result = A + B;
  console.log(result.toString());
  
  // // 문자열로 입력받은 큰수를 쪼개서 배열에 넣은것을 순서를 바꿔주었다.
  // // 이유 : 배열의 요소를 뽑아서 더할것이기 때문에 1의자리 숫자가 배열 0번째에 오도록!
  // const A = input[0].split('').map(item => parseInt(item)).reverse();
  // // console.log(A);
  // const B = input[1].split('').map(item => parseInt(item)).reverse();
  // // console.log(B);

  // // 배열의 가장 마지막에 0을 추가한 이유
  // // ex) 500 + 501 = 1001 로 4자리수가 나오는데 각 배열은 3자리이기 때문에 0을 추가해주었다.
  // if(A.length === B.length){
  //   if(A[A.length-1] >= 5 && B[B.length-1] >= 5){
  //     A.push(0);
  //     B.push(0);
  //   }
  // }
  // let sum = 0;
  // let sum_arr = [];
  // let bool = false;
  // let result = ''
  
  // // 첫번째 입력받은 숫자가 두번째 입력받은 숫자보다 큰경우
  // if(A.length >= B.length){
  //   for(let i=0; i<A.length; i++){
      
  //     if(B[i] === undefined){
  //       B[i] = 0;
  //     }
      
  //     sum = A[i] + B[i];
      
  //     if(bool){
  //       sum = sum + 1;
  //     }

  //     if(sum >= 10){
  //       sum_arr.push(sum - 10);
  //       bool = true;
  //     }else{
  //       sum_arr.push(sum);
  //       bool = false;
  //     }
  //   }
  // }else{
  //   for(let i=0; i<B.length; i++){
      
  //     if(A[i] === undefined){
  //       A[i] = 0;
  //     }
      
  //     sum = A[i] + B[i];
      
  //     if(bool){
  //       sum = sum + 1;
  //     }

  //     if(sum >= 10){
  //       sum_arr.push(sum - 10);
  //       bool = true;
  //     }else{
  //       sum_arr.push(sum);
  //       bool = false;
  //     }
  //   }
  // }
  // sum_arr = sum_arr.reverse()
  // // console.log(sum_arr);
  // sum_arr.map(item => {
  //   result = result + `${item}`;
  // })
  // console.log(result);
})