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

  // const A = BigInt(input[0]);
  // const B = BigInt(input[1]);
  // const result = A + B;
  // console.log(result.toString());
  
  // 문자열로 입력받은 큰수를 쪼개서 배열에 넣은것을 순서를 바꿔주었다.
  // 이유 : 배열의 요소를 뽑아서 더할것이기 때문에 1의자리 숫자가 배열 0번째에 오도록!
  const A = input[0].split('').map(item => parseInt(item)).reverse();
  // console.log(A);
  const B = input[1].split('').map(item => parseInt(item)).reverse();
  // console.log(B);

  // 자리수 맞춰주기!
  if(A.length !== B.length){
    if(A.length > B.length){
      for(let i=B.length; i<A.length; i++){
        B.push(0);
      }
    }else if(A.length < B.length){
      for(let i=A.length; i<B.length; i++){
        A.push(0);
      }
    }
  }

  let sum_arr = [];
  let result = ''
  
  // 첫번째 입력받은 숫자가 두번째 입력받은 숫자보다 큰경우
  for(let i=0; i<A.length; i++){
    let sum = 0;

    if(B[i] === undefined){
      B[i] = 0;
    }
    
    if(sum_arr[i] === undefined){
      sum_arr[i] = 0;
    }

    sum = A[i] + B[i] + sum_arr[i];
    
    if(sum >= 10){
      sum_arr[i] = sum - 10;
      sum_arr[i+1] = 1;
    }else{
      sum_arr[i] = sum;
    }
  }
  // console.log(sum_arr);  
  sum_arr = sum_arr.reverse()
  
  sum_arr.map(item => {
    result = result + `${item}`;
  })
  console.log(result);
})