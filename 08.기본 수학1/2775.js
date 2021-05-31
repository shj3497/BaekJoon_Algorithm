// a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 
// 사람들을 데려와 살아야 한다.
// 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 
// 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.
// 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
// 1 ≤ k, n ≤ 14


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(line.split(''));
}).on('close', () => {  
  const T = parseInt(input.shift());
  for(let i=0; i<T; i++){
    const k = parseInt(input.shift());
    const n = parseInt(input.shift());
    const result = now(k, n);
    console.log(result);
  }
})

// 입력받은 k층 n호 에 따라 함수 실행
function now(k, n){
  let prev_floor = []
  let current_floor = [];  
  let result = 0;

  // k층의 n호수 인구를 구하기 위해선 이전층의 1호수부터 n호수까지의 합이므로
  // 0층의 n호수 만큼의 배열 생성
  for(let i=1; i<=n; i++){
    current_floor.push(i);
  }

  // k층 (k>=1)
  for(let j=1; j<=k; j++){
    prev_floor = [...current_floor];
    current_floor = [];
    current_floor = population(prev_floor);
  }
  // console.log(`${k}층`);
  // console.log(current_floor);
  result = current_floor[n-1]
  return result;
}

// 이전층의 배열을 받아서 현재층의 배열을 리턴한다.
function population(prev_floor){
  let sum1 = 0;
  let current_floor = [];
    for(let i=0; i < prev_floor.length; i++){
      let num1 = prev_floor[i];
      sum1 = sum1 + num1;
      current_floor.push(sum1);
    }
  return current_floor;
}


// 예제 : 2 1 3 2 3

// 1 5 15 35 70 126
// 1 4 10 20 35 56 74 ...
// 1 3  6 10 15 21 28 36 45 55
// 1 2  3  4  5  6  7  8  9  10