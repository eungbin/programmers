function solution(s) {
    let answer = 0;
    let x = ''; let xLength = 0; let otherLength = 0;
    
    for(let i=0; i<s.length; i++) {
        if(x === '') { x=s[i]; xLength=1; continue; }
        if(x === s[i]) xLength++;
        else otherLength++;
        
        if(xLength === otherLength) {
            xLength = 0; otherLength = 0;
            x = ''; answer += 1;
        }
    }
    
    return xLength !== otherLength ? answer+1 : answer;
}