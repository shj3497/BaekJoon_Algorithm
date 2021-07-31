const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = [];

rl.on('line', line => {
  input.push(Number(line.split(' ').join()));
}).on('close', () => {

  const inputLength = input[0];
  input.shift()

  // sortArray를 구하는 과정에서 시간을 잡아먹는 것 같다.
  // 시간초과
  let sortArray = input.sort((a, b) => a-b);

  //? 중위값 
  const median = sortArray[(inputLength-1)/2];

  //? 평균
  let sum = 0;
  sortArray.map(item => {
    sum = sum + item;
  })
  const average = Math.round(sum / inputLength);

  //? 최빈값 
  let mode = 0;
  let maxCount = 0;
  let maxArr = [];
  for(let i=0; i<inputLength; i++){
    let count = sortArray.filter(num => num === sortArray[i]).length;
    
    if(maxCount < count){
      maxCount = count
      maxArr = [sortArray[i]]
    }else if(maxCount === count){
      maxArr.push(sortArray[i]);
    }
  }

  // 배열에 있는 중복요소 제거
  maxArr = [...new Set(maxArr)]
  
  mode = maxArr.length === 1 ? maxArr[0] : maxArr[1];


  //? 범위 : 최댓값 - 최솟값
  const range = sortArray[inputLength-1] - sortArray[0];

  console.log(average);
  console.log(median);
  console.log(mode);
  console.log(range);
})