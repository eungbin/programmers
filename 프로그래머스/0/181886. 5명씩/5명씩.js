function solution(names) {
    return names.filter((v,idx) => (idx+1)%5===1);
}