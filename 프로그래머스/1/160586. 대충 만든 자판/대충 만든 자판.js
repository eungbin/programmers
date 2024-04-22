function solution(keymap, targets) {
    const answer = [];
    let map = {};
    
    for(const key of keymap) {
        key.split('').forEach((v, idx) => map[v] = map[v] < idx+1 ? map[v] : idx+1);
    }
    
    for(const item of targets) {
        answer.push((item.split('').reduce((acc, cur) => acc += map[cur], 0)) || (-1));
    }
    
    return answer;
}