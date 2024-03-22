function solution(n, control) {
    let answer = control.split('').reduce((acc, cur) => {
        if(cur === 'w') acc++;
        else if(cur === 's') acc--;
        else if(cur === 'd') acc += 10;
        else acc -= 10;
        
        return acc;
    }, n);
    
    return answer;
}