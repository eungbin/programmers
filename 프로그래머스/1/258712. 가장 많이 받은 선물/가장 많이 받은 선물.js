function solution(friends, gifts) {
    const obj = {};
    const giftsToList = Array.from({ length: friends.length }, () => []);
    const giftsFromList = Array.from({ length: friends.length }, () => []);
    const resultList = [];
    
    friends.forEach((v, idx) => { obj[v] = idx; });
    
    gifts.forEach(v => {
        let gift = v.split(' ');
        giftsToList[obj[gift[0]]].push(obj[gift[1]]);
        giftsFromList[obj[gift[1]]].push(obj[gift[0]]);
    });
    
    giftsToList.forEach((v, idx) => {
        let toNumList = Array.from({ length: giftsToList.length }, () => 0);
        let fromNumList = Array.from({ length: giftsToList.length }, () => 0);
        let result = 0;
        
        v.forEach(value => toNumList[value] += 1);
        giftsFromList[idx].forEach(value => fromNumList[value] += 1);
        
        for(let i=0; i<toNumList.length; i++) {
            if(i === idx) continue;
            
            if(toNumList[i] > fromNumList[i]) result++;
            else if(toNumList[i] === fromNumList[i]) {
                giftsToList[idx].length - giftsFromList[idx].length > giftsToList[i].length - giftsFromList[i].length ? result++ : null;
            }
        }
        resultList.push(result);
    })
    
    return Math.max(...resultList);
}