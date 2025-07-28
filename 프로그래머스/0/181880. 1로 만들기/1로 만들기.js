function solution(num_list) {
    let answer = 0;
    
    num_list.forEach(v => {
        while(v !== 1) {
            v = v%2 === 0 ? v/2 : (v-1)/2;
            answer++;
        }
    })
    
    return answer;
}