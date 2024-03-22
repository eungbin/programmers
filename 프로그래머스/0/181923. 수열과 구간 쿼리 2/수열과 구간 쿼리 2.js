function solution(arr, queries) {
    let answer = [];
    
    for(let i=0; i<queries.length; i++) {
        let slicedList = arr.slice(queries[i][0], queries[i][1]+1).filter(v => v > queries[i][2]);
        answer.push(slicedList.length > 0 ? Math.min.apply(null, slicedList) : -1);
    }
    
    return answer;
}