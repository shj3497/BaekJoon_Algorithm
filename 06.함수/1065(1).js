let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function(line) {
    let n = Number(line);
    
    function x(n) {
        let count = 0;
        for(let i = 1; i <=n; i++) {
            if(i < 100) {
                count++;
            } else {
                i = String(i);
                if(i[0]-i[1] === i[1]-i[2]) {
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