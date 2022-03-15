// solution 1
function solution(n) {
    let answer = 0;
    let sam = n.toString(3);
    let reverseSam = sam.split("").reverse().join(""); 
    
    answer = Number.parseInt(reverseSam, 3);
    
    return answer;
}
