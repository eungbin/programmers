function solution(a, d, included) {
    let answer = 0;
    included.forEach((v, idx) => v === true ? answer += (a+(idx*d)) : null);
    return answer;
}