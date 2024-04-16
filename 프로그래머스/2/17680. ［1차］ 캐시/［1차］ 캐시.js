function solution(cacheSize, cities) {
    let answer = 0;
    const memory = [];
    
    for(let i=0; i<cities.length; i++) {
        let city = cities[i].toLowerCase();
        let dupIndex = memory.indexOf(city);
        
        dupIndex === -1 ? answer += 4 : memory.splice(dupIndex, 1);
        answer++;
        
        memory.push(city);
        if(memory.length > cacheSize) memory.shift();
        
        // memory.push(city);
    }
    
    return answer;
}