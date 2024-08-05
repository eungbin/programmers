function solution(cards1, cards2, goal) {
    let answer = '';
    let cards1Idx = 0, cards2Idx = 0;
    
    for(let i=0; i<goal.length; i++) {
        if(cards1[cards1Idx] === goal[i]) cards1Idx++;
        else if(cards2[cards2Idx] === goal[i]) cards2Idx++;
        else break;
    }
    
    answer = cards1Idx+cards2Idx === goal.length ? 'Yes' : 'No';
    return answer;
}