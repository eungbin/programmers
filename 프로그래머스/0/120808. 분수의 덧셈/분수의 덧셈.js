function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2+numer2*denom1;
    let denom = denom1*denom2;
    
    return [numer/_getGcd(numer, denom), denom/_getGcd(numer,denom)];
}

const _getGcd = (x, y) => {  // 최대공약수 구하는 함수
    while(y !== 0) {
        let temp = y; // y값을 저장
        y = x % y     // x를 y로 나눈 나머지를 y에 저장
        x = temp;     // x에 y값 대입
    }
    return x;
}