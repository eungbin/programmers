const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let str2 = str.split('').map(v => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join('');
    console.log(str2);
});
