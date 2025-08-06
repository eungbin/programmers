function solution(myStr) {
    let result = myStr.split(/[abc]/).filter(v => v !== '');
    return result.length === 0 ? ['EMPTY'] : result;
}