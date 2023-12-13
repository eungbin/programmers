// solution 1
function solution(n, m, section) {
    let answer = 1;
    let start = section[0]
    
    for(let i=1; i<section.length; i++) {
        if(start+m <= section[i]) {
            answer += 1;
            start = section[i];
        }
    }
    
    return answer;
}
