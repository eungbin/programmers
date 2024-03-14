function solution(my_string, overwrite_string, s) {
    var answer = '';
    answer = my_string.split('')
                      .map((v, idx) => idx >= s && idx < (s+overwrite_string.length) ? 
                                                          overwrite_string[idx-s] : v)
                      .join('');
    return answer;
}
