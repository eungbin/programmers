function solution(num_list) {
    let odd = '';
    let even = '';
    
    num_list.forEach(v => v%2 === 0 ? even+=v : odd+=v);
    return Number(odd)+Number(even);
}