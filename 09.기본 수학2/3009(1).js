const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' ').map(item => parseInt(item)))
}).on('close', () => {
  let x_arr = [];
  let y_arr = [];
  input.map(item => {
    x_arr.push(item[0]);
    y_arr.push(item[1]);
  })
  
  const find_location = (array) => {
    let result = 0;
    array.map(num => {
      // filter는 배열에서 특정 조건에 부합하는 값들을 모아 새로운 배열로 리턴한다.
      let count = array.filter(element => num === element).length;
      if(count === 1){
        result = num;
      }
    })
    return result;
  }

  const find_x = find_location(x_arr);
  const find_y = find_location(y_arr);

  console.log(`${find_x} ${find_y}`)

})
