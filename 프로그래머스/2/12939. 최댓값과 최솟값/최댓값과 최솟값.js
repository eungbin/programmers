function solution(s) {
    const list = s.split(' ').sort((a,b) => a-b);
    return Math.min(...list) + ' ' + Math.max(...list);
}