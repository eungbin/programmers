function solution(a, b, n) {
    let totalTradeCola = 0; // 교환 후 새로 받은 콜라의 누적
    while(n >= a) {
        let tradeCola = Math.floor(n/a) * b;
        n = tradeCola + (n%a); // 교환 후 새로 받은 콜라 + 남아있는 콜라
        totalTradeCola += tradeCola;
    }
    return totalTradeCola;
}