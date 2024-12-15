function solution(number, limit, power) {
    let answer = 0;
    
    for(let i=1; i<=number; i++) {
        let cnt = 0;
        for(let j=1; j*j<=i; j++) {
            if(j*j === i) cnt += 1;
            else if(i%j === 0) cnt += 2;
        }
        cnt > limit ? answer += power : answer += cnt;
    }
    
    return answer;
}