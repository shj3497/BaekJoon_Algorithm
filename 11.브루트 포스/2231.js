// 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 
// 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 
// 예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 따라서 245는 256의 생성자가 된다. 
// 물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 
// 반대로, 생성자가 여러 개인 자연수도 있을 수 있다.
// 자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
rl.on('line', line => {
  input = line.split(' ').map(item => parseInt(item));
}).on('close', () => {
  const num = input[0];
  // 자연수의 범위 100만을 초기값으로 설정
  let min_result = 1000000;

  for(let i=1; i<=num; i++){
    // for문을 사용하여 현재숫자를 쪼개서 배열에 저장한다.
    const temp_arr = String(i).split('');

    // 배열에 저장된 숫자를 더해준다.
    // ex) i = 198 >> 1 + 9 + 8 = 18
    let count = 0;
    temp_arr.map(item => {
      count = count + parseInt(item);
    })

    // num과 비교해주기 위한 변수
    // ex) 198 + 18 = 216
    const result = count + i;

    if(result === num){
      // 최솟값 찾아주기
      if(i < min_result){
        min_result = i;
      }
    }
  }

  // 답이 없으면 min_result은 초기값 일것이다. 0을 출력
  if(min_result === 1000000){
    console.log(0);
  }else{
    console.log(min_result)
  }
})