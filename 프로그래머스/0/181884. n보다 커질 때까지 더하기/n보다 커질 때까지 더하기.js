function solution(numbers, n) {
    return numbers.reduce((acc,cur) => {
        if(acc <= n) return acc+cur;
        else return acc;
    }, 0);
}