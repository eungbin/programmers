function solution(k, m, score) {
    score.sort((a,b) => b-a);
    const box = Array.from({ length: Math.floor(score.length/m) }, (_,i) =>
                score.slice(i * m, i * m + m));
    
    return box.reduce((acc, cur) => {
        return acc + Math.min(...cur) * m;
    }, 0);
}