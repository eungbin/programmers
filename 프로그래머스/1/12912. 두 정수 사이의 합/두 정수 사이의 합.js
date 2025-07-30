function solution(a, b) {
    let answer = 0;
    let numList = a > b ? [b, a] : [a, b];
    
    for(let i=numList[0]; i<=numList[1]; i++) answer += i;
    
    return answer;
}