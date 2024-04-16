function solution(arr) {
    let num = 1;
    let max = Math.max(...arr);
    
    while(true) {
        if(arr.filter(v => max*num%v === 0).length === arr.length) break;
        num += 1;
    }
    return max * num;
}