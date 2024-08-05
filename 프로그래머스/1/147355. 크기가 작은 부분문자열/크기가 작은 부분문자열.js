function solution(t, p) {
    let answer = 0;
    
    for(let i=0; i<=t.length-p.length; i++) { Number(t.substr(i, p.length)) <= Number(p) ? answer++ : null; }
    
    return answer;
}