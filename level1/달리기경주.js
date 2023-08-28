function solution(players, callings) {
    let playerMap = {};
    
    for(let i=0; i<players.length; i++) {
        playerMap[players[i]] = i;
    }
    
    for(let i=0; i<callings.length; i++) {
        const idx = playerMap[callings[i]];
        playerMap[players[idx]] = idx-1;
        playerMap[players[idx-1]] = idx;
        [players[idx], players[idx-1]] = [players[idx-1], players[idx]];
    }
    
    return players;
}
