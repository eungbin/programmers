function solution(k, score) {
    const listRankScore = [];
    return score.map(v => {
        listRankScore.push(v); listRankScore.sort((a,b) => a-b);
        if(listRankScore.length > k) listRankScore.shift();
        return listRankScore[0];
    });
}