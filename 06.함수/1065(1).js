let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 각자리수의 차를 비교하여 등차수열인지 확인하였다.
// n = 1000일때는 등차수열이 아니므로 무시 가능
rl.on('line', function(line) {
    let n = Number(line);
    
    function x(n) {
        let count = 0;
        for(let i = 1; i <=n; i++) {
            if(i < 100) {
                count++;
            } else {
                i = String(i);
                if(i.charAt(0)-i.charAt(1) === i.charAt(1)-i.charAt(2)) {
                    count++;
                }
            }
        }
        return count;
    }
    console.log(x(n));
}).on('close', function() {
    process.exit();
});