function solution(X, Y) {
    let answer = '';
    
    for(let i=9; i>=0; i--) {
        let xNum = X.split('').filter(v => Number(v) === i).length;
        let yNum = Y.split('').filter(v => Number(v) === i).length;
        answer += i.toString().repeat(Math.min(xNum, yNum));
    }
    
    if(answer.length === 0) return '-1';
    else if(answer.length === answer.split('').filter(v => v==='0').length) return '0';
    else return answer;
}