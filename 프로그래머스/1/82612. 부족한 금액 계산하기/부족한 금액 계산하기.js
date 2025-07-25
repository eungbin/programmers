function solution(price, money, count) {
    let result = 0;
    for(let i=1; i<=count; i++) {
        result += calPrice(price, i);
    }
    result = money-result;
    
    return result < 0 ? result*(-1) : 0;
}

const calPrice = (price, count) => { return price*count; }