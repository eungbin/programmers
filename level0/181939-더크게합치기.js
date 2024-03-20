function solution(a, b) {
    return (Number(a+''+b) > Number(b+''+a)) ? Number(a+''+b) : Number(b+''+a);
}

function solution2(a, b) {
    return Math.max(Number(a+''+b), Number(b+''+a));
}
