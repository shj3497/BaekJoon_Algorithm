// 이전 작동시기에 k광년을 이동하였을 때는 k-1, k, k+1 광년만큼을 이동할 수 있다.
// 출발지점 x  도착지점 y
// y지점에 도착하기 바로 직전의 이동거리는 1광년
// (0 ≤ x < y < 231)
// 테스트케이스의 개수 T, 현재위치 x, 목표위치 y
// 각 테스트 케이스에 대해 x지점으로부터 y지점까지 정확히 도달하는데 
// 필요한 최소한의 공간이동 장치 작동 횟수 출력

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

rl.on('line', line => {
  input.push(line.split(' '));
}).on('close', () => {
  for(let i=1; i<input.length; i++){
    const x = parseInt(input[i][0]);
    const y  = parseInt(input[i][1]);

    let distance = y-x; // x와 y의 거리차이
    let speed = 1; // 처음 시작 속도 1광년
    let speed_arr = []; // 운항 노선들을 담는 배열
    let bool = true;

    /* 
      ex) 4 20 일경우 거리차이는 16이다.
      처음시작 속도는 무조건 1광년, 마지막 도착 속도도 1광년이여야한다.
      1 2 3 4 3 2 1 속도로 운행할 것이다. 여기서 힌트를 얻었다.
      x(y) >> x : 시작시 증가하는속도 y : 도착시 줄어드는 속도 
      1(1), 2(2), 3(3), 4 로 나타낼 수 있다.
      고로 거리에서 속도*2만큼을 빼주면서 계산에 임하면 된다.
      
      ex) 45 50
      50 - 45 = 5 : 거리
      5 - 1*2 = 3 : 남은거리
      3 - 2*2 < 0 이므로 최대속도는 2가 될것이다.
      3 - 2 = 1 이므로 1광년 속도로 한번 더 이동 할 것이다.

    */
    do{
      if(distance - (speed*2) > 0){
        distance = distance - (speed*2);
        speed_arr.push(speed);
        speed_arr.push(speed);
      }else{ 
        distance = distance - speed;
        speed_arr.push(speed);
        if(distance > 0){
          speed_arr.push(distance);
        }
        bool = false;
      }
      speed++;
    }while(bool);
    
    // console.log(speed_arr);
    // console.log(`최소 작동 횟수 = ${speed_arr.length}`)
    console.log(speed_arr.length);
  }
})