function solution(i, j, k) {
    let target = k.toString();
    let answer = 0;
    for(let num=i; num<=j; num++) {
        answer += num.toString().split('').filter(v => v === target).length;
    }
    return answer;
}