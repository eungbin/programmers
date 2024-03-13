// solution 1
function solution(rank, attendance) {
    let answer = 0;
    let baseRank = [...rank];
    let chance = 2;
    
    rank.sort();

    for(let i=0; i<baseRank.length; i++) {
        if(chance < 0) break;
        let index = baseRank.indexOf(rank[i]);
        
        if(attendance[index] === true) {
            answer += index * Math.pow(10, chance*2);
            chance--;
        } 
    }
    
    return answer;
}

// solution 2
