function solution(phone_number) {
    return phone_number.split('').map((v, idx) => idx < phone_number.length-4 ? '*' : v).join('');
}