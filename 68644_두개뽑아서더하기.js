// solution 1
function solution(numbers) {
    const answer = [];
    
    for(let i=0; i<numbers.length-1; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            let number = numbers[i] + numbers[j];
            if(answer.findIndex(v => v === number) === -1)
                answer.push(number);
        }
    }
    
    answer.sort(function(a, b) { return a-b;});
    return answer;
}
