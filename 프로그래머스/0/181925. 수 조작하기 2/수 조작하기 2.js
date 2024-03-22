function solution(numLog) {
    let answer = '';
    
    for(let i=0; i<numLog.length-1; i++) answer += getKey(numLog[i+1]-numLog[i]);
    
    return answer;
}

const getKey = (n) => {
    if(n === 1) return 'w';
    else if(n === -1) return 's';
    else if(n === 10) return 'd';
    else if(n === -10) return 'a';
    else return 'e' // error
}