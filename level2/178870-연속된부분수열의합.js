// solution1 (투포인터 알고리즘)
function solution(sequence, k) {
    let answer = [];
    let start = 0;
    let sum = 0;
    
    for(let end = 0; end < sequence.length; end++) {
        sum += sequence[end];
        
        while(sum > k) {
            sum -= sequence[start];
            start += 1;
        }
        
        if(sum === k) {
            if(answer.length > 0) {
                if(answer[1] - answer[0] > end - start) {
                    answer = [start, end];
                }
            } else {
                answer = [start, end];
            }
        }
    }
    
    return answer;
}
