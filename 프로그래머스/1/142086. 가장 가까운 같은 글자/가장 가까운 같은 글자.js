function solution(s) { 
    let answer = s.split('').map((v,idx) => {
        return s.lastIndexOf(v, idx-1) !== -1 ? idx-s.lastIndexOf(v, idx-1) : -1;
    })
    answer[0] = -1;
    
    return answer;
}