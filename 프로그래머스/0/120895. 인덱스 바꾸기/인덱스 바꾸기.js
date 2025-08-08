function solution(my_string, num1, num2) {
    let list = my_string.split('');
    [list[num1], list[num2]] = [list[num2], list[num1]];
    return list.join('');
}