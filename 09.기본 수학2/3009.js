// 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.
// Object로 풀어봤다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', line => {
  input.push(line.split(' ').map(item => parseInt(item)))
}).on('close', () => {
  const obj = {x:{}, y:{}};
  
  for(let i=0; i<input.length; i++){
    if(obj.x[input[i][0]] === undefined){
      obj.x[input[i][0]] = 1;
    }else{
      obj.x[input[i][0]]++;
    }

    if(obj.y[input[i][1]] === undefined){
      obj.y[input[i][1]] = 1;
    }else{
      obj.y[input[i][1]]++;
    }
  }
  // console.log(obj);

  const value_x = Object.values(obj.x);
  const value_y = Object.values(obj.y);

  const getKeybyValue = (object, value) => {
    const keys = Object.keys(object);
    const result = keys.find(key => object[key] === value);
    return result;
  }

  let find_x = getKeybyValue(obj.x, 1);
  let find_y = getKeybyValue(obj.y, 1);

  console.log(`${find_x} ${find_y}`)
})