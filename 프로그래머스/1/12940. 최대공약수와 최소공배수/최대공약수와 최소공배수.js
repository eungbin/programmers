function solution(n, m) {
    return [_getGcd(n, m), _getLcm(n, m)];
}

const _getGcd = (x, y) => {
    while(y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

const _getLcm = (x, y) => {
    return x * y / _getGcd(x, y);
}