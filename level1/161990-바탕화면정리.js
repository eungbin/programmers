// solution 1
function solution(wallpaper) {
    let answer = [wallpaper.length, wallpaper[0].length, 0, 0];
    
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                if(answer[0] > i) answer[0] = i;
                if(answer[1] > j) answer[1] = j;
                if(answer[2] < i) answer[2] = i;
                if(answer[3] < j) answer[3] = j;
            }
        }
    }
    
    return [answer[0], answer[1], answer[2]+1, answer[3]+1];
}
