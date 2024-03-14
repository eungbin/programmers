// soultion1
function solution(n) {
    let answer = [];
    for(let i=0; i<n; i++) {
        answer.push([]);
    }
    let count = 1; let direction = 1;
    let i=0; let j=-1;
    
    while(true) {
        for(let num=0; num < n; num++) {
            j += direction;
            answer[i][j] = count++;
        }
        
        n -= 1;
        if(n === 0) break;
        
        for(let num=0; num<n; num++) {
            i += direction;
            answer[i][j] = count++;
        }
        
        direction *= -1;
    }
    return answer;
}
