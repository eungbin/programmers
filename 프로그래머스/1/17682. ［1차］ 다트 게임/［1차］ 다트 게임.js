function solution(dartResult) {
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    const matches = [...dartResult.matchAll(regex)];
    let scoreList = [];
    
    matches.forEach(([, num, bonus, option], idx) => {
        num = parseInt(num);
        
        if(bonus === 'D') num = num ** 2;
        else if(bonus === 'T') num = num ** 3;
        
        if(option === '*') {
            if(idx > 0) scoreList[idx-1] *= 2;
            num *= 2;
        } else if(option === '#') num *= -1;
        
        scoreList.push(num);
    });
    
    return scoreList.reduce((acc, cur) => acc+cur);
}