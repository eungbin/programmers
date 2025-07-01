function solution(my_string, queries) {
    queries.forEach(v => {
        my_string = _reverseString(my_string, v[0], v[1]);
    });
    return my_string;
}

const _reverseString = (string, start, end) => {
    return string.slice(0, start) + string.slice(start, end+1).split('').reverse().join('') + 
           string.slice(end+1);
}