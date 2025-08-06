function solution(s){
    let score = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(' ) score++;
        else score--;
        if(score < 0) break;
    }
    
    return score === 0 ? true : false;
}