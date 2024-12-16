function solution(strArr) {
    return strArr.map((v,idx) => {
        if(idx%2 === 0) return v.toLowerCase();
        else return v.toUpperCase();
    });
}