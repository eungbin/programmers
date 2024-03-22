function solution(arr, queries) {
    let answer = [];
    
    for(let i=0; i<queries.length; i++) {
        answer = temp(arr, queries[i][0], queries[i][1]);
    }
    
    return answer;
}

const temp = (arr, idx1, idx2) => {
    let tempNum = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tempNum;
    return arr;
}