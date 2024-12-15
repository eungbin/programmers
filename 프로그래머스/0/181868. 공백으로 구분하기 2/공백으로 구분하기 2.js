function solution(my_string) {
    return my_string.replace(/\s/g, ",").split(',').filter(v => v !== "");
}