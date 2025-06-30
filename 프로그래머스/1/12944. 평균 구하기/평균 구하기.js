function solution(arr) {
    return arr.reduce((sum,v) => sum+v, 0) / arr.length;
}