function solution(code) {
    let answer = '';
    let mode = false; // false=0, true=1
    
    code.split('').forEach((v, idx) => v === '1' ? mode=!mode : 
                             (!mode && idx % 2 === 0) ? answer+=v :
                             (mode && idx % 2 !== 0) ? answer+=v : null)
    
    return (answer === '' ? 'EMPTY' : answer);
}