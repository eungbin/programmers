// solution 1
function solution(n) {
    let answer = 0;
    
    if(n%2 === 0) {
        for(let i=2; i<=n; i+=2) answer += Math.pow(i, 2);
    } else {
        answer = ((n-1)*(n+1)/2+(n+1))/2;
    }
    
    return answer;
}
