function solution(num_list) {
    let odd_sum = 0, even_sum = 0;
    
    num_list.forEach((v, idx) => {
        if(idx%2 === 0) even_sum += v;
        else odd_sum += v;
    });
    
    return odd_sum > even_sum ? odd_sum : even_sum;
}